const calculateWeightedResults = (
    runSimulation,
    simulationCount,
    doorsCount,
) => {
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
    return totalResults.map(result => 100 * Math.round(result * PRECISION / simulationCount) / PRECISION)
}

const getBoundedRandom = (max) => Math.round(Math.random() * max)
const getRandomArrayElement = (array) => array[getBoundedRandom(array.length - 1)]
const generateDoors = (totalDoorsCount) => [...Array(totalDoorsCount).keys()]
const printSimulationResults = (
    simulationTitle,
    simulation,
    TOTAL_GAMES_COUNT,
    TOTAL_DOORS_COUNT,
) => {
    console.log('\n', simulationTitle)
    const simulationResults = calculateWeightedResults(
        simulation,
        TOTAL_GAMES_COUNT,
        TOTAL_DOORS_COUNT
    )
    console.log(`Same decision won: ${simulationResults[0]}%`)
    console.log(`Changed decision won: ${simulationResults[1]}%`)
    console.log(`Always random decision won: ${simulationResults[2]}%`)
}

module.exports = {
    getBoundedRandom,
    getRandomArrayElement,
    generateDoors,
    printSimulationResults,
};