import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import RecipeCard from './RecipeCard';
import { colors } from '../colors';

const RecipeList = ({ recipes }) => {
  const recipesPerPage = 3;
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

  if (recipes.length === 0) {
    return (
      <View style={styles.noteContainer}>
            <Image source={require('../img/editicon.png')} style={styles.noteIcon} />
            <Text style={styles.noteText}>Il n'y a pas encore de Recette disponible pour cette catégorie</Text>
      </View>
    );
  }

  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToDisplay = recipes.slice(startIndex, endIndex);

  return (
    <View>
      {recipesToDisplay.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipe={recipe}
          onToggleLike={() => onToggleLike(index)}
        />
      ))}
      <ScrollView
        horizontal={true} style={styles.paginationContainer}>
        {renderPaginationButtons()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    alignSelf: 'center',
    paddingVertical: 10,
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
  noteIcon:{
    width: 15,
    height: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: '5%',
},
noteContainer: {
    flexDirection: 'row',
    marginVertical: "2%",
    justifyContent: 'space-between',
    marginTop: '5%',
    backgroundColor: colors.lightBackground,
    padding: '5%',
    borderRadius: 10,
},
noteText: {
    fontSize: 11,
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    color: colors.greyText,
},
});

export default RecipeList;
