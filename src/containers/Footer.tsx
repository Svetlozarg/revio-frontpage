import styles from "@/styles/Footer.module.scss";
import Image from "next/image";
import logo from "../assets/logo-white.png";
import facebook from "../assets/facebook-icon.png";
import linkedin from "../assets/linkedin-icon.png";
import flag from "../assets/eu-flag.png";
import Link from "next/link";
import { HeaderData, headerData } from "./Header";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerUp}>
        <Image className={styles.logo} src={logo} alt="revio logo" />
        <div className={styles.socialsBox}>
          <a href="https://www.linkedin.com/company/revio-app" target="_blank">
            <Image src={linkedin} alt="icon" />
          </a>

          <a
            href="https://www.facebook.com/revioappforecommerce"
            target="_blank"
          >
            <Image src={facebook} alt="icon" />
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
          <Image src={flag} alt="flag" />
          <p> | © {currentYear} RevioApp Inc. | </p>
          <Link href="/privacy">Privacy</Link>
          <p> · </p>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
