import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const recipes = [
    {
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish with creamy sauce.",
      course: "Main Course",
      preparationTime: "30 minutes",
      kcal: "450",
      ingredients: "200g spaghetti, 2 large eggs, 100g guanciale, 50g Pecorino cheese, Salt, Black pepper",
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
      course: "Appetizer/Salad",
      preparationTime: "15 minutes",
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
      course: "Main Course",
      preparationTime: "45 minutes",
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
      course: "Dessert",
      preparationTime: "60 minutes",
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

  const filteredRecipes = selectedCategory === 'All' ? recipes : recipes.filter(recipe => recipe.course === selectedCategory);

  return (
  <>
    <View>
        <Text>Hello There</Text>
        <Text>Make your own food, stay at Home</Text>
    </View>
      <View style={styles.categoryBar}>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'All' && styles.selectedCategory]}
          onPress={() => setSelectedCategory('All')}
        >
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Main Course' && styles.selectedCategory]}
          onPress={() => setSelectedCategory('Main Course')}
        >
          <Text>Main Course</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Dessert' && styles.selectedCategory]}
          onPress={() => setSelectedCategory('Dessert')}
        >
          <Text>Dessert</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Salad' && styles.selectedCategory]}
          onPress={() => setSelectedCategory('Salad')}
        >
          <Text>Salad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Veggie' && styles.selectedCategory]}
          onPress={() => setSelectedCategory('Veggie')}
        >
          <Text>Veggie</Text>
        </TouchableOpacity>
      </View>
    <ScrollView contentContainerStyle={styles.container}>
      {filteredRecipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </ScrollView>
    </>
  );
}

const RecipeCard = ({ title, description, course, preparationTime, kcal, ingredients, steps }) => (
  <View style={styles.recipeCard}>
    <Text style={styles.recipeTitle}>{title}</Text>
    <Text style={styles.recipeDescription}>{description}</Text>
    <Text>Course: {course}</Text>
    <Text>Preparation Time: {preparationTime}</Text>
    <Text>Kcal: {kcal}</Text>
    <Text>Ingredients: {ingredients}</Text>
    <Text>Steps:</Text>
    {steps.map((step, index) => (
      <Text key={index}>{index + 1}. {step}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  categoryBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'pink',
  },
  selectedCategory: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    color: 'white',
  },
  recipeCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
});
