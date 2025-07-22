import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  signin(dto: AuthDto) {
    return { msg: 'Sign in' };
  }

  signup() {
    return { msg: 'Sign up' };
  }
}
