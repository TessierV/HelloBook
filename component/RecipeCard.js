import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../colors';

const RecipeCard = ({ recipe }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <View style={styles.recipeCard}>
      <Text style={styles.recipeTitle}>{recipe.title}</Text>
      <Text style={styles.recipeDescription}>{recipe.description}</Text>
      <Text>Course: {recipe.course}</Text>
      <Text>Preparation Time: {recipe.preparationTime}</Text>
      <Text>Kcal: {recipe.kcal}</Text>
      <TouchableOpacity onPress={toggleLike}>
        <Text>{isLiked ? 'Liked' : 'Like'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeCard: {
    backgroundColor: colors.lightBackground,
    borderRadius: 10,
    padding: 20,
    marginBottom: '3%',
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkText,
  },
  recipeDescription: {
    fontSize: 14,
    color: colors.darkText,
    marginBottom: 20,

  },
});

export default RecipeCard;
