module.exports = (totalDoorsCount) => {
    const MAX = totalDoorsCount - 1
    const getBoundedRandom = (max) => Math.round(Math.random() * max)

    // STEP ONE
    // - Doors and prize
    const prizeDoor = getBoundedRandom(MAX)

    // - Player's and Host's Choices
    const playerChoiceStepOne = getBoundedRandom(MAX)

    // STEP TWO
    // - Player's Choice
    const decisivePlayerChoiceStepTwo = playerChoiceStepOne
    const alwaysRandomChoice = [-1, prizeDoor][
        getBoundedRandom(1)
    ]
    
    return [
        decisivePlayerChoiceStepTwo === prizeDoor,
        decisivePlayerChoiceStepTwo !== prizeDoor,
        alwaysRandomChoice === prizeDoor
     ]
}