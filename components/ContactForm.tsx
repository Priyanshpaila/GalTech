"use client";

import { Send } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("marketing@galtechinfo.com");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    void import("@/config/companyDetails").then(({ companyDetails }) => setEmail(companyDetails.contact.email));
  }, []);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const company = String(form.get("company") ?? "");
    const phone = String(form.get("phone") ?? "");
    const interest = String(form.get("interest") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`GALTech enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nInterest: ${interest}\n\nMessage:\n${message}`);
    setSubmitted(true);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={submitEnquiry} className="rounded-card border border-slate-200 bg-white p-6 shadow-enterprise sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-bold text-ink">Name<input required name="name" autoComplete="name" className="form-field mt-2" placeholder="Your name" /></label>
        <label className="block text-sm font-bold text-ink">Work email<input required name="email" type="email" autoComplete="email" className="form-field mt-2" placeholder="you@company.com" /></label>
        <label className="block text-sm font-bold text-ink">Company<input required name="company" autoComplete="organization" className="form-field mt-2" placeholder="Company name" /></label>
        <label className="block text-sm font-bold text-ink">Phone<input required name="phone" type="tel" autoComplete="tel" className="form-field mt-2" placeholder="Your contact number" /></label>
      </div>
      <label className="mt-5 block text-sm font-bold text-ink">What are you interested in?<select required name="interest" defaultValue="" className="form-field mt-2"><option value="" disabled>Select a solution</option><option>Interactive Panels</option><option>Toshiba Printers</option><option>InFocus Projectors</option><option>Technology consultation</option><option>Certificate or compliance information</option></select></label>
      <label className="mt-5 block text-sm font-bold text-ink">Tell us about your requirement<textarea required name="message" rows={5} className="form-field mt-2 resize-y" placeholder="Describe your space, team, or project needs." /></label>
      <button type="submit" className="button-primary mt-6 inline-flex w-full items-center justify-center gap-2 bg-brand px-6 text-white shadow-floating sm:w-auto">Send enquiry <Send aria-hidden="true" className="size-4" /></button>
      <p className="mt-4 text-xs leading-5 text-muted">Submitting opens your default email application with the enquiry details prepared for GALTech.</p>
      {submitted && <p role="status" className="mt-3 rounded-xl bg-mint/10 px-4 py-3 text-sm font-semibold text-teal-800">Your email application is opening with your enquiry details.</p>}
    </form>
  );
}
