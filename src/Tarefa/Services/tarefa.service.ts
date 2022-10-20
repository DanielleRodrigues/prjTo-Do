import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike } from "typeorm";
import { Repository } from "typeorm/repository/Repository";
import { Tarefa } from "../Entities/tarefa.entity";



@Injectable()

export class TarefaService{

    constructor(
        @InjectRepository(Tarefa)
        private tarefaRepository: Repository<Tarefa>

    ){}

    async create (tarefa: Tarefa): Promise <Tarefa>{
        return await this.tarefaRepository.save(tarefa);
    }  

    async findAll(): Promise<Tarefa[]>{
        return await this.tarefaRepository.find();
    }

    async findById(id: number): Promise<Tarefa>{
        let tarefa = await this.tarefaRepository.findOne({
            where: {
                id
            }
        });
        if(!tarefa)
        throw new HttpException('Ops... tarefa não encontrada!', HttpStatus.NOT_FOUND);
        return tarefa;
    }

    async findByTitulo(titulo: string): Promise<Tarefa[]>{
        return await this.tarefaRepository.find({
            where:{
                titulo:ILike(`%{titulo}`)
            }
        });
    }

    async findByEstado(estado:boolean): Promise<Tarefa[]>
    {
        return await this.tarefaRepository.find({
            where:{
                status:true 
            }
        });
    }

    async delete (id:number): Promise<DeleteResult>{
        let buscaTarefa = await this.findById(id)
        if (!buscaTarefa)
        throw new HttpException('Ops, tarefa não encontrada!', HttpStatus.NOT_FOUND)
        return await this.tarefaRepository.delete(id);
    }

    async update (tarefa:Tarefa): Promise<Tarefa>
    {
        let buscaTarefa = await this.findById(tarefa.id);
        if(!buscaTarefa || tarefa.id)
        throw new HttpException('Ops, tarefa não encontrado', HttpStatus.NOT_FOUND);
        return await this.tarefaRepository.save(tarefa);
    }
}
