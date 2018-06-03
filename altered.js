// In this modification the host opens all doors
// except for the one that has the prize
// and another randomly chosen door.
// (Originally the door with the prize and player's chosen
// door are left closed).

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
        .filter(d => d !== prizeDoor)

    // STEP TWO
    // - Doors
    const remainingDoors = allDoors
        .filter(d => !openedNonPrizeDoors.includes(d))
    remainingDoors.push(openedNonPrizeDoors[getBoundedRandom(openedNonPrizeDoors.length-1)])

    // - Player's Choice
    const undecisivePlayerChoiceStepTwo = remainingDoors
        .filter(d => d != playerChoiceStepOne)[getBoundedRandom(remainingDoors.length-1)]
    const decisivePlayerChoiceStepTwo = remainingDoors.includes(playerChoiceStepOne) ? playerChoiceStepOne : remainingDoors[getBoundedRandom(remainingDoors.length-1)]
    const alwaysRandomChoice = remainingDoors[
        getBoundedRandom(remainingDoors.length - 1)
    ]

    return [
        decisivePlayerChoiceStepTwo === prizeDoor,
        undecisivePlayerChoiceStepTwo === prizeDoor,
        alwaysRandomChoice === prizeDoor
    ]
}