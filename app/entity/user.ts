import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 255, nullable: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;
}

export default User;
