export interface IUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  email: string;
  hash: string;

  firstName?: string;
  lastName?: string;
}

export type JwtUserPayload = Pick<IUser, 'email'> & {
  sub: number;
  iat: number;
  exp: number;
};
