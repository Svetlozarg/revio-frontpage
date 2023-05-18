import styles from "@/styles/Input.module.scss";
import Image from "next/image";
import { useState } from "react";
import Popup from "./Popup";

export default function Input() {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <div className={styles.input}>
      <div className={styles.inputStyle}>
        <input
          placeholder="yourwebsite.shopify.com"
          type="text"
          name=""
          id=""
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

      {openPopup && <Popup handleClose={handleClose} />}
    </div>
  );
}
