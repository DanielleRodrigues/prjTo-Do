import { HttpStatus } from "@nestjs/common";
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { ParseBoolPipe, ParseIntPipe } from "@nestjs/common/pipes";
import { Tarefa } from "../Entities/tarefa.entity";
import { TarefaService } from "../Services/tarefa.service";



@Controller('/tarefas')

export class TarefaController{
    constructor(private readonly tarefaService: TarefaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tarefa[]>{
        return this.tarefaService.findAll()
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findById
    (@Param('id', ParseIntPipe) id: number): Promise<Tarefa>
        {
            return this.tarefaService.findById(id);
        }
    
    @Get('/:status')
    @HttpCode(HttpStatus.OK)
    findByEstado(
        @Param('status', ParseBoolPipe)
        status: boolean
    ): Promise<Tarefa[]> {
        return this.tarefaService.findByEstado(status);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body()
        tarefa: Tarefa): Promise<Tarefa>{
            return this.tarefaService.create(tarefa)
        }
    
    @Put()
    @HttpCode(HttpStatus.OK)
     update(
        @Body()
        tarefa:Tarefa): Promise<Tarefa>{
            return this.tarefaService.update(tarefa)
        }
     
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(
        @Param('id', ParseIntPipe)
        id:number){
            return this.tarefaService.delete(id);
        }
}
