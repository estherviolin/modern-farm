import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import {addPlant} from "./field.js"

//function that accepts a plan array, 
// loops through the rows
// loops through plants of the rows
// returns the seedObject
// adds plant to fieldPlants array

export const plantSeeds = (yearPlanArray) => {

    // loops through plan array
    for (const rowArray of yearPlanArray) {

    //loops through plant of rowArray
    for (const plant of rowArray) {

    // conditionals for each seed
    if (plant==="Asparagus") {
        addPlant(createAsparagus())
    }
    else if (plant==="Corn") {
        addPlant(createCorn())
    }
    else if (plant==="Potato") {
        addPlant(createPotato())
    }
    else if (plant==="Soybean") {
        addPlant(createSoybean())
    }
    else if (plant==="Sunflower") {
        addPlant(createSunflower())
    }
    else if (plant==="Wheat") {
        addPlant(createWheat())
    }

    }
}
}
