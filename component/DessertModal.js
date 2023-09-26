import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RecipeCard from './RecipeCard';
import { colors } from '../colors';

const RecipeList = ({ recipes, likedRecipes, onToggleLike, categoryTitle }) => {
  const isLiked = (recipe) => likedRecipes.includes(recipe);
  const recipesPerPage = 2;
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.paginationButton,
            currentPage === i && styles.activePageButton,
          ]}
          onPress={() => setCurrentPage(i)}
        >
          <Text style={[styles.paginationText, currentPage === i && styles.activePageText]}>
            {i}
          </Text>
        </TouchableOpacity>
      );
    }
    return buttons;
  };

  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToDisplay = recipes.slice(startIndex, endIndex);

  return (
    <View>
      <View style={styles.paginationContainer}>
        <Text style={styles.paginationTitle}>{categoryTitle}</Text>
        {renderPaginationButtons()}
      </View>
      <View style={styles.ingredientsDivider}></View>

      {recipesToDisplay.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipe={recipe}
          isLiked={isLiked(recipe)}
          onToggleLike={() => onToggleLike(recipe)}
        />
      ))}

    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
    alignItems: 'center',
  },
  paginationTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkBackground,
  },
  paginationButton: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  paginationText: {
    color: colors.darkText,
  },
  activePageButton: {
    backgroundColor: colors.darkBackground,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activePageText: {
    color: colors.lightText,
    fontSize: 11,
  },
  ingredientsDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBackground,
    marginBottom: 20,
},
});

export default RecipeList;
