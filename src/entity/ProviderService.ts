import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class ProviderService extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  providerID: number;

  @Column()
  serviceID: number;
}
