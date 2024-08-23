import { Jogo, JogoInterface } from "./jogos"
const leitor = require('readline-sync')

export class JogoDeTabuleiro extends Jogo implements JogoInterface{
    numeroDeJogadores: number
    constructor(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number){
        super(titulo, genero, classificacaoEtaria)
            
            this.numeroDeJogadores = numeroDeJogadores

    
    }

   
    getDetalhes(): string {
        return `_______________
        titulo: ${this.titulo}
        Genero: ${this.genero}
        Classificaçao Etaria: ${this.classificacaoEtaria}
        Numero de Jogadores ${this.numeroDeJogadores}`
    }
    setDetalhes(): void {
        let tituloUp = leitor.question('qual e o nome do jogo?')
        let generoUp = leitor.question('qual e o genero do jogo?')
        let classificacaoEtariaUp = leitor.questionInt('qual a classificaçao etaria?')
        let numeroDeJogadoresUP = leitor.question('sao quantos jogadores?')
        this.numeroDeJogadores = numeroDeJogadoresUP
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classificacaoEtariaUp
 
    }
}