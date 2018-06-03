const {
    getBoundedRandom,
    getRandomArrayElement
} = require('./utils')

module.exports = (totalDoorsCount) => {
    const MAX = totalDoorsCount - 1

    // STEP ONE
    // - Doors and prize
    const prizeDoor = getBoundedRandom(MAX)

    // - Player's and Host's Choices
    const playerChoiceStepOne = getBoundedRandom(MAX)

    // STEP TWO
    // - Player's Choice
    const decisivePlayerChoiceStepTwo = playerChoiceStepOne
    const alwaysRandomChoice = getRandomArrayElement([-1, prizeDoor])
    
    return [
        decisivePlayerChoiceStepTwo === prizeDoor,
        decisivePlayerChoiceStepTwo !== prizeDoor,
        alwaysRandomChoice === prizeDoor
     ]
}