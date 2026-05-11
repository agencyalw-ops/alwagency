import styles from "./ProcessHome.module.css";

const steps = [
  { num: "01", title: "Discovery & Brief", desc: "We learn your business, goals, and audience. One focused call — no lengthy questionnaires." },
  { num: "02", title: "Design & Prototype", desc: "We design the interface and user flow before writing a single line of code. You approve first." },
  { num: "03", title: "Development", desc: "Clean, fast, scalable code built with modern tech and tested across all devices and browsers." },
  { num: "04", title: "Launch & Support", desc: "We deploy, test thoroughly, and stay available after launch. Ongoing support for every client." },
];

export default function ProcessHome() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>How We Work</p>
          <h2 className={styles.title}>Simple process,<br /><em>real results</em></h2>
        </div>
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.num} className={styles.step}>
              <div className={styles.stepLine}>
                <div className={styles.stepNum}>{s.num}</div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
