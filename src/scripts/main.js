console.log("Welcome to the main module")

import {createPlan} from "./plan.js"
import {usePlants} from "./field.js"
import {plantSeeds} from "./tractor.js"
import {harvestPlants} from "./harverster.js"
import {catalog} from "./catalog.js"

//array of arrays
const yearlyPlan = createPlan()
// console.log(yearlyPlan)

//plants arrays
plantSeeds(yearlyPlan)

const arrOfPlants = usePlants()

const harvestedFood = harvestPlants(arrOfPlants)

console.log(harvestedFood)

catalog(harvestedFood)

