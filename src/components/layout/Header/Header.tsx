import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@/components/icons/Icons";
import { NAV_LINKS, SITE } from "@/data/site";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="#top" className={styles.logoLink}>
          <Image
            src="/images/logo.png"
            alt={SITE.name}
            width={180}
            height={54}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <a href={SITE.phoneHref} className={styles.phoneButton}>
          <PhoneIcon size={14} />
          {SITE.phone}
        </a>
      </div>
    </header>
  );
}
