import { StarIcon } from "@/components/icons/Icons";
import { TESTIMONIALS } from "@/data/site";
import styles from "./Reviews.module.scss";

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Patient Stories</div>
          <h2 className={styles.title}>Real People. Real Results.</h2>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.initial}</div>
                <div>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.detail}>{testimonial.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
