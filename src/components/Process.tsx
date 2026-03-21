import styles from "./Process.module.css";

const steps = [
  {
    num: "01",
    title: "Diskusi & Brief",
    desc: "Kami pahami kebutuhan, tujuan, dan target audiens proyek kamu secara mendalam.",
  },
  {
    num: "02",
    title: "Desain & Prototype",
    desc: "Tim kami merancang tampilan dan alur yang intuitif sebelum masuk ke pengembangan.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Kode yang bersih, cepat, dan scalable — dibangun dengan teknologi terkini.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "Deploy, testing, dan kami tetap siap mendampingi setelah produk diluncurkan.",
  },
];

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.label}>Cara Kerja Kami</div>
      <h2 className={styles.title}>Proses sederhana,<br />hasil maksimal</h2>
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
