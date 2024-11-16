export interface AuthServiceInterface {
  getAccessToken: ({
    body: { authorization_token },
  }: GetAccessTokenParams) => Promise<GetAccessTokenResponse>;
}

export type GetAccessTokenParams = {
  body: { authorization_token: string };
};

export type GetAccessTokenResponse = { access_token: string } | undefined;
