const literateSimulation = require('./literate')
const insightfulSimulation = require('./insightful')
const alteredSimulation = require('./altered')
const { printSimulationResults } = require('./utils')

const TOTAL_GAMES_COUNT = 27e3
const TOTAL_DOORS_COUNT = 100

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