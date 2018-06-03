const {
    getBoundedRandom,
    getRandomArrayElement,
    generateDoors
} = require('./utils')

module.exports = (totalDoorsCount) => {
    const MAX = totalDoorsCount - 1

    // STEP ONE
    // - Doors and prize
    const allDoors = generateDoors(MAX)
    const prizeDoor = getBoundedRandom(MAX)

    // - Player's and Host's Choices
    const playerChoiceStepOne = getBoundedRandom(MAX)
    const openedNonPrizeDoors = allDoors
        .filter(d => d !== prizeDoor && d !== playerChoiceStepOne)

    // STEP TWO
    // - Doors
    const remainingDoors = allDoors
        .filter(d => !openedNonPrizeDoors.includes(d))

    // - Player's Choice
    const decisivePlayerChoiceStepTwo = playerChoiceStepOne
    const undecisivePlayerChoiceStepTwo = remainingDoors
        .filter(d => d != playerChoiceStepOne)[0]
    const alwaysRandomChoice = getRandomArrayElement(remainingDoors)

    return [
        decisivePlayerChoiceStepTwo === prizeDoor,
        undecisivePlayerChoiceStepTwo === prizeDoor,
        alwaysRandomChoice === prizeDoor
    ]
}