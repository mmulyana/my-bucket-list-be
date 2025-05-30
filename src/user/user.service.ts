import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(protected prismaService: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const user = await this.prismaService.user.create({
      data,
    });
    return user;
  }

  async readAll(): Promise<User[]> {
    const users = await this.prismaService.user.findMany();
    return users;
  }
}
