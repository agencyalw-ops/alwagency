const steps = [
  { num: "01", title: "Discovery & Brief", desc: "We learn your business, goals, and audience. One focused call — no lengthy questionnaires." },
  { num: "02", title: "Design & Prototype", desc: "We design the interface and user flow before writing a single line of code. You approve first." },
  { num: "03", title: "Development", desc: "Clean, fast, scalable code built with modern tech and tested across all devices and browsers." },
  { num: "04", title: "Launch & Support", desc: "We deploy, test thoroughly, and stay available after launch. Ongoing support for every client." },
];

export default function ProcessHome() {
  return (
    <section className="process-home-section" id="process">
      <div className="process-home-inner">
        <div className="process-home-header">
          <p className="process-home-label">How We Work</p>
          <h2 className="process-home-title">Simple process,<br /><em>real results</em></h2>
        </div>
        <div className="process-home-steps">
          {steps.map((s, i) => (
            <div key={s.num} className="process-home-step">
              <div className="process-home-step-line">
                <div className="process-home-step-num">{s.num}</div>
                {i < steps.length - 1 && <div className="process-home-connector" />}
              </div>
              <div className="process-home-step-content">
                <h3 className="process-home-step-title">{s.title}</h3>
                <p className="process-home-step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
