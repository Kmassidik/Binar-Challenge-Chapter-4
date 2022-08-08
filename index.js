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
    set.playerName = "player";
    set.playerOption = params;
    let collection = document.getElementsByClassName("player");
    if (params == "batu") {
        collection[0].style.backgroundColor = "red";
        collection[1].style.backgroundColor = "transparent";
        collection[2].style.backgroundColor = "transparent";
    } else if (params == "gunting") {
        collection[0].style.backgroundColor = "transparent";
        collection[1].style.backgroundColor = "red";
        collection[2].style.backgroundColor = "transparent";
    }else{
        collection[0].style.backgroundColor = "transparent";
        collection[1].style.backgroundColor = "transparent";
        collection[2].style.backgroundColor = "red";
    }
    set.botOption = set.randomBot();
    let collectionBot = document.getElementsByClassName("bot");
    if (set.botOption == "batu") {
        collectionBot[0].style.backgroundColor = "red";
        collectionBot[1].style.backgroundColor = "transparent";
        collectionBot[2].style.backgroundColor = "transparent";
    } else if (set.botOption == "gunting") {
        collectionBot[0].style.backgroundColor = "transparent";
        collectionBot[1].style.backgroundColor = "red";
        collectionBot[2].style.backgroundColor = "transparent";
    }else{
        collectionBot[0].style.backgroundColor = "transparent";
        collectionBot[1].style.backgroundColor = "transparent";
        collectionBot[2].style.backgroundColor = "red";
    }
    set.name();
    set.startBattle();
    console.log(set.matchResult());
    if (set.matchResult() !== null) {
        for (let i = 0; i < collection.length; i++) {
            collection[i].removeAttribute("onClick");
        }
    }
    let collectionResult = document.getElementsByClassName("result");
    if (set.startBattle(this.winner) == "player") {
        collectionResult[0].style.visibility = "hidden";
        collectionResult[1].style.visibility = "visible";
        collectionResult[2].style.visibility = "hidden";
        collectionResult[3].style.visibility = "hidden";
    } else if (set.startBattle(this.winner) == "binarBot") {
        collectionResult[0].style.visibility = "hidden";
        collectionResult[1].style.visibility = "hidden";
        collectionResult[2].style.visibility = "visible";
        collectionResult[3].style.visibility = "hidden";
    } else if(set.startBattle(this) == "SERI") {
        collectionResult[0].style.visibility = "hidden";
        collectionResult[1].style.visibility = "hidden";
        collectionResult[2].style.visibility = "hidden";
        collectionResult[3].style.visibility = "visible";
    }
    return 0;
}

function resetOption() {
    const attBatu = document.createAttribute("onclick");
    const attGunting = document.createAttribute("onclick");
    const attKertas = document.createAttribute("onclick");
    attBatu.value = "{ pickOptionPlayer('batu'); }";
    attGunting.value = "{ pickOptionPlayer('gunting'); }";
    attKertas.value = "{ pickOptionPlayer('kertas'); }";
    document.getElementsByClassName("player")[0].setAttributeNode(attBatu);
    document.getElementsByClassName("player")[1].setAttributeNode(attGunting);
    document.getElementsByClassName("player")[2].setAttributeNode(attKertas);
  
    const collection = document.getElementsByClassName("player");
    collection[0].style.backgroundColor = "transparent";
    collection[1].style.backgroundColor = "transparent";
    collection[2].style.backgroundColor = "transparent";
  
    const collection1 = document.getElementsByClassName("bot");
    collection1[0].style.backgroundColor = "transparent";
    collection1[1].style.backgroundColor = "transparent";
    collection1[2].style.backgroundColor = "transparent";
  }