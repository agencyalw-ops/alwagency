import styles from "./Marquee.module.css";

const items = [
  "Web Development", "UI/UX Design", "Custom Software",
  "E-Commerce", "Company Profile", "Business Systems",
  "Landing Pages", "SaaS MVPs", "Digital Products",
  "Web Development", "UI/UX Design", "Custom Software",
  "E-Commerce", "Company Profile", "Business Systems",
  "Landing Pages", "SaaS MVPs", "Digital Products",
];

export default function Marquee() {
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={i % 2 === 1 ? styles.dot : styles.item}>
            {i % 2 === 1 ? "✦" : item}
          </span>
        ))}
      </div>
    </div>
  );
}
