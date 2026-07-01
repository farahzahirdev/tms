import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@/components/icons/Icons";
import {
  FOOTER_CONDITIONS,
  FOOTER_TREATMENTS,
  SITE,
} from "@/data/site";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/images/logo.png"
              alt={SITE.name}
              width={160}
              height={50}
              className={styles.logo}
            />
            <p className={styles.description}>
              Trusted psychiatry and TMS therapy in Westlake Village, CA. Led by Dr. Priya Parmar, MD.
            </p>
            <a href={SITE.phoneHref} className={styles.phoneLink}>
              <PhoneIcon size={13} />
              {SITE.phone}
            </a>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>Treatments</div>
            <div className={styles.linkList}>
              {FOOTER_TREATMENTS.map((item) => (
                <Link key={item.label} href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>Conditions</div>
            <div className={styles.linkList}>
              {FOOTER_CONDITIONS.map((item) => (
                <Link key={item.label} href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnTitle}>Office Hours</div>
            <div className={styles.hours}>
              <div className={styles.hoursRow}>
                <span>{SITE.hours.weekday}</span>
                <span className={styles.hoursTime}>{SITE.hours.weekdayTime}</span>
              </div>
              <div className={styles.hoursRow}>
                <span>{SITE.hours.weekend}</span>
                <span>{SITE.hours.weekendTime}</span>
              </div>
            </div>
            <div className={styles.addressBox}>
              <div>{SITE.address.line1}</div>
              <div className={styles.addressLine2}>{SITE.address.line2}</div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>© 2026 Rise TMS. All rights reserved.</div>
          <div className={styles.legalLinks}>
            <a href={SITE.links.privacy}>Privacy Policy</a>
            <a href={SITE.links.terms}>Terms</a>
            <a href={SITE.links.accessibility}>Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
