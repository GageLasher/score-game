let team1Score = 0
let team2Score = 0
let players = []

function addPlayers(event) {
    event.preventDefault()
    let form = event.target
    let playerName = form.playerName.value
    let player = {
        name: playerName
    }
    players.push(player)
    form.reset()
drawScoreBoard()

}
console.log(players);
function drawScoreBoard() {
    let template = ""
    players.forEach(player => {
        template += `
        <div class="d-flex space-between">
        <span>
        <i class="fa fa-user"></i>
        ${player.name} 
        </span>
        <span> score: ${player.score}</span>
        </div>
        `
    })

    document.getElementById("players").innerHTML = template
}
drawScoreBoard()

function team1() {
    team1Score += 1;
    drawScore()
}
function team2() {
    team2Score += 1;
    drawScore()
}
function team13Point() { 
    team1Score += 3;
    drawScore()
}
function team23Point() { 
    team2Score += 3;
    drawScore()
}
function resetScore1() {
    team1Score = 0
    drawScore()
}
function resetScore2() {
    team2Score = 0
    drawScore()
}


function drawScore() {
    document.getElementById("team1").innerText = team1Score
    document.getElementById("team2").innerText = team2Score
}

