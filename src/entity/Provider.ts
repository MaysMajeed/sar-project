import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Provider extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: number;

  @Column()
  address: string;

  @Column()
  lang: number;

  @Column()
  lat: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
