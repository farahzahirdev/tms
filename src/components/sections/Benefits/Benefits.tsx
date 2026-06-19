import { BenefitIcon } from "@/components/icons/Icons";
import { BENEFITS } from "@/data/site";
import styles from "./Benefits.module.scss";

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Why Choose TMS?</div>
          <h2 className={styles.title}>
            Life Without the Side Effects
            <br />
            of Antidepressants
          </h2>
          <p className={styles.subtitle}>
            Many of our patients come having tried multiple medications. TMS offers a fundamentally different approach — working directly in the brain.
          </p>
        </div>

        <div className={styles.grid}>
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className={styles.card}>
              <div className={styles.iconBox}>
                <BenefitIcon type={benefit.icon} />
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardText}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
