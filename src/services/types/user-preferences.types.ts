export interface UserPreferences {
  uid: string;
  newsletter?: boolean | null;
  subscription?: boolean | null;
  saved_posts?: string[] | null;
  stripe_customer_id?: string | null;
}
