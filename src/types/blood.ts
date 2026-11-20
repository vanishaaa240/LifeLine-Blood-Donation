export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
export type Urgency = 'normal' | 'urgent' | 'critical';
export type RequestStatus = 'open' | 'matched' | 'fulfilled' | 'cancelled';

export const BLOOD_GROUPS: BloodGroup[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export interface BloodRequest {
  id: string;
  requesterId: string;
  requesterName: string;
  bloodGroup: BloodGroup;
  units: number;
  hospital: string;
  city: string;
  urgency: Urgency;
  status: RequestStatus;
  flagged: boolean;
  createdAt: string; // ISO date
}

export interface AppNotification {
  id: string;
  userId: string;
  requestId: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface AppUser {
  id: string;
  name: string;
  role: 'donor' | 'recipient' | 'admin';
  bloodGroup?: BloodGroup;
  city: string;
  isAvailable?: boolean;
}
