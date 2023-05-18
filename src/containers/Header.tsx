import styles from "@/styles/Header.module.scss";
import logo from "../assets/revio-logo.png";
import Image from "next/image";
import Link from "next/link";

export interface HeaderData {
  text: string;
  link: string;
}

export const headerData: Array<HeaderData> = [
  { text: "Home", link: "/" },
  { text: "Pricing", link: "/pricing" },
  { text: "About Us", link: "/about" },
  { text: "Blog", link: "/blog" },
  { text: "Contacts", link: "/contacts" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} alt="Revio Logo" className={styles.logo} />
      </Link>

      <nav className={styles.nav}>
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
    </header>
  );
}
