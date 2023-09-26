import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../colors';
import LatestRecipes from './LatestRecipes';

const viewsData = [
  {
    imageSource: require('../img/livre-de-recettes.png'),
    text: 'Nouveauté Recette',
  },
  {
    imageSource: require('../img/livre-de-recettes.png'),
    text: 'Nouveauté Recette',
  },
  {
    imageSource: require('../img/livre-de-recettes.png'),
    text: 'Nouveauté Recette',
  },
];

const NewRecipeContainer = ({ recipes, likedRecipes, onToggleLike }) => {
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

  return (
    <>
    <LinearGradient
      colors={["#D86F52", "#D86F52"]}
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
            <Text style={styles.homeTitle}>
              {currentData.text.split(' ').map((word, index) => (
                <Text
                  key={index}
                  style={[
                    styles.homeText,
                    (word === 'Pancake' || word === 'Brunch' || word === 'Smoothie' ) && { color: colors.primaryColors, fontWeight: 'bold' },
                  ]}
                >
                  {word}{' '}
                </Text>

              ))}
            </Text>
            <Text style={styles.homeSubtitle}>Découvrez les 5 dernières recettes</Text>
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
      <View style={{marginVertical: 14,}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.darkText}}>Nouvelles Recette</Text>
      <View style={styles.ingredientsDivider}></View>
      <Text style={{fontSize: 11, color: colors.greyText, marginTop: 5}}>Scroll horizontalement pour voir les nouveautés</Text>
      </View>
  <LatestRecipes recipes={recipes}

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
  ingredientsDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightBackground,
},
});

export default NewRecipeContainer;
