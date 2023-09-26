import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ScrollView, } from 'react-native'; // Import Dimensions
import { colors } from '../colors';
import RecipeModal from './RecipeModal';

const RecipeCard = ({ recipe }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <TouchableOpacity style={styles.recipeCard} onPress={() => setIsModalOpen(true)}>
        <View style={styles.left_recipeCard}>
          <Image source={recipe.image} style={styles.recipeImage} />
          <Image source={require('../img/new.png')} style={styles.recipeIcons_new} />
        </View>
        <View style={styles.center_recipeCard}>
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
        </View>
      </TouchableOpacity>

      <RecipeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        steps={recipe.steps}
        recipeName={recipe.title}
        subtitle={recipe.subtitle}
        description={recipe.description}
        ingredients={recipe.ingredients}
        allergy={recipe.allergy}
        course={recipe.course}
        difficulty={recipe.difficulty}
        image={recipe.image}
      />
    </>
  );
};

const styles = StyleSheet.create({
  recipeCard: {
    flex: 1,
    width: 130,
    marginRight: 10,
    justifyContent: 'row',
  },
  recipeTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.darkText,
    paddingVertical: 10,
  },
  recipeImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  recipeIcons_new: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 25,
    height: 25,
  },
});

export default RecipeCard;
