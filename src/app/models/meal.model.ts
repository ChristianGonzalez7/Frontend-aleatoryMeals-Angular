export class Meal {

    mealId: Number; 
    name: String;
    ingredients: String;
    method: String;
    image: String;
    url: String;
    prep: String;
    difficulty: String;
    serving: String;
    description: String;
    foodId: Number;

    constructor (mealId: Number, 
        name: String, 
        ingredients: String, 
        method: String, 
        image: String, 
        url: String, 
        prep: String,
        difficulty: String,
        serving: String, 
        description: String, 
        foodId: Number
        ) {
            this.mealId = mealId,
            this.name = name,
            this.ingredients = ingredients,
            this.method = method,
            this.image = image,
            this.url = url,
            this.prep = prep,
            this.difficulty = difficulty,
            this.serving = serving,
            this.description = description,
            this.foodId = foodId
        }
}