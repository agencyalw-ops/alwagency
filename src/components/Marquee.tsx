import styles from "./Marquee.module.css";

const items = [
  "Web Development", "UI/UX Design", "Custom Software",
  "E-commerce", "Company Profile", "Sistem Bisnis",
  "Web Development", "UI/UX Design", "Custom Software",
  "E-commerce", "Company Profile", "Sistem Bisnis",
];

export default function Marquee() {
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={i % 2 === 1 ? styles.dot : styles.item}>
            {i % 2 === 1 ? "·" : item}
          </span>
        ))}
      </div>
    </div>
  );
}
