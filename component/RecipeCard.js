import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ScrollView, Dimensions } from 'react-native'; // Import Dimensions
import { colors } from '../colors';
import RecipeModal from './RecipeModal';

const RecipeCard = ({ recipe }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth * 90) / 100;

  return (
    <>
      <TouchableOpacity style={[styles.recipeCard, { width: cardWidth }]} onPress={() => setIsModalOpen(true)}>
        <View style={styles.left_recipeCard}>
          <Image source={recipe.image_round} style={styles.recipeImage} />
        </View>

        <View style={styles.center_recipeCard}>
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
          {/*<Text style={styles.recipeSubtitle}>Niveau: {recipe.subtitle}</Text>*/}
          <Text style={styles.recipeSubtitle}>Difficulté: {recipe.difficulty}</Text>
          <View style={styles.recipeCardDetails}>
            <View style={styles.recipeCardDetails_column}>
              <Image source={require('../img/hourglass.png')} style={styles.recipeIcons} />
              <Text style={styles.recipeText}>Cook: {recipe.preparationTime}</Text>
            </View>
            <View style={styles.recipeCardDetails_column}>
              <Image source={require('../img/bolt.png')} style={styles.recipeIcons} />
              <Text style={styles.recipeText}>Kcal: {recipe.kcal}</Text>
            </View>
          </View>
        </View>
        <View style={styles.right_recipeCard}>
          <TouchableOpacity>
            {/*<Image
              source={isLiked ? require('../img/heart_icon_full.png') : require('../img/heart_icon.png')}
              style={styles.recipeIcons_heart}
            />*/}
          </TouchableOpacity>
        </View>
        {/*<Image source={require('../img/new.png')} style={styles.recipeIcons_new} />*/}
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
    backgroundColor: colors.lightBackground,
    borderRadius: 10,
    marginBottom: '3%',
    flex: 1,
    flexDirection: 'row',
    paddingVertical: '3%',
  },
  left_recipeCard: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center_recipeCard: {
    flex: 5.5,
    justifyContent: 'center',
  },
  right_recipeCard: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darkText,
  },
  recipeSubtitle: {
    fontSize: 11,
    color: colors.darkText,
    marginBottom: '6%',
  },
  recipeText: {
    fontSize: 11,
  },
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  recipeCardDetails: {
    marginBottom: '3%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recipeCardDetails_column: {
    flexDirection: 'row',
  },
  recipeIcons: {
    width: 10,
    height: 10,
    alignSelf: 'center',
    marginRight: '2%',
  },
  recipeIcons_new: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 25,
    height: 25,
  },
  recipeIcons_heart: {
    width: 20,
    height: 20,
  },
});

export default RecipeCard;
