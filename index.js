const literateSimulation = require('./literate')
const insightfulSimulation = require('./insightful')
const alteredSimulation = require('./altered')

const TOTAL_GAMES_COUNT = 27e4
const TOTAL_DOORS_COUNT = 100

const calculateWeightedResults = (runSimulation,
    simulationCount,
    doorsCount) => {
    let games = []
    for (let i = 0; i < simulationCount; i++) {
        games.push(runSimulation(doorsCount))
    }

    const totalResults = games.reduce((totalResults, gameResult) => [
        totalResults[0] + gameResult[0],
        totalResults[1] + gameResult[1],
        totalResults[2] + gameResult[2]
    ], [0, 0, 0])

    const PRECISION = 1000
    return totalResults.map(result => 100 * Math.round(result * PRECISION / TOTAL_GAMES_COUNT) / PRECISION)
}

const printSimulationResults = (
    simulationTitle,
    simulation,
    TOTAL_GAMES_COUNT,
    TOTAL_DOORS_COUNT) => {
    console.log('\n', simulationTitle)
    const simulationResults = calculateWeightedResults(simulation,
        TOTAL_GAMES_COUNT,
        TOTAL_DOORS_COUNT)
    console.log(`Same decision won: ${simulationResults[0]}%`)
    console.log(`Changed decision won: ${simulationResults[1]}%`)
    console.log(`Always random decision won: ${simulationResults[2]}%`)
}

printSimulationResults(
    'Literate Simulation',
    literateSimulation,
    TOTAL_GAMES_COUNT,
    TOTAL_DOORS_COUNT)
printSimulationResults(
    'Insightful Simulation',
    insightfulSimulation,
    TOTAL_GAMES_COUNT,
    TOTAL_DOORS_COUNT)
printSimulationResults(
    'Altered Simulation',
    alteredSimulation,
    TOTAL_GAMES_COUNT,
    TOTAL_DOORS_COUNT)