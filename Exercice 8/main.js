class pokemon {
    constructor(name, attack, defense, hp) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
    }

    attackPokemon(Dracaufeu){
        Dracaufeu.hp -= this.attack
    }

    attackPokemon(Bulbizarre){
        Bulbizarre.hp -= this.attack
    }
}

let dracaufeu = new pokemon("Dracaufeu", 50, 15, 210) 
console.log(dracaufeu)
let bulbizarre = new pokemon("Bulbizarre", 50, 15, 200)
console.log(bulbizarre)

dracaufeu.attackPokemon(bulbizarre)
console.log(bulbizarre)

bulbizarre.attackPokemon(dracaufeu)
console.log(dracaufeu)



