import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { colors } from '../colors';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <Image source={require('../img/search.png')} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholderTextColor= {colors.lightText}
        placeholder="Recherche par recette"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: colors.darkBackground,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginHorizontal: '5%',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: colors.lightText,
  },
});

export default SearchBar;
