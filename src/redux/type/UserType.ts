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
  loading: boolean;
  error: string | null;
}
