const steps = [
  { num: "01", title: "Frame the problem", desc: "We define the audience, the job to be done, and the smallest useful version of the product before touching the backlog." },
  { num: "02", title: "Shape the experience", desc: "We map the flow and design the key screens so the interface feels clear, intentional, and ready to be built." },
  { num: "03", title: "Build in the open", desc: "You get clean, responsive code, regular progress updates, and a working preview instead of a black box." },
  { num: "04", title: "Ship & improve", desc: "We launch, measure what matters, fix the edges, and leave you with a product that can keep evolving." },
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
