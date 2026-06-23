import { CONDITIONS, CONDITIONS_SECTION } from "@/data/site";
import styles from "./Conditions.module.scss";

export default function Conditions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>{CONDITIONS_SECTION.label}</div>
        <h2 className={styles.title}>{CONDITIONS_SECTION.title}</h2>
        <p className={styles.subtitle}>{CONDITIONS_SECTION.subtitle}</p>

        <div className={styles.tags}>
          {CONDITIONS.map((condition) => (
            <div key={condition} className={styles.tag}>
              {condition}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
