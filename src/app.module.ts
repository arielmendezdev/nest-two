import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import pg from 'pg';

import { AddressesModule } from './addresses/addresses.module';
import { Address } from '@/database/models/address.model';
import { CompaniesModule } from './companies/companies.module';
import { Company } from '@/database/models/company.model';
import { EmployeesModule } from './employees/employees.module';
import { Employed } from '@/database/models/employed.model';
import { OwnersModule } from './owners/owners.module';
import { Owner } from '@/database/models/owner.model';
import { TentsModule } from './tents/tents.module';
import { Tent } from '@/database/models/tent.model';
import { UmbrellasModule } from './umbrellas/umbrellas.module';
import { Umbrella } from '@/database/models/umbrella.model';
import { UsersModule } from './users/users.module';
import { User } from '@/database/models/user.model';

require('dotenv').config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PGHOST || process.env.DB_HOST,
      username: process.env.PGUSER || process.env.DB_USERNAME,
      database: process.env.PGDATABASE || process.env.DB_DATABASE,
      password: process.env.PGPASSWORD || process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
      models: [User, Address, Company, Owner, Tent, Umbrella, Employed],
      dialectModule: pg,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
    SequelizeModule.forFeature([
      User,
      Address,
      Company,
      Owner,
      Tent,
      Umbrella,
      Employed,
    ]),
    UsersModule,
    AddressesModule,
    EmployeesModule,
    CompaniesModule,
    OwnersModule,
    TentsModule,
    UmbrellasModule,
  ],
  exports: [SequelizeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
