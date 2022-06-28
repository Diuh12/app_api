let id = 0;
export class Tarefa{
    constructor(titulo, descricao, status, data_criacao){
        this.id = id++,
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.data_de_criacao = data_criacao;
    }
}