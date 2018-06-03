// In this modification the host opens all doors
// except for the one that has the prize
// and another randomly chosen door.
// (Originally the door with the prize and player's chosen
// door are left closed).

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
        .filter(d => d !== prizeDoor)

    // STEP TWO
    // - Doors
    const remainingDoors = [ prizeDoor, getRandomArrayElement(openedNonPrizeDoors) ]

    // - Player's Choice
    const undecisivePlayerChoiceStepTwo = getRandomArrayElement(
        remainingDoors.filter(d => d != playerChoiceStepOne))
    const decisivePlayerChoiceStepTwo = remainingDoors.includes(playerChoiceStepOne) ? playerChoiceStepOne : getRandomArrayElement(remainingDoors)
    const alwaysRandomChoice = getRandomArrayElement(remainingDoors)

    return [
        decisivePlayerChoiceStepTwo === prizeDoor,
        undecisivePlayerChoiceStepTwo === prizeDoor,
        alwaysRandomChoice === prizeDoor
    ]
}