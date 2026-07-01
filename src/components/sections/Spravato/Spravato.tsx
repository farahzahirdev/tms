import ContactFormLink from "@/components/ui/ContactFormLink";
import { CheckIcon } from "@/components/icons/Icons";
import { SPRAVATO_BADGES } from "@/data/site";
import styles from "./Spravato.module.scss";

export default function Spravato() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>Also Offering</div>
          <h2 className={styles.title}>
            Spravato<sup>®</sup> (Esketamine)
            <br />
            <em>Nasal Spray</em>
          </h2>
          <p className={styles.text}>
            For patients with treatment-resistant depression, Spravato offers a fast-acting FDA-approved alternative. Administered in-office as a nasal spray under medical supervision — it may provide relief when other treatments haven&apos;t worked.
          </p>

          <div className={styles.badges}>
            {SPRAVATO_BADGES.map((badge) => (
              <div key={badge} className={styles.badge}>
                <CheckIcon size={12} />
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaColumn}>
          <ContactFormLink className={styles.ctaCard}>
            <div className={styles.ctaTitle}>Ask About Spravato</div>
            <div className={styles.ctaSubtitle}>See if you&apos;re a candidate</div>
            <div className={styles.ctaButton}>Request Consultation →</div>
          </ContactFormLink>
        </div>
      </div>
    </section>
  );
}
