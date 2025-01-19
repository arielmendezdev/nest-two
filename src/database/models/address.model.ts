import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Employed } from './employed.model';
import { Company } from './company.model';
import { Owner } from './owner.model';

@Table({ tableName: 'addresses', timestamps: true })
export class Address extends Model<Address> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nameStreet: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  numberStreet: string;

  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  isDeleted: boolean;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  userId: string;

  @ForeignKey(() => Employed)
  @Column({
    type: DataType.UUID,
  })
  employedId: string;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.UUID,
  })
  companyId: string;

  @ForeignKey(() => Owner)
  @Column({
    type: DataType.UUID,
  })
  ownerId: string;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Employed)
  employed!: Employed;

  @BelongsTo(() => Company)
  company!: Company;

  @BelongsTo(() => Owner)
  owner!: Owner;
}
