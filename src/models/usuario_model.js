import {v4 as uuidv4} from "uuid"
export class Usuario {
    constructor(nome, email, senha){
        this.id = uuidv4();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}