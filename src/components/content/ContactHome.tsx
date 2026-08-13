"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./ContactHome.module.css";

export default function ContactHome() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Alw Agency!\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/6285716275034?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>Have a build in mind?</p>
          <h2 className={styles.title}>Bring the idea.<br /><em>I&apos;ll ship the first version.</em></h2>
          <p className={styles.sub}>
            Share the problem, the product, or even the rough idea. I&apos;ll come back with a practical next step and an honest view of what it takes to build.
          </p>
          <div className={styles.contacts}>
            <a href="https://wa.me/6285716275034" target="_blank" rel="noopener noreferrer" className={styles.contact}>
              <div className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 2C6.478 2 2 6.488 2 12.015A10.005 10.005 0 003.92 18.08L2 22l4.108-1.897A9.96 9.96 0 0011.99 22C17.513 22 22 17.512 22 12.015 22 6.488 17.513 2 11.99 2z"/></svg>
              </div>
              <div>
                <div className={styles.contactLabel}>WhatsApp</div>
                <div className={styles.contactSub}>Fastest response</div>
              </div>
            </a>
            <a href="mailto:hello@agencyalw.com" className={styles.contact}>
              <div className={styles.contactIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactSub}>hello@agencyalw.com</div>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.formWrap}>
          {sent ? (
            <div className={styles.thanks}>
              <div className={styles.checkmark}>✓</div>
              <h3>Message sent!</h3>
              <p>WhatsApp has opened with your details. We reply within 24 hours.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Your name</label>
                  <input type="text" placeholder="Jane Smith" value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})} required />
                </div>
                <div className={styles.field}>
                  <label>Email address</label>
                  <input type="email" placeholder="jane@company.com" value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})} required />
                </div>
              </div>
              <div className={styles.field}>
                <label>Company / business name</label>
                <input type="text" placeholder="Acme Co." value={form.company}
                  onChange={e => setForm({...form, company: e.target.value})} />
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Service needed</label>
                  <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                    <option value="">Select a service</option>
                    <option>Marketing Website</option>
                    <option>E-Commerce Build</option>
                    <option>Custom Web App</option>
                    <option>Product MVP</option>
                    <option>API / Database Integration</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Budget range</label>
                  <select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}>
                    <option value="">Select budget</option>
                    <option>Under $500</option>
                    <option>$500 – $1,500</option>
                    <option>$1,500 – $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>
              </div>
              <div className={styles.field}>
                <label>What are you building?</label>
                <textarea rows={4} placeholder="Tell me what you want to build, who it is for, and what success looks like."
                  value={form.message} onChange={e => setForm({...form, message: e.target.value})} required />
              </div>
              <button type="submit" className={styles.submit}>
                Send project brief via WhatsApp →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
