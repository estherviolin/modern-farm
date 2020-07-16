export const catalog = (harvestedFoodArr) => {
    for (const foodObj of harvestedFoodArr) {
        const contentElement = document.querySelector(".container")
        contentElement.innerHTML += `
        <section class="plant">
            ${foodObj.type}
        </section>
        `
    }
}