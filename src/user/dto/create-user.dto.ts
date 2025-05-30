import { z, ZodObject } from 'zod';

const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export class CreateUserDto {
  static schema: ZodObject<any> = CreateUserSchema

  constructor(
    public readonly email: string,
    public readonly password: string,
  ) {}
}
