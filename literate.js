module.exports = (totalDoorsCount) => {
    const MAX = totalDoorsCount - 1
    const getBoundedRandom = (max) => Math.round(Math.random() * max)
    const generateDoors = (totalDoorsCount) => {
        let doors = []
        for (let i = 0; i <= totalDoorsCount; i++) {
            doors.push(i)
        }
        return doors
    }

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

    return [ decisivePlayerChoiceStepTwo === prizeDoor,
        undecisivePlayerChoiceStepTwo === prizeDoor ]
}