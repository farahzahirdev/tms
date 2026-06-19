import { CONDITIONS } from "@/data/site";
import styles from "./Conditions.module.scss";

export default function Conditions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>Conditions We Treat</div>
        <h2 className={styles.title}>You Don&apos;t Have to Live This Way</h2>
        <p className={styles.subtitle}>
          Rise TMS treats a wide range of conditions with compassion, expertise, and evidence-based therapies.
        </p>

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
