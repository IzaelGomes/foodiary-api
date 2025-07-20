import { HttpResponse } from '../types/https';

export function parseResponse({ statusCode, body }: HttpResponse) {
  return {
    statusCode,
    body: body ? JSON.stringify(body) : undefined,
  };
}
