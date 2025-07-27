import { validateRequest, generateResumeTemplate } from "../../functions/api/helpers";

export async function AIGenerationEngineHandler(req: Request): Promise<Response> {
  try {
    const { valid, body, error } = await validateRequest(req);
    if (!valid) {
      return new Response(JSON.stringify({ error }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const resume = await generateResumeTemplate(body);
    return new Response(JSON.stringify({ resume }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}