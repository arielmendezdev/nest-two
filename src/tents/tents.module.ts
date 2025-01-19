import { Module } from '@nestjs/common';
import { TentsService } from './tents.service';
import { TentsController } from './tents.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tent } from 'models/tent.model';
import { User } from 'models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Tent, User])],
  controllers: [TentsController],
  providers: [TentsService],
})
export class TentsModule {}
