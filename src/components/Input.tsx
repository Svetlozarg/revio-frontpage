import styles from "@/styles/Input.module.scss";
import Image from "next/image";
import { useState } from "react";
import Popup from "./Popup";

export default function Input() {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [store, setStore] = useState<string>("");

  const handleStoreChange = (event: any) => setStore(event.target.value);

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <div className={styles.input}>
      <div className={styles.inputStyle}>
        <input
          type="text"
          name="store"
          placeholder="Store name"
          onChange={handleStoreChange}
          required
        />

        <button onClick={() => setOpenPopup(!openPopup)}>Get Now</button>
      </div>

      <div className={styles.inputBox}>
        <Image
          src="https://ik.imagekit.io/obelussoft/Revio/shopify_SCLRkTJ7C.png?updatedAt=1684448816384"
          alt="shopify image"
          width="1000"
          height="1000"
        />
        <p>Instant Setup • 14 Day Free Trial</p>
      </div>

      {openPopup && <Popup storeUrl={store} handleClose={handleClose} />}
    </div>
  );
}
