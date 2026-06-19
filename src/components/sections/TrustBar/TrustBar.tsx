import { TrustIcon } from "@/components/icons/Icons";
import { TRUST_ITEMS } from "@/data/site";
import styles from "./TrustBar.module.scss";

export default function TrustBar() {
  return (
    <section className={styles.trustBar}>
      <div className={styles.container}>
        {TRUST_ITEMS.map((item, index) => (
          <div
            key={item.title}
            className={`${styles.item} ${index < TRUST_ITEMS.length - 1 ? styles.withBorder : ""}`}
          >
            <div className={styles.iconBox}>
              <TrustIcon type={item.icon} />
            </div>
            <div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
