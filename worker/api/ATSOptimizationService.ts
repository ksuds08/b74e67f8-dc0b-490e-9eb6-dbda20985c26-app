import { validateRequest } from '../functions/api/validateRequest';
import { optimizeForATS } from '../functions/api/optimizeForATS';

export async function ATSOptimizationServiceHandler(req: Request): Promise<Response> {
  try {
    const { valid, error } = validateRequest(req);
    if (!valid) {
      return new Response(JSON.stringify({ error }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const requestData = await req.json();
    const optimizedResume = optimizeForATS(requestData);

    return new Response(JSON.stringify({ optimizedResume }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}