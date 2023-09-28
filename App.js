import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import RecipeList from './component/RecipeList';
import RecipeHeader from './component/RecipeHeader';
import RecipeWorldHeader from './component/RecipeWorldHeader';
import StreetFoodRecipeContainer from './component/StreetFoodRecipeContainer';
import { colors } from './colors';
import { recipes, categories, categories_World, categoryImages, selectedCategoryImages } from './constant';
import SearchBar from './component/RecipeSearchBar';
import CategoryList from './component/RecipeFilter';
import DessertRecipeContainer from './component/DessertRecipeContainer';
import AnnouncementButton from './component/AnnouncementButton';
import AnnouncementBuilding from './component/AnnouncementBuilding';
import CategoryList_World from './component/RecipeFilter_World';
import BrunchRecipeContainer from './component/BrunchRecipeContainer';
import NewRecipeContainer from './component/NewRecipeContainer';
import WorldRecipeHeader from './component/WorldRecipeHeader';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCategoryWorld, setSelectedCategoryWorld] = useState('Asie');
  const filteredRecipes = recipes.filter((recipe) => {
    if (selectedCategory !== 'All' && !recipe.course.includes(selectedCategory)) {
      return false;
    }
    return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const filteredRecipesWorld = recipes.filter((recipe) => {
    if (selectedCategoryWorld !== 'All' && !recipe.course.includes(selectedCategoryWorld)) {
      return false;
    }
    return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const toggleLikeRecipe = (recipeIndex) => {
    if (likedRecipes.includes(recipeIndex)) {
      setLikedRecipes(likedRecipes.filter((likedRecipe) => likedRecipe !== recipeIndex));
    } else {
      setLikedRecipes([...likedRecipes, recipeIndex]);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCategoryChangeWorld = (category) => {
    setSelectedCategoryWorld(category);
  };

  const renderCategoryButton = (category, selectedCategory, onPress) => {
    const categoryImage =
      selectedCategory === category
        ? selectedCategoryImages[category]
        : categoryImages[category];

    return (
      <TouchableOpacity
        key={category}
        style={[
          styles.categoryButton,
          selectedCategory === category && styles.selectedCategory,
        ]}
        onPress={onPress}
      >
        <Image source={categoryImage} style={styles.categoryIcon} />
        <Text style={{ fontSize: 11, textAlign: 'center', color: colors.darkBackground }}>{category}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.container}>
          <RecipeHeader />
          <SearchBar value={searchTerm} onChangeText={(text) => setSearchTerm(text)} />


          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            renderCategoryButton={(category) => renderCategoryButton(category, selectedCategory, () => handleCategoryChange(category))}
          />
          <RecipeList
            recipes={filteredRecipes}
            likedRecipes={likedRecipes}
            onToggleLike={toggleLikeRecipe}
            isLast={true}
          />
          <RecipeWorldHeader />
          <NewRecipeContainer recipes={recipes}/>

          <BrunchRecipeContainer
            recipes={recipes}
            likedRecipes={likedRecipes}
            onToggleLike={toggleLikeRecipe}
          />
          <StreetFoodRecipeContainer
            recipes={recipes}
            likedRecipes={likedRecipes}
            onToggleLike={toggleLikeRecipe}
          />
          <DessertRecipeContainer
            recipes={recipes}
            likedRecipes={likedRecipes}
            onToggleLike={toggleLikeRecipe}
          />

          <View>
          <WorldRecipeHeader />

            <CategoryList_World
              categories={categories_World}
              selectedCategory={selectedCategoryWorld}
              renderCategoryButton={(category) => renderCategoryButton(category, selectedCategoryWorld, () => handleCategoryChangeWorld(category))}
            />

            <RecipeList
              recipes={filteredRecipesWorld}
              likedRecipes={likedRecipes}
              onToggleLike={toggleLikeRecipe}
              isLast={true}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.categoryFooter}>
        <AnnouncementButton />
        <AnnouncementBuilding test="Favoris" />
        <AnnouncementBuilding test="Reglage" />
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
    width: '90%',
    alignSelf: 'center',
    marginBottom: '10%',
  },
  categoryBar: {
    flexDirection: 'row',
    marginBottom: '4%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  categoryFooter: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.mainBackground,
    width: '100%',
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    elevation: 6,
  },
  categoryIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  categoryButton: {
    marginBottom: 5,
    alignItems: 'center',
  },
  categoryHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
