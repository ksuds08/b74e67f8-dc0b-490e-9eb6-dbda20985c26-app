export function validateSubscriptionRequest(body: any): { valid: boolean, error?: string } {
  const { userId, subscriptionType } = body;

  if (!userId || typeof userId !== 'string') {
    return { valid: false, error: 'Invalid or missing userId' };
  }

  const validSubscriptionTypes = ['basic', 'premium', 'enterprise'];
  if (!subscriptionType || !validSubscriptionTypes.includes(subscriptionType)) {
    return { valid: false, error: 'Invalid or missing subscriptionType' };
  }

  return { valid: true };
}