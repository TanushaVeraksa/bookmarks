import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext): unknown => {
    const request = ctx.switchToHttp().getRequest<Request & { user: User }>();
    if (!request.user) {
      return null;
    }
    return data ? request.user[data] : request.user;
  },
);
