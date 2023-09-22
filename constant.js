export const categories = ['All', 'Calorie Smart', 'Monde', 'Pasta', 'Meat','Veggie', 'Fish', 'Dessert', ];

export const recipes = [
    {
      title: "Risotto crémeux au fenouil & à la saucisse",
      subtitle: "avec du mascarpone & du fromage râpé",
      description: "Le risotto se prépare avec amour et attention. En remuant constamment, les grains de riz sont tous parfaitement cuits et l'amidon est libéré, ce qui donne à ce plat son crémeux et son moelleux. De plus, le fait de retirer la chair de la saucisse pour la faire dorer à la poêle donne à ce risotto un goût savoureux et légèrement fumé.",
      course: ["Meat", 'Calorie Smart'],
      difficulty: "Difficile",
      allergy: "Lait (contient du lactose)",
      preparationTime: "30 mins",
      kcal: "200",
      ingredients: ["1 Oignon","1 Gousse d'ail","1 Fenouil","2 Saucisse de Toulouse", "Fenouil moulu","150g Riz pour risotto","50g Mascarpone","25g Tomme râpée"],
      steps: [
        {
          image: require('./img/recipe/fenouil.png'),
          text: "Couper l’oignon en fines demi-lunes. Ciselez l'ail..."
        },
        {
          image: require('./img/recipe/fenouil.png'),
          text: "In a separate pan, fry guanciale until crispy."
        },
      ]
    },
    {
      title: "Dac Bulgogi : poulet à la coréenne",
      subtitle: "avec du pak choï & des graines de sésame",
      description: "Découvrez les saveurs de la Corée du Sud avec ce plat traditionnel de poulet mariné, le Dak Bulgogi. Accompagnée de riz basmati et de pak choï, cette version saura ravir vos papilles avec sa touche sucrée-salée et sa viande tendre et savoureuse.",
      course: ["Meat", 'Monde', "Coréen"],
      difficulty: "Intermédiaire",
      allergy: "Graines de sésame • Blé • Soja • Céleri • Anhydride sulfureux • sulfites • Arachides • Fruits à coque",
      preparationTime: "30 min",
      kcal: "649",
      ingredients: ["1 Oignon","1 Gousse d'ail","½ Gingembre","2 Filet de poulet", "1 Pak choï","150g Riz","20ml Huile de sésame","Sauce asiatique sucrée", "10g Graines de sésame", "Sel", "Poivre", "Huile"],
      image: require('./img/recipe_img/Bulgogi.png'),
      image_round: require('./img/recipe_img/Bulbogi_Rond.png'),
      steps: [
        {
          image: require('./img/recipe_img/1_Bulgogi.png'),
          text: ["Veillez à bien respecter les quantités indiquées à gauche pour préparer votre recette !","Portez une casserole d'eau à ébullition pour le riz.","Ciselez l'ail et l'oignon. Râpez le gingembre (ça pique ! Dosez-le selon votre goût).","Retirez l’extrémité de la tige du pak choï, ciselez un peu de vert pour le dressage, puis coupez le reste en lanières de 1 cm.","Coupez le poulet en petits dés de 1 cm."]
        },

        {
          image: require('./img/recipe_img/rice.png'),
          text: ["Faites cuire le riz 12-14 min dans la casserole.","Égouttez-le et réservez-le à couvert jusqu'au service.",]
        },
        {
          image: require('./img/recipe_img/poulet.png'),
          text: ["Faites chauffer un mince filet d'huile de tournesol dans un wok ou une sauteuse à feu moyen-vif.","Quand l'huile est bien chaude, faites-y revenir le poulet de tous les côtés 4-5 min avec le gingembre (selon votre goût), ou jusqu'à ce qu'il soit bien coloré et cuit à cœur.","Réservez la viande hors de la sauteuse."]
        },
        {
          image: require('./img/recipe_img/4_Bulgogi.png'),
          text: ["Remettez un filet d'huile de tournesol dans la sauteuse à feu moyen-vif, puis ajoutez-y l'oignon et le pak choï. Faites revenir les légumes 2-3 min.","Ajoutez l'ail et un filet d'eau. Poursuivez la cuisson de 6-8 min à feu moyen et à couvert en remuant régulièrement, ou jusqu'à ce que les légumes soient fondants."]
        },
        {
          image: require('./img/recipe_img/5_Bulgogi.png'),
          text: ["Ajoutez enfin l'huile de sésame et le poulet, puis déglacez en versant la sauce asiatique sucrée.", "Mélangez 1 min pour enrober le tout. Salez légèrement et poivrez."]
        },
        {
          image: require('./img/recipe_img/6_Bulgogi.png'),
          text: ["Servez d'abord le riz dans les assiettes.",
          "Ajoutez par-dessus le poulet et les légumes en sauce.",
          "Saupoudrez des graines de sésame et du vert de pak choï."]
        },
      ]
    },
    {
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish with creamy sauce.",
        course: ["Pasta", "Veggie", ],
        preparationTime: "30 mins",
        kcal: "450",
        ingredients: ["150g Riz pour risotto","50g Mascarpone","25g Tomme râpée"],
        steps: [
          "Cook spaghetti in boiling salted water until al dente.",
          "In a separate pan, fry guanciale until crispy.",
          "Whisk eggs and mix in Pecorino cheese.",
          "Drain cooked spaghetti and add egg mixture, stirring quickly.",
          "Mix in guanciale and season with black pepper.",
          "Serve immediately."
        ]
      },
      {
        title: "Greek Salad",
        description: "A fresh and healthy Mediterranean salad.",
        course: ["Veggie", "Pasta", "Salad"],
        preparationTime: "15 mins",
        kcal: "200",
        ingredients: "1 cucumber, 3 tomatoes, 1 red onion, 200g feta cheese, Kalamata olives, Olive oil, Red wine vinegar, Oregano, Salt, Black pepper",
        steps: [
          "Chop cucumber, tomatoes, and red onion into bite-sized pieces.",
          "Crumble feta cheese and add to the salad.",
          "Add Kalamata olives.",
          "Drizzle olive oil and red wine vinegar over the salad.",
          "Season with oregano, salt, and black pepper to taste.",
          "Toss gently and serve."
        ]
      },
      {
        title: "Chicken Tikka Masala",
        description: "A flavorful Indian curry dish with tender chicken.",
        course: ["World", "Meat"],
        preparationTime: "45 mins",
        kcal: "550",
        ingredients: "500g boneless chicken, 1 cup plain yogurt, 2 tbsp ginger-garlic paste, 2 tbsp tikka masala spice mix, Salt, Vegetable oil, 1 onion, 1 bell pepper, 1 can diced tomatoes, 1/2 cup heavy cream, Fresh cilantro leaves",
        steps: [
          "Marinate chicken in yogurt, ginger-garlic paste, tikka masala spice mix, and salt for 1 hour.",
          "Heat oil in a pan and cook marinated chicken until browned.",
          "Remove chicken from the pan and set aside.",
          "In the same pan, sauté chopped onion and bell pepper.",
          "Add diced tomatoes and cook until softened.",
          "Blend the tomato mixture into a smooth sauce.",
          "Return chicken to the pan and simmer in the sauce.",
          "Stir in heavy cream and garnish with cilantro leaves.",
          "Serve with rice or naan."
        ]
      },
      {
        title: "Chocolate Cake",
        description: "A decadent chocolate cake for dessert lovers.",
        course: ["Dessert"],
        preparationTime: "60 mins",
        kcal: "350",
        ingredients: "1 3/4 cups all-purpose flour, 1 1/2 cups granulated sugar, 3/4 cup unsweetened cocoa powder, 1 1/2 tsp baking powder, 1 1/2 tsp baking soda, 1 tsp salt, 2 eggs, 1 cup milk, 1/2 cup vegetable oil, 2 tsp vanilla extract, 1 cup boiling water, 1/2 cup butter, 1 cup semi-sweet chocolate chips",
        steps: [
          "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
          "In a large bowl, whisk together flour, sugar, cocoa powder, baking powder, baking soda, and salt.",
          "Add eggs, milk, oil, and vanilla extract. Beat on medium speed for 2 minutes.",
          "Stir in boiling water until the batter is smooth (the batter will be thin).",
          "Pour evenly into prepared pans.",
          "Bake for 30 to 35 minutes, or until a toothpick inserted into the center comes out clean.",
          "Remove cakes from oven and let cool in pans for 10 minutes. Then, remove from pans and let cool completely on a wire rack.",
          "In a small saucepan, melt butter and chocolate chips over low heat until smooth.",
          "Spread the chocolate mixture between the cake layers and over the top of the cake.",
          "Enjoy your delicious chocolate cake!"
        ]
      }
  ];
