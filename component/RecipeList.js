import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RecipeCard from './RecipeCard';
import { colors } from '../colors';

const RecipeList = ({ recipes, likedRecipes, onToggleLike }) => {
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
      {recipesToDisplay.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipe={recipe}
          isLiked={isLiked(recipe)}
          onToggleLike={() => onToggleLike(recipe)}
        />
      ))}
      <View style={styles.paginationContainer}>
        {renderPaginationButtons()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  },
});

export default RecipeList;
