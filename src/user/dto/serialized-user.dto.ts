import { Exclude } from 'class-transformer';
import { User } from '@prisma/client';

export class SerializedUser implements Partial<User> {
  id: number;
  email: string;
  name: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
