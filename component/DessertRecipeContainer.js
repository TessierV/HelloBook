import RecipeList from './DessertModal';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../colors';

const viewsData = [
  {
    imageSource: require('../img/chef(4).png'),
    text: "Des classiques aux nouveautés, trouvez votre préféré.",
  },
  {
    imageSource: require('../img/chef(4).png'),
    text: "Tartes exquises pour éveiller vos papilles.",
  },
  {
    imageSource: require('../img/chef(4).png'),
    text:  "Laissez-vous séduire par nos délices chocolatés et fondants.",
  },
];

const DessertRecipeContainer = ({ recipes, likedRecipes, onToggleLike }) => {
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
  const CakeRecipes = recipes.filter((recipe) => recipe.course.includes('Cake'));
  const BrownieRecipes = recipes.filter((recipe) => recipe.course.includes('Brownie'));
  const TarteRecipes = recipes.filter((recipe) => recipe.course.includes('Tarte'));


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
          <Text style={styles.homeTitle}>Délices Sucrés</Text>
            <Text style={styles.homeSubtitle}>
              {currentData.text.split(' ').map((word, index) => (
                <Text
                  key={index}
                  style={[
                    styles.homeText,
                    (word === 'exquises' || word === 'délices' || word === 'trouvez') && { color: colors.primaryColors, fontWeight: 'bold' },
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
            <Text style={styles.noteText}>"Explorez notre sélection de délices sucrés, des gâteaux moelleux aux brownies fondants et aux tartes exquises, pour une fin de repas tout en douceur."</Text>
      </View>
  <RecipeList
    recipes={CakeRecipes}
    likedRecipes={likedRecipes}
    onToggleLike={onToggleLike}
    categoryTitle="Cake"
  />
  <RecipeList
    recipes={BrownieRecipes}
    likedRecipes={likedRecipes}
    onToggleLike={onToggleLike}
    categoryTitle="Brownies"
  />
  <RecipeList
    recipes={TarteRecipes}
    likedRecipes={likedRecipes}
    onToggleLike={onToggleLike}
    categoryTitle="Tarte"
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

export default DessertRecipeContainer;
