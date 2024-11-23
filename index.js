let winningAmount = 50
let lossesAmount = 2
let winningBalance = winningAmount - lossesAmount
let level  = getLevel(winningBalance)


console.log(`O Herói tem de saldo de **${winningBalance}** está no nível de **${level}**`)

function getLevel(winningBalance){
    

    if((winningBalance) < 10){
        let level = "Iron"
        return level
    }
    else if(winningBalance >= 11 &&  winningBalance <= 20){
        let level = "Bronze"
        return level
    }
    else if(winningBalance >= 21 && winningBalance <= 50){
        let level = "Silver"
        return level
    }
    else if(winningBalance >= 51 && winningBalance <= 80){
        let level = "Gold"
        return level
    }
    else if(winningBalance >= 81 && winningBalance <= 90){
        let level = "Diamond"
        return level
    }
    else if(winningBalance >= 91 && winningBalance <= 100){
        let level = "Legendary"
        return level
    }
    else if(winningBalance >= 101){
        let level = "Immortal"
        return level
    }
}