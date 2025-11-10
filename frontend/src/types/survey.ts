export type SurveyResponses = {
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
};

export type EncryptionArtifacts = {
  handles: string[];
  payloadPreview: string;
  timestamp: number;
};

export type DecryptedSurvey = SurveyResponses & {
  stressIndex: number;
  timestamp: number;
};

