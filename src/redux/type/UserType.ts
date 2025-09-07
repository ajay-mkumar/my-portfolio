export interface UserDetails {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  aboutMe: string;
  workExperience: string;
  accademics: string;
}

export interface workDetails {
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
  username: string | null;
  userDetails: UserDetails | null;
  workDetails: workDetails;
  accademics: accademics;
  workExperience: WorkExperience[] | null;
  projects: ProjectDetails[] | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  username: string;
  token: string;
}

export interface ProjectDetails {
  id: string;
  name: string;
  image: string;
  description: string;
  techStacks: string;
  githubLink: string;
  appLink: string;
}

export interface WorkExperience {
  designation: string;
  duration: string;
  workDetails: string;
}