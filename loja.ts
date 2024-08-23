var red = require("readline-sync")

class Produto {
    nome:string
    Preço:number
    marca:string
    cor:string
    categoria:string

    constructor(nome:string, Preço:number,marca:string,cor:string, categoria:string){
        this.nome = nome
        this.Preço = Preço
        this.marca = marca
        this.cor = cor
        this.categoria = categoria


    }
    getProduto():void{
        console.log(`Nome:${this.nome}\n Preço:${this.Preço}\n Marca:${this.marca}\n Cor:${this.cor} \n Categoria${this.categoria}`);
        
    }
  
    }
    let porduct = new Produto('',0,'','','')

    class Vendas{
        produto:string
        quantidade:number
        valorTotal:number
        data:number
        notaFiscal:string
        notaVendedor:string
        estadoProduto:string
            constructor(produto:string,quantidade:number,valorTotal:number, data:number, notaFiscal:string,notaVendedor:string,estadoProduto:string){
                this.produto = produto
                this.quantidade = quantidade
                this.valorTotal = valorTotal
                this.data = data
                this.notaFiscal = notaFiscal
                this.notaVendedor = notaVendedor
                this.estadoProduto = estadoProduto
            }
            getVendas():void{
                console.log(`Produto: ${this.produto}\n Quantidade: ${this.quantidade}\n 
        Valor tota: ${this.valorTotal}\n Data: ${this.data}\n Nota Fiscal: ${this.notaFiscal}\n Nota do Vendedor: ${this.notaVendedor}\n Estado do Produto: ${this.estadoProduto}`);
                
            }
            setVendas():void{
                let nomeProduto = red.question("Qual o nome do Produto? ")
                let quantidadeProduto = red.questionInt("Qual a quantidade do produto? ")
                let valorTotalProduto = red.questionInt("qual é o valor total? ")
                let dataProduto = red.questionInt("qual a data de venda do produto?")
                let notaFiscalProduto = red.question("Qual a nota fiscal do produto?")
                let notaVendedorProduto = red.questionInt("qual é a avaliaçao do Produto?")
                let estadoProdutoUp = red.question("Qual é o estado fisico do Produto?")
            
                this.produto = nomeProduto 
                this.quantidade = quantidadeProduto
                this.valorTotal = valorTotalProduto
                this.data = dataProduto
                this.notaFiscal = notaFiscalProduto
                this.notaVendedor = notaVendedorProduto
                this.estadoProduto = estadoProdutoUp
            

            }
    }


