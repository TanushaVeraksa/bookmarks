import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '../../generated/prisma';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'Sign in' };
  }

  signup() {
    return { msg: 'Sign up' };
  }
}
