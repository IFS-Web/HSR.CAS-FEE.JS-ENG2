/**
 * Food storage facilities which persists and loads DTOs/POJOs (data transfer objects).
 * This logic represents the data layer/driver for the Zoo application.
 */

// TODO: Step 2
//  - Create class FoodStorage; use 'new FoodStorage()' instead of 'createStorage()'.
// TODO: Step 3
//  - Use ES2015 module syntax: Export class FoodStorage.
function createStorage() {
    const food = JSON.parse(localStorage.getItem('foodStorage_v1') || "[ ]");
    localStorage.setItem('foodStorage_v1', JSON.stringify(food));

    return {
        food,
        getAll() {
            return food;
        },
        update(food) {
            localStorage.setItem('foodStorage_v1', JSON.stringify(food));
            return food;
        }
    };
}
