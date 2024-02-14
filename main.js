class Hero {
    constructor(nome, nível, classe){
        this.name = nome;
        this.level = nível;
        this.type = classe;
    }

    attack() {
        let attack;
        switch (this.type) {
            case "mago":
                attack = "Magia"
                break;
            case "guerreiro":
                attack = "Espada"
                break;
            case "rogue":
                attack = "Adagas"
                break;
            case "monge":
                attack = "Punhos de Dragão"
                break;
            case "ninja":
                attack = "Shuriken"
                break;    
        }

        console.log(`O ${this.type} ${this.name} de nível ${this.level} atacou usando ${attack}`);
    }
}    

const mago = new Hero("Gandalf", 200, "mago");
mago.attack();

const guerreiro = new Hero("Aragorn", 80, "guerreiro");
guerreiro.attack();

const rogue = new Hero("Feanor", 70, "rogue");
rogue.attack();

const monge = new Hero("Aang", 90, "monge");
monge.attack();

const ninja = new Hero("Americano", 60, "ninja");
ninja.attack();





