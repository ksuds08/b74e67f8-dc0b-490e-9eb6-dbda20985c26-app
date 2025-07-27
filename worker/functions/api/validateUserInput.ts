export function validateUserInput(userInput: UserRequest): string | null {
  if (!userInput.name || typeof userInput.name !== 'string') {
    return 'Invalid or missing name';
  }

  if (!userInput.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(userInput.email)) {
    return 'Invalid or missing email';
  }

  if (!Array.isArray(userInput.jobHistory) || userInput.jobHistory.length === 0) {
    return 'Invalid or missing job history';
  }

  for (const job of userInput.jobHistory) {
    if (!job.company || typeof job.company !== 'string' || !job.role || typeof job.role !== 'string' || !job.duration || typeof job.duration !== 'string') {
      return 'Invalid job history entry';
    }
  }

  if (!userInput.careerObjectives || typeof userInput.careerObjectives !== 'string') {
    return 'Invalid or missing career objectives';
  }

  return null;
}

type UserRequest = {
  name: string;
  email: string;
  jobHistory: Array<{ company: string; role: string; duration: string }>;
  careerObjectives: string;
};