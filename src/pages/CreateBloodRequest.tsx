import { useState } from 'react';
import type { FormEvent } from 'react';
import { BLOOD_GROUPS } from '../types/blood';
import type { BloodGroup, Urgency } from '../types/blood';
import './rashmi-pages.css';

interface FormState {
  bloodGroup: BloodGroup | '';
  units: string;
  hospital: string;
  city: string;
  urgency: Urgency;
}

const emptyForm: FormState = { bloodGroup: '', units: '1', hospital: '', city: '', urgency: 'normal' };

export default function CreateBloodRequest() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.bloodGroup) e.bloodGroup = 'Select a blood group.';
    const units = Number(form.units);
    if (!Number.isInteger(units) || units < 1 || units > 10) e.units = 'Enter 1 to 10 units.';
    if (!form.hospital.trim()) e.hospital = 'Enter the hospital name.';
    if (!form.city.trim()) e.city = 'Enter the city.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    // TODO (Firebase): addDoc(collection(db, 'requests'), { ...form, units: Number(form.units),
    //   requesterId: user.uid, status: 'open', createdAt: serverTimestamp() })
    console.log('New request:', { ...form, units: Number(form.units), status: 'open' });
    setSubmitted(true);
    setForm(emptyForm);
  };

  return (
    <main className="rb-page">
      <h1>Create blood request</h1>
      <p className="rb-sub">Tell us what you need. Matching donors nearby will be notified.</p>

      {submitted && (
        <div className="rb-toast" role="status">
          Request created. You can track it under My Requests.
        </div>
      )}

      <form className="rb-card" onSubmit={handleSubmit} noValidate>
        <div className="rb-grid">
          <div className="rb-field">
            <label htmlFor="bloodGroup">Blood group</label>
            <select id="bloodGroup" value={form.bloodGroup} onChange={(e) => update('bloodGroup', e.target.value as BloodGroup)}>
              <option value="">Select</option>
              {BLOOD_GROUPS.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
            {errors.bloodGroup && <span className="rb-error">{errors.bloodGroup}</span>}
          </div>

          <div className="rb-field">
            <label htmlFor="units">Units needed</label>
            <input id="units" type="number" min={1} max={10} value={form.units} onChange={(e) => update('units', e.target.value)} />
            {errors.units && <span className="rb-error">{errors.units}</span>}
          </div>
        </div>

        <div className="rb-field">
          <label htmlFor="hospital">Hospital</label>
          <input id="hospital" value={form.hospital} onChange={(e) => update('hospital', e.target.value)} placeholder="e.g. Medanta Hospital" />
          {errors.hospital && <span className="rb-error">{errors.hospital}</span>}
        </div>

        <div className="rb-grid">
          <div className="rb-field">
            <label htmlFor="city">City</label>
            <input id="city" value={form.city} onChange={(e) => update('city', e.target.value)} placeholder="e.g. Gurugram" />
            {errors.city && <span className="rb-error">{errors.city}</span>}
          </div>

          <div className="rb-field">
            <label htmlFor="urgency">Urgency</label>
            <select id="urgency" value={form.urgency} onChange={(e) => update('urgency', e.target.value as Urgency)}>
              <option value="normal">Normal (within a few days)</option>
              <option value="urgent">Urgent (within 24 hours)</option>
              <option value="critical">Critical (right now)</option>
            </select>
          </div>
        </div>

        <button className="rb-btn" type="submit">Create request</button>
      </form>
    </main>
  );
}
