import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { SerializedUser } from './dto/serialized-user.dto';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<SerializedUser> {
    const user = await this.userService.createUser(body);
    return new SerializedUser(user);
  }

  @Get()
  async getUser(): Promise<SerializedUser[]> {
    const users = await this.userService.readAll();
    return users.map((user) => new SerializedUser(user));
  }
}
