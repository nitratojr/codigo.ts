import exp from "constants"

let reader = require('readline-sync')



export class Branch {

    public nome: string
    public dataCriacao: string
    public commits: string[] = []
    public branchPai: Branch
    public historicoCommits: string[]

    constructor(nome: string, dataCriacao: string) {
        this.nome = nome
        this.dataCriacao = dataCriacao
    }

    criarCommit(mensagem: string): void {
        this.commits.push(mensagem)
        this.historicoCommits.push(mensagem)
    }








    merge(outraBranch: Branch): void {
        for (let i = 0; i > outraBranch.commits.length; i++) {
            this.commits.push(outraBranch.commits[i])
        }



    }
    checkout(): void {
        //você vai ter um menu inicial que você escolhe a branch que quer trabalhar
        //esse método faz com que você saia do menu da branch escolhida e volte para o menu de escolha
        //process.exit(0) ou um break
    }
    mostrarHistorico(): void {
        console.log(this.historicoCommits);



    }




}
export class BranchMaster extends Branch {
    criarBranch(nome: string): Branch {
        let nomeNovo = reader.question('de um nome a commit:')
        let dataCriacao = reader.qual('Qual a data de criação? ')
        let option = reader.questionInt(`
            Escolha o tipo de Branch:
            1 - Release
            2 - Develo
            3 - hotfix
            4 - feature
        `)
        switch (option) {
            case 1:
                return new BranchRelease(nomeNovo, dataCriacao)
                break
            case 2:
                return new BranchDevelop(nomeNovo, dataCriacao)
                break
            case 3: 
                return new BranchHotfix(nomeNovo, dataCriacao)
                break
            case 4: 
                return new BranchFeature(nomeNovo, dataCriacao)
                break
            default:
                console.log('Erro')
                return new Branch('erro', 'erro')


        }



    }
    function menuMaster(branchMaster:){

    }
}


export class BranchDevelop extends Branch {
    finalizarSprinte(branchMaster : BranchMaster): void {
        //finalizar chamando o merge entre a branch develop (this) e branch master
       this.merge(branchMaster)
    }
    function menuDevelop(BranchDevelop:) {
        
    }
}


export class BranchHotfix extends Branch {


    corrigirBug(descricao: string): void {
        //dar um push no array como se fosse um commit, pode chamar o criarCommit
        this.commits.push(descricao )
    }
    function menuHotfix (BranchHotfix) {
        
    }
}

export class BranchFeature extends Branch {



    implementarFuncionalidade(descricao: string): void {
        //dar um push no array como se fosse um commit, pode chamar o criarCommit
        this.commits.push(descricao)
    }
    function menuFeature(BranchFeature) {
        
    }
}
export class BranchRelease extends Branch {

    promoverParaProducao(branchMaster: BranchMaster): void {
        //merge da release com a Master
        this.merge(branchMaster)
    }
    function menuRealese(BranchRelease):BranchMaster {
        
    }

}
let menu = true
while (menu) {
    console.log();


}
