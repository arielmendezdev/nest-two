import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Owner } from 'models/owner.model';
import { Company } from 'models/company.model';

@Module({
  imports: [SequelizeModule.forFeature([Owner, Company])],
  controllers: [OwnersController],
  providers: [OwnersService],
})
export class OwnersModule {}
