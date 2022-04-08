const gameObject = {
    home: {
        teamName: 'Brooklyn Nets',
        colors: ['black','white'],
        players: {
            'Alan Anderson':{
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
            'Reggie Evans':{
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
            },
            'Brook Lopez':{
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
            },
            'Mason Plumlee':{
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
            },
            'Jason Terry':{
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
            }
        }
    },
    away: {
        teamName: 'Charlotte Hornets',
        colors: ['turquoise','purple'],
        players: {
            'Jeff Adrien':{
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            'Bismak Biyombo':{
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            'DeSagna Diop':{
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            'Ben Gordon':{
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            },
            'Brandon Haywood':{
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            }
        }
    }
}

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
}

function numPointsScored(playerName){
    //access the player.
    // const playerObj= lookUpPlayer(playerName)
    // return num player scored
    // return playerObj.points

    //OR do both in one step >> this doesnt seem to work.
    return lookUpPlayer(playerName).points
}

function lookUpPlayer(playerName) {
    for (let x in gameObject){
        // console.log({x}, 'the x loop works')
        for (let y in gameObject[x].players){
            if (y == playerName){
                // console.log(gameObject[x].players[y], 'the y loop works')
                return gameObject[x].players[y]
            }
        }
    }
}
// lookUpPlayer finds the object containing player 

function shoeSize(playerName){
    return lookUpPlayer(playerName).shoe
}

function teamColors(teamNameParam){
    for (let x in gameObject){
        if (gameObject[x].teamName == teamNameParam)
        return gameObject[x].colors
    }
}

function teamNames(){
    let arr = []
    for (let x in gameObject){
        arr.push(gameObject[x]['teamName']);
    }
    return arr
}

function playerStats(playerName){
    return lookUpPlayer(playerName)
}

function playerNumbers(teamNameStr){
    let arr = [];
    for (let x in gameObject){
        if (gameObject[x].teamName == teamNameStr){
            for (y in gameObject[x]['players']){
                arr.push(gameObject[x]['players'][y]['number'])
            }
        }
    }
    return arr
}

function listPlayers() {
    let arr = []
    for (let x in gameObject){
        for (let y in gameObject[x].players){
            arr.push(y)
        }
    }
    return arr
}


const findPlayer = (string) => {
    // console.log(Object.keys(gameObject.home.players[string]))
//     if (Object.keys(gameObject.home.players[string])) {
//         console.log(gameObject.home.players[string])
//         return gameObject.home.players[string]
//     } else {
//         return gameObject.away.players[string]
//     }
}
