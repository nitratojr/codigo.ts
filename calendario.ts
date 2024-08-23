import { log } from "console";

export interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): void;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): void;
    getAno(): number;
    isBissexto(): boolean;
    clone(): Data;
}

export class Data implements Data {
    dia: number
    mes: number
    ano: number
    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano



    }

    public compara(outraData: Data): void {
        if (this.dia == outraData.dia) {
            console.log('esses dia sao iguais.');

        }
        else {
            console.log('esse dia sao diferentes');

        }
        if (this.mes == outraData.mes) {
            console.log('esse meses sao iguais.');

        }
        else {
            console.log('esses meses sao diferentes');

        }
        if (this.ano == outraData.ano) {
            console.log('esses anos sao iguais.');

        }
        else {
            console.log('esses anos  sao diferentes');

        }



    }
    public getDia(): number {
        return this.dia

    }
    public getMes(): number {
        return this.mes

    }
    public getMesExtenso(): void {
        switch (this.mes) {
            case 1:
                console.log('Janeiro')
                break;
            case 2:
                console.log('Fevereiro')
                break;
            case 3:
                console.log('Marco')
                break;
            case 4:
                console.log('Abril')
                break;
            case 5:
                console.log('Maio')
                break;
            case 6:
                console.log('Junho')
                break;
            case 7:
                console.log('Julho')
                break;
            case 8:
                console.log('Agosto')
                break;
            case 9:
                console.log('Setembro')
                break;
            case 10:
                console.log('Outubro')
                break;
            case 11:
                console.log('Novembro')
                break;
            case 12:
                console.log('Dezembro')
                break;
        }

    }
    public getAno(): number {
        return this.ano

    }
    public isBissexto(): boolean {
        if (this.ano % 4 == 0 && this.ano % 100 == 0) {
            return true
        } else {
            return false
        }

    }
    public clone(): Data {
        let clone = new Data(this.dia, this.mes, this.ano)
        return clone


    }
}
let final = new Data(16, 6, 2007)


console.log(final.getDia());


console.log(final.getMes());

final.getMesExtenso()


console.log(final.getAno());

console.log(final.isBissexto());
console.log(final.clone());
