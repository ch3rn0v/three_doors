const literateSimulation = require('./literate')
const insightfulSimulation = require('./insightful')

const TOTAL_GAMES_COUNT = 27e4
const TOTAL_DOORS_COUNT = 100

const calculateWeightedResults = (runSimulation, simulationCount, doorsCount) => {
    let games = []
    for (let i = 0; i < simulationCount; i++) {
        games.push(runSimulation(doorsCount))
    }

    const totalResults = games.reduce((totalResults, gameResult) => [ totalResults[0] + gameResult[0],
        totalResults[1] + gameResult[1]], [0, 0])

    const PRECISION = 1000
    return totalResults.map(result => 100 * Math.round(result * PRECISION / TOTAL_GAMES_COUNT) / PRECISION)
}

console.log('Literate Simulation')
const literateSimulationResults = calculateWeightedResults(literateSimulation,
    TOTAL_GAMES_COUNT,
    TOTAL_DOORS_COUNT)
console.log(`Same decision won: ${literateSimulationResults[0]}%`)
console.log(`Changed decision won: ${literateSimulationResults[1]}%`)

console.log('\nInsightful Simulation')
const insightfulSimulationResults = calculateWeightedResults(insightfulSimulation,
    TOTAL_GAMES_COUNT,
    TOTAL_DOORS_COUNT)
console.log(`Same decision won: ${insightfulSimulationResults[0]}%`)
console.log(`Changed decision won: ${insightfulSimulationResults[1]}%`)