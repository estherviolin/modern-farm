console.log("Welcome to the main module")

import {createPlan} from "./plan.js"
import {usePlants} from "./field.js"
import {plantSeeds} from "./tractor.js"
import {harvestPlants} from "./harvester.js"
import {catalog} from "./catalog.js"

//array of arrays
const yearlyPlan = createPlan()
// console.log(yearlyPlan)

//plants arrays
plantSeeds(yearlyPlan)

//array of seedObjects
const arrOfPlants = usePlants()

//array of seedObjects planted output number of times
const harvestedFood = harvestPlants(arrOfPlants)

console.log(harvestedFood)

catalog(harvestedFood)

