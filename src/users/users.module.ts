import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { User } from 'models/user.model';
import { Address } from 'models/address.model';
import { Tent } from 'models/tent.model';
import { Umbrella } from 'models/umbrella.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Address, Tent, Umbrella])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
