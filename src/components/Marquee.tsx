import styles from "./Marquee.module.css";

const items = [
  "Next.js", "✦", "TypeScript", "✦", "React", "✦",
  "Product UI", "✦", "Web Apps", "✦", "API Integrations", "✦",
  "Database Systems", "✦", "Responsive Design", "✦", "Next.js", "✦",
  "TypeScript", "✦", "React", "✦", "Product UI", "✦",
  "Web Apps", "✦", "API Integrations", "✦", "Database Systems", "✦", "Responsive Design", "✦",
];

export default function Marquee() {
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={item === "✦" ? styles.star : styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
