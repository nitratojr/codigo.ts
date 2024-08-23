import { log } from "console"

var leitor = require('readline-sync')

class Aluno{
    nome:string
    notas:Array<number>

    constructor( nome:string){

        this.nome = nome
        this.notas = []
    }
    registroNotas():void{
        let nota1:number = leitor.questionInt('insira a primeira nota:')
        let nota2:number = leitor.questionInt('insira a segunda nota:')

        this.notas.push(nota1,nota2)
    }
    calculaMedia():void{
        let media= (this.notas[0] + this.notas[1]) /2
        console.log(`A media dos valores e ${media}`);
        
    }
    


}

let nomeAluno = leitor.question('qual o nome do aluno que gostaria de verifica a media ?')

let alunoNovo = new Aluno (nomeAluno)

alunoNovo.registroNotas()
alunoNovo.calculaMedia()