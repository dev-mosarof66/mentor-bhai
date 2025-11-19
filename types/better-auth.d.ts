import "better-auth";

declare module "better-auth" {
  interface User {
    onboardingCompleted: boolean;
    englishLevel?: string | null;
    learningPreference?: string | null;
  }
}
