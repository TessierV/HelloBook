import React from 'react';
import { ScrollView, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { colors } from '../colors';

const CategoryList = ({ categories, selectedCategory, renderCategoryButton }) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryBar}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryButton,
            selectedCategory === category && styles.selectedCategory,
          ]}
        >
          {renderCategoryButton(category)}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryBar: {
    flexDirection: 'row',
    marginBottom: '4%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  categoryButton: {
    marginBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  selectedCategory: {
    borderBottomWidth: 2,
    borderBottomColor: colors.darkBackground,
  },
});

export default CategoryList;
