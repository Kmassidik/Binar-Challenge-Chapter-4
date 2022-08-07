class pickOption {
    constructor(){
        this.playerName;
        this.botName = "binarBot";
        this.playerOption;
        this.botOption;
        this.winner = "";
    }
    randomBot(){
        const option = ["kertas", "gunting", "batu"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }
    startBattle(){
        if (this.botOption == "kertas" && this.playerOption == "gunting") {
            return this.winner = this.playerName
        } else if (this.botOption == "kertas" && this.playerOption == "batu") {
            return this.winner = this.botName;
        } else if (this.botOption == "gunting" && this.playerOption == "kertas") {
            return this.winner = this.botName;
        } else if (this.botOption == "gunting" && this.playerOption == "batu") {
            return this.winner = this.playerName
        } else if (this.botOption == "batu" && this.playerOption == "kertas") {
            return this.winner = this.playerName
        } else if (this.botOption == "batu" && this.playerOption == "gunting") {
            return this.winner = this.botName;
        } else {
            return this.winner = "SERI"
        }
    }
    matchResult() {
        if (this.winner != "SERI") {
            return `${this.winner} MENANG!`;
        } else {
            return `WAAA ${this.winner}, GAK ADA YG MENANG`;
        }
    }
    name(){
        console.log("player pilih",this.playerOption)
        console.log("bot pilih",this.botOption)
    }
}
function pickOptionPlayer(params) {
    let set = new pickOption();
    const collection = document.getElementsByClassName("option");
    if (params == "batu") {
        collection[0].style.backgroundColor = "red";
    } else if (params == "gunting") {
        collection[1].style.backgroundColor = "red";
    }else{
        collection[2].style.backgroundColor = "red";
    }
    set.playerName = "player"
    set.playerOption = params;
    set.botOption = set.randomBot();
    set.name();
    set.startBattle();
    console.log(set.matchResult());
}