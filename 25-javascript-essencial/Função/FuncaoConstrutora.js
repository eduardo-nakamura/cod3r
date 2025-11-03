function Carro(velMax = 200, delta = 5) {
    // Atributo Privado
    let velAtual = 0

    // metodo publico
    this.acel = function () {
        if (velAtual + delta <= velMax) {
            velAtual += delta
        } else {
            velAtual = velMax
        }
    }

    // metodo publico ver atributo privado
    this.getVelAtual = function() {
        return velAtual
    }
}

const uno = new Carro
uno.acel()
console.log(uno.getVelAtual())
const ferrari = new Carro(350,20)
ferrari.acel()
console.log(ferrari.getVelAtual())
ferrari.acel()
console.log(ferrari.getVelAtual())