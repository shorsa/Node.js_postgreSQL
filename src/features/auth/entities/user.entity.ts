import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../enums";

@Entity('Users')
export default class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    creationDate: Date;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.User
    })
    role: UserRole;
}