import styles from "./ProcessHome.module.css";

const steps = [
  { num: "01", title: "Frame the problem", desc: "We define the audience, the job to be done, and the smallest useful version of the product before touching the backlog." },
  { num: "02", title: "Shape the experience", desc: "We map the flow and design the key screens so the interface feels clear, intentional, and ready to be built." },
  { num: "03", title: "Build in the open", desc: "You get clean, responsive code, regular progress updates, and a working preview instead of a black box." },
  { num: "04", title: "Ship & improve", desc: "We launch, measure what matters, fix the edges, and leave you with a product that can keep evolving." },
];

export default function ProcessHome() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>The build process</p>
          <h2 className={styles.title}>Thoughtful work,<br /><em>shipped clearly.</em></h2>
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
