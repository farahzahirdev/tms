import { CheckIcon, PhoneIcon } from "@/components/icons/Icons";
import { SITE } from "@/data/site";
import styles from "./HeroFormSuccess.module.scss";

export default function HeroFormSuccess() {
  return (
    <div className={styles.success}>
      <div className={styles.iconRing}>
        <div className={styles.iconCircle}>
          <CheckIcon size={32} stroke="#E8711A" />
        </div>
      </div>

      <h3 className={styles.title}>Thank You!</h3>

      <p className={styles.message}>
        Thank you so much for inquiring about TMS. A member of our team will reach out shortly to get started.
      </p>

      <p className={styles.submessage}>
        We typically respond within a few hours on business days.
      </p>

      <a href={SITE.phoneHref} className={styles.callLink}>
        <PhoneIcon size={15} />
        Need help now? Call {SITE.phone}
      </a>
    </div>
  );
}
