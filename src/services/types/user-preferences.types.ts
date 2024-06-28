export interface UserPreferences {
  uid: string;
  newsletter?: boolean | null;
  subscription?: boolean | null;
  stripe_customer_id?: string | null;
}
