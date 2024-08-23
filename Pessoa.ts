class Pessoa{
    nome:string
    idade:number


    constructor(nome:string,idade:number){
        this.nome = nome
        this.idade = idade
    }



    }
   

class Pers extends Pessoa{
    cumprimentar(): void {
        console.log(`ola ${this.nome} vc tem ${this.idade} anos.`)
        
    }
}



class Crianca extends Pessoa{
   cumprimentar(): void {
        console.log(`ola ${this.nome},vc tem ${this.idade} anos. Sou uma crianca.`)

    }
}

class Adulto extends Pessoa{
   cumprimentar(): void {
        console.log(`ola ${this.nome},vc tem ${this.idade} anos. Sou uma Adulto.`)
    }
}

class Idoso extends Pessoa{
   cumprimentar(): void {
        console.log(`ola ${this.nome},vc tem ${this.idade} anos. Sou uma Idoso.`)
    }
}

let kid = new Crianca ('junior',10)
let adult = new Adulto('cleber',20)
let oldman = new Idoso ('sr cleber',60)

kid.cumprimentar()
adult.cumprimentar()
oldman.cumprimentar()

