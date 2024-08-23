import { Jogo, JogoInterface } from "./jogos";
let leitor = require('readline-sync')
export class JogoEletronico extends Jogo implements JogoInterface{
    plataforma: string
    constructor(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string){
        super (titulo, genero, classificacaoEtaria )

            this.plataforma = plataforma
        
    }


    getDetalhes():string {
        return `_______________
        titulo: ${this.titulo}
        Genero: ${this.genero}
        Classificaçao Etaria: ${this.classificacaoEtaria}
        `
    }
    setDetalhes(): void {
        let tituloUp = leitor.question('qual e o nome do jogo?')
        let generoUp = leitor.question('qual e o genero do jogo?')
        let classificacaoEtariaUp = leitor.questionInt('qual a classificaçao etaria?')
        let plataformaUp = leitor.question('qual e a sua plataforma?')
        this.plataforma = plataformaUp
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classificacaoEtariaUp
 
    }
        
    }