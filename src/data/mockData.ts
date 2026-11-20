// Temporary data. Replace with Firestore calls once Firebase is connected.
import type { AppNotification, AppUser, BloodRequest } from '../types/blood';

export const CURRENT_USER_ID = 'u1';

export const mockRequests: BloodRequest[] = [
  { id: 'r1', requesterId: 'u1', requesterName: 'Rashmi', bloodGroup: 'O-', units: 2, hospital: 'Medanta Hospital', city: 'Gurugram', urgency: 'critical', status: 'open', flagged: false, createdAt: '2026-11-19T09:30:00' },
  { id: 'r2', requesterId: 'u1', requesterName: 'Rashmi', bloodGroup: 'B+', units: 1, hospital: 'Fortis Hospital', city: 'Gurugram', urgency: 'normal', status: 'matched', flagged: false, createdAt: '2026-11-15T14:10:00' },
  { id: 'r3', requesterId: 'u1', requesterName: 'Rashmi', bloodGroup: 'A+', units: 3, hospital: 'AIIMS', city: 'Delhi', urgency: 'urgent', status: 'fulfilled', flagged: false, createdAt: '2026-11-02T11:00:00' },
  { id: 'r4', requesterId: 'u2', requesterName: 'Aman Verma', bloodGroup: 'AB+', units: 5, hospital: 'Unknown clinic', city: 'Noida', urgency: 'critical', status: 'open', flagged: true, createdAt: '2026-11-20T07:45:00' },
  { id: 'r5', requesterId: 'u3', requesterName: 'Neha Singh', bloodGroup: 'O+', units: 2, hospital: 'Max Hospital', city: 'Delhi', urgency: 'urgent', status: 'open', flagged: false, createdAt: '2026-11-18T18:20:00' },
];

export const mockNotifications: AppNotification[] = [
  { id: 'n1', userId: 'u1', requestId: 'r2', message: 'A donor with B+ blood group near Gurugram accepted your request.', read: false, createdAt: '2026-11-16T10:05:00' },
  { id: 'n2', userId: 'u1', requestId: 'r1', message: 'Your critical request for O- is live. We are alerting nearby donors.', read: false, createdAt: '2026-11-19T09:31:00' },
  { id: 'n3', userId: 'u1', requestId: 'r3', message: 'Your request at AIIMS was marked fulfilled.', read: true, createdAt: '2026-11-04T16:40:00' },
];

export const mockUsers: AppUser[] = [
  { id: 'u1', name: 'Rashmi', role: 'recipient', city: 'Gurugram' },
  { id: 'u2', name: 'Aman Verma', role: 'recipient', city: 'Noida' },
  { id: 'u3', name: 'Neha Singh', role: 'recipient', city: 'Delhi' },
  { id: 'u4', name: 'Karan Mehta', role: 'donor', bloodGroup: 'O-', city: 'Gurugram', isAvailable: true },
  { id: 'u5', name: 'Priya Nair', role: 'donor', bloodGroup: 'B+', city: 'Delhi', isAvailable: false },
  { id: 'u6', name: 'Ishaan Roy', role: 'donor', bloodGroup: 'O+', city: 'Noida', isAvailable: true },
];
