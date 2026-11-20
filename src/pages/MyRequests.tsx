import { useState } from 'react';
import { CURRENT_USER_ID, mockRequests } from '../data/mockData';
import type { BloodRequest, RequestStatus } from '../types/blood';
import './rashmi-pages.css';

type Filter = 'all' | RequestStatus;
const FILTERS: Filter[] = ['all', 'open', 'matched', 'fulfilled', 'cancelled'];

export default function MyRequests() {
  // TODO (Firebase): query(collection(db,'requests'), where('requesterId','==',user.uid)) with onSnapshot
  const [requests, setRequests] = useState<BloodRequest[]>(
    mockRequests.filter((r) => r.requesterId === CURRENT_USER_ID)
  );
  const [filter, setFilter] = useState<Filter>('all');

  const setStatus = (id: string, status: RequestStatus) =>
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));

  const visible = filter === 'all' ? requests : requests.filter((r) => r.status === filter);

  return (
    <main className="rb-page">
      <h1>My requests</h1>
      <p className="rb-sub">Track every blood request you have created.</p>

      <div className="rb-tabs" role="tablist">
        {FILTERS.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} className={`rb-tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
            {f === 'all' ? 'All' : f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="rb-card rb-empty">No requests here yet. Create a request to find donors.</div>
      ) : (
        <div className="rb-list">
          {visible.map((r) => (
            <article key={r.id} className="rb-card rb-row">
              <div className="rb-row" style={{ justifyContent: 'flex-start' }}>
                <div className="rb-group">{r.bloodGroup}</div>
                <div>
                  <strong>{r.hospital}</strong>, {r.city}
                  <div className="rb-muted">
                    {r.units} unit{r.units > 1 ? 's' : ''} · {new Date(r.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </div>
                </div>
              </div>
              <div className="rb-row">
                <span className={`rb-badge ${r.urgency}`}>{r.urgency}</span>
                <span className={`rb-badge ${r.status}`}>{r.status}</span>
                {(r.status === 'open' || r.status === 'matched') && (
                  <>
                    <button className="rb-btn small" onClick={() => setStatus(r.id, 'fulfilled')}>Mark fulfilled</button>
                    <button className="rb-btn small ghost" onClick={() => setStatus(r.id, 'cancelled')}>Cancel</button>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
