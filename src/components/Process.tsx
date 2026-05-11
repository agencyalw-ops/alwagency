import styles from "./Process.module.css";

const steps = [
  {
    num: "01",
    title: "Discovery & Brief",
    desc: "We learn your business, goals, and target audience. One focused call — no lengthy questionnaires or wasted time.",
  },
  {
    num: "02",
    title: "Design & Prototype",
    desc: "We design the interface and user flow before writing a line of code. You approve before we build.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Clean, fast, scalable code — built with modern tech and tested across all devices and browsers.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "We deploy, test thoroughly, and stay available after launch. Ongoing support for every client.",
  },
];

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.label}>How We Work</div>
      <h2 className={styles.title}>Simple process,<br /><em>real results</em></h2>
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.num} className={styles.step}>
            <div className={styles.stepNum}>{step.num}</div>
            <h4 className={styles.stepTitle}>{step.title}</h4>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
