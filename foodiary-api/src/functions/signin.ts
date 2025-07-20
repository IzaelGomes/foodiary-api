import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { parseEvent } from '../utils/parseEvent';
import { parseResponse } from '../utils/parseResponse';
import { SignInController } from '../controllers/signinController';

export async function handler(event: APIGatewayProxyEventV2) {
  const request = parseEvent(event);
  const response = await SignInController.handle(request);
  return parseResponse(response);
}
