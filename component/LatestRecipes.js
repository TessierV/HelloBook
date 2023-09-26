import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import RecipeCard from './RecipeCard2';

const LatestRecipes = ({ recipes }) => {
  const recipesToDisplay = recipes.slice(0, 5);

  return (
    <ScrollView horizontal style={styles.scrollView}
    showsHorizontalScrollIndicator={false}
    >
      {recipesToDisplay.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipe={recipe}
          onToggleLike={() => onToggleLike(index)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 15,
  },
});

export default LatestRecipes;
