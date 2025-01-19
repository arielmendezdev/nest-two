// import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { UsersModule } from './users/users.module';
// import pg from 'pg';
// import { User } from '../models/users.model';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// require('dotenv').config();

// @Module({
//   imports: [
//     SequelizeModule.forRoot({
//       dialect: 'postgres',
//       // host: process.env.PGHOST || process.env.DB_HOST,
//       // username: process.env.PGUSER || process.env.DB_USERNAME,
//       // database: process.env.PGDATABASE || process.env.DB_DATABASE,
//       // password: process.env.PGPASSWORD || process.env.DB_PASSWORD,
//       port: parseInt(process.env.DB_PORT),
//       username: process.env.PGUSER,
//       password: process.env.PGPASSWORD,
//       database: process.env.PGDATABASE,
//       host: process.env.PGHOST,
//       dialectModule: pg,
//       dialectOptions: {
//         ssl: {
//           require: true, // Requiere SSL
//           rejectUnauthorized: false, // Si es un certificado auto-firmado
//         },
//       },
//       models: [User],
//     }),
//     UsersModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import pg from 'pg';

import { AddressesModule } from './addresses/addresses.module';
import { Address } from 'models/address.model';
import { CompaniesModule } from './companies/companies.module';
import { Company } from 'models/company.model';
import { EmployeesModule } from './employees/employees.module';
import { Employed } from 'models/employed.model';
import { OwnersModule } from './owners/owners.module';
import { Owner } from 'models/owner.model';
import { TentsModule } from './tents/tents.module';
import { Tent } from 'models/tent.model';
import { UmbrellasModule } from './umbrellas/umbrellas.module';
import { Umbrella } from 'models/umbrella.model';
import { UsersModule } from './users/users.module';
import { User } from 'models/user.model';

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
