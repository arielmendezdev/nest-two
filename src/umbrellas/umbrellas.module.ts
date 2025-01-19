import { Module } from '@nestjs/common';
import { UmbrellasService } from './umbrellas.service';
import { UmbrellasController } from './umbrellas.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Umbrella } from 'models/umbrella.model';
import { User } from 'models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Umbrella, User])],
  controllers: [UmbrellasController],
  providers: [UmbrellasService],
})
export class UmbrellasModule {}
