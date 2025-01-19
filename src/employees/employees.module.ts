import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employed } from 'models/employed.model';
import { Company } from 'models/company.model';

@Module({
  imports: [SequelizeModule.forFeature([Employed, Company])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
