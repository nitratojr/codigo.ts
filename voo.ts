export interface Voo {
    constructor(numeroVoo: string, data: Date);
    proximoLivre(): number;
    verifica(cadeira: number): number;
    ocupa(cadeira: number): number;
    vagas(): number;
    getVoo(): string;
    getData(): Date;
    clone(): Voo;
}

export class Voo implements Voo {
    public numeroVoo: string
    public data: Date
    public acento: Array<number> = this.criarAcentos()

    constructor(numeroVoo: string, data: Date) {
        this.numeroVoo = numeroVoo
        this.data = data
        
       }
    public criarAcentos(): Array<number> {
        let cadeiras: Array<number> = []
        for (let i = 0; i < 100; i++) {
            cadeiras.push(0)
        }
        return cadeiras
    }
    public proximoLivre(): number {
        for (let i = 0; i < this.acento.length; i++) {
            if (!this.acento[1]) {
                return i + 1
            }
        }
        return -1

    }

    public verifica(cadeira: number): number {
        return this.acento[cadeira - 1]


    }

    ocupa(cadeira: number): number {
        if(!this.verifica(cadeira)){
            this.acento[cadeira - 1] = 1
            return 1
        } else{
            return 0
        }
        

    }
  public  vagas(): number {
        return this.acento.filter((cadeira) => !cadeira).length

    }
   public getVoo(): string {
        return this.numeroVoo

    }
   public getData(): Date {
        return this.data

    }
   public clone(): Voo {
        let novoVoo = new Voo(this.numeroVoo,this.data)
        novoVoo.acento = this.acento
        return novoVoo

    }
}
