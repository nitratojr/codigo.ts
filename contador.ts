let ler = require('readline-sync')

export class Contador {
    valor: number

    constructor() {
        this.valor = 0
    }

    public zerar(): void {
        this.valor = 0

    }

    public incrementar(): void {
        this.valor += 1

    }

    public valore(): number {
        return this.valor

    }

}