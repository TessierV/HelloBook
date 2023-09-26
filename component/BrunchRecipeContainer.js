import RecipeList from './DessertModal';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../colors';

const viewsData = [
  {
    imageSource: require('../img/petit-dejeuner.png'),
    text:  "Des Toasts pour Tous les Goûts !",
  },
  {
    imageSource: require('../img/petit-dejeuner.png'),
    text:  "Des Pancakes pour les Amateurs de Douceurs",
  },
  {
    imageSource: require('../img/petit-dejeuner.png'),
    text:  "Des Smoothies pour une Vitalité Maximale",
  },
];

const BrunchRecipeContainer = ({ recipes, likedRecipes, onToggleLike }) => {
  const [isDessertListVisible, setIsDessertListVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % viewsData.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentData = viewsData[currentIndex];

  const PancakeRecipes = recipes.filter((recipe) => recipe.course.includes('Pancake'));
  const BrunchRecipes = recipes.filter((recipe) => recipe.course.includes('Brunch'));
  const SmoothieRecipes = recipes.filter((recipe) => recipe.course.includes('Smoothie'));
  //const PizzaAndFlammekuecheRecipes = [...PizzaRecipes, ...FlammekuecheRecipe];


  return (
    <>
    <LinearGradient
      colors={[colors.darkBackground, colors.darkBackground]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1, borderRadius: 15, marginBottom: '3%' }}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsDessertListVisible(!isDessertListVisible)}
      >
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            <Image
              source={currentData.imageSource}
              style={styles.image}
            />
          </View>
          <View style={styles.centerColumn}>
            <Text style={styles.homeTitle}>Brunch Gourmand</Text>
            <Text style={styles.homeSubtitle}>
              {currentData.text.split(' ').map((word, index) => (
                <Text
                  key={index}
                  style={[
                    styles.homeText,
                    (word === 'Toasts' || word === 'Douceurs' || word === 'Vitalité' ) && { color: colors.primaryColors, fontWeight: 'bold' },
                  ]}
                >
                  {word}{' '}
                </Text>

              ))}
            </Text>
          </View>
          <View style={styles.rightColumn}>
          <Image
            source={isDessertListVisible ? require('../img/arrow_bottom.png') : require('../img/arrow_right.png')}
            style={styles.arrowImage}
          />
          </View>
        </View>
      </TouchableOpacity>

    </LinearGradient>
    {isDessertListVisible && (
      <>
      <Text style={styles.noteTitle}>Présentation</Text>
      <View style={styles.noteContainer}>
            <Text style={styles.noteText}>"Bienvenue dans notre univers de brunch, où sucré et salé se rencontrent pour éveiller vos papilles."</Text>
      </View>
  <RecipeList
    recipes={PancakeRecipes}
    likedRecipes={likedRecipes}
    onToggleLike={onToggleLike}
    categoryTitle={["Pancake"]}
    />
  <RecipeList
    recipes={BrunchRecipes}
    likedRecipes={likedRecipes}
    onToggleLike={onToggleLike}
    categoryTitle={["Brunch"]}
  />
  <RecipeList
    recipes={SmoothieRecipes}
    likedRecipes={likedRecipes}
    onToggleLike={onToggleLike}
    categoryTitle={["Smoothie"]}
  />
  </>
)}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  leftColumn: {
    flex: 3,
    paddingRight: 10,
  },
  centerColumn: {
    flex: 6,
  },
  rightColumn: {
    flex: 2,
  },
  arrowImage: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  homeSubtitle: {
    fontSize: 11,
    color: colors.lightText,
  },
  homeTitle: {
    color: colors.lightText,
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
  },
  noteTitle:{
    color: colors.darkText,
    fontWeight: 'bold',
    fontSize: 18,

  },
  noteIcon:{
    width: 15,
    height: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: '5%',
},
noteText: {
    fontSize: 11,
    color: colors.greyText,
},
});

export default BrunchRecipeContainer;
