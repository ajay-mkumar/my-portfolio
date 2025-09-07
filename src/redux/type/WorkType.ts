export interface WorkExperienceResponse {
  id: string;
  companyName: string;
  designation: string;
  duration: string;
  workDetails: string;
}

export interface WorkExperienceRequest {
  companyName: string;
  designation: string;
  duration: string;
  workDetails: string;
}

export interface WorkState {
  workExperience: WorkExperienceResponse | null;
  loading: boolean;
  error: string | null;
}
