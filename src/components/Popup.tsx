import styles from "@/styles/Popup.module.scss";
import { useState } from "react";

interface Props {
  handleClose: any;
}

export default function Popup(props: Props) {
  const { handleClose } = props;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [store, setStore] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleNameChange = (event: any) => setName(event.target.value);
  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const handleStoreChange = (event: any) => setStore(event.target.value);

  const handleSend = () => {
    if (!name) {
      setError("Please type a valid name");
      return;
    }

    if (!email) {
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        setError("Please type a valid email");
        return;
      }
    }

    if (!store) {
      setError("Please type a valid store url");
      return;
    }

    if (name && email && store) {
      setError("");
    }
  };

  return (
    <div className={styles.popup}>
      <p className={styles.closeIcon} title="Close" onClick={handleClose}>
        X
      </p>

      <h4>Be the first to get notified when Revio is released</h4>

      <div className={styles.inputWrapper}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={handleNameChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="name">Store url</label>
        <div className={styles.inputBox}>
          <input
            type="text"
            name="store"
            placeholder="Store name"
            onChange={handleStoreChange}
            required
          />
          <span>.shopify.com</span>
        </div>
      </div>

      <button onClick={handleSend}>Send</button>

      <span className={styles.error}>{error && error}</span>
    </div>
  );
}
