const leitor = require('readline-sync')
export interface JogoInterface{
    titulo:string
    genero:string
    classificacaoEtaria:number

    getJogo():void
    setJogo():void
}

 export class Jogo implements JogoInterface{
    titulo: string
    genero: string
    classificacaoEtaria: number
    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
    }
     getJogo(): void {
         throw new Error("Method not implemented.")
     }
     setJogo(): void {
         throw new Error("Method not implemented.")
     }

 public  getDetalhes(): string{
        return `titulo:${this.titulo}, Genero: ${this.genero}, Classificação:${this.classificacaoEtaria}`

    }
 public   setDetalhes(): void{
       let tituloUp = leitor.question('qual e o nome do jogo?')
       let generoUp = leitor.question('qual e o genero do jogo?')
       let classificacaoEtariaUp = leitor.questionInt('qual a classificaçao do jogo?')
       this.titulo = tituloUp
       this.genero = generoUp
       this.classificacaoEtaria = classificacaoEtariaUp

        

    }

}



     

  
/*
    let bilioteca = new BibliotecaDeJogos()
    let jogo1 = new JogoDeTabuleiro('titulo','genero',18,5)
    bilioteca.adicionarJogo(jogo1)

    bilioteca.listarJogos()*/
