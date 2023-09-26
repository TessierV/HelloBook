export const categories = ['All', 'Sain', "<30min", 'Pasta', 'Viande','Veggie', 'Fish', 'Dessert', ];

export const categories_World = ['Asie','Thailande', 'Corée', "Chine", "Japon",'Am.latine','France', 'Italie','Orient', 'Africain' ];

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
  Thailande: require('./img/menu_icon/thailande_uncolor.png'),
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

  Thailande: require('./img/menu_icon/thailande_color.png'),
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
    title: "Salade de pâtes à la grecque au thon",
    subtitle: "avec des olives & du concombre",
    description: "Les salades de pâtes, c’est un essentiel pour varier des versions chaudes ! Besoin d’étoffer votre répertoire de recettes ? Tentez cette version au thon et d’inspiration grecque : olives, citron, aneth... On s’y croirait presque !",
    course: ["Smoothie","Sain", "<30min", "Greek"],
    difficulty: "Simple",
    allergy: "Gluten • Blé • Lait • Poisson",
    preparationTime: "20 min",
    kcal: "634",
    ingredients: ["180g Penne", "½ Citron","1 Concombre(s)","40g Salade", "Ciboulette", "Aneth", "50g Fromage à la grecque", "25g Olive(s)", "160g Thon", "2 Œuf(s)","Huile d'olive", "1cc Moutarde", "1cc Vinaigre balsamique", "Sel", "Poivre"],
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
    kcal: "775",
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
    course: ["Pasta", "Asie", "Thailande", "Veggie","<30min","Sain",],
    difficulty: "Simple",
    allergy: "Blé • Soja • Graines de sésame • Orge • Œuf • Arachides",
    preparationTime: "20 min",
    kcal: "521",
    ingredients: ["1 Gousse(s) d'ail","½ Gingembre", "½ Citron", "1 Concombre(s)", "1 Oignon(s)", "2 Tomate(s)", '200g Nouilles udon fraîches', "160g Emincés végétariens", "Coriandre","Cacahuètes non salées","½ Piment", "20ml Sauce asiatique sucrée", "20ml Sauce soja","Huile","Gomasio", "1cc Sucre","Sel", "Poivre"],
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
    ingredients: ["1 Gousse(s) d'ail","300g Pommes de terre", "1 Echalote(s)", "½ Courgette(s)", "200g Haricots verts", "50g Chapelure Panko", '2 Escalope(s) de dinde',"1 Œuf(s)","25ml Lait","1cc Farine", "Huile d'olive", "Epices italiennes","Sel", "Poivre"],
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
    ingredients: ["1 Gousse(s) d'ail","50g Tomates semi-séchées", "1 Sucrine", "½ sachets Ciboulette", "½ Citron", "180g Farfalle", '85g Tranches de poitrine fumée', "80g Yaourt à la grecque","35g Mayonnaise","1cc Moutarde", "Huile d'olive", "Epices italiennes","Sel", "Poivre"],
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
    ingredients: ["1 Poireau(x)","250g Champignons de Paris", "1 Gousse(s) d'ail", "180g Linguine", "75g Lardons fumés", "60g Pesto aux champignons", "100g Crème épaisse", "Huile d'olive", "Sel", "Poivre"],
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
    course: ["Pancake"],
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
    ingredients: ["1 Oignon(s)", "2 Gousse(s) d'ail","1 Carotte(s)","100g Lardons fumés","Persil", "200g Viande hachée au bœuf", "Concentré de tomate","1 sachet d'origan séché", "1 feuille de laurier", "5 brins romarin", "15ml Sauce Worcestershire","250g Tagliatelle fraîches", "40g Pecorino râpé", "50g Mascarpone", "Sel", "Poivre", "500 ml Bouillon de boeuf", "1cc Sucre", "Huile d'olive"],
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
    course: ["Veggie", 'Asie', "Thailande", "<30min", 'Sain'],
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
      course: ["Viande", "Asie", "Corée"],
      difficulty: "Intermédiaire",
      allergy: "Graines de sésame • Blé • Soja • Céleri • Anhydride sulfureux • sulfites • Arachides • Fruits à coque",
      preparationTime: "30 min",
      kcal: "649",
      ingredients: ["1 Oignon(s)","1 Gousse(s) d'ail","½ Gingembre","2 Filet de poulet", "1 Pak choï","150g de Riz","20ml Huile de sésame","Sauce asiatique sucrée", "10g Graines de sésame", "Sel", "Poivre", "Huile"],
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
      ingredients: ["1 Poireau(x)","150g de Riz", "2 Filet de poulet", "1 Gousse(s) d'ail","Persil","200ml Crème liquide", "50g Gouda vieux râpé", "Beurre", "Muscade", "Sel", "Poivre", "Huile d'olive"],
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
