import styles from "@/styles/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { HeaderData, headerData } from "./Header";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerUp}>
        <Image
          className={styles.logo}
          src="https://ik.imagekit.io/obelussoft/Revio/logo-white_XSIdnlPSg.png?updatedAt=1684448815126"
          alt="revio logo"
          width="1000"
          height="1000"
        />
        <div className={styles.socialsBox}>
          <a href="https://www.linkedin.com/company/revio-app" target="_blank">
            <Image
              src="https://ik.imagekit.io/obelussoft/Revio/linkedin-icon_LveuKqXah.png?updatedAt=1684448815095"
              alt="icon"
              width="1000"
              height="1000"
            />
          </a>

          <a
            href="https://www.facebook.com/revioappforecommerce"
            target="_blank"
          >
            <Image
              src="https://ik.imagekit.io/obelussoft/Revio/facebook-icon_8ADqE7dKw6.png?updatedAt=1684448813700"
              alt="icon"
              width="1000"
              height="1000"
            />
          </a>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.footerDown}>
        <nav>
          <ul>
            {headerData.map((item: HeaderData, i: number) => {
              return (
                <li key={i}>
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.ca}>
          <p>Made in </p>
          <Image
            src="https://ik.imagekit.io/obelussoft/Revio/eu-flag_LqA1Oa3bi.png?updatedAt=1684448813539"
            alt="flag"
            width="1000"
            height="1000"
          />
          <p> | © {currentYear} RevioApp Inc. | </p>
          <Link href="/privacy">Privacy</Link>
          <p> · </p>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
