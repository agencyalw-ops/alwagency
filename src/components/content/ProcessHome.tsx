"use client";

import { useLanguage } from "../LanguageProvider";

const steps = ["frameProblem", "shapeExperience", "buildOpen", "shipImprove"];

export default function ProcessHome() {
  const { t } = useLanguage();
  return (
    <section className="process-home-section" id="process">
      <div className="process-home-inner">
        <div className="process-home-header">
          <p className="process-home-label">{t("howWeWork")}</p>
          <h2 className="process-home-title" dangerouslySetInnerHTML={{ __html: t("simpleProcess") }} />
        </div>
        <div className="process-home-steps">
          {steps.map((key, i) => (
            <div key={key} className="process-home-step">
              <div className="process-home-step-line">
                <div className="process-home-step-num">0{i + 1}</div>
                {i < steps.length - 1 && <div className="process-home-connector" />}
              </div>
              <div className="process-home-step-content">
                <h3 className="process-home-step-title">{t(key)}</h3>
                <p className="process-home-step-desc">{t(`${key}Desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
