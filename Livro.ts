class Livro {
    titulo:string
    autor:string
    ano:number
    constructor(titulo:string,
        autor:string,
        ano:number){
           this.titulo = titulo
           this.autor = autor
           this.ano = ano 
        }
        obterDetalhes():void{
            console.log(`${this.titulo},${this.autor},${this.ano}`)
        }
}
var novoLivro:Livro = new Livro ('A arte da guerra','sun tzu',1519)

novoLivro.obterDetalhes()