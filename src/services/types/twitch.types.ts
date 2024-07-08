export interface TwitchUserResponse {
  data: TwitchUser[];
}

export interface TwitchUser {
  id: string;
  type: string;
  login: string;
  created_at: string;
  view_count: number;
  description: string;
  display_name: string;
  broadcaster_type: string;
  profile_image_url: string;
  offline_image_url: string;
}
