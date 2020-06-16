import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  meals: any[];

  constructor() {
    this.meals = new Array(
      {
        food: "banana",
        meals: [
          {
            name: "Healthy Banana Bread!",
            ingredients: ["4 thick slices white bread", "50g butter Butter, softened", "1 large banana, peeled and sliced", "2 eggs", "85g soft, light brown sugar, plus 1 tbsp extra", "large pinch cinnamon", "450ml milk", "1 tbsp cornflour"],
            method: ["Toast the bread, spread with butter and cut each slice into 6 equal pieces. Arrange, butter side up, with the banana in a microwavable dish (approx 23cm wide by 5cm deep).", "Beat together the eggs, sugar, cinnamon and milk in a jug. In a small bowl, add the cornflour with a little of the milk, mix until smooth, then stir into the jug. Pour over the bread and banana, then sprinkle with the extra sugar. Bake, uncovered, in the microwave on High for 8-10 mins. Stand for 5 mins before serving."],
            image: "../assets/images/banana-meal1.jpg",
            url: "https://www.bbcgoodfood.com/recipes/banana-bread-butter-pudding",
            prep: "10 mins",
            difficulty: "easy",
            serving: "Serves 4",
            description: "A microwave pud that will have the family thinking you've been cooking for hours"

          },
          {
            name: "Brilliant banana loaf",
            ingredients: ["140g butter, softened, plus extra for the tin", "140g caster sugar", "2 large eggs, beaten", "140g self-raising flour", "1 tsp baking powder", "2 very ripe bananas, mashed", "50g icing sugar", "handful dried banana chips, for decoration"],
            method: ["Heat oven to 180C/160C fan/gas 4.", "Butter a 2lb loaf tin and line the base and sides with baking parchment.", "Cream 140g softened butter and 140g caster sugar until light and fluffy, then slowly add 2 beaten large eggs with a little of the 140g flour. ", "Fold in the remaining flour, 1 tsp baking powder and 2 mashed bananas.", "Pour into the tin and bake for about 30 mins until a skewer comes out clean. If your cake needs longer then keep it in the oven until it is cooked.", "Cool in the tin for 10 mins, then remove to a wire rack.", "Mix 50g icing sugar with 2-3 tsp water to make a runny icing. ", "Drizzle the icing across the top of the cake and decorate with a handful of banana chips."],
            image: "../assets/images/banana-meal2.jpg",
            url: "https://www.bbcgoodfood.com/recipes/brilliant-banana-loaf",
            prep: "15 mins",
            cook: "40 mins",
            difficulty: "easy",
            serving: "Cuts into 8-10 slices",
            description: "A cross between banana bread and a drizzle cake, this easy banana loaf recipe is a quick bake that can be frozen and is great for using up overripe bananas"
          }]
      },
      {
        food: "apple",
        meals: [
          {
            name: "Apple & blackberry crumble",
            ingredients: ["120g plain flour", "60g caster sugar", "60g unsalted butter at room temperature, cut into pieces", "300g Braeburn apple", "30g unsalted butter", "30g demerara sugar", "115g Blackberries", "¼ tsp ground cinnamon", "Vanilla ice cream, to serve"],
            method: ["Heat oven to 190C/170C fan/gas 5. Tip 120g plain flour and 60g caster sugar into a large bowl.", "Add 60g unsalted butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy.", "Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.", "Meanwhile, for the compote, peel, core and cut 300g Braeburn apples into 2cm dice.", "Put 30g unsalted butter and 30g demerara sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel.", "Stir in the apples and cook for 3 mins. Add 115g blackberries and ¼ tsp ground cinnamon, and cook for 3 mins more.", "Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.", "To serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream."],
            image: "../assets/images/apple-meal1.jpg",
            url: "",
            prep: "",
            difficulty: "",
            serving: "",
            description: ""

          },
          {
            name: "Brilliant banana loaf",
            ingredients: ["140g butter, softened, plus extra for the tin", "140g caster sugar", "2 large eggs, beaten", "140g self-raising flour", "1 tsp baking powder", "2 very ripe bananas, mashed", "50g icing sugar", "handful dried banana chips, for decoration"],
            method: ["Heat oven to 180C/160C fan/gas 4.", "Butter a 2lb loaf tin and line the base and sides with baking parchment.", "Cream 140g softened butter and 140g caster sugar until light and fluffy, then slowly add 2 beaten large eggs with a little of the 140g flour. ", "Fold in the remaining flour, 1 tsp baking powder and 2 mashed bananas.", "Pour into the tin and bake for about 30 mins until a skewer comes out clean. If your cake needs longer then keep it in the oven until it is cooked.", "Cool in the tin for 10 mins, then remove to a wire rack.", "Mix 50g icing sugar with 2-3 tsp water to make a runny icing. ", "Drizzle the icing across the top of the cake and decorate with a handful of banana chips."],
            image: "../assets/images/banana-meal2.jpg",
            url: "https://www.bbcgoodfood.com/recipes/brilliant-banana-loaf",
            prep: "15 mins",
            cook: "40 mins",
            difficulty: "easy",
            serving: "Cuts into 8-10 slices",
            description: "A cross between banana bread and a drizzle cake, this easy banana loaf recipe is a quick bake that can be frozen and is great for using up overripe bananas"
          }]
      }
      )
   }

   bringMealbyFood(foodInput: string) {
     let foodObject: any;
      for (let food of this.meals) {
        if (food.food === foodInput) {
          foodObject = food;
        }
      }
     return foodObject;
   }

}
