import { useState } from 'react';
import { CURRENT_USER_ID, mockNotifications } from '../data/mockData';
import type { AppNotification } from '../types/blood';
import './rashmi-pages.css';

export default function Notifications() {
  // TODO (Firebase): onSnapshot(query(collection(db,'notifications'), where('userId','==',user.uid), orderBy('createdAt','desc')))
  const [items, setItems] = useState<AppNotification[]>(
    mockNotifications
      .filter((n) => n.userId === CURRENT_USER_ID)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  );

  const unread = items.filter((n) => !n.read).length;
  const markRead = (id: string) => setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  const markAllRead = () => setItems((prev) => prev.map((n) => ({ ...n, read: true })));

  return (
    <main className="rb-page">
      <div className="rb-row">
        <div>
          <h1>Notifications</h1>
          <p className="rb-sub">{unread > 0 ? `${unread} unread` : 'You are all caught up.'}</p>
        </div>
        {unread > 0 && <button className="rb-btn ghost" onClick={markAllRead}>Mark all as read</button>}
      </div>

      {items.length === 0 ? (
        <div className="rb-card rb-empty">No notifications yet. We will alert you when a donor matches your request.</div>
      ) : (
        <div className="rb-list">
          {items.map((n) => (
            <article key={n.id} className={`rb-card rb-row ${n.read ? '' : 'rb-unread'}`}>
              <div>
                <div style={{ fontWeight: n.read ? 400 : 600 }}>{n.message}</div>
                <div className="rb-muted">{new Date(n.createdAt).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</div>
              </div>
              {!n.read && <button className="rb-btn small ghost" onClick={() => markRead(n.id)}>Mark as read</button>}
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
