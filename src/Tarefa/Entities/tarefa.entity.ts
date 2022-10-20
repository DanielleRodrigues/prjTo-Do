
import { IsNotEmpty } from "class-validator";
//import { Tarefa } from "src/tafera/entities/tafera.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity({ name: 'tb_tarefa'})

export class Tarefa{

    @PrimaryGeneratedColumn()
    id: number 

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    titulo: string;


    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    descricao: string

    @IsNotEmpty()
    @Column({nullable: false})
    status: boolean

}


