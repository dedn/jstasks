const competitions = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
]

result = [0,0,1]
//if 1 hometeam won if 0 away teamwon.
//  first team with 0 index  from array competitions it's home team 'HTML', 'C#','PYTHON'


const HOME_TEAM_WON =1

function tournamentWinner(competitions, results) {
    let currentBestTeam = ''
    const scores = {[currentBestTeam]: 0}
    console.log('scores ', scores )
    for (let index = 0; index < competitions.length; index++) {
        const result = results[index]
        console.log('competitions[index]', competitions[index])
        const [homeTeam, awayTeam] = competitions[index]
        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam
        updateScores(winningTeam, 3, scores)

        if(scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam
        }

    }
    return currentBestTeam;
}

function updateScores(team, points, scores) {
    if(!(team in scores)) scores[team] = 0
    scores[team] += points
}


console.log(tournamentWinner(competitions, result))



