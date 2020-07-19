
//array of plants containing pushed seedObjects
export const fieldPlants = []

//function to loop through array of seedObjects and return fieldPlants array
export const addPlant = (seedObject) => {
    //function to loop through corn array and push both times
    if (Array.isArray(seedObject)) {
        for (const corn of seedObject) {
            fieldPlants.push(corn)
        }

    } else {
        //all other plants
        fieldPlants.push(seedObject)

}
}
//function to copy of fieldPlants array
export const usePlants = () => {

    return fieldPlants.slice()

}