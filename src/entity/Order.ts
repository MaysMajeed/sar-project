import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientID: number;

  @Column()
  serviceID: number;

  @Column()
  comment: string;

  @Column()
  address: string;

  @Column()
  lang: number;

  @Column()
  lat: number;

  @Column()
  dateandtime: Date;

  @Column()
  providerID: number;
}
