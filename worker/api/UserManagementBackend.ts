import { validateUserInput } from '../functions/api/validateUserInput';

export async function UserManagementBackendHandler(req: Request): Promise<Response> {
  try {
    const { method } = req;

    if (method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const requestBody: UserRequest = await req.json();
    const validationError = validateUserInput(requestBody);

    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // Simulate handling user data
    const userId = "user_" + new Date().getTime(); // Mock user ID generation

    return new Response(JSON.stringify({ success: true, userId }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

type UserRequest = {
  name: string;
  email: string;
  jobHistory: Array<{ company: string; role: string; duration: string }>;
  careerObjectives: string;
};