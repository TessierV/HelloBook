export const categories = ['All', 'Sain', "<30min", 'Pasta', 'Viande','Veggie', 'Fish', 'Dessert', ];

export const categories_World = ['Asie','Thaïlande', 'Corée', "Chine", "Japon",'Am.latine','France', 'Italie','Orient', 'Africain' ];

export const categoryImages = {
  All: require('./img/menu_icon/menu_uncolor.png'),
  'Sain': require('./img/menu_icon/salad_uncolor.png'),
  '<30min' : require('./img/menu_icon/clock_uncolor.png'),
  Pasta: require('./img/menu_icon/penne_uncolor.png'),
  Veggie: require('./img/menu_icon/vegetables_uncolor.png'),
  Fish: require('./img/menu_icon/fish_uncolor.png'),
  Viande: require('./img/menu_icon/meat_uncolor.png'),
  Dessert: require('./img/menu_icon/dessert_uncolor.png'),
  Chine: require('./img/menu_icon/chine_uncolor.png'),
  'Am.latine': require('./img/menu_icon/Americalatine_uncolor.png'),
  'Asie': require('./img/menu_icon/asia_uncolor.png'),
  'Orient': require('./img/menu_icon/orient_uncolor.png'),
  'Africain': require('./img/menu_icon/african_uncolor.png'),
  Thaïlande: require('./img/menu_icon/thailande_uncolor.png'),
  Corée: require('./img/menu_icon/korea_uncolor.png'),
  Japon: require('./img/menu_icon/japan_uncolor.png'),
  France: require('./img/menu_icon/french_uncolor.png'),
  Italie: require('./img/menu_icon/colisee_uncolor.png'),

};

export const selectedCategoryImages = {
  All: require('./img/menu_icon/menu_color.png'),
  'Sain': require('./img/menu_icon/salad_color.png'),
  '<30min' : require('./img/menu_icon/clock_color.png'),

  Pasta: require('./img/menu_icon/penne_color.png'),
  Veggie: require('./img/menu_icon/vegetables_color.png'),
  Fish: require('./img/menu_icon/fish_color.png'),
  Viande: require('./img/menu_icon/meat_color.png'),
  Dessert: require('./img/menu_icon/dessert_color.png'),

  Thaïlande: require('./img/menu_icon/thailande_color.png'),
  Corée: require('./img/menu_icon/korea_color.png'),
  Chine: require('./img/menu_icon/chine_color.png'),
  Japon: require('./img/menu_icon/japan_color.png'),
  France: require('./img/menu_icon/french_color.png'),
  Italie: require('./img/menu_icon/colisee_color.png'),
  'Am.latine': require('./img/menu_icon/Americalatine_color.png'),
  'Asie': require('./img/menu_icon/asia_color.png'),
  'Orient': require('./img/menu_icon/orient_color.png'),
  'Africain': require('./img/menu_icon/african_color.png'),
};

export const recipes = [
  {
    title: "Nouilles au bœuf sauté à la thaï",
    subtitle: "avec du piment & de la cébette",
    description: "Envie de voyager sans pour autant passer des heures dans l’avion ? Direction la Thaïlande avec ce plat de nouilles pour lequel vous distinguerez aisément les marqueurs de cette région du monde ! Sautées avec de la cébette ainsi que de la carotte et assaisonnées de piment, de sauce soja et de citron vert, ces nouilles vous garantissent un embarquement immédiat en quelques minutes de cuisine !",
    course: ["Asie","Viande", "Thaïlande",'Épicé',"<30min" ],
    difficulty: "Intermédaire",
    allergy: "Graines de sésame • Gluten • Blé • Soja",
    preparationTime: "25 min",
    kcal: "799",
    ingredients: ["1 Gousse(s) d'ail", "1 Carotte(s)","½ Piment", "200g Nouilles de blé", "200g Viande hachée au bœuf", "2 Cébette(s)", "1 Citron(s)", "20ml Sauce soja","Sauce asiatique sucrée","Cacahuètes non salées","Huile de tournesol","Sel", "Poivre"],
    image: require('./img/recipe_img/nouille_thai.png'),
    image_round: require('./img/recipe_img/nouille_thai_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/1_nouille_thai.png'),
        text: ["Portez une grande casserole d'eau salée à ébullition.",
        "Faites-y cuire les nouilles 2-3 min.","Égouttez-les et rincez-les à l'eau froide, puis remuez-les pour éviter qu'elles ne collent entre elles. Réservez-les.",
        "Pendant ce temps, épluchez et coupez la carotte en dés de 5 mm. Ciselez l'ail.",
        "Ciselez séparément le blanc et le vert de la cébette.","Épépinez et émincez le piment."]
      },
      {
        image: require('./img/recipe_img/2_nouille_thai.png'),
        text: ["Faites chauffer un filet d'huile de tournesol dans un wok ou une sauteuse.","Faites-y revenir l'ail, le blanc de la cébette et la carotte 3-5 min à feu moyen-vif.",
        "Pendant ce temps, concassez les cacahuètes.",
        "Coupez le citron vert en quartiers.","Effeuillez et ciselez les herbes.",]
      },
      {
        image: require('./img/recipe_img/3_nouille_thai.png'),
        text: ["Ajoutez le piment et la viande hachée au wok.","Faites sauter le tout 2-3 min à feu moyen-vif et émiettez la viande hachée avec une spatule.",
        "Ajoutez la sauce soja et la sauce asiatique sucrée.","Laissez réduire 1-2 min supplémentaires."]
      },

      {
        image: require('./img/recipe_img/4_nouille_thai.png'),
        text: ["Ajoutez les nouilles au wok et mélangez bien en faisant sauter le tout 1-2 min.",
        "Servez-les dans les assiettes, garnissez de cacahuètes, d'herbes fraîches et du vert de la cébette.",
        "Pressez le jus de ¼ de citron vert par personne par-dessus. Poivrez selon votre goût.",]
      },
    ]
  },
  {
    title: "Wok de légumes en sauce & graines de sésame",
    subtitle: "avec un bol de riz parfumé au gingembre",
    description: "Issue d’une fusion entre la cuisine italienne et la cuisine indienne, la pizza naan est une tendance culinaire à tester sans plus tarder ! Nous vous proposons de réaliser aujourd’hui une version de ce plat avec du bœuf, de délicieuses courgettes poêlées et du gouda fondu sur ce pain traditionnel indien qu’est le naan. Gourmande et rapide, cette recette se décline ensuite à l’infini !",
    course: ["Asie","Veggie", "Sain","<30min" ],
    difficulty: "Intermédaire",
    allergy: "Graines de sésame • Gluten • Blé • Soja",
    preparationTime: "20 min",
    kcal: "622",
    ingredients: ["1 Gousse(s) d'ail", "1 Carotte(s)","½ Gingembre", "75g de Riz", "30g Poivrons grillés", "2 Portobello(s)", "1 Cébette(s)", "10ml Huile de sésame","Graines de sésame","Sauce asiatique sucrée","Huile de tournesol", "Vinaigre de vin blanc","Sel", "Poivre"],
    image: require('./img/recipe_img/wok_veggie.png'),
    image_round: require('./img/recipe_img/wok_veggie_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/1_wok_veggie.png'),
        text: ["Portez une casserole d'eau salée à ébullition pour le riz.",
        "Ciselez l'ail et râpez le gingembre.",
        "Épluchez et coupez les carottes en fines demi-lunes.",
        "Coupez les portobellos et les poivrons grillés en tranches.",
        "Coupez la cébette en 4 tronçons et émincez la partie la plus verte."]
      },
      {
        image: require('./img/recipe_img/rice.png'),
        text: ["Faites cuire le riz 12-14 min dans la casserole, puis égouttez-le.",
        "Mélangez-le avec la moitié de l'huile de sésame et du gingembre.","Salez, poivrez et réservez à couvert.",
        "Pendant ce temps, dans un bol, mélangez la sauce asiatique sucrée avec le reste d'huile de sésame et 1 cs d'eau par personne.",
        "Ajoutez la moitié des graines de sésame.",]
      },

      {
        image: require('./img/recipe_img/3_wok_veggie.png'),
        text: ["Faites chauffer un généreux filet d'huile de tournesol dans un wok ou une sauteuse à feu vif.",
        "Ajoutez-y l'ail, le reste de gingembre et tous les légumes sauf la partie émincée de la cébette.",
        "Faites-les sauter 8-10 min en remuant très régulièrement.",
        "Ajoutez le vinaigre balsamique blanc et remuez."]
      },

      {
        image: require('./img/recipe_img/4_wok_veggie.png'),
        text: ["Coupez le feu sous le wok. Déglacez les légumes avec la sauce du bol et mélangez 1-2 min, ou jusqu'à ce qu'ils soient bien enrobés.",
        "Servez le riz au gingembre dans les assiettes.",
        "Accompagnez-le des légumes sautés. Rectifiez l'assaisonnement selon votre goût.",
        "Saupoudrez du vert émincé de la cébette et des graines de sésame restantes.",]
      },
    ]
  },
  {
    title: "Pizza naan au bœuf, courgette & gouda",
    subtitle: "avec des épices italiennes & une salade",
    description: "Issue d’une fusion entre la cuisine italienne et la cuisine indienne, la pizza naan est une tendance culinaire à tester sans plus tarder ! Nous vous proposons de réaliser aujourd’hui une version de ce plat avec du bœuf, de délicieuses courgettes poêlées et du gouda fondu sur ce pain traditionnel indien qu’est le naan. Gourmande et rapide, cette recette se décline ensuite à l’infini !",
    course: ["Street-Food", "Pizza", "Viande", ],
    difficulty: "Facile",
    allergy: "Gluten • Blé • Lait",
    preparationTime: "20 min",
    kcal: "798",
    ingredients: ["2 Naan(s)", "1 Courgette(s)","200g Viande hachée au bœuf", "100g Chair de tomates", "50g Gouda vieux râpé", "Épices italiennes", "60g Salade", "1cc Moutarde","1cs Vinaigre balsamique","Huile d'olive", "Sel", "Poivre"],
    image: require('./img/recipe_img/pizza_naan_beef.png'),
    image_round: require('./img/recipe_img/pizza_naan_beef_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/1_pizza_naan_beef.png'),
        text: ["Préchauffez le four à 230°C (210°C chaleur tournante).",
        "Coupez la courgette en dés de 5 mm."]
      },
      {
        image: require('./img/recipe_img/2_pizza_naan_beef.png'),
        text: ["Faites chauffer un filet d’huile d’olive dans une poêle à feu moyen-vif.",
        "Faites-y revenir la courgette, le bœuf haché et ½ cc d'épices italiennes par personne 5-7 min.","La viande ne doit plus être rosée et la courgette presque cuite.",
        "Émiettez la viande avec une spatule et remuez régulièrement.",
        "Salez, poivrez et réservez.",]
      },

      {
        image: require('./img/recipe_img/3_pizza_naan_beef.png'),
        text: ["Placez les naans sur une plaque recouverte de papier sulfurisé.",
        "Étalez la chair de tomates sur les naans en laissant un bord de 5 mm.","Placez dessus la courgette et le bœuf haché.","Saupoudrez de gouda et de ½ cc d'épices italiennes par personne.","Salez et poivrez. Ajoutez un filet d'huile d'olive.",
        "Enfournez le tout 6-10 min dans la partie haute du four, ou jusqu’à ce que le gouda soit fondu et gratiné."]
      },

      {
        image: require('./img/recipe_img/4_pizza_naan_beef.png'),
        text: ["Pendant que la pizza cuit, faites une vinaigrette en mélangeant dans un saladier un peu de moutarde avec de l’huile d’olive et du vinaigre balsamique.","Salez et poivrez.",
        "Juste avant de servir, ajoutez la salade et mélangez bien.",
        "Coupez chaque pizza en parts et servez-les dans les assiettes.","Servez la salade à côté.",]
      },
    ]
  },
  {
    title: "Brunch : Tarte saumon fumé & crème ciboulette",
    subtitle: "4-6 portions",
    description: "On ne vous présente plus la tarte au saumon fumé, emblème des recettes simples et rapides. Elle est accompagnée d'une salade, d'un yaourt et de kiwi frais, ce qui en fait un véritable repas !",
    course: ["France", "Brunch", "Poisson", "Tarte-Salée"],
    difficulty: "Facile",
    allergy: "Gluten • Blé • Lait • Poisson",
    preparationTime: "40 min",
    kcal: "1626",
    ingredients: ["2 Pâte à tarte", "1 Citron(s)","½ sachets Ciboulette","200g Saumon fumé", "2 Kiwi(s)", "200g Yaourt à la grecque", "200g Crème épaisse", "60g Salade", "1cc Moutarde", "1cs Vinaigre balsamique","Huile d'olive", "Sel", "Poivre"],
    image: require('./img/recipe_img/salmon_tart.png'),
    image_round: require('./img/recipe_img/salmon_tart_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/1_salmon_tart.png'),
        text: ["Préchauffez le four à 210°C (190°C chaleur tournante).",
        "Déroulez les pâtes, puis placez-les sur 2 plaques recouvertes de papier sulfurisé.","Piquez-les avec une fourchette.",
        "Enfournez-les 3-5 min pour les cuire à blanc, puis réservez-les hors du four."]
      },
      {
        image: require('./img/recipe_img/2_salmon_tart.png'),
        text: ["Pendant que les pâtes cuisent à blanc, lavez bien le citron et prélevez-en le zeste avec une râpe fine, puis coupez-le en quartiers.","Ciselez la ciboulette.",
        "Dans un bol, mélangez la crème avec la moutarde, une pincée de zestes de citron, la ciboulette, ainsi que du sel et du poivre.",
        "Étalez ce mélange sur les pâtes, puis garnissez-les en déchirant grossièrement les morceaux de saumon par-dessus.",
        "Enfournez les tartes 15-20 min, ou jusqu’à ce qu’elles soient bien dorées.",]
      },

      {
        image: require('./img/recipe_img/3_salmon_tart.png'),
        text: ["Pendant ce temps, épluchez et coupez les kiwis en petits dés.",
        "Dans un saladier, faites une vinaigrette en mélangeant un filet d’huile d’olive et de vinaigre avec du sel et du poivre.",
        "Ajoutez la salade au moment de servir."]
      },

      {
        image: require('./img/recipe_img/4_salmon_tart.png'),
        text: ["Coupez les tartes en parts et servez-les avec la salade à côté.", "Pressez quelques gouttes de jus de citron par-dessus si vous le souhaitez.",
        "Placez le yaourt dans des bols, sucrez-le avec du miel ou du sucre et répartissez le kiwi par-dessus.",]
      },
    ]
  },
  {
    title: "Poulet à la sauce forestière",
    subtitle: "avec du riz & du poireau",
    description: "Les choses les plus simples sont souvent les meilleures, et ce poulet sauce forestière accompagné de riz et de poireau ne va pas faire mentir le proverbe ! Prête en une petite demi-heure, cette recette se déguste aussi bien en solo, qu’en duo ou en famille.",
    course: ["France", "Viande",],
    difficulty: "Intermédiaire",
    allergy: "Graines de sésame • Lait ",
    preparationTime: "35 min",
    kcal: "733",
    ingredients: ["250g Champignon(s) de Paris", "1 Poireau(x)","150g de Riz","Gomasio", "200ml Crème liquide", "200g Blanc de poulet", "Origan séché", "Cube de bouillon de volaille", "Huile d'olive", "Sel", "Poivre"],
    image: require('./img/recipe_img/chicken_forest.png'),
    image_round: require('./img/recipe_img/chicken_forest_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/rice.png'),
        text: ["Faites cuire le riz 12-14 min dans la casserole.",
        "Égouttez-le et réservez-le sans couvercle."]
      },
      {
        image: require('./img/recipe_img/1_chicken_forest.png'),
        text: ["Portez une grande casserole d'eau salée à ébullition pour le riz.", "Émiettez ¼ de cube de bouillon par personne au-dessus.",
        "Nettoyez les champignons avec un essuie-tout humide, puis coupez-les en quartiers.",
        "Coupez le poireau en deux dans l'épaisseur, lavez-le bien et coupez-le en demi-lunes.",
        "Recoupez le poulet en plus petits dés.",]
      },

      {
        image: require('./img/recipe_img/3_chicken_forest.png'),
        text: ["En attendant, faites chauffer un filet d'huile d'olive dans une poêle. Faites-y revenir les champignons et le poireau 4-6 min.",
        "Salez et poivrez.","Remuez régulièrement."]
      },

      {
        image: require('./img/recipe_img/4_chicken_forest.png'),
        text: ["Pendant ce temps, saupoudrez les dés de poulet avec 1 cc de gomasio et 1 cc d'origan séché par personne, puis mélangez.",
        "Faites chauffer un filet d'huile d'olive dans une autre poêle à feu moyen.",
        "Faites-y dorer les dés de poulet 1-2 min sur toutes les faces : ils ne doivent pas être totalement cuits à ce stade.",]
      },
      {
        image: require('./img/recipe_img/5_chicken_forest.png'),
        text: ["Ajoutez les champignons, le poireau et la crème à la poêle contenant le poulet. Couvrez et laissez cuire 2-3 min.","Salez et poivrez.","Ôtez le couvercle et faites cuire 2-4 min de plus, ou jusqu'à ce que le poulet ne soit plus rosé à cœur et que la sauce réduise.",]
      },
      {
        image: require('./img/recipe_img/6_chicken_forest.png'),
        text: ["Servez le riz dans les assiettes et placez le poulet par-dessus.","Nappez le tout de sauce forestière. Saupoudrez de gomasio.",]
      },
    ]
  },
  {
    title: "Yaki Udon « minute » au bœuf",
    subtitle: "avec du pak choï & du sésame",
    description: "Connaissez-vous le Yaki Udon, cette recette japonaise à base de nouilles assaisonnées avec une sauce au soja ? C’est en s’inspirant de cette délicieuse recette que nos chefs ont imaginé une version à réaliser chez vous en un quart d’heure seulement ! Alors, prêt à décoller ?",
    course: ["<30min", "Sain", "Asie", "Japon"],
    difficulty: "Intermédiaire",
    allergy: "Soja • Blé • Graines de sésame • Gluten",
    preparationTime: "15 min",
    kcal: "639",
    ingredients: ["200g Émincés de bœuf", "1 Gousse(s) d'ail","1 Oignon(s)","75g Sauce hoisin", "125g Champignon(s) de Paris", "400g Nouilles udon fraîches", "1 Pak choï", "20ml Sauce soja", "½ sachets Ciboulette","2cc Vinaigre balsamique", "Huile de tournesol","Sel", "Poivre"],
    image: require('./img/recipe_img/Yaki_udon_min.png'),
    image_round: require('./img/recipe_img/Yaki_udon_min_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/1_Yaki_udon_min.png'),
        text: ["Retirez la base dure du pak choï, puis coupez-le en lanières de 2-3 cm.","Gardez quelques morceaux de la partie verte et ciselez-les très finement.",
        "Coupez l'oignon en 5.",
        "Épluchez, puis écrasez l'ail avec la partie plate d'un couteau ou avec le dos d'une casserole.",]
      },
      {
        image: require('./img/recipe_img/3_Yaki_udon.png'),
        text: ["Dans un grand bol d'eau tiède, ajoutez les nouilles udon et mélangez délicatement pour qu'elles se délient.",
        "Égouttez-les."]
      },
      {
        image: require('./img/recipe_img/3_Yaki_udon_min.png'),
        text: ["Faites chauffer un filet d'huile de tournesol dans un wok ou une sauteuse à feu vif.",
        "Faites-y revenir le bœuf et l'ail 1-2 min. Réservez-les hors du wok séparément.",
        "Ajoutez à nouveau un filet d'huile de tournesol, puis l'oignon et le pak choï.","Faites-les revenir 2-3 min à feu vif en remuant régulièrement.",
        "Versez la sauce hoisin, la sauce soja et le vinaigre balsamique blanc dans le wok et laissez le tout caraméliser 2-3 min."]
      },

      {
        image: require('./img/recipe_img/4_Yaki_udon_min.png'),
        text: ["Finissez par ajouter le bœuf et les nouilles au wok.",
        "Remuez vigoureusement 1-2 min pour que le tout soit bien nappé de sauce.",
        "Servez les yaki udon dans les assiettes. Saupoudrez de graines de sésame et du vert de pak choï.",]
      },
    ]
  },

  {
    title: "Gyudon : bowl de bœuf à la japonaise",
    subtitle: "avec du pak choï & des graines de sésame",
    description: "Au Japon, le Gyudon est souvent considéré comme une source de réconfort pour les journées chargées ; une véritable étreinte culinaire qui apaise et ravit les sens. Découvrez notre Gyudon, un voyage culinaire vers les rues animées de Tokyo !",
    course: ["<30min", "Sain", "Asie", "Japon"],
    difficulty: "Intermédiaire",
    allergy: "Soja • Blé • Graines de sésame • Gluten",
    preparationTime: "30 min",
    kcal: "594",
    ingredients: ["200g Émincés de bœuf", "1 Oignon(s)","½ Gingembre", "150g de Riz", "1 Pak choï", "40ml Sauce soja", "10g Graines de sésame","2cc Vinaigre balsamique", "Huile de tournesol","2cc Sucre","Sel", "Poivre"],
    image: require('./img/recipe_img/gyudon.png'),
    image_round: require('./img/recipe_img/gyudon_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/1_gyudon.png'),
        text: ["Portez une casserole d'eau salée à ébullition pour le riz.",
        "Coupez l'oignon en fines demi-lunes de 5 mm environ.","Râpez le gingembre. Ôtez la base dure du pak choï et coupez le reste en fines lanières.",]
      },
      {
        image: require('./img/recipe_img/rice.png'),
        text: ["Faites cuire le riz 12-14 min.",
        "Égouttez-le, ajoutez un petit filet d'huile de tournesol et une pincée de gingembre, selon votre goût.","Mélangez et réservez à couvert jusqu'au service."]
      },
      {
        image: require('./img/recipe_img/3_gyudon.png'),
        text: ["Recoupez les émincés de bœuf en plus petits morceaux si nécessaire.",
        "Faites chauffer un filet d'huile de tournesol dans un wok ou une sauteuse à feu vif.", "Faites-y colorer le bœuf 1-3 min de tous les côtés, ou jusqu'à ce qu'il soit doré.",
        "Retirez-les du wok ou de la sauteuse et réservez-les."]
      },
      {
        image: require('./img/recipe_img/4_Bulgogi.png'),
        text: ["Remettez le wok ou la sauteuse à feu moyen-vif avec un filet d'huile de tournesol.",
        "Faites-y revenir l'oignon et le pak choï 3-5 min, ou jusqu'à ce qu'ils commencent à colorer légèrement.",
        "Baissez le feu, ajoutez le reste de gingembre, puis versez 1-2 cs d'eau par personne.",
        "Prolongez la cuisson de 4-6 min à feu moyen et à couvert, ou jusqu'à ce que les légumes soient fondants.",]
      },
      {
        image: require('./img/recipe_img/5_gyudon.png'),
        text: ["Pendant ce temps, dans un bol, mélangez la sauce soja, la moitié des graines de sésame et, par personne : 1 cc de sucre et 1 cs de vinaigre balsamique blanc (ou de riz).",
        "Ajoutez le bœuf, puis la sauce soja-sésame aux légumes et mélangez 1 min environ, ou jusqu'à ce que le tout soit bien enrobé de sauce.",]
      },
      {
        image: require('./img/recipe_img/6_gyudon.png'),
        text: ["Servez le riz dans des assiettes creuses.", "Ajoutez le bœuf et les légumes en sauce par-dessus.",
        "Saupoudrez du reste de graines de sésame et du vert de pak choï.",]
      },
    ]
  },
  {
    title: "Nouilles sautées au bœuf façon Yaki Udon",
    subtitle: "avec du pak choï & des champignons",
    description: "Connaissez-vous les Yaki Udon, recette japonaise à base de nouilles assaisonnées avec une sauce au soja ? C’est en s’inspirant de cette délicieuse recette que nos chefs ont imaginé une version à réaliser facilement chez vous ! Alors, prêts à décoller ?",
    course: ["<30min", "Sain", "Asie", "Japon"],
    difficulty: "Intermédiaire",
    allergy: "Soja • Blé • Graines de sésame • Gluten",
    preparationTime: "30 min",
    kcal: "626",
    ingredients: ["200g Émincés de bœuf", "1 Gousse(s) d'ail","1 Oignon(s)","75g Sauce hoisin", "125g Champignon(s) de Paris", "400g Nouilles udon fraîches", "1 Pak choï", "20ml Sauce soja", "Ciboulette(s)","2cc Vinaigre balsamique", "Huile de tournesol","Sel", "Poivre"],
    image: require('./img/recipe_img/Yaki_udon.png'),
    image_round: require('./img/recipe_img/Yaki_udon_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/1_Yaki_udon.png'),
        text: ["Plongez le pak choï dans l’eau glacée avant utilisation pour que les feuilles reprennent en vigueur.",
        "Disposez les émincés de bœuf dans un bol. Ajoutez, par personne : 5 ml de sauce soja et 1 cc de sauce hoisin. Mélangez bien et réservez.",]
      },
      {
        image: require('./img/recipe_img/2_Yaki_udon.png'),
        text: ["Retirez la base dure du pak choï, puis coupez-le en lamelles de 2-3 cm.",
        "Nettoyez les champignons avec de l'essuie-tout humide, puis coupez-les en tranches.",
        "Coupez l'oignon en 8 quartiers.",
        "Ciselez l'ail et la ciboulette."]
      },
      {
        image: require('./img/recipe_img/3_Yaki_udon.png'),
        text: ["Dans un grand bol d'eau tiède, ajoutez les nouilles udon et mélangez délicatement pour qu'elles se délient.",
        "Égouttez-les."]
      },
      {
        image: require('./img/recipe_img/4_Yaki_udon.png'),
        text: ["Faites chauffer un filet d'huile de tournesol dans un wok ou une sauteuse à feu vif.",
        "Ajoutez-y le bœuf et l'ail et faites-les revenir 1-2 min. Réservez-les hors du wok.",
        "Ajoutez à nouveau un filet d'huile de tournesol, puis l'oignon, les champignons et le pak choï. Faites-les revenir 5-7 min à feu vif en remuant régulièrement.",
        "Versez le reste de sauce hoisin, de sauce soja et le vinaigre dans le wok et laissez le tout caraméliser 2-3 min.",]
      },
      {
        image: require('./img/recipe_img/5_Yaki_udon.png'),
        text: ["Finissez par ajouter le bœuf et les nouilles à la sauteuse.",
        "Remuez vigoureusement 1-2 min pour que le tout soit bien nappé de sauce et que les émincés soient cuits à cœur.",]
      },
      {
        image: require('./img/recipe_img/6_Yaki_udon.png'),
        text: ["Servez les yaki udon dans les assiettes.",
        "Saupoudrez-les de ciboulette.",]
      },
    ]
  },
  {
    title: "Nouilles épicées au bœuf façon Dan Dan",
    subtitle: "avec du pak choï & du beurre de cacahuètes",
    description: "Aujourd’hui, partez à la découverte d’un plat traditionnel de la province du Sichuan : les nouilles Dan Dan ou dàndàn miàn. Historiquement, ce plat de nouilles épicées était autrefois vendu par les colporteurs en tant que collation ou « snacks ». Pour prolonger le plaisir, c’est en tant que plat principal que nous vous proposons de découvrir ces saveurs d’ailleurs !",
    course: ["<30min", "Asie", "Chine", "Épicé"],
    difficulty: "Intermédiaire",
    allergy: "Arachides • Soja • Gluten • Blé",
    preparationTime: "30 min",
    kcal: "1094",
    ingredients: ["200g Nouilles de blé", "1 Gousse(s) d'ail","1 Oignon(s)","1 Gingembre(s)", "Piment(s)", "10g Cacahuètes non salées", "1 Pak choï", "Coriandre moulue", "Beurre de cacahuètes","200g Viande hachée au bœuf","20ml Sauce soja", "Huile", "1cc Vinaigre balsamique","1cc Sucre","Sel", "Poivre"],
    image: require('./img/recipe_img/Dandan.png'),
    image_round: require('./img/recipe_img/Dandan_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/1_Dandan.png'),
        text: ["Portez une casserole d'eau généreusement salée à ébullition pour les nouilles.",
        "Ciselez l'ail et l'oignon. Râpez le gingembre, avec la peau si vous le souhaitez et épépinez et émincez le piment.",
        "Épépinez et émincez le piment (ça pique ! Dosez-le selon votre goût). Concassez les cacahuètes.",
        "Retirez le pied dur du pak choï, réservez quelques feuilles vertes pour le dressage et ciselez-les finement.", "Coupez le reste du pak choï en petits morceaux.",]
      },
      {
        image: require('./img/recipe_img/2_Dandan.png'),
        text: ["Faites chauffer 1 cs d'huile de tournesol par personne dans une sauteuse à feu moyen-vif. Une fois l'huile bien chaude, faites-y revenir le piment, l'ail et la coriandre moulue 1-2 min.",
        "Dans un bol, ajoutez 1 cs d'huile de tournesol par personne, les quantités indiquées de beurre de cacahuètes, de vinaigre balsamique, de sucre (voir CONSEIL) et la moitié de la sauce soja.","Mélangez bien.",
        "Versez le contenu de la sauteuse dans le bol et mélangez."]
      },
      {
        image: require('./img/recipe_img/3_Dandan.png'),
        text: ["Remettez la sauteuse à feu vif avec 1 cs d'huile de tournesol par personne.", "Ajoutez-y le bœuf, le gingembre, le reste de sauce soja, l'oignon et les morceaux de pak choï.",
        "Faites griller le tout 4-5 min en écrasant la viande avec une spatule en bois pour bien l'émietter.",
        "Pendant ce temps, faites cuire les nouilles 3-4 min dans la casserole.","Déliez-les pendant la cuisson avec deux fourchettes, puis égouttez-les en gardant 2-3 cs d’eau de cuisson par personne."]
      },
      {
        image: require('./img/recipe_img/4_Dandan.png'),
        text: ["Ajoutez l'eau de cuisson des nouilles dans le bol contenant la sauce et mélangez pour la diluer.",
        "Répartissez les nouilles dans des assiettes creuses ou des grands bols.",
        "Versez la sauce par-dessus. Disposez la viande grillée et le pak choï sur les nouilles.",
        "Saupoudrez du vert de pak choï et de cacahuètes. Mélangez bien le tout avant de déguster !",]
      },
    ]
  },
  {
    title: "Burrito bowl tex-mex au poulet",
    subtitle: "avec de la coriandre & des pickles d'oignon",
    description: "Ce plat Tex-Mex est constitué de garnitures de burrito servies sans tortilla. Les garnitures sont placées dans un bol avec une couche de riz déposée au fond, d’où le nom « burrito bowl ». Votre avocat n’est pas tout à fait mûr ? Il mûrira plus vite à côté d’une banane ou d’une pomme, surtout si vous les emballez dans du papier. Si vous en avez besoin tout de suite, enveloppez-le dans de l’aluminium et faites-le chauffer 10 min dans un four préchauffé à 90°C.",
    course: ["<30min", "Am.latine", "Viande", "Épicé"],
    difficulty: "Facile",
    allergy: "Lait",
    preparationTime: "25 min",
    kcal: "1010",
    ingredients: ["150g de Riz", "1 Gousse(s) d'ail","1 Oignon(s)","140g Maïs en conserve", "1 Avocat(s)", "Coriandre", "2 Filet(s) de poulet", "Yaourt à la grecque", "Mélange d'épice mexicaines","Coriandre", "Huile","500ml Bouillon de volaille", "1cc Vinaigre de cidre","1cc Sucre","Sel", "Poivre"],
    image: require('./img/recipe_img/text_mex_bowl.png'),
    image_round: require('./img/recipe_img/text_mex_bowl_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/1_text_mex_bowl.png'),
        text: ["Préparez le bouillon avec de l’eau chaude.",
        "Coupez l’oignon en très fines demi-lunes. Placez-en la moitié dans un bol.",
        "Dans le bol, ajoutez 2 cc de vinaigre de vin par personne et une pincée de sel et de sucre.","Mélangez et laissez reposer. Remuez de temps à autre pour que l’oignon soit bien imbibé.",]
      },
      {
        image: require('./img/recipe_img/2_text_mex_bowl.png'),
        text: ["Faites chauffer un filet d’huile d’olive dans une casserole à feu moyen-vif. Faites-y revenir le reste d'oignon 2-3 min, ou jusqu’à ce qu’il commence à dorer.",
        "Ajoutez le riz ainsi que 1 cc d'épices mexicaines par personne et mélangez.",
        "Une fois le riz devenu translucide (après environ 1 min), ajoutez le bouillon et laissez cuire à feu doux 10-12 min, ou jusqu’à absorption complète du liquide. Ajoutez un peu d'eau s'il n'est pas tout à fait cuit."]
      },
      {
        image: require('./img/recipe_img/3_text_mex_bowl.png'),
        text: ["Égouttez le maïs. Ciselez l’ail. Recoupez le poulet en plus petits dés.",
        "Dans un bol, mélangez-les avec l'ail, ½ cc d'épices mexicaines par personne et un filet d'huile d'olive.", " Salez et poivrez.",
        "Faites chauffer une poêle à feu moyen-vif et faites-y dorer le poulet et la marinade 1 min.",
        "Ajoutez le maïs. Faites cuire 5 min de plus, puis déglacez avec 1 cs de jus de pickles d’oignon."]
      },
      {
        image: require('./img/recipe_img/4_text_mex_bowl.png'),
        text: ["Pendant ce temps, coupez l’avocat en deux. Retirez-en le noyau et ôtez la chair avec une cuillère, puis coupez-la en fines tranches. Effeuillez la coriandre.",
        "Servez le riz dans des bols ou des assiettes creuses et garnissez avec le poulet au maïs, les tranches d’avocat, les pickles d’oignon et le yaourt.","Saupoudrez de coriandre.",]
      },
    ]
  },
  {
    title: "Mafé revisité au poulet & carotte",
    subtitle: "avec des cacahuètes & du riz",
    description: "Saviez-vous que le basilic thaï, également connu sous le nom de basilic sacré, est vénéré en Thaïlande depuis des siècles ? On dit que les femmes thaïlandaises le plantaient près de leur maison pour apporter chance et protection. De plus, le basilic thaï a une saveur unique, légèrement épicée et sucrée, qui ajoute une touche d’authenticité à ce plat.",
    course: ["<30min", "Afrique", "Viande",],
    difficulty: "Intermédiaire",
    allergy: "Arachides",
    preparationTime: "25 min",
    kcal: "726",
    ingredients: ["150g de Riz", "1 Gousse(s) d'ail","1 Oignon(s)","1 Carotte(s)", "½ Gingembre", "Concentré de tomate", "2 Filet(s) de poulet", "Cacahuètes non salées", "Mélange d'épice africaine","Coriandre","Beurre de cacahuètes","175ml Bouillon de volaille", "Huile", "1cc Sucre","Sel", "Poivre"],
    image: require('./img/recipe_img/mafé.png'),
    image_round: require('./img/recipe_img/mafé_rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/rice.png'),
        text: ["Portez une casserole d’eau salée à ébullition.",
        "Faites-y cuire le riz 12-14min.",
        "Égouttez-le et ajoutez une pincée de gingembre.",
        "Réservez à couvert.",]
      },
      {
        image: require('./img/recipe_img/2_mafé.png'),
        text: ["Pendant ce temps, préparez le bouillon avec de l'eau chaude.",
        "Ciselez l'oignon.",
        "Râpez le gingembre, si vous le souhaitez avec la peau et l'ail.",
        "Épluchez la carotte et coupez-la en très fines demi-lunes.",
        "Coupez le poulet en dés de 1-2 cm d'épaisseur."]
      },
      {
        image: require('./img/recipe_img/3_mafé.png'),
        text: ["Faites chauffer un filet d'huile de tournesol dans une sauteuse. Faites-y revenir l'oignon et la carotte 3-5 min à feu moyen-vif.",
        "Ajoutez l'ail, le gingembre, le sucre, les épices africaines et le concentré de tomates. Faites cuire 1 min.",
        "Déglacez avec le bouillon et ajoutez le beurre de cacahuètes.",
        "Baissez le feu, ajoutez le poulet et faites mijoter 3-5 min à couvert et à feu moyen, ou jusqu'à ce qu'il ne soit plus rosé à cœur et que la carotte soit fondante.", "Salez légèrement et poivrez."]
      },
      {
        image: require('./img/recipe_img/4_mafé.png'),
        text: ["Pendant que la sauce mijote, concassez grossièrement les cacahuètes.",
        "Effeuillez la coriandre.",
        "Servez le riz dans des assiettes creuses et le mafé à côté ou par-dessus.",
        "Saupoudrez de cacahuètes et de coriandre.",]
      },
    ]
  },
  {
    title: "Bœuf sauté au basilic thaï",
    subtitle: "avec de la courgette & un riz au gingembre",
    description: "Saviez-vous que le basilic thaï, également connu sous le nom de basilic sacré, est vénéré en Thaïlande depuis des siècles ? On dit que les femmes thaïlandaises le plantaient près de leur maison pour apporter chance et protection. De plus, le basilic thaï a une saveur unique, légèrement épicée et sucrée, qui ajoute une touche d’authenticité à ce plat.",
    course: ["<30min", "Sain", "Viande","Épicé", "Thai", "Asie"],
    difficulty: "Intermédiaire",
    allergy: "Blé • Soja • Graines de sésame",
    preparationTime: "35 min",
    kcal: "576",
    ingredients: ["150g de Riz", "1 Gousse(s) d'ail","1 Oignon(s)","1 Courgette(s)", "½ Gingembre", "½ Piment(s)", "Basilic thaï", "200g Émincés de bœuf", "10g Graines de sésame", "Huile","Sauce asiatique sucrée","Sel", "Poivre"],
    image: require('./img/recipe_img/beef_thai.png'),
    image_round: require('./img/recipe_img/beef_thai_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_beef_thai.png'),
        text: ["Veillez à bien respecter les quantités indiquées à gauche pour préparer votre recette !",
        "Ciselez l'oignon.",
        "Épépinez et émincez le piment.",
        "Ciselez l'ail. Râpez le gingembre, avec la peau si vous le souhaitez.",
        "Coupez la courgette en très fines demi-lunes.",
        "Effeuillez le basilic thaï et ciselez-le."]
      },
      {
        image: require('./img/recipe_img/rice.png'),
        text: ["Portez une casserole d’eau salée à ébullition.",
        "Faites-y cuire le riz 12-14min.",
        "Égouttez-le et ajoutez une pincée de gingembre.",
        "Réservez à couvert.",]
      },
      {
        image: require('./img/recipe_img/3_beef_thai.png'),
        text: ["Faites chauffer un filet d'huile de tournesol dans un wok ou une sauteuse à feu vif.",
        "Ajoutez-y l'ail, le reste de gingembre et les émincés de bœuf.","Faites-les revenir 2 min, puis réservez-les à couvert dans un bol.",
        "Remettez le wok à feu moyen-vif, puis ajoutez-y la courgette et l'oignon. Faites-les sauter 7-9 min, ou jusqu'à ce qu'ils soient tendres.",]
      },
      {
        image: require('./img/recipe_img/4_beef_thai.png'),
        text: ["Pendant ce temps, dans un bol, mélangez la sauce asiatique sucrée, le piment et, par personne : 1 cc de vinaigre balsamique noir et 2 cs d'eau.",
        "Ajustez l'assaisonnement selon votre goût.",]
      },
      {
        image: require('./img/recipe_img/5_beef_thai.png'),
        text: ["Coupez le feu sous le wok, puis ajoutez-y la viande et déglacez avec la sauce que vous avez préparée à l'étape 4.",
        "Remuez le tout 1-2 min, ou jusqu'à ce que la sauce enrobe bien les légumes et la viande.", "Salez et poivrez selon votre goût."]
      },
      {
        image: require('./img/recipe_img/6_beef_thai.png'),
        text: ["Servez le riz parfumé dans les assiettes.",
        "Ajoutez la viande et les légumes en sauce par-dessus.",
        "Saupoudrez de graines de sésame et de basilic thaï.",]
      },
    ]
  },
  {
    title: "Pasta primavera courgette & burrata",
    subtitle: "avec de la crème de basilic",
    description: "Saviez-vous que la recette de pasta primavera est en réalité américaine, ou en tout cas italo-américaine ? En effet, ce plat de pâtes en sauce associées à des légumes frais a été en réalité inventé au Canada par un chef italien, Sirio Maccioni, avant d’être popularisé dans son restaurant new-yorkais. Aujourd’hui encore, les pasta primavera sont servies dans les restaurants Outre-Atlantique, où elles ont marqué l’Histoire.",
    course: ["<30min", "Sain", "Veggie","USA", "Italie"],
    difficulty: "Facile",
    allergy: "Gluten • Blé • Lait",
    preparationTime: "20 min",
    kcal: "616",
    ingredients: ["180g Rigatoni", "1 Gousse(s) d'ail","1 Oignon(s)","1 Courgette(s)", "100g Épinards", "25ml Crème de basilic", "1 Burrata", "Basilic", "1 Cube de bouillon de légumes", "Huile d'olive","1cc Moutarde","1cc Vinaigre balsamique", "Sel", "Poivre"],
    image: require('./img/recipe_img/primavera.png'),
    image_round: require('./img/recipe_img/primavera_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_primavera.png'),
        text: ["Portez une casserole d'eau à ébullition.",
        "Faites-y cuire les rigatoni avec ½ cube de bouillon par personne 12-14 min.",
        "Égouttez et rincez-les à l’eau froide, puis égouttez-les de nouveau."]
      },
      {
        image: require('./img/recipe_img/2_primavera.png'),
        text: ["Pendant que les pâtes cuisent, ciselez l'oignon et l'ail.",
        "Coupez la courgette en fines demi-lunes. Effeuillez le basilic, conservez quelques feuilles pour le dressage et ciselez le reste.",]
      },
      {
        image: require('./img/recipe_img/3_primavera.png'),
        text: ["Faites chauffer un filet d'huile d'olive dans une poêle à feu moyen-vif.",
        "Faites-y revenir l'oignon et la courgette 4-6 min en remuant régulièrement.", "Ajoutez l'ail et les épinards et faites-les cuire 1-2 min en remuant jusqu'à ce qu'ils réduisent.", "Salez et poivrez. Réservez hors du feu.",
        "Dans un saladier, mélangez la crème de basilic, le basilic ciselé, une pointe de moutarde, de l'huile d'olive et du vinaigre balsamique noir.", "Salez et poivrez.",
        "Ajoutez les légumes refroidis et les rigatoni au saladier.","Mélangez.",]
      },
      {
        image: require('./img/recipe_img/4_primavera.png'),
        text: ["Servez les pasta primavera dans les assiettes.",
        "Coupez délicatement la burrata en deux et placez-en une moitié par personne au-dessus.","Salez et poivrez-la.",
        "Arrosez d'un filet d'huile d'olive et de quelques gouttes de vinaigre balsamique noir. Garnissez des feuilles de basilic restantes.",]
      },
    ]
  },
  {
    title: "Burger façon croque jambon-fromage",
    subtitle: "avec une sauce cocktail maison",
    description: "Envie d’une recette simplissime et terriblement régressive ? Goûtez donc ce burger façon croque-monsieur, doré sur chaque face à la poêle et garni de cheddar fondant, de mayonnaise ainsi que de jambon : un régal à déguster avec des potatoes au paprika fumé !",
    course: ["<30min", "Street-Food", "Burger"],
    difficulty: "Facile",
    allergy: "Gluten • Blé • Œuf • Moutarde • Lait",
    preparationTime: "25 min",
    kcal: "1017",
    ingredients: ["500g Pommes de terre", "1 Tomate(s)","50g Mayonnaise","2 Pain(s) burger aux graines", "Paprika fumé en poudre", "75g Cheddar râpé", "75g Ketchup", "Beurre", "Huile d'olive", "Sel", "Poivre"],
    image: require('./img/recipe_img/burger_croc.png'),
    image_round: require('./img/recipe_img/burger_croc.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_burger_croc.png'),
        text: ["Préchauffez le four à 220°C (200°C chaleur tournante).",
        "Lavez, puis coupez les pommes de terre en potatoes de 1½ cm.","Tamponnez-les avec de l’essuie-tout pour en retirer l'humidité et qu'elles soient croustillantes.",
        "Mélangez-les sur une plaque recouverte de papier sulfurisé avec un filet d’huile d’olive, 1½ cc de paprika fumé par personne, du sel et du poivre.",
        "Enfournez-les 30-35 min, ou jusqu’à ce qu'elles soient bien dorées et fondantes. Remuez à mi-cuisson."]
      },
      {
        image: require('./img/recipe_img/2_burger_croc.png'),
        text: ["Lorsqu'il reste environ 10 min de cuisson aux potatoes, coupez la tomate en tranches.",
        "Coupez les pains burger en deux dans l'épaisseur et aplatissez délicatement chaque moitié avec vos mains.",
        "Tartinez chaque face intérieure avec la moitié de la mayonnaise.",
        "Répartissez la moitié du cheddar sur la base des pains, puis ajoutez le jambon, la tomate et le reste de cheddar par-dessus.",
        "Refermez les burgers.",]
      },
      {
        image: require('./img/recipe_img/3_burger_croc.png'),
        text: ["Faites chauffer le beurre et un petit filet d'huile d'olive dans une poêle à feu moyen-vif.",
        "Faites-y dorer chaque face des burgers 3-4 min en appuyant dessus avec une spatule pour qu'ils soient bien croustillants et plats.",
        "Pendant ce temps, mélangez le ketchup et le reste de mayonnaise dans un bol.",]
      },
      {
        image: require('./img/recipe_img/4_burger_croc.png'),
        text: ["Servez les burgers dans les assiettes.",
        "Accompagnez-les des potatoes et de la sauce cocktail maison.",]
      },
    ]
  },
  {
    title: "Moussaka veggie & pain à l'ail",
    subtitle: "avec des lentilles corail & de l'aubergine",
    description: "TLa moussaka, avec les gyros et les souvlaki, est probablement l'un des premiers plats auxquels on pense lorsque l'on évoque la cuisine grecque. Sachez pourtant que ce classique n'est pas seulement populaire en Grèce : autour de la mer Méditerranée et dans les Balkans, il existe toutes sortes de versions de ce plat. Aujourd'hui, vous réaliserez vous-même une variante de ce classique en utilisant des lentilles corail au lieu de la traditionnelle viande d'agneau.",
    course: ["Greek", "Veggie"],
    difficulty: "Intermédiaire",
    allergy: "Gluten • Seigle • Blé • Lait",
    preparationTime: "50 min",
    kcal: "881",
    ingredients: ["1 Aubergine(s)", "1 Courgette(s)","Origan séché", "Concentré de tomate","1 Oignon(s)","1 Gousse(s) d'ail", "25g Lentilles corail", "Tomates concassées à l'ail et à l'oignon", "Pain", "60g Fromage râpé à l'italienne", "100g Crème épaisse","Huile d'olive", "250ml Lait de coco", "Cumin", "225ml Bouillon de légumes","2cc Vinaigre balsamique","Huile de tournesol","Huile d'olive","Cassonade", "Sel", "Poivre"],
    image: require('./img/recipe_img/Moussaka_veggie.png'),
    image_round: require('./img/recipe_img/Moussaka_veggie_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_Moussaka_veggie.png'),
        text: ["Préchauffez le four à 200°C (180°C chaleur tournante). Préparez le bouillon avec de l'eau chaude.",
        "Coupez l’aubergine en deux dans l'épaisseur, puis en fines demi-rondelles.",
        "Émincez l’oignon.", "Coupez la courgette en dés de 5 mm.",
        "Ciselez la moitié de l'ail et conservez le reste entier"]
      },
      {
        image: require('./img/recipe_img/2_Moussaka_veggie.png'),
        text: ["Faites chauffer un filet d’huile d’olive à feu moyen-vif dans une sauteuse et faites-y dorer l’oignon 3 min.",
        "Ajoutez la courgette,","Salez et poivrez, puis poursuivez la cuisson de 5 min en remuant régulièrement.",
        "Ajoutez ½ sachet d’origan séché par personne, le concentré de tomates et l’ail ciselé. Mélangez et faites cuire 2 min de plus.",]
      },
      {
        image: require('./img/recipe_img/3_Moussaka_veggie.png'),
        text: ["Ajoutez les lentilles corail, le vinaigre balsamique noir, les tomates concassées à l’ail et à l’oignon, le bouillon et la cassonade à la sauteuse.",
        "Mélangez bien, portez à ébullition, puis laissez mijoter 20-25 min à feu doux.", "Mélangez régulièrement pour éviter que les lentilles n’accrochent au fond.",]
      },
      {
        image: require('./img/recipe_img/4_Moussaka_veggie.png'),
        text: ["Pendant ce temps, disposez les demi-rondelles d’aubergine sur une plaque recouverte de papier sulfurisé.", "Arrosez-les d’huile de tournesol," ,"Puis salez et poivrez. Enfournez 10-14 min.",
        "Coupez le pain en tranches, frottez-le avec la moitié d'ail entière,", "Ajoutez un filet d'huile d'olive sur chaque tranche de pain, puis salez et poivrez.",]
      },
      {
        image: require('./img/recipe_img/5_Moussaka_veggie.png'),
        text: ["Versez le contenu de la sauteuse dans un plat à four et disposez les demi-rondelles d’aubergine cuites par-dessus, en les superposant.",
        "Enduisez les demi-rondelles d'aubergine de crème, puis saupoudrez de fromage râpé.",
        "Enfournez la moussaka 5-8 min. Ajoutez le pain à l’ail à côté lorsqu'il reste 2-3 min de cuisson, ou jusqu'à ce qu'il soit doré.",]
      },
      {
        image: require('./img/recipe_img/6_Moussaka_veggie.png'),
        text: ["Servez la moussaka dans les assiettes.",
        "Présentez le pain à l’ail en accompagnement.",]
      },
    ]
  },
  {
    title: "Moqueca de camarão ou crevettes au poivron",
    subtitle: "avec du riz, du piment & du lait de coco",
    description: "Typiquement brésilienne mais tirant ses origines de la cuisine indigène, portugaise et africaine, la moqueca est un ragoût de poisson associé à des légumes et du lait de coco. Elle est reconnaissable grâce à sa couleur jaune/orangée et est appréciée aux quatre coins du monde. Ici, nous avons remplacé le poisson par des crevettes, les fameuses 'camarão' !",
    course: ["<30min", "Epicé", "Am.latine"],
    difficulty: "Intermédiaire",
    allergy: "Poisson",
    preparationTime: "25 min",
    kcal: "634",
    ingredients: ["150g de Riz", "1 Citron(s)","1 Tomate(s)","1 Gousse(s) d'ail", "2 Filet(s) de lieu noir", "1 Oignon(s)", "1 Poivron", "Coriandre", "½ Piment", "Concentré de tomate","Huile d'olive", "250ml Lait de coco", "Cumin","45ml Bouillon de poisson", "Sel", "Poivre"],
    image: require('./img/recipe_img/Moqueca_shrimp.png'),
    image_round: require('./img/recipe_img/Moqueca_shrimp_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/rice.png'),
        text: ["Portez une grande casserole d’eau salée à ébullition.",
        "Faites-y cuire le riz 12-14 min.","Égouttez-le et réservez-le à couvert.",
        "Préparez le bouillon avec de l'eau chaude."]
      },
      {
        image: require('./img/recipe_img/2_Moqueca_shrimp.png'),
        text: ["Lavez bien le citron et prélevez-en le zeste avec une râpe fine, puis coupez-le en quartiers.",
        "Coupez le lieu en gros dés. Dans un bol, mélangez-les avec le jus de ¼ de citron et les zestes.","Salez et poivrez, puis réservez au frais.",
        "Ciselez finement l'ail et l'oignon. Coupez la tomate et le poivron en dés de 1 cm.",
        "Effeuillez la coriandre.","Épépinez et ciselez le piment",]
      },
      {
        image: require('./img/recipe_img/3_Moqueca_shrimp.png'),
        text: ["Faites chauffer un filet d'huile d'olive à feu moyen-vif dans une sauteuse.", "Faites-y revenir l'oignon, le poivron, le piment, la tomate, l'ail et le concentré de tomates 3-4 min.", "Salez et poivrez.",
        "Secouez le paquet de lait de coco afin que les éventuels grumeaux se décomposent.",
        "Ajoutez-le ainsi que le cumin et le bouillon à la sauteuse.","Laissez réduire 2-4 min, ou jusqu'à ce que la sauce épaississe un peu.",
        "À feu moyen, ajoutez le lieu et faites-le cuire 4-5 min en mélangeant délicatement.",]
      },
      {
        image: require('./img/recipe_img/4_Moqueca_shrimp.png'),
        text: ["Servez le riz dans des assiettes creuses et disposez la moqueca par-dessus.",
        "Saupoudrez de coriandre et servez avec les quartiers de citron restants.",]
      },
    ]
  },
  {
    title: "Moqueca brésilienne au lieu & lait de coco",
    subtitle: "avec du poivron & du riz",
    description: "La moqueca de poisson (« Moqueca de peixe ») est un plat traditionnel brésilien de l'état de Bahia et emblématique de l'héritage africain dans le pays. Facile à réaliser, ce plat vous fera sans aucun doute voyager !",
    course: ["Sain", "<30min", "Epicé", "Am.latine"],
    difficulty: "Intermédiaire",
    allergy: "Poisson",
    preparationTime: "25 min",
    kcal: "635",
    ingredients: ["150g de Riz", "1 Citron(s)","1 Tomate(s)","1 Gousse(s) d'ail", "180g Crevette(s)", "1 Oignon(s)", "1 Poivron", "Coriandre", "½ Piment", "Concentré de tomate","Huile d'olive", "250ml Lait de coco", "Cumin","45ml Bouillon de poisson", "Sel", "Poivre"],
    image: require('./img/recipe_img/Moqueca.png'),
    image_round: require('./img/recipe_img/Moqueca_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/rice.png'),
        text: ["Portez une grande casserole d’eau salée à ébullition.",
        "Faites-y cuire le riz 12-14 min.","Égouttez-le et réservez-le à couvert.",
        "Préparez le bouillon avec de l'eau chaude."]
      },
      {
        image: require('./img/recipe_img/2_Moqueca.png'),
        text: ["Lavez bien le citron et prélevez-en le zeste avec une râpe fine, puis coupez-le en quartiers.",
        "Dans un bol, mélangez les crevettes avec les zestes et le jus de ¼ de citron par personne (selon votre goût). Salez et poivrez, puis réservez.",
        "Ciselez finement l'ail et l'oignon. Coupez la tomate et le poivron en dés de 1 cm.",
        "Effeuillez la coriandre.","Épépinez et ciselez le piment",]
      },
      {
        image: require('./img/recipe_img/3_Moqueca.png'),
        text: ["Faites chauffer un filet d'huile d'olive à feu moyen-vif dans une sauteuse.", "Faites-y revenir l'oignon, le poivron, le piment, la tomate, l'ail et le concentré de tomates 3-4 min.", "Salez et poivrez.",
        "Secouez le paquet de lait de coco afin que les éventuels grumeaux se décomposent.",
        "Ajoutez-le ainsi que le cumin et le bouillon à la sauteuse.","Laissez réduire 2-4 min, ou jusqu'à ce que la sauce épaississe un peu.",
        "À feu moyen, ajoutez les crevettes et faites-le cuire 3-4 min en mélangeant délicatement.",]
      },
      {
        image: require('./img/recipe_img/4_Moqueca.png'),
        text: ["Servez le riz dans des assiettes creuses et disposez la moqueca par-dessus.",
        "Saupoudrez de coriandre et servez avec les quartiers de citron restants.",]
      },
    ]
  },
  {
    title: "Salade de pâtes à la grecque au thon",
    subtitle: "avec des olives & du concombre",
    description: "Les salades de pâtes, c’est un essentiel pour varier des versions chaudes ! Besoin d’étoffer votre répertoire de recettes ? Tentez cette version au thon et d’inspiration grecque : olives, citron, aneth... On s’y croirait presque !",
    course: ["Sain", "<30min", "Greek"],
    difficulty: "Simple",
    allergy: "Gluten • Blé • Lait • Poisson",
    preparationTime: "20 min",
    kcal: "634",
    ingredients: ["180g Penne", "½ Citron","1 Concombre(s)","40g Salade", "½ sachets Ciboulette", "Aneth", "50g Fromage à la grecque", "25g Olive(s)", "160g Thon", "2 Œuf(s)","Huile d'olive", "1cc Moutarde", "1cc Vinaigre balsamique", "Sel", "Poivre"],
    image: require('./img/recipe_img/greek_salad.png'),
    image_round: require('./img/recipe_img/greek_salad_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_greek_salad.png'),
        text: ["Portez une grande casserole d'eau salée à ébullition.","Faites-y cuire les penne 1-2 min.",
        "Ajoutez les œufs à la casserole et faites cuire le tout 9-10 min de plus.",
        "Après cuisson, égouttez-les et passez-les sous l'eau froide pour les refroidir.", "Égouttez-les de nouveau."]
      },
      {
        image: require('./img/recipe_img/2_greek_salad.png'),
        text: ["Pendant ce temps, coupez le concombre en dés d'environ 1 cm.",
        "Effeuillez et ciselez l'aneth et la ciboulette.",
        "Coupez le citron en quartiers.",]
      },
      {
        image: require('./img/recipe_img/3_greek_salad.png'),
        text: ["Émiettez le fromage à la grecque.",
        "Concassez les olives.",
        "Égouttez le thon et placez-le dans un saladier avec, par personne : ½ cc de moutarde, ½ cc de vinaigre balsamique blanc et ½ cs d'huile d'olive.", "Salez, poivrez et mélangez.",
        "Écalez les œufs, puis coupez-les en quartiers.",]
      },
      {
        image: require('./img/recipe_img/4_greek_salad.png'),
        text: ["Ajoutez la salade, les penne, le concombre, les œufs, le fromage, les olives et les ¾ des herbes au saladier.", "Mélangez.",
        "Servez la salade dans les assiettes et saupoudrez-la avec le reste des herbes fraîches.",
        "Pressez le jus de ¼ de citron par-dessus.", "Salez et poivrez si besoin.",]
      },
    ]
  },
  {
    title: "Smoothie vert fracassant",
    subtitle: "avec épinards, banane & kiwi (env. 2 port.)",
    description: "Prenez des forces en savourant le smoothie vert fracassant : épinards, banane et kiwi. Une explosion de saveurs vitaminées à chaque gorgée !",
    course: ["Smoothie","Sain", "<30min"],
    difficulty: "Simple",
    allergy: "Lait",
    preparationTime: "15 min",
    kcal: "232",
    ingredients: ["100g Épinards", "100g Yaourt à la grecque","3 Kiwi(s)","1 Banane(s)", "140ml Eau",],
    image: require('./img/recipe_img/smoothie_green.png'),
    image_round: require('./img/recipe_img/smoothie_green.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_smoothie_green.png'),
        text: ["Rincez bien les épinards et égouttez-les.",
        "Disposez-les dans un récipient à bords hauts avec le yaourt et 70 ml d'eau.",
        "Utilisez la puissance du mixeur plongeant pour fusionner ces éléments jusqu'à l'obtention d'une texture bien lisse et homogène. Réservez au frais."]
      },
      {
        image: require('./img/recipe_img/2_smoothie_green.png'),
        text: ["Épluchez et coupez la banane en morceaux grossiers (comptez-en 1,5 pièces).",
        "Pelez le kiwi à l'aide d'un couteau ou d'un éplucheur et retirez-en la base dure.", "Taillez 1 fine tranche par verre dans la partie centrale d'un kiwi pour le dressage.", "Incisez 1 rayon par tranche à l'aide d'un couteau.",
        "Coupez le reste du kiwi en dés.",]
      },
      {
        image: require('./img/recipe_img/3_smoothie_green.png'),
        text: ["Ajoutez la banane et les dés de kiwi dans le récipient des épinards.",
        "Mixez à nouveau jusqu'à obtenir un smoothie épais et lisse.", "Versez la préparation dans 1 grand verre par personne.",
        "Disposez une tranche de kiwi sur le côté de chaque verre pour la décoration.",]
      },
    ]
  },
  {
    title: "Avocado toasts, feta & tomates cerises",
    subtitle: "avec du jus d'oranges pressées",
    description: "Partagez ce délicieux brunch à deux (ou plus) ! Au menu ? Des avocado toasts au fromage à la grecque, recette très tendance et si simple à faire ! Petite astuce si jamais vos avocats ne sont pas complètement mûrs : placez-les quelques jours à côté de pommes ou de pêches.",
    course: ["Brunch",],
    difficulty: "Simple",
    allergy: "Œuf • Gluten • Lait (contient du lactose) • Blé",
    preparationTime: "35 min",
    kcal: "1175",
    ingredients: ["4 Orange(s)", "250g Tomates cerises rouges","½ Citron","3 Pain(s) de campagne tranché", "2 Avocat(s)", "1 Gousse(s) d'ail", "Coriandre", 'Epices mexicaine', "75g Fromage à la grecque", "40g Salade", "2 Œuf(s)","Huile d'olive","1cc Vinaigre balsamique", "Sel", "Poivre"],
    image: require('./img/recipe_img/toast_brunch.png'),
    image_round: require('./img/recipe_img/toast_brunch_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_toast_brunch.png'),
        text: ["Préchauffez le four à 220°C (200°C chaleur tournante) si vous n'avez pas de grille-pain.",
        "Portez une casserole d'eau salée à ébullition.",
        "Pressez les oranges avec un presse-agrumes ou en piquant la chair avec une fourchette.", "Réservez le jus au frais dans une carafe."]
      },
      {
        image: require('./img/recipe_img/2_toast_brunch.png'),
        text: ["Lorsque l'eau bout, baissez légèrement le feu, ajoutez délicatement les œufs et faites-les cuire 6 min.", "Égouttez-les et passez-les sous l'eau froide pour stopper la cuisson.",
        "Pendant ce temps, coupez les tomates cerises en deux.",
        "Enfournez les tranches de pain 3-5 min ou jusqu'à ce qu'elles soient dorées.",]
      },
      {
        image: require('./img/recipe_img/3_toast_brunch.png'),
        text: ["Coupez l'avocat en deux, retirez le noyau et videz la chair de l’avocat à la cuillère.", "Coupez-la en très petits morceaux.",
        "Coupez le citron en quartiers et ciselez l'ail très finement.",
        "Dans une assiette creuse, mélangez 2 cs de jus de citron vert", "2 cc d'épices mexicaines l’avocat ainsi qu'une pincée d’ail", "Ajoutez du sel et du poivre.", "Écrasez le tout avec un presse-purée jusqu'à obtenir une purée avec des petits morceaux.",]
      },

      {
        image: require('./img/recipe_img/4_toast_brunch.png'),
        text: [ "Écalez les œufs et coupez-les en deux.",
        "Étalez le guacamole sur les tranches de pain (1,5 par personne).", "Effritez la feta par-dessus avec vos mains ou une fourchette et ajoutez les moitiés d'œufs mollets,", "Ajoutez une pincée d'épices mexicaines, du sel, du poivre et effeuillez quelques feuilles de coriandre.",
        "Servez la salade et les tomates cerises à côté." ,"Versez un filet d'huile d'olive et de vinaigre par-dessus, salez et poivrez."]
      },
    ]
  },
  {
    title: "Bagel saumon fumé, fromage frais",
    subtitle: "2 portions avec du jus d'oranges pressées",
    description: "Envie de bruncher avec vos proches ce weekend ? Nous vous proposons une recette gourmande de brunch sucré et salé pour 2 personnes, à déguster à n’importe quel moment de la journée. Au menu : un bagel garni de fromage frais, de concombre et de saumon fumé, avec comme accompagnement une salade de fruits bien fraîche, comme on les aime !",
    course: ["Brunch", "Fish", "Bagel",],
    difficulty: "Simple",
    allergy: "Œuf • Gluten • Lait (contient du lactose) • Blé • Poisson",
    preparationTime: "30 min",
    kcal: "775",
    ingredients: ["2 Bagel(s)","4 Orange(s)", "½ Citron", "1 Concombre(s)", "1 Pomme(s)", "2 Kiwi(s)", '100g Fromage frais aux herbes', "100g Saumon fumé", "1cs Sucre","Huile d'olive","1cc Vinaigre balsamique", "1cc Sucre","Sel", "Poivre"],
    image: require('./img/recipe_img/bagel_salmon.png'),
    image_round: require('./img/recipe_img/bagel_salmon_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_bagel_salmon.png'),
        text: ["Si vous n'avez pas de grille-pain, préchauffez le four à 220°C (200°C chaleur tournante).",
        "Pressez 3 oranges avec un presse-agrumes ou en piquant la chair avec une fourchette.","Réservez le jus au frais dans une carafe.",
        "Coupez les bagels en deux et enfournez-les 4-6 min, ou jusqu'à ce qu'ils soient dorés."]
      },
      {
        image: require('./img/recipe_img/2_bagel_salmon.png'),
        text: ["Pendant ce temps, coupez le concombre en tranches.",
        "Coupez le citron en quartiers." ,"Pressez-en quelques gouttes (selon votre goût) dans le fromage frais aux herbes,", "Ajoutez 1 cs d'eau et mélangez bien.",
        "Ôtez le trognon de la pomme,", "Epluchez l'orange restante ainsi que le kiwi, puis coupez-les en dés.", "Mélangez-les dans un bol avec 1 cs de sucre.",]
      },
      {
        image: require('./img/recipe_img/3_bagel_salmon.png'),
        text: ["Une fois les bagels dorés, étalez un peu de fromage frais aux herbes sur chaque moitié.",
        "Ajoutez quelques tranches de concombre (gardez le reste pour faire une salade d'accompagnement),", "déchirez le saumon fumé en morceaux et disposez-les par-dessus.",
        "Pressez quelques gouttes de citron si vous le souhaitez, et refermez les bagels.",]
      },

      {
        image: require('./img/recipe_img/4_bagel_salmon.png'),
        text: [ "Servez les bagels dans les assiettes.",
        "Présentez le reste de concombre à côté.", "Versez un filet d'huile d'olive et de vinaigre par-dessus,", "Salez et poivrez.",
        "Accompagnez du jus d'oranges et de la salade de fruits."]
      },
    ]
  },
  {
    title: "Salade thaï aux émincés végétariens",
    subtitle: "avec des cacahuètes, du gomasio & du citron",
    description: "Envie de découvrir la cuisine thaïlandaise façon végétarienne ? Cette recette est faite pour vous ! Dans ce plat, les nouilles udon sont revenues avec des émincés végétariens marinés dans de la sauce soja, du gingembre, du citron et du gomasio pour un maximum de saveurs. Un peu de coriandre pour la fraîcheur, des cacahuètes pour le croquant et le tour est joué !",
    course: ["Pasta", "Asie", "Thaïlande", "Veggie","<30min","Sain",],
    difficulty: "Simple",
    allergy: "Blé • Soja • Graines de sésame • Orge • Œuf • Arachides",
    preparationTime: "20 min",
    kcal: "521",
    ingredients: ["1 Gousse(s) d'ail","½ Gingembre", "½ Citron", "1 Concombre(s)", "1 Oignon(s)", "½ sachets Ciboulette","2 Tomate(s)", '200g Nouilles udon fraîches', "160g Emincés végétariens", "Coriandre","Cacahuètes non salées","½ Piment", "20ml Sauce asiatique sucrée", "20ml Sauce soja","Huile","Gomasio", "1cc Sucre","Sel", "Poivre"],
    image: require('./img/recipe_img/Vege_noodles.png'),
    image_round: require('./img/recipe_img/Vege_noodles_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_SaladeThai_Vegetarien.png'),
        text: ["Portez une grande casserole d'eau salée à ébullition pour les pâtes.",
        "Ciselez l’ail, la ciboulette et la sucrine (½ pièce par personne) séparément.","Coupez le citron en quartiers.",
        "Coupez les tomates séchées en dés.",
        "Faites cuire les farfalle dans la casserole 11-13 min." ,"Égouttez-les et rincez-les à l'eau froide. Réservez-les dans la passoire."]
      },
      {
        image: require('./img/recipe_img/2_Vege_noodles.png'),
        text: ["Faites chauffer une poêle à sec à feu moyen-vif. Faites-y dorer la poitrine fumée 4-6 min, ou jusqu’à ce qu’elle soit croustillante.",
        "Ajoutez l’ail et faites cuire 1 min de plus.",
        "Hors de la poêle, hachez grossièrement la poitrine fumée",]
      },
      {
        image: require('./img/recipe_img/3_Vege_noodles.png'),
        text: ["Mélangez la mayonnaise, la ciboulette, la moutarde et le yaourt dans un petit bol.",
        "Ajoutez ½ cs d’eau par personne, du sel, du poivre et pressez quelques gouttes de jus de citron par-dessus (selon votre goût)."," Mélangez bien.",]
      },

      {
        image: require('./img/recipe_img/4_Vege_noodles.png'),
        text: [ "Remettez les farfalle dans la casserole, ajoutez ¼ du sachet d'épices italiennes par personne, puis incorporez la sauce à la ciboulette, la poitrine fumée, les tomates séchées et la sucrine.", "Mélangez.", "Goûtez et ajustez l'assaisonnement en sel et poivre si besoin.",
        "Servez la salade de pâtes dans les assiettes avec du citron, s’il vous en reste."]
      },
    ]
  },
  {
    title: "Escalope de dinde panée & haricots verts",
    subtitle: "avec une purée de courgette",
    description: "Plongez dans une ambiance nostalgique avec notre escalope de dinde panée servie avec des haricots verts et accompagnée d’une purée de courgette. Cette recette vous rappellera les délicieux repas préparés en famille le dimanche, remplis d’amour et de saveurs. C’est un véritable retour en enfance, où chaque bouchée vous ramène à ces moments spéciaux passés entre proches.",
    course: ["Viande",],
    difficulty: "Intermédiaire",
    allergy: "Blé • Gluten • Œuf",
    preparationTime: "40 min",
    kcal: "811",
    ingredients: ["1 Gousse(s) d'ail","300g Pommes de terre", "1 Echalote(s)", "½ Courgette(s)", "200g Haricots verts", "50g Chapelure Panko", '2 Escalope(s) de dinde',"1 Œuf(s)","25ml Lait","1cc Farine", "Huile d'olive", "Épices italiennes","Sel", "Poivre"],
    image: require('./img/recipe_img/green_beans_turkey.png'),
    image_round: require('./img/recipe_img/green_beans_turkey_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_green_beans_turkey.png'),
        text: ["Portez une casserole d'eau salée à ébullition pour les haricots.",
        "Épluchez les pommes de terre et coupez-les en dés de 1 cm. Mettez-les dans une autre casserole avec une pincée de sel et versez de l'eau à hauteur.","Portez à ébullition et faites cuire 10 min.",
        "Pendant ce temps, coupez la courgette en petits dés.",
        "Ciselez l'ail et l'échalote séparément. Équeutez les haricots verts.",]
      },
      {
        image: require('./img/recipe_img/2_green_beans_turkey.png'),
        text: ["Dans une assiette creuse, mélangez la farine avec du sel." ,"Dans une deuxième assiette, battez l'œuf.",
        "Dans une troisième, mélangez la chapelure panko avec 1 cc d'épices italiennes par personne et une bonne pincée de sel et de poivre.",
        "Épongez la dinde avec de l'essuie-tout.", "Trempez-la ensuite successivement dans la farine, puis dans l'œuf, et enfin dans la chapelure jusqu'à ce qu'elle en soit entièrement recouverte.",]
      },
      {
        image: require('./img/recipe_img/3_green_beans_turkey.png'),
        text: ["Au bout de 10 min de cuisson, ajoutez la courgette dans la casserole avec les dés de pommes de terre, et prolongez la cuisson de 5-7 min.",
        "Contrôlez la cuisson avec la pointe d'un couteau, puis égouttez-les.",
        "Écrasez les pommes de terre et la courgette avec un presse-purée, puis ajoutez un filet de lait pour l'onctuosité et selon la consistance souhaitée.", "Salez et poivrez," ,"Mélangez et réservez à couvert.",]
      },

      {
        image: require('./img/recipe_img/4_green_beans_turkey.png'),
        text: [ "Faites cuire les haricots verts dans l'eau bouillante salée 4-5 min, puis égouttez-les. Réservez la casserole.",
        "Faites chauffer un petit filet d'huile à feu moyen-vif dans la même casserole.", "Ajoutez-y les haricots verts et l'échalote, et faites-les revenir 2-3 min en remuant régulièrement.",
        "Ajoutez l'ail,", "salez et poivrez,", "et prolongez la cuisson de 1 min. Réservez."]
      },
      {
        image: require('./img/recipe_img/5_green_beans_turkey.png'),
        text: [ "Remettez la poêle des haricots à feu moyen-vif avec un filet d'huile d'olive.",
        "Lorsque l'huile est chaude, faites-y cuire l'escalope de dinde panée 3-5 min de chaque côté, ou jusqu'à ce qu'elle soit dorée.",
        "Réservez-la dans une assiette recouverte d'essuie-tout."]
      },
      {
        image: require('./img/recipe_img/6_green_beans_turkey.png'),
        text: [ "Servez l'escalope de dinde panée dans les assiettes.",
        "Disposez la purée et les haricots verts à côté."]
      },
    ]
  },
  {
    title: "Salade de farfalle au lard",
    subtitle: "avec de la sucrine & une sauce ciboulette",
    description: "Saviez-vous que c’est en jouant à pincer la pâte à pâtes entre leurs doigts que les italiens ont créé les farfalle. Aujourd’hui, ils en consomment en moyenne 28 kg par personne et par an. Découvrez-les sous un nouveau jour dans cette salade avec du lard et de la sucrine !",
    course: ["Pasta", "Viande", "<30min"],
    difficulty: "Simple",
    allergy: "Blé • Gluten • Lait • Œuf • Moutarde",
    preparationTime: "25 min",
    kcal: "1018",
    ingredients: ["1 Gousse(s) d'ail","50g Tomates semi-séchées", "1 Sucrine", "½ sachets Ciboulette", "½ Citron", "180g Farfalle", '85g Tranches de poitrine fumée', "80g Yaourt à la grecque","35g Mayonnaise","1cc Moutarde", "Huile d'olive", "Épices italiennes","Sel", "Poivre"],
    image: require('./img/recipe_img/Farfalle_pasta.png'),
    image_round: require('./img/recipe_img/Farfalle_pasta_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_Farfalle_pasta.png'),
        text: ["Portez une grande casserole d'eau salée à ébullition pour les pâtes.",
        "Ciselez l’ail, la ciboulette et la sucrine (½ pièce par personne) séparément.","Coupez le citron en quartiers.",
        "Coupez les tomates séchées en dés.",
        "Faites cuire les farfalle dans la casserole 11-13 min." ,"Égouttez-les et rincez-les à l'eau froide. Réservez-les dans la passoire."]
      },
      {
        image: require('./img/recipe_img/2_Farfalle_pasta.png'),
        text: ["Faites chauffer une poêle à sec à feu moyen-vif. Faites-y dorer la poitrine fumée 4-6 min, ou jusqu’à ce qu’elle soit croustillante.",
        "Ajoutez l’ail et faites cuire 1 min de plus.",
        "Hors de la poêle, hachez grossièrement la poitrine fumée",]
      },
      {
        image: require('./img/recipe_img/3_Farfalle_pasta.png'),
        text: ["Mélangez la mayonnaise, la ciboulette, la moutarde et le yaourt dans un petit bol.",
        "Ajoutez ½ cs d’eau par personne, du sel, du poivre et pressez quelques gouttes de jus de citron par-dessus (selon votre goût)."," Mélangez bien.",]
      },

      {
        image: require('./img/recipe_img/4_Farfalle_pasta.png'),
        text: [ "Remettez les farfalle dans la casserole, ajoutez ¼ du sachet d'épices italiennes par personne, puis incorporez la sauce à la ciboulette, la poitrine fumée, les tomates séchées et la sucrine.", "Mélangez.", "Goûtez et ajustez l'assaisonnement en sel et poivre si besoin.",
        "Servez la salade de pâtes dans les assiettes avec du citron, s’il vous en reste."]
      },
    ]
  },
  {
    title: "Linguine aux poireaux & lardons",
    subtitle: "avec une sauce au pesto de champignons",
    description: "Cousin de la cébette et de l'ail, le poireau est un aliment à la saveur délicate, parfois même appelé « asperge du pauvre ». Ici, il apporte un goût subtil, comme celui d'une cébette, à ce plat de linguine à la crème, aux champignons et aux lardons. C'est un allié de taille pour apporter la petite touche qui fera la différence à vos préparations !",
    course: ["Pasta", "Viande", "<30min"],
    difficulty: "Simple",
    allergy: "Blé • Gluten • Lait • Anhydride sulfureux et sulfites • Noix de cajou • Fruits à coque",
    preparationTime: "20 min",
    kcal: "690",
    ingredients: ["1 Poireau(x)","250g Champignon(s) de Paris", "1 Gousse(s) d'ail", "180g Linguine", "75g Lardons fumés", "60g Pesto aux champignons", "100g Crème épaisse", "Huile d'olive", "Sel", "Poivre"],
    image: require('./img/recipe_img/Linguine_leek.png'),
    image_round: require('./img/recipe_img/Linguine_leek_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_Linguine_leek.png'),
        text: ["Portez une grande casserole d'eau salée à ébullition pour les pâtes.", "Lavez bien le poireau,", "Coupez-le en fines rondelles.",
        "Nettoyez les champignons avec un essuie-tout humide, puis coupez-les en quartiers.",
        "Ciselez l’ail."]
      },
      {
        image: require('./img/recipe_img/2_Linguine_leek.png'),
        text: ["Faites cuire les linguine 10-12 min dans la casserole d'eau bouillante.",
        "Égouttez-les et réservez-les pour l'étape suivante.",]
      },
      {
        image: require('./img/recipe_img/3_Linguine_leek.png'),
        text: ["Pendant ce temps, faites chauffer une sauteuse à feu moyen-vif.", "Faites-y revenir les lardons, le poireau, les champignons et l’ail 6-8 min.",
        "Ajoutez les linguine, le pesto aux champignons et la crème.",
        "Remuez bien et faites chauffer le tout 1-2 min.",]
      },

      {
        image: require('./img/recipe_img/4_Linguine_leek.png'),
        text: [ "Goûtez et ajustez l'assaisonnement si besoin.",
        "Servez aussitôt les linguine au poireau et lardons dans les assiettes."]
      },
    ]
  },
  {
    title: "Tarte façon flammekueche aux lardons",
    subtitle: "avec une salade aux pommes",
    description: "Saviez-vous que flammekueche signifie « cuit dans les flammes » ? La véritable tarte flambée est cuite dans un four à bois à l’ancienne. Pour obtenir un résultat similaire, allumez votre four au maximum et attendez qu’il soit complètement préchauffé avant d’y faire cuire votre flammekueche. Et en complément, une salade bien fraîche aux pommes !",
    course: ["Flammekueche", "Street Food", "<30min"],
    difficulty: "Simple",
    allergy: "Gluten • Blé • Lait",
    preparationTime: "25 min",
    kcal: "980",
    ingredients: ["3 Oignon(s)","150g Lardons fumés", "Pâte à tarte", "100g Crème épaisse", "1 Pomme(s)", "60g Salade", "3cs Vinaigre balsamique", "Huile d'olive", "Sel", "Poivre"],
    image: require('./img/recipe_img/flammekueche_lardons.png'),
    image_round: require('./img/recipe_img/flammekueche_lardons_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_flammekueche_lardons.png'),
        text: ["Préchauffez le four à 250°C (230°C chaleur tournante).",
        "Coupez les oignons en très fines rondelles.",
        "Faites chauffer une grande poêle à feu moyen-vif.", "Faites-y revenir les oignons, les lardons et 1 cs de vinaigre balsamique blanc par personne 5-6 min sans les faire colorer, ou jusqu'à ce que le vinaigre se soit évaporé."]
      },
      {
        image: require('./img/recipe_img/2_flammekueche_lardons.png'),
        text: ["Placez la pâte sur une plaque recouverte de papier sulfurisé et étalez-y la crème.",
        "Répartissez le mélange oignons et lardons par-dessus. Poivrez.",
        "Une fois le four bien chaud, enfournez la tarte 10-15 min, ou jusqu'à ce que les bords soient légèrement noircis.",]
      },
      {
        image: require('./img/recipe_img/3_flammekueche_lardons.png'),
        text: ["Coupez la pomme en quartiers et ôtez le trognon, puis coupez les quartiers en fines tranches.",
        "Dans un saladier, faites une vinaigrette en mélangeant un filet d’huile d’olive et de vinaigre balsamique.", "Salez et poivrez.",
        "Ajoutez la salade et la pomme. Mélangez.",]
      },

      {
        image: require('./img/recipe_img/4_flammekueche_lardons.png'),
        text: [ "Coupez la flammekueche en parts.",
        "Servez-les dans les assiettes avec la salade de pomme."]
      },
    ]
  },
  {
    title: "Pancakes Citron",
    subtitle: "avec cannelle & yaourt à la grecque (env. 8-12)",
    description: "Partagez ce délicieux brunch à deux ! Au menu, des pancakes ultra moelleux, recouverts d’une purée de myrtilles et accompagnés de bacon, de kiwi frais et d’un jus d’oranges pressées. Faites-vous plaisir avec cette recette sucrée-salée très rapide à préparer.",
    course: ["Pancake","Sain",],
    difficulty: "Simple",
    allergy: "Gluten • Blé • Lait",
    preparationTime: "60 min",
    kcal: "638",
    ingredients: ["2 banane(s)","100g Yaourt à la grecque", "Cannelle en poudre", "½ sachet Levure chimique", "175g Farine", "1 Citron(s)", "1 Pomme(s)", "2 Œuf(s)", "4cs Lait", "1cc Beurre", "Sel"],
    image: require('./img/recipe_img/Pancake_lemon.png'),
    image_round: require('./img/recipe_img/Pancake_lemon_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_Pancake_lemon.png'),
        text: ["Écrasez 2 bananes dans un saladier.", "Cassez-y un à un les œufs, puis ajoutez le yaourt, 4 cs de lait et 1½ cc de cannelle (selon votre goût) et mélangez bien avec un fouet.",
        "Ajoutez ½ sachet de levure et une pincée de sel, puis versez 175 g de farine et mélangez à nouveau jusqu’à obtenir une texture épaisse et homogène.",
        "Couvrez avec du film alimentaire ou un torchon et laissez reposer la pâte au moins 15 min."]
      },
      {
        image: require('./img/recipe_img/2_Pancake_lemon.png'),
        text: ["Pendant ce temps, lavez bien le citron et prélevez-en le zeste avec une râpe fine, puis coupez-le en tranches.",
        "Coupez la pomme en fines demi-lunes", "Disposez-les dans un bol d’eau pour ne pas qu’elles noircissent. Vous les essuierez avec de l’essuie-tout au moment de servir.",]
      },
      {
        image: require('./img/recipe_img/3_Pancake_lemon.png'),
        text: ["Faites chauffer du beurre dans une grande poêle à feu moyen.",
        "Lorsque la poêle est bien chaude, versez-y environ ½ louche de pâte (selon la taille des pancakes que vous souhaitez).",
        "Faites cuire le pancake 2-3 min de chaque côté.",
        "Répétez l’opération jusqu’à épuisement de l’appareil.",]
      },

      {
        image: require('./img/recipe_img/4_Pancake_lemon.png'),
        text: [ "Une fois les pancakes terminés, servez-les dans une grande assiette.",
        "Ajoutez les tranches de pomme par-dessus et un peu de zestes et de rondelles de citron.",
        "Pressez quelques gouttes de jus de citron sur le tout, si vous le souhaitez."]
      },
    ]
  },
  {
    title: "Bacon, pancakes aux myrtilles",
    subtitle: "2personnes - recette pancake non inclus",
    description: "Partagez ce délicieux brunch à deux ! Au menu, des pancakes ultra moelleux, recouverts d’une purée de myrtilles et accompagnés de bacon, de kiwi frais et d’un jus d’oranges pressées. Faites-vous plaisir avec cette recette sucrée-salée très rapide à préparer.",
    course: ["Pancake"],
    difficulty: "Simple",
    allergy: "Œuf • Gluten • Blé • Lait • Fruits à coque • Noix de pécan",
    preparationTime: "20 min",
    kcal: "958 ",
    ingredients: ["95g Tranches de poitrine fumée","Pancake", "125g Myrtilles", "Noix de pécan concassées", "Cannelle en poudre", "2 Kiwi(s)", "2cs Sucre"],
    image: require('./img/recipe_img/Brunch_pancakeidea.png'),
    image_round: require('./img/recipe_img/Brunch_pancakeidea_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_Brunch_pancakeidea.png'),
        text: ["Préchauffez le four à 210°C en mode grill.",
        "Décollez les tranches de poitrine fumée les unes des autres et disposez-les sur une plaque recouverte de papier sulfurisé.","Enfournez les tranches de poitrine 7-8 min dans la partie haute du four."]
      },
      {
        image: require('./img/recipe_img/2_Brunch_pancakeidea.png'),
        text: ["Si vous les souhaitez un peu tièdes, ajoutez les pancakes lorsqu'il reste 2-3 min de cuisson à la poitrine fumée (ou toastez-les quelques secondes au grille-pain si vous en avez un).","Retirez le tout une fois que la poitrine est bien dorée.",]
      },
      {
        image: require('./img/recipe_img/3_Brunch_pancakeidea.png'),
        text: ["Pendant ce temps, faites chauffer une petite casserole à feu moyen-vif.", "Ajoutez-y les noix de pécan, le sucre (ou du miel), 1½ cc de cannelle (selon votre goût) et les myrtilles.", "Faites revenir le tout 4-5 min en écrasant légèrement une partie des myrtilles avec une spatule, ou jusqu'à obtenir une belle couleur violette et que les myrtilles écrasées rendent un peu de jus.",
        "Épluchez les kiwis et coupez-les en tranches.",]
      },

      {
        image: require('./img/recipe_img/4_Brunch_pancakeidea.png'),
        text: [ "Laissez refroidir la tarte 5-10 min.",
        "Disposez les pancakes dans les assiettes. Ajoutez la préparation aux myrtilles et pécan par-dessus.",
        "Ajoutez les tranches de bacon et de kiwi à côté."]
      },
    ]
  },
  {
    title: "Tarte rustique pomme & myrtilles",
    subtitle: "+/- 8 parts",
    description: "Réalisez cette délicieuse tarte rustique pour un goûter réussi avec vos proches ! Simple à faire et gourmande, elle est garnie de myrtilles, pomme et de confiture de fraises, puis agrémentée de crème et d’amandes effilées. Une gourmandise en toute simplicité.",
    course: ["Dessert", "Tarte"],
    difficulty: "Intermédiaire",
    allergy: "Gluten • Blé • Lait • Fruits à coque • Amandes",
    preparationTime: "55 min",
    kcal: "698",
    ingredients: ["Pâte à tarte","2 Pomme(s)", "125g Myrtilles", "Confiture de fraises", "50g Crème épaisse", "Amandes effilées", "1cs Lait", "2cs Sucre"],
    image: require('./img/recipe_img/Tarte_rustique.png'),
    image_round: require('./img/recipe_img/Tarte_rustique.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_Tarte_rustique.png'),
        text: ["Préchauffez le four à 200°C (180°C chaleur tournante).",
        "Réservez la pâte au frais jusqu’à la prochaine étape.",
        "Retirez le trognon de la pomme et coupez-la en petits dés.",
        "Coupez les plus grosses myrtilles en deux.",
        "Dans un grand bol, mélangez un pot de confiture de fraises avec la pomme et les myrtilles.",]
      },
      {
        image: require('./img/recipe_img/2_Tarte_rustique.png'),
        text: ["Déroulez la pâte et disposez-la avec son papier sulfurisé sur une plaque de cuisson.",
        "Étalez le deuxième pot de confiture de fraises au centre, puis répartissez la garniture aux fruits au milieu de la pâte en gardant 2 cm de libres au bord.",
        "Repliez le bord de pâte vers l’intérieur (comme sur la photo).",
        "Badigeonnez le bord de lait avec un pinceau à pâtisserie, puis saupoudrez 1 cs de sucre sur la tarte.",]
      },
      {
        image: require('./img/recipe_img/3_Tarte_rustique.png'),
        text: ["Enfournez la tarte 35-40 min, ou jusqu’à ce qu’elle soit joliment dorée et bien cuite en dessous.",
        "Pendant ce temps, ajoutez la crème et 1 cs de sucre dans un bol. Fouettez légèrement quelques secondes pour obtenir un mélange homogène.",
        "Si vous le souhaitez, faites chauffer une poêle, à sec (sans matière grasse) à feu moyen-vif et faites-y dorer les amandes effilées (cela leur donnera plus de goût).", "Réservez.",]
      },

      {
        image: require('./img/recipe_img/4_Tarte_rustique.png'),
        text: [ "Laissez refroidir la tarte 5-10 min.",
        "Nappez-la de crème et saupoudrez-la d’amandes effilées, puis coupez-la en parts."]
      },
    ]
  },
  {
    title: "Le classique brownie aux noix",
    subtitle: "+/- 8 parts",
    description: "Préparée à base d’ingrédients frais, cette recette est facile à réaliser et sera parfaite en dessert, en goûter ou bien pour célébrer un évènement particulier en bonne compagnie. Faites-vous plaisir avec ce délicieux brownie aux noix. Régal assuré !",
    course: ["Dessert", "Brownie"],
    difficulty: "Intermédiaire",
    allergy: "Lait • Soja • Blé • Fruits à coque",
    preparationTime: "50 min",
    kcal: "973",
    ingredients: ["125g Beurre doux","100g Pépites de chocolat noir", "50g Farine", "100g Sucre de canne","Noix concassées", "2 Œuf(s)", "Sel"],
    image: require('./img/recipe_img/browniesNuts.png'),
    image_round: require('./img/recipe_img/browniesNuts.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_brownies2choco.png'),
        text: ["Préchauffez le four à 200°C (180°C chaleur tournante).",
        "Sortez le beurre du réfrigérateur et coupez-le grossièrement en dés.","Placez le beurre et le chocolat noir dans une casserole et faites-les chauffer à feu doux (ou faites-les fondre dans un bol au micro‑ondes à puissance moyenne pour ne pas surchauffer le chocolat).",
        "Avec une spatule, mélangez régulièrement le contenu de la casserole jusqu’à ce que les pépites de chocolat noir soient parfaitement fondues.",]
      },
      {
        image: require('./img/recipe_img/2_browniesNuts.png'),
        text: ["Dans un saladier, mélangez au fouet ou à la fourchette les œufs et le sucre.",
        "Ajoutez le chocolat noir fondu ainsi qu’une pincée de fleur de sel (ou de sel de table) et mélangez en ajoutant petit à petit la farine.",
        "Terminez par ajouter les noix.",]
      },
      {
        image: require('./img/recipe_img/3_brownies2choco.png'),
        text: ["Beurrez ou huilez (avec une huile neutre) un moule à gâteau, carré de préférence.", "Versez la préparation en son centre.",
          "Enfournez le brownie 28-34 min, ou jusqu’à ce que des fissures apparaissent sur le dessus et que le cœur semble saisi quand on bouge le moule." ]
      },

      {
        image: require('./img/recipe_img/4_browniesNuts.png'),
        text: [ "Sortez le brownie du four et laissez-le refroidir 10-15 min.",
        "Coupez-le en 6 ou 8 parts et servez-les une par une depuis le plat."]
      },
    ]
  },
  {
    title: "Brownie double choco",
    subtitle: "+/- 8 parts",
    description: "Comme une petite envie de sucré ? Réalisez ce délicieux brownie au chocolat noir et garni de pépites de chocolat blanc, pour un maximum de gourmandise.",
    course: ["Dessert", "Brownie"],
    difficulty: "Intermédiaire",
    allergy: "Lait • Soja • Blé",
    preparationTime: "50 min",
    kcal: "1282",
    ingredients: ["125g Beurre doux","100g Pépites de chocolat noir", "50g Farine", "50g Sucre de canne","100g Pépites de chocolat blanc", "2 Œuf(s)", "Sel"],
    image: require('./img/recipe_img/brownies2choco.png'),
    image_round: require('./img/recipe_img/brownies2choco.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_brownies2choco.png'),
        text: ["Préchauffez le four à 200°C (180°C chaleur tournante).",
        "Sortez le beurre du réfrigérateur et coupez-le grossièrement en dés.","Placez le beurre et le chocolat noir dans une casserole et faites-les chauffer à feu doux (ou faites-les fondre dans un bol au micro‑ondes à puissance moyenne pour ne pas surchauffer le chocolat).",
        "Avec une spatule, mélangez régulièrement le contenu de la casserole jusqu’à ce que les pépites de chocolat noir soient parfaitement fondues.",]
      },
      {
        image: require('./img/recipe_img/2_brownies2choco.png'),
        text: ["Dans un saladier, mélangez les œufs et 50 g de sucre au fouet ou à la fourchette.",
        "Ajoutez le chocolat noir fondu, ainsi qu’une pincée de fleur de sel (ou de sel de table) et mélangez en ajoutant 50 g de farine petit à petit.",
        "Terminez par ajouter les pépites de chocolat blanc.",]
      },
      {
        image: require('./img/recipe_img/3_brownies2choco.png'),
        text: ["Beurrez ou huilez (avec une huile neutre) un moule à gâteau, carré de préférence.",
        "Versez la préparation au centre.",
        "Enfournez le brownie 28-34 min.",]
      },

      {
        image: require('./img/recipe_img/4_brownies2choco.png'),
        text: [ "Il est prêt lorsque des fissures apparaissent sur le dessus et lorsque le cœur semble saisi quand on bouge le moule.","Sortez le brownie du four et laissez-le refroidir 10-15 min.","Coupez-le en 6 ou 8 parts et servez-les une par une depuis le plat."]
      },
    ]
  },
  {
    title: "Carrot cake & glaçage maison",
    subtitle: "+/- 8 parts",
    description: "Quel plaisir de préparer des recettes sucrées en bonne compagnie ! Cakes, gâteaux ou biscuits… avec nos recettes, rien de plus simple ! Chaque semaine, nous vous en proposons une nouvelle, facile et rapide à réaliser avec des ingrédients frais. Vous préparez aujourd’hui un délicieux carrot cake avec un glaçage maison, très simple à réaliser. Accompagnez-le d’une tasse de Slow Coffee et savourez l’instant !",
    course: ["Dessert", "Cake"],
    difficulty: "Intermédiaire",
    allergy: "Blé • Fruits à coque • Noix de pécan • Lait",
    preparationTime: "65 min",
    kcal: "1585",
    ingredients: ["150g Farine","2 Carotte(s)", "½ sachet Levure chimique", "3cc Cannelle en poudre","Noix de muscade", "100g Sucre de canne", "Noix de pécan concassées", "50g Sucre Glace","50g Yaourt à la grecque", "2 Œuf(s)", "Sel", "10cs Huile"],
    image: require('./img/recipe_img/Carrot_cake.png'),
    image_round: require('./img/recipe_img/Carrot_cake.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_Carrot_cake.png'),
        text: ["Préchauffez le four à 200°C (180°C chaleur tournante).",
"Beurrez ou huilez un moule à cake et farinez-le très légèrement (ou recouvrez-le de papier sulfurisé).",
"Épluchez et râpez 300 g de carotte.",
"Dans un grand bol, mélangez 150 g de farine, ½ sachet de levure, une généreuse pincée de sel, 2 cc de cannelle et râpez un peu de noix de muscade par-dessus (dosez les épices selon votre goût !)."]
      },
      {
        image: require('./img/recipe_img/2_Carrot_cake.png'),
        text: ["Versez la pâte dans le moule à cake. Enfournez 40-50 min ou jusqu'à ce que le cake soit cuit à cœur.",
        "Pendant ce temps, mélangez 50 g de sucre glace et le yaourt à la fourchette pour obtenir un mélange homogène.","Réservez au frais.",]
      },
      {
        image: require('./img/recipe_img/3_Carrot_cake.png'),
        text: ["Sortez le cake du four, démoulez-le et laissez-le refroidir entièrement sur une assiette.",
        "Nappez le dessus du cake avec le glaçage, puis saupoudrez-le du reste de noix de pécan.",]
      },

      {
        image: require('./img/recipe_img/4_Carrot_cake.png'),
        text: [ "Il est prêt lorsque des fissures apparaissent sur le dessus et lorsque le cœur semble saisi quand on bouge le moule.","Sortez le brownie du four et laissez-le refroidir 10-15 min.","Coupez-le en 6 ou 8 parts et servez-les une par une depuis le plat."]
      },
    ]
  },
  {
    title: "Tagliatelle alla bolognese di nonna Maria",
    subtitle: "avec des lardons, du pecorino & du persil",
    description: "Aujourd’hui, vous réalisez votre sauce bolognaise avec un mélange de carotte et d’oignon. Le plat que vous cuisinez est traditionnellement préparé avec de la pancetta et un mélange de bœuf et de veau haché. La version di Nonna Maria inclut des lardons fumés et du bœuf haché. Si vous avez le temps, faites la sauce en avance : elle est encore meilleure le lendemain !",
    course: ["Viande","Pasta"],
    difficulty: "Intermédiaire",
    allergy: "Soja • Gluten • Orge • Moutarde • Œuf • Blé • Lait",
    preparationTime: "90 min",
    kcal: "1166",
    ingredients: ["1 Oignon(s)", "2 Gousse(s) d'ail","1 Carotte(s)","100g Lardons fumés","Persil", "200g Viande hachée au bœuf", "Concentré de tomate","1 sachet d'origan séché", "1 feuille de laurier", "5 brins romarin", "15ml Sauce Worcestershire","250g Tagliatelle fraîches", "40g Pecorino râpé", "50g Mascarpone", "Sel", "Poivre", "500 ml Bouillon de bœuf", "1cc Sucre", "Huile d'olive"],
    image: require('./img/recipe_img/bologneseDiNonna.png'),
    image_round: require('./img/recipe_img/bologneseDiNonna_Rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_bologneseDiNonna.png'),
        text: ["Préparez le bouillon avec de l’eau chaude.",
        "Hachez finement l’oignon, l’ail et la carotte (plus les morceaux sont petits, plus votre sauce sera fondante).",
        "Effeuillez et ciselez le persil.",]
      },
      {
        image: require('./img/recipe_img/2_bologneseDiNonna.png'),
        text: ["Faites dorer les lardons à sec dans une marmite 5 min à feu moyen-vif.",
        "Faites chauffer l'huile d’olive dans une casserole à feu moyen. Ajoutez-y tous les légumes coupés.","Couvrez, et faites-les suer 8-10 min.", "Salez et poivrez.",
        "Ajoutez le bœuf haché aux lardons.","Faites revenir 5-6 min à feu vif en émiettant les morceaux avec le dos d'une cuillère en bois.",]
      },
      {
        image: require('./img/recipe_img/3_bologneseDiNonna.png'),
        text: ["Ajoutez les légumes, le concentré de tomates, l’origan et ½ cc de sucre par personne à la marmite contenant la viande.", "Salez, poivrez et mélangez.","Faites cuire 5 min à feu moyen-vif.",
        "Ajoutez le laurier, le romarin, la sauce Worcestershire et le bouillon.",
        "Grattez les sucs collés au fond de la marmite, couvrez et laissez mijoter 45-60 min à feu doux.",]
      },

      {
        image: require('./img/recipe_img/4_bologneseDiNonna.png'),
        text: ["Lorsqu'il reste 10 min de cuisson à la sauce, portez une grande casserole d’eau à ébullition pour les tagliatelle.","Retirez le laurier et le romarin de la sauce, ainsi que le couvercle de la marmite.",
        "Faites cuire les pâtes 4-5 min à couvert dans la casserole d'eau bouillante. Ces pâtes fraîches peuvent coller un peu. Utilisez donc deux fourchettes pour les détacher pendant la cuisson.", "Réservez une tasse d’eau de cuisson des pâtes pour l'étape 5."]
      },
      {
        image: require('./img/recipe_img/5_bologneseDiNonna.png'),
        text: ["Égouttez les tagliatelle, puis ajoutez-les à la marmite.", "Ajoutez un filet d’eau des pâtes pour lier la sauce et mélangez bien.", "Ajoutez la moitié du pecorino et du persil, ainsi que le mascarpone." ,"Mélangez à nouveau avec un peu d’eau de cuisson si besoin."]
      },
      {
        image: require('./img/recipe_img/6_bologneseDiNonna.png'),
        text: ["Lorsque la consistance de la sauce vous convient, servez aussitôt les tagliatelle alla bolognese dans des assiettes creuses.","Saupoudrez-les avec le reste de pecorino et de persil.","Salez, poivrez, et arrosez avec un filet d’huile d’olive selon votre goût."]
      },
    ]
  },
  {
    title: "Poulet grillé & sauce à la figue",
    subtitle: "avec des légumes au four, du persil & des noix",
    description: "La sauce figue aux noix est la vedette de cette recette, avec ses notes sucrées et épicées qui se marient parfaitement avec la viande grillée et les légumes rôtis. On vous donne donc rendez-vous en cuisine pour préparer ce plat familial plein de saveurs et de textures surprenantes. Une touche de persil frais pour une note herbacée rafraîchissante et le tour est joué !",
    course: ["Viande",],
    difficulty: "Intermédiaire",
    allergy: "Fruits à coque",
    preparationTime: "40 min",
    kcal: "1042",
    ingredients: ["1 Carotte(s)","500g Grenailles", "2 Oignon(s)", "Persil","2 Cuisse(s) de poulet","Noix concassées","Confiture de figues", "Sel", "Poivre", "120 ml Bouillon de volaille", "1cc Farine", "2cc Beurre","1cc Vinaigre balsamique", "Huile d'olive"],
    image: require('./img/recipe_img/chicken_figue.png'),
    image_round: require('./img/recipe_img/chicken_figue_rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_chicken_figue.png'),
        text: ["Préchauffez le four à 210°C (190°C chaleur tournante)." ,"Préparez le bouillon avec de l'eau chaude.",
        "Épluchez et coupez la carotte en demi-lunes de 5 mm." ,"Lavez et coupez les grenailles en 4, voire en 6 pour les plus grosses.",
        "Ciselez l'oignon et le persil (effeuillez-le au préalable si vous le souhaitez).",]
      },
      {
        image: require('./img/recipe_img/2_chicken_figue.png'),
        text: ["Disposez la carotte et les grenailles sur une plaque recouverte de papier sulfurisé.","Mélangez-les avec un filet d'huile d'olive, du sel et du poivre.", "Enfournez-les 10 min.",]
      },
      {
        image: require('./img/recipe_img/3_chicken_figue.png'),
        text: ["Lorsqu'il reste environ 5 min de cuisson aux légumes, faites chauffer une poêle à sec à feu moyen-vif.",
        "Ajoutez-y les cuisses de poulet, côté peau vers le bas.", "Faites-les revenir 4-6 min du même côté, ou jusqu'à ce que la peau soit dorée.",
        "Coupez-le feu et réservez la poêle pour l'étape 5.",]
      },

      {
        image: require('./img/recipe_img/4_chicken_figue.png'),
        text: ["Disposez les cuisses de poulet côté peau vers le bas à côté des légumes sur la plaque ou dans un plat à four.",
        "Enfournez-les et prolongez la cuisson de 28-30 min, ou jusqu'à ce qu'elles soient cuites à cœur et que les légumes soient fondants."]
      },
      {
        image: require('./img/recipe_img/5_chicken_figue.png'),
        text: ["Lorsqu'il reste environ 10 min de cuisson au poulet, remettez la poêle à chauffer à feu moyen-vif avec un petit filet d'huile d'olive.", "Ajoutez l'oignon et les noix et faites-les revenir 3-4 min.",
        "Ajoutez la confiture, le vinaigre balsamique et la farine,", "Remuez quelques secondes, puis versez le bouillon et faites réduire la sauce 2-3 min, ou jusqu'à ce qu'elle soit nappante.",
        "Terminez en ajoutant le beurre et mélangez activement 1 min."]
      },
      {
        image: require('./img/recipe_img/6_chicken_figue.png'),
        text: ["Servez les légumes rôtis dans les assiettes. Ajoutez les cuisses de poulet à côté.",
        "Versez la sauce par-dessus. Saupoudrez de persil."]
      },
    ]
  },
  {
    title: "L'Ultimate Burger : tomme & oignons confits",
    subtitle: "avec des carottes rôties & une mayo ciboulette",
    description: "Les délicieux pains à burger que vous retrouvez dans vos box sont conçus dans le respect des traditions par Sandrine et Stéphane en Corrèze pour la Maison Salesse. Des ingrédients 100% français, aucun additif et un pétrissage lent : tout est fait pour le bonheur de vos papilles !",
    course: ["Burger","Street Food",  "Epicé", "<30min"],
    difficulty: "Simple",
    allergy: "Œuf • Moutarde • Lait • Gluten • Blé",
    preparationTime: "40 min",
    kcal: "1278",
    ingredients: ["3 Carotte(s)","1 Sucrine","1 Oignon(s)", "½ sachets Ciboulette","50g Mayonnaise","50g Tomme râpée", "200g Viande hachée au bœuf", "½ sachet Mélange d'épices pour BBQ", "Sel", "Poivre", "2 Pain(s) burger aux graines", "1cc Sucre", "Beurre", "Huile d'olive"],
    image: require('./img/recipe_img/Burger_Ultimate.png'),
    image_round: require('./img/recipe_img/Burger_Ultimate.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_Burger_Ultimate.png'),
        text: ["Préchauffez le four à 220°C (200°C chaleur tournante). Sortez le beurre et la viande du réfrigérateur.","Épluchez et coupez les carottes en bâtonnets de 1 cm d'épaisseur. Mélangez-les sur une plaque recouverte de papier sulfurisé avec un filet d’huile d’olive, du sel et du poivre.","Enfournez-les dans la partie haute du four 20-25 min, ou jusqu’à ce qu'elles soient dorées et fondantes. Remuez à mi-cuisson.",]
      },
      {
        image: require('./img/recipe_img/2_Burger_Ultimate.png'),
        text: ["Coupez l’oignon en fines demi-lunes.","Faites chauffer une noix de beurre avec un filet d’huile d’olive dans une grande poêle à feu moyen-vif.", "Ajoutez-y l’oignon, du sel et du poivre.","Baissez légèrement le feu et faites cuire 10 min à feu moyen en remuant de temps en temps.","Pendant ce temps, coupez la sucrine en fines lanières.","Ciselez la ciboulette. Dans un bol, mélangez-la avec la mayonnaise. Réservez.",]
      },
      {
        image: require('./img/recipe_img/3_Burger_Ultimate.png'),
        text: ["Dans un saladier, mélangez le bœuf haché avec 1 cc d'épices BBQ par personne, du sel et du poivre.","Pressez et façonnez des steaks (un par personne) d'environ 2 cm d'épaisseur maximum.","Lorsque les oignons sont fondants, saupoudrez-les de sucre.","Poursuivez la cuisson de 3-5 min en remuant plus régulièrement à mesure que les oignons ramollissent.", "Laissez-les s'accrocher légèrement au fond de la poêle avant de les remuer, jusqu'à ce qu'ils soient bien caramélisés. Réservez-les hors de la poêle.",]
      },

      {
        image: require('./img/recipe_img/4_Burger_Ultimate.png'),
        text: ["Ouvrez les pains burger en deux et étalez une fine couche de beurre sur chaque face si vous le souhaitez.","Enfournez-les sur une plaque de cuisson 3-4 min, ou jusqu’à ce que le beurre soit fondu et les pains légèrement toastés."]
      },
      {
        image: require('./img/recipe_img/5_Burger_Ultimate.png'),
        text: ["Faites chauffer un filet d'huile d'olive dans la poêle des oignons à feu moyen-vif.","Faites-y dorer les steaks 2-3 min de chaque côté.","Déposez du fromage sur chaque steak. Ajoutez 1 cs d’eau à côté de la viande et couvrez aussitôt la poêle. Coupez le feu et laissez le fromage fondre."]
      },
      {
        image: require('./img/recipe_img/6_Burger_Ultimate.png'),
        text: ["Répartissez le confit d’oignons sur la base des pains burger. Placez le steak recouvert de fromage par-dessus ainsi que les lanières de sucrine.","Tartinez l’autre moitié du pain de mayonnaise à la ciboulette, puis refermez le burger.",
        "Servez avec les carottes rôties."]
      },

    ]
  },
  {
    title: "Farfalle aux lardons & courgette",
    subtitle: "avec du fromage frais aux fines herbes",
    description: "Une recette gourmande qui séduira à coup sûr les amateurs de saveurs italiennes et françaises.",
    course: ["Pasta", "Simple", "<30min"],
    difficulty: "Simple",
    allergy: "Gluten • Blé • Lait",
    preparationTime: "25 min",
    kcal: "927",
    ingredients: ["1 Gousse(s) d'ail","Persil","1 Courgette(s)","180g Farfalle", "150g Lardons fumés", "½ Citron","40g Fromage râpé","50g Fromage frais aux herbes", "Sel", "Poivre", "Huile d'olive"],
    image: require('./img/recipe_img/Farfalle_lardonCourgette.png'),
    image_round: require('./img/recipe_img/Farfalle_lardonCourgette_Rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/farfalle.png'),
        text: ["Portez une grande casserole d’eau salée à ébullition.",
        "Faites-y cuire les farfalle 11-13 min. Conservez quelques louches d'eau de cuisson, puis égouttez les pâtes.",
        "Ciselez l’ail.", "Effeuillez le persil et ciselez-le.",
        "Coupez la courgette en fines rondelles et le citron en quartiers.",]
      },
      {
        image: require('./img/recipe_img/2_Farfalle_lardonCourgette.png'),
        text: ["Faites chauffer un wok ou une sauteuse à sec à feu moyen-vif. Ajoutez-y les lardons. Faites cuire 2-3 min en remuant régulièrement, puis réservez-les dans un bol.","Dans la même sauteuse, faites chauffer un petit filet d'huile d'olive, puis ajoutez-y la courgette et l'ail."," Salez et poivrez. Laissez cuire 5-6 min à feu moyen, ou jusqu'à ce que la courgette soit légèrement fondante.",]
      },
      {
        image: require('./img/recipe_img/3_Farfalle_lardonCourgette.png'),
        text: ["Ajoutez ¼ de louche d'eau de cuisson des pâtes par personne, le fromage râpé ainsi que le fromage frais aux herbes à la sauteuse.","Mélangez bien, puis ajoutez les lardons, les farfalle, le jus de ¼ de citron par personne et la moitié du persil.", "Salez et poivrez.",
        "Laissez cuire 1-2 min en mélangeant activement pour émulsionner la sauce et la rendre crémeuse.",]
      },

      {
        image: require('./img/recipe_img/4_Farfalle_lardonCourgette.png'),
        text: ["Servez les farfalle dans des assiettes creuses.","Parsemez du reste de persil et ajustez l'assaisonnement en sel, poivre et jus de citron selon votre goût."]
      },
    ]
  },
  {
    title: "Dinde façon Kung Pao",
    subtitle: "avec du poivron, du riz & des cacahuètes",
    description: "Connaissez-vous le Kung Pao, ce plat traditionnel chinois de poulet sauté ? Ce soir nous vous en proposons une version à la dinde, l'une des viandes les moins caloriques. Servi avec du riz basmati, des légumes sautés (du poivron, riche en eau et peu calorique) et saupoudré de cacahuètes, voilà un plat plein de saveurs et pauvre en calories. Régalez-vous !",
    course: ["Asie", "Chine", "Epicé", "<30min"],
    difficulty: "Intermédiaire",
    allergy: "Soja • Blé • Graines de sésame • Arachides",
    preparationTime: "25 min",
    kcal: "704",
    ingredients: ["2 Oignon(s)","1 Gousse(s) d'ail","½ Piment","½ Gingembre","1 Poivron","150g de Riz", "2pièces Filet de dinde","20ml Sauce soja", "25ml Sauce hoisin","Cacahuètes non salées", "80ml Bouillon de légumes","1cc Sucre","Miel", "1cc Farine", "Sel", "Poivre", "10ml Huile de sésame", "Huile"],
    image: require('./img/recipe_img/KungPao.png'),
    image_round: require('./img/recipe_img/KungPao_Rond.png'),
    steps: [

      {
        image: require('./img/recipe_img/1_KungPao.png'),
        text: ["Dans un grand bol, mélangez la sauce soja, la sauce hoisin, le miel, la farine et l’huile de sésame, ainsi que la moitié de l’ail, du piment et du gingembre.",
        "Ajoutez la dinde, remuez bien, puis laissez mariner jusqu’à utilisation.",
        "Préparez le bouillon avec de l’eau chaude.",]
      },
      {
        image: require('./img/recipe_img/rice.png'),
        text: ["Faites cuire le riz 12-14 min dans la casserole.","Égouttez-le et réservez-le à couvert jusqu'au service.",]
      },
      {
        image: require('./img/recipe_img/3_KungPao.png'),
        text: ["Ciselez l’ail et râpez le gingembre.",
        "Coupez les oignons en fines demi-lunes.",
        "Coupez le poivron en morceaux d'1 cm.",
        "Épépinez et émincez le piment (ça pique ! Dosez-le selon votre goût).",
        "Coupez la dinde en lanières d'1½ cm.",]
      },
      {
        image: require('./img/recipe_img/4_KungPao.png'),
        text: ["Faites chauffer un filet d’huile de tournesol dans un wok ou une sauteuse à feu moyen-vif.", "Faites-y revenir les oignons, le poivron et le reste d'ail, de piment et de gingembre 3-5 min.",
        "Ajoutez la dinde (conservez la marinade dans le bol) et faites sauter 2-3 min.",
        "Puis, ajoutez la marinade et le bouillon et faites sauter 1-2 min de plus jusqu’à ce que la sauce épaississe légèrement.", "Salez et poivrez."]
      },

      {
        image: require('./img/recipe_img/5_KungPao.png'),
        text: ["Servez le riz dans les assiettes et répartissez le contenu de la sauteuse par-dessus.","Saupoudrez de cacahuètes."]
      },
    ]
  },
  {
    title: "Salade thaï aux émincés végétariens",
    subtitle: "avec des cacahuètes, de la coriandre & du citron",
    description: "Envie de découvrir la cuisine thaïlandaise façon végétarienne ? Cette recette est faite pour vous ! Dans ce plat, les nouilles udon sont revenues avec des émincés végétariens marinés dans de la sauce soja, du gingembre et du citron pour un maximum de saveurs. Un peu de coriandre pour la fraîcheur et de cacahuètes pour le croquant et le tour est joué !",
    course: ["Veggie", 'Asie', "Thaïlande", "<30min", 'Sain'],
    difficulty: "Facile",
    allergy: "Blé • Soja • Orge • Œuf • Arachides",
    preparationTime: "20 min",
    kcal: "574",
    ingredients: ["1 Oignon(s)","1 Gousse(s) d'ail","½ Citron","½ Gingembre","1 Concombre(s)","1 Carotte(s)", "200g Nouilles udon fraîches","Coriandre", "160g Emincés végétariens","Sauce soja", "Sauce asiatique sucrée","Cacahuètes non salées", "1cc Sucre", "Sel", "Poivre", "Huile"],
    image: require('./img/recipe_img/SaladeThai_Vegetarien.png'),
    image_round: require('./img/recipe_img/SaladeThai_Vegetarien_Rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/1_SaladeThai_Vegetarien.png'),
        text: ["Ciselez l’ail. Râpez finement le gingembre.", "Coupez le citron en quartiers.",
        "Dans un bol, mélangez la sauce asiatique sucrée la sauce soja, le gingembre, l’ail, et, par personne : le jus de ¼ de citron et ½ cc de sucre.",
        "Mélangez les ⅔ de cette préparation aux émincés végétariens.",
        "Laissez mariner pendant que vous coupez les légumes.",]
      },
      {
        image: require('./img/recipe_img/2_SaladeThai_Vegetarien.png'),
        text: ["Épluchez la carotte. Coupez séparément le concombre, l'oignon et la carotte en deux dans l'épaisseur, puis taillez-les en fines demi-rondelles.",
        "Effeuillez et ciselez la coriandre.",
        "Faites tremper les nouilles udon dans un bol d'eau froide 1 min pour les délier, puis égouttez-les.",
        "Dans un saladier, mélangez bien le concombre, l’oignon et la coriandre."]
      },
      {
        image: require('./img/recipe_img/3_SaladeThai_Vegetarien.png'),
        text: ["Faites chauffer l’huile de tournesol à feu moyen-vif dans un wok ou une sauteuse.",
        "Faites-y sauter la carotte 3-4 min.", "Ajoutez les émincés végétariens et poursuivez la cuisson de 2-3 min.",
        "Ajoutez les nouilles udon et faites cuire encore 2-3 min."]
      },

      {
        image: require('./img/recipe_img/4_SaladeThai_Vegetarien.png'),
        text: ["Ajoutez les nouilles udon, la carotte et les émincés végétariens à la salade et servez-la dans les assiettes.","Garnissez-la avec le reste des quartiers de citron et les cacahuètes.","N’oubliez pas le reste de la sauce : ajoutez-en à votre guise."]
      },
    ]
  },
  {
    title: "Bowl de bœuf & légumes à la japonaise",
    subtitle: "avec une mayonnaise au soja",
    description: "Redécouvrez le bœuf dans cette recette inspirée de la cuisine nippone, où la viande est cuite avec une sauce soja-sésame à tomber par terre ! Vous la dégusterez avec un bol de riz et quelques légumes sautés. Garnissez le tout de graines de sésame et d’une mayonnaise à la japonaise sensationnelle !",
    course: ["Viande", 'Asie', "Japon"],
    difficulty: "Intermédiaire",
    allergy: "Œuf • Moutarde • Soja • Blé • Graines de sésame Arachides • Fruits à coque",
    preparationTime: "35 min",
    kcal: "760",
    ingredients: ["1 Oignon(s)","1 Gousse(s) d'ail","½ Gingembre","1 Pak choï","1 Carotte(s)", "150g de Riz","10ml Huile de sésame","Sauce soja", "10g Graines de sésame", "Émincés de bœuf", "Sel", "Poivre", "Huile"],
    image: require('./img/recipe_img/BowlBeef_Japan.png'),
    image_round: require('./img/recipe_img/BowlBeef_Japan_Rond.png'),
    steps: [
      {
        image: require('./img/recipe_img/rice.png'),
        text: ["Portez une casserole d'eau à ébullition pour le riz.","Faites cuire le riz 12-14 min dans la casserole.","Égouttez-le et réservez-le à couvert jusqu'au service.",]
      },
      {
        image: require('./img/recipe_img/3_BowlBeef_Japan.png'),
        text: ["Dans un petit bol, mélangez la moitié de la sauce soja avec la mayonnaise. Réservez au frais.","Dans un autre petit bol, mélangez la sauce soja restante avec l'huile de sésame et, par personne : ½ cs de vinaigre balsamique blanc (ou de riz) et ½ cc de sucre."]
      },
      {
        image: require('./img/recipe_img/2_BowlBeef_Japan.png'),
        text: ["Pendant ce temps, coupez l’oignon en très fines demi-lunes.",
        "Râpez finement le gingembre (ça pique ! Dosez-le selon votre goût) et l'ail.",
        "Coupez le pak choï en fines lamelles.",
        "Lavez bien la carotte et coupez ses extrémités, puis râpez-la."]
      },

      {
        image: require('./img/recipe_img/4_BowlBeef_Japan.png'),
        text: ["Faites chauffer une poêle à feu vif avec un filet d’huile d’olive et faites-y dorer le bœuf, l’oignon, le gingembre et l’ail 1-2 min.","Réservez le tout hors de la poêle."]
      },
      {
        image: require('./img/recipe_img/5_BowlBeef_Japan.png'),
        text: ["Remettez-la à feu moyen-vif et faites-y cuire la carotte et le pak choï 6-8 min, ou jusqu’à ce qu’ils soient fondants.","Coupez le feu, ajoutez le bœuf et versez la sauce soja-sésame par-dessus.", "Remuez environ 30 secondes jusqu'à ce que le tout soit enrobé de sauce."]
      },
      {
        image: require('./img/recipe_img/6_BowlBeef_Japan.png'),
        text: ["Servez le riz dans des assiettes creuses et garnissez de bœuf aux légumes.",
        "Ajoutez une cuillère de mayonnaise au soja et saupoudrez de graines de sésame."]
      },
    ]
  },
    {
      title: "Dac Bulgogi : poulet à la coréenne",
      subtitle: "avec du pak choï & des graines de sésame",
      description: "Découvrez les saveurs de la Corée du Sud avec ce plat traditionnel de poulet mariné, le Dak Bulgogi. Accompagnée de riz basmati et de pak choï, cette version saura ravir vos papilles avec sa touche sucrée-salée et sa viande tendre et savoureuse.",
      course: ["Sain","Viande", "Asie", "Corée"],
      difficulty: "Intermédiaire",
      allergy: "Graines de sésame • Blé • Soja • Céleri • Anhydride sulfureux • sulfites • Arachides • Fruits à coque",
      preparationTime: "30 min",
      kcal: "649",
      ingredients: ["1 Oignon(s)","1 Gousse(s) d'ail","½ Gingembre","2 Filet(s) de poulet", "1 Pak choï","150g de Riz","20ml Huile de sésame","Sauce asiatique sucrée", "10g Graines de sésame", "Sel", "Poivre", "Huile"],
      image: require('./img/recipe_img/Bulgogi.png'),
      image_round: require('./img/recipe_img/Bulbogi_Rond.png'),
      steps: [
        {
          image: require('./img/recipe_img/1_Bulgogi.png'),
          text: ["Portez une casserole d'eau à ébullition pour le riz.","Ciselez l'ail et l'oignon. Râpez le gingembre.","Retirez l’extrémité de la tige du pak choï, ciselez un peu de vert pour le dressage, puis coupez le reste en lanières de 1 cm.","Coupez le poulet en petits dés de 1 cm."]
        },

        {
          image: require('./img/recipe_img/rice.png'),
          text: ["Faites cuire le riz 12-14 min dans la casserole.","Égouttez-le et réservez-le à couvert jusqu'au service.",]
        },
        {
          image: require('./img/recipe_img/poulet.png'),
          text: ["Faites chauffer un mince filet d'huile de tournesol dans un wok ou une sauteuse à feu moyen-vif.","Quand l'huile est bien chaude, faites-y revenir le poulet de tous les côtés 4-5 min avec le gingembre (selon votre goût), ou jusqu'à ce qu'il soit bien coloré et cuit à cœur.", ,"Salez et poivrez","Réservez la viande hors de la sauteuse."]
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
      title: "Poulet à la crème de poireau & muscade",
      subtitle: "avec du gouda & du riz",
      description: "Les choses les plus simples sont souvent les meilleures, et ce plat de poulet à la crème accompagné de riz et de poireau ne va pas faire mentir le proverbe ! Prête en une petite demi-heure, cette recette se déguste aussi bien en solo, en duo ou en famille.",
      course: ["Viande", 'France', "Rapide"],
      difficulty: "Facile",
      allergy: "Lait • Gluten",
      preparationTime: "25 min",
      kcal: "768",
      ingredients: ["1 Poireau(x)","150g de Riz", "2 Filet(s) de poulet", "1 Gousse(s) d'ail","Persil","200ml Crème liquide", "50g Gouda vieux râpé", "Beurre", "Muscade", "Sel", "Poivre", "Huile d'olive"],
      image: require('./img/recipe_img/ChickenCream.png'),
      image_round: require('./img/recipe_img/ChickenCream_Rond.png'),
      steps: [
        {
          image: require('./img/recipe_img/1-ChickenCream.png'),
          text: ["Portez une casserole d'eau à ébullition pour le riz.","Coupez le poireau en deux dans l'épaisseur, lavez-le bien et coupez-le en très fines demi-lunes."]
        },

        {
          image: require('./img/recipe_img/rice.png'),
          text: ["Faites cuire le riz 12-14 min dans la casserole.","Égouttez-le et réservez-le à couvert jusqu'au service.",]
        },
        {
          image: require('./img/recipe_img/poulet.png'),
          text: ["Faites chauffer un mince filet d'huile d'olive dans un wok ou une sauteuse à feu moyen-vif.","Quand l'huile est bien chaude, faites-y revenir le poulet de tous les côtés 4-5 min jusqu'à ce qu'il soit bien coloré et cuit à cœur.","Salez et poivrez","Réservez la viande hors de la sauteuse."]
        },
        {
          image: require('./img/recipe_img/4-ChickenCream.png'),
          text: ["Remettez la sauteuse à feu moyen-vif et faites-y fondre une noix de beurre.", "Ajoutez-y le poireau,", "Salez et poivrez.","Baissez le feu à moyen, couvrez et faites cuire 8-10 min de plus, ou jusqu'à ce qu'il soit fondant.","Pendant ce temps, ciselez l’ail et le persil séparément."]
        },
        {
          image: require('./img/recipe_img/5_ChickenCream.png'),
          text: ["Une fois le poireau cuit et fondant, retirez le couvercle. Ajoutez le poulet, l’ail, la crème et la moitié du gouda",
          "Râpez un peu de noix de muscade par-dessus (selon votre goût). Mélangez et laissez réduire 5 min à feu doux.",
          "Servez le riz dans les assiettes et versez le poulet et sa crème de poireau par-dessus.","Saupoudrez de persil et du reste de gouda râpé."]
        },
      ]
    },

  ];
