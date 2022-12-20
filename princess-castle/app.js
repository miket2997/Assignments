class Player {
    constructor({}) {
        this.name = "";
        this.totalCoins = 0;
        this.status = 1;
        this.statusOptions = ["Dead", "Small", "Big", "Powered Up"];
        this.hasStar = false;
        this.gameActive = true;

    }
    setName(namePicked) {
        let names = ["Mario", "Luigi"];
        namePicked = names[1];
        this.name = namePicked;
    }
    gotHit() {
        if(!this.hasStar){
            this.status = this.status - 1
            if (this.status === 0){
                this.gameActive = !this.gameActive;
            }
        } else {
            console.log ("Congrats! You found a star!");
        }
    }
    gotPowerUp() {
        if (this.status <= 2){
            this.status = this.status + 1
            if (this.status === 3){
                this.hasStar = !this.hasStar
                setTimeout(() => {
                    this.hasStar = !this.hasStar
                    this.status--
                }, 10000)
            }
        }
    }
    addCoin() {
        this.totalCoins++
    }
    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.statusOptions[this.status]}\nTotal Coins: ${this.totalCoins}\n`);
        if(this.status === 0){
            console.log(`Your final score was ${this.totalCoins}`)
        }
    }
}

function randomRange (){

    var mathFunction = Math.floor(Math.random() * 3)
    switch (mathFunction){
        case 0:
            player.gotHit()
            break
        case 1:
            player.gotPowerUp()
            break
        case 2:
            player.addCoin()
    }
    player.print()
    if (!player.gameActive){
        clearInterval(gameRunning)
    }
}

const player = new Player({});
player.setName()
const gameRunning = setInterval(randomRange, 1000)











