const fieldPlants = []

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const corn of seedObject) {
            fieldPlants.push(corn)
        }

    } else {
    
        fieldPlants.push(seedObject)

}
}

export const usePlants = () => {

    return fieldPlants.slice()

}