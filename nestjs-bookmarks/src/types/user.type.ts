export interface User {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  email: string;
  hash: string;

  firstName?: string;
  lastName?: string;
}

export type JwtUserPayload = Pick<User, 'email'> & {
  sub: number;
  iat: number;
  exp: number;
};
