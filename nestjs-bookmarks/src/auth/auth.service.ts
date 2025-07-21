import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'Sign in' };
  }

  signup() {
    return { msg: 'Sign up' };
  }
}
