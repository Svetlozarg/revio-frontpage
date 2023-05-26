import { useEffect, useState } from "react";
import styles from "@/styles/Popup.module.scss";
import Airtable from "airtable";
import Countdown from "./Countdown";
import Link from "next/link";

export default function Popup() {
  const base = new Airtable({ apiKey: "keybFLPb1PL5J8uKa" }).base(
    "appwSyWxUemZFCGAK"
  );
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [store, setStore] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [successfullySent, setSuccessfullySent] = useState<boolean>(false);

  const handleNameChange = (event: any) => setName(event.target.value);
  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const handleStoreChange = (event: any) => setStore(event.target.value);

  const handleFormSubmit = async (
    name: string,
    email: string,
    store: string
  ) => {
    try {
      await base("tblj8X4QuLBtY6ZKd").create([
        {
          fields: {
            Name: name,
            Email: email,
            "Store URL": store,
          },
        },
      ]);

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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
      handleFormSubmit(name, email, store);
      setSuccessfullySent(true);
    }
  };

  return (
    <div className={styles.popup}>
      <h4>Be the first to get notified when Revio is released</h4>

      <div>
        <Countdown />

        <p
          style={{
            fontSize: "1rem",
            textAlign: "center",
            width: "90%",
            margin: "1rem auto 0 auto",
          }}
        >
          Anyone who subscribes to our waiting list will receive a special offer
          on June 5th.
        </p>
      </div>

      {!successfullySent && (
        <>
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
              placeholder="Your business email"
              onChange={handleEmailChange}
              required
            />

            <label htmlFor="name">Store url</label>
            <div className={styles.inputBox}>
              <input
                type="text"
                name="store"
                placeholder="yourstore.myshopify.com"
                onChange={handleStoreChange}
                value={store}
                required
              />
            </div>
          </div>

          <div className={styles.agreeBox}>
            <div>
              <input className={styles.checkbox} type="checkbox" />
              <p>
                I agree to receive updates and insights around conversational
                commerce and marketing topics.
              </p>
            </div>

            <p>
              By submitting, you agree that revio can use this data to send you
              the content requested. You can unsubscribe from these
              communications at any time. See our{" "}
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                href="/privacy"
              >
                privacy policy
              </Link>{" "}
              for more.
            </p>
          </div>

          <button onClick={handleSend}>Send</button>

          <span className={styles.error}>{error && error}</span>
        </>
      )}

      {successfullySent && (
        <>
          <div className={styles.successfullySent}>
            <h4>Thank you for your submission!</h4>
          </div>
        </>
      )}
    </div>
  );
}
