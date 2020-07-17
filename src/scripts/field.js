
//array of plants containing pushed seedObject
export const fieldPlants = []

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const corn of seedObject) {
            fieldPlants.push(corn)
        }

    } else {
    
        fieldPlants.push(seedObject)

}
}
//copy of fieldPlants array
export const usePlants = () => {

    return fieldPlants.slice()

}