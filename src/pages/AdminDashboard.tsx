import { useMemo, useState } from 'react';
import { mockRequests, mockUsers } from '../data/mockData';
import { BLOOD_GROUPS } from '../types/blood';
import type { BloodRequest } from '../types/blood';
import './rashmi-pages.css';

export default function AdminDashboard() {
  // TODO (Firebase): read all users + requests (admin-only security rule), update with updateDoc
  const [requests, setRequests] = useState<BloodRequest[]>(mockRequests);
  const users = mockUsers;

  const stats = useMemo(() => ({
    donors: users.filter((u) => u.role === 'donor').length,
    requesters: users.filter((u) => u.role === 'recipient').length,
    active: requests.filter((r) => r.status === 'open' || r.status === 'matched').length,
    fulfilled: requests.filter((r) => r.status === 'fulfilled').length,
  }), [requests, users]);

  const donorsByGroup = useMemo(() => {
    const counts = Object.fromEntries(BLOOD_GROUPS.map((g) => [g, 0])) as Record<string, number>;
    users.forEach((u) => { if (u.role === 'donor' && u.bloodGroup) counts[u.bloodGroup]++; });
    return counts;
  }, [users]);
  const maxCount = Math.max(1, ...Object.values(donorsByGroup));

  const toggleFlag = (id: string) =>
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, flagged: !r.flagged } : r)));
  const removeRequest = (id: string) => setRequests((prev) => prev.filter((r) => r.id !== id));

  const flagged = requests.filter((r) => r.flagged);

  return (
    <main className="rb-page">
      <h1>Admin dashboard</h1>
      <p className="rb-sub">Monitor donors, requests and suspicious activity.</p>

      <div className="rb-grid">
        <div className="rb-card"><div className="rb-stat">{stats.donors}</div><div className="rb-muted">Registered donors</div></div>
        <div className="rb-card"><div className="rb-stat">{stats.requesters}</div><div className="rb-muted">Requesters</div></div>
        <div className="rb-card"><div className="rb-stat">{stats.active}</div><div className="rb-muted">Active requests</div></div>
        <div className="rb-card"><div className="rb-stat">{stats.fulfilled}</div><div className="rb-muted">Fulfilled requests</div></div>
      </div>

      <section className="rb-section">
        <h2>Donors by blood group</h2>
        <div className="rb-card">
          {BLOOD_GROUPS.map((g) => (
            <div key={g} className="rb-bar-row">
              <strong>{g}</strong>
              <div className="rb-bar"><span style={{ width: `${(donorsByGroup[g] / maxCount) * 100}%` }} /></div>
              <span>{donorsByGroup[g]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rb-section">
        <h2>Needs review ({flagged.length})</h2>
        {flagged.length === 0 ? (
          <div className="rb-card rb-empty">No flagged requests.</div>
        ) : (
          <div className="rb-list">
            {flagged.map((r) => (
              <div key={r.id} className="rb-card rb-row">
                <div><strong>{r.requesterName}</strong> needs {r.units} units of {r.bloodGroup} at {r.hospital}, {r.city}</div>
                <div className="rb-row">
                  <button className="rb-btn small ghost" onClick={() => toggleFlag(r.id)}>Mark as safe</button>
                  <button className="rb-btn small" onClick={() => removeRequest(r.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rb-section">
        <h2>All requests</h2>
        <div className="rb-card rb-table-wrap">
          <table className="rb-table">
            <thead>
              <tr><th>Requester</th><th>Group</th><th>Units</th><th>Hospital</th><th>Urgency</th><th>Status</th><th></th></tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r.id}>
                  <td>{r.requesterName}{r.flagged && <span className="rb-flag"> (flagged)</span>}</td>
                  <td>{r.bloodGroup}</td>
                  <td>{r.units}</td>
                  <td>{r.hospital}, {r.city}</td>
                  <td><span className={`rb-badge ${r.urgency}`}>{r.urgency}</span></td>
                  <td><span className={`rb-badge ${r.status}`}>{r.status}</span></td>
                  <td>{!r.flagged && <button className="rb-btn small ghost" onClick={() => toggleFlag(r.id)}>Flag</button>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
