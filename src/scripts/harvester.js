//accepts array of plants, iterates through array,
//pushes plant to seedObjectArray output or output/2 number of times


export const harvestPlants = (plantsArray) => {
    const seedObjectArray = []

    //loops through array of plants
    plantsArray.map(plant =>  {
        if (plant.type==="Corn") {
            for (let i= 0; i<plant.output / 2; i++) {
                seedObjectArray.push(plant) 
            }
        } else {
        //pushes plant to seedObjectArray plant.output number of times
        for (let i = 0; i < plant.output; i++) {
        seedObjectArray.push(plant) 
        }
    }
})
return seedObjectArray
}


