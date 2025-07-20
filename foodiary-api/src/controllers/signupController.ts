import { HttpRequest, HttpResponse } from '../types/https';
import { created } from '../utils/http';

export class SignUpController {
  static async handle(request: HttpRequest): Promise<HttpResponse> {
    return created({
      accessToken: 'token de acesso',
    });
  }
}
