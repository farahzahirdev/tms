import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons/Icons";
import { SITE } from "@/data/site";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Get In Touch</div>
          <h2 className={styles.title}>
            Ready to Begin
            <br />
            Your Recovery?
          </h2>
          <p className={styles.text}>
            Our team is here to answer your questions. Call or email us — we typically respond the same business day.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <a href={SITE.phoneHref} className={styles.contactCard}>
            <div className={styles.iconBox}>
              <PhoneIcon size={22} />
            </div>
            <div className={styles.itemLabel}>Call Us</div>
            <div className={styles.phone}>{SITE.phone}</div>
          </a>

          <a href={`mailto:${SITE.email}`} className={styles.contactCard}>
            <div className={styles.iconBox}>
              <MailIcon size={22} />
            </div>
            <div className={styles.itemLabel}>Email Us</div>
            <div className={styles.email}>{SITE.email}</div>
          </a>

          <div className={styles.contactCard}>
            <div className={styles.iconBox}>
              <MapPinIcon size={22} />
            </div>
            <div className={styles.itemLabel}>Our Office</div>
            <div className={styles.address}>
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </div>
            <div className={styles.hours}>
              {SITE.hours.weekday}  ·  {SITE.hours.weekdayTime}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
