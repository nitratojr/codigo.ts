let reader = require('readline-sync')


export class Ponto2D {
    public x: number
    public y: number

    constructor() {
        this.x = 0
        this.y = 0
    }
    public getX(): number {
        return this.x

    }

    public setX(): void {
        let novoX = reader.questionInt('insira o novo x:')
        this.x = novoX

    }
    public getY(): number {
        return this.y

    }

    public setY(): void {
        let novoY = reader.questionInt('insira o novo y:')
        this.y = novoY

    }

    public equals(outroPonto: Ponto2D): boolean {
        if (this.x === outroPonto.x && this.y === outroPonto.y) {
            return true
        } else {
            return false
        }

    }
    public pontoToString(): string {
        return `(${this.x},${this.y})`
    }


}
export class Ponto2DComCordenadas extends Ponto2D {
    constructor(x: number, y: number) {
        super()
        this.x = x
        this.y = y

    }
    public alterarPonto(x: number, y: number): void {
        this.x = x
        this.y = y

    }

}

export class CopiaPonto2D extends Ponto2D {
    constructor(outroPonto2D: Ponto2D) {
        super()
        this.x = outroPonto2D.x
        this.y = outroPonto2D.y
    }
    public alterarPonto(outroPonto2D): void {
        this.x = outroPonto2D.x
        this.y = outroPonto2D.y

    }

    public distancia(outroPonto: Ponto2D): number {
        let distancia = Math.sqrt((outroPonto.x - this.x) + (outroPonto.y - this.y) ** 2)
        return distancia


    }

    public clone(): Ponto2D {
        let pontoClone = new Ponto2DComCordenadas(this.x, this.y)
        return pontoClone
    }
}

