export interface UserDetails {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  aboutMe: string;
  workExperience: string;
  accademics: string;
}

interface workDetails {
  companyName: string;
  designation: string;
  duration: string;
  techStack: string;
}

interface accademics {
  degree: string;
  specialization: string;
  college: string;
  duration: string;
  CGPA: string;
}

export interface UserState {
  userDetails: UserDetails | null;
  workDetails: workDetails;
  accademics: accademics;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}
