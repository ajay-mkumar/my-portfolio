export interface UserDetails {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  aboutMe: string;
  workExperience: string;
  accademics: string;
}

export interface UserState {
  userDetails: UserDetails | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}
