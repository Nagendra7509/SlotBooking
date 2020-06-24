export interface RequestObject {
   username: string
   password: string
}

export interface GetLoginResponse {
   access_token: string
   refresh_token: string
   is_admin: boolean
}
