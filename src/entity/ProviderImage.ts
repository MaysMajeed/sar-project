import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class ProviderImage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  providerID: number;

  @Column()
  image: string;
}
