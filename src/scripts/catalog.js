//loops through objects in harvested food array and turns into HTML

// export const catalog = (harvestedFoodArr) => {
//     for (const foodObj of harvestedFoodArr) {
//         const contentElement = document.querySelector(".container")
//         contentElement.innerHTML += `
//         <section class="plant">
//             ${foodObj.type}
//         </section>
//         `
//     }
// }

export const catalog = (harvestedFoodArr) => {
    for (const foodObj of harvestedFoodArr) {
        const contentElement = document.querySelector(".container")
        contentElement.innerHTML += `
        <section class="plant">
            ${harvestedFoodArr.map(foodObj => foodObj.type)}
        </section>
        `
    }
}