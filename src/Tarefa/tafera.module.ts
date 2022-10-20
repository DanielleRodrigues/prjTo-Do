import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TarefaController } from "./Controllers/tarefa.controller";
import { Tarefa } from "./Entities/tarefa.entity";
import { TarefaService } from "./Services/tarefa.service";



@Module({
    imports: [TypeOrmModule.forFeature([Tarefa])],
    providers: [TarefaService],
    controllers: [TarefaController],
    exports: [TypeOrmModule]
})
export class TarefaModule { }