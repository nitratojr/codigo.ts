import { Jogo } from "./jogos"

const leitor = require('readline-sync')
export class BibliotecaDeJogos {
    jogos: Jogo[]

    constructor(){
        this.jogos = []
    }

    adicionarJogo(jogo: Jogo): void{
        this.jogos.push(jogo)

    }
    removerJogo(titulo: string): void{
        this.jogos = this.jogos.filter(Jogo => Jogo.getDetalhes() !== titulo)


    }
    listarJogos(): string {
        console.log(this.jogos);
        let titulo = leitor.question('Insira o titulo pra excluir:')
        
       return this.jogos.map(Jogo => Jogo.getDetalhes() ).join('\n')
        
    }
}