import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import RecipeList from './component/RecipeList';
import RecipeFilter from './component/RecipeFilter'; // Importer le composant de filtre

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedRecipes, setLikedRecipes] = useState([]);

  const recipes = [
    // ... (votre liste de recettes)
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    if (selectedCategory !== 'All' && recipe.course !== selectedCategory) {
      return false;
    }
    return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const toggleLikeRecipe = (recipe) => {
    if (likedRecipes.includes(recipe)) {
      setLikedRecipes(likedRecipes.filter((item) => item !== recipe));
    } else {
      setLikedRecipes([...likedRecipes, recipe]);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <View>
          <Text>Hello There</Text>
          <Text>Make your own food, stay at Home</Text>
        </View>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by Title"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
        <RecipeFilter // Utiliser le composant de filtre
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <RecipeList
          recipes={filteredRecipes}
          likedRecipes={likedRecipes}
          onToggleLike={toggleLikeRecipe}
          isLast={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 40,
  },
  container: {
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '10%',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
