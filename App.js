import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import RecipeList from './component/RecipeList';
import RecipeHeader from './component/RecipeHeader';
import { colors } from './colors';
import { recipes, categories } from './constant';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedRecipes, setLikedRecipes] = useState([]);

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

  const renderCategoryButton = (category) => (
    <TouchableOpacity
      key={category}
      style={[
        styles.categoryButton,
        selectedCategory === category && styles.selectedCategory,
      ]}
      onPress={() => setSelectedCategory(category)}
    >
      <Text>{category}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <RecipeHeader />
        <View style={styles.searchBar}>
          <Image source={require('./img/search.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholderTextColor="#F5F5F1"
            placeholder="Search by Title"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryBar}
        >
          {categories.map((category) => renderCategoryButton(category))}
        </ScrollView>
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
    backgroundColor: colors.mainBackground,
    paddingVertical: 40,
  },
  container: {
    justifyContent: 'center',
    width: "90%",
    alignSelf: 'center',
    marginBottom: "10%",
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.darkBackground,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  categoryBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    marginBottom: '4%',
  },
  categoryButton: {
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  selectedCategory: {
    borderBottomWidth: 1,
    borderBottomColor: colors.darkBackground,
  },
});
