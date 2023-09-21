import React, { useState } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../colors';

const RecipeModal = ({ isOpen, onClose, steps, recipeName, course, difficulty, description, subtitle, allergy, ingredients }) => {
  const [showStepsModal, setShowStepsModal] = useState(false);

  if (!isOpen) {
    return null;
  }

  const closeStepsModal = () => {
    setShowStepsModal(false);
  };



  // Mapper les éléments du tableau course
  const getCourseBackgroundColor = (course) => {
    switch (course) {
      case 'Main Course':
        return '#FFEEAA'; // Couleur pour Main Course
      case 'Veggie':
        return '#E1F8DA'; // Couleur pour Veggie
      default:
        return 'blue'; // Couleur par défaut
    }
  };

  // Mapper les éléments du tableau course
  const courseElements = course.map((courseItem, index) => (
    <>
    <View
      key={index}
      style={
        styles.courseContainer
      }
    >
      <Text
        style={[
          {
            backgroundColor: getCourseBackgroundColor(courseItem),
            padding: 5,
            borderRadius: 5,
            color: colors.darkText,
          },
        ]}
      >
        {courseItem}
      </Text>
    </View>{' '}</>

  ));

  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.imageContainer}>
            <Image source={require('../img/recipe/fenouil.png')} style={styles.recipeImage} />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{recipeName}</Text>
              <Text style={styles.modalSubtitle}>{subtitle}</Text>
            </View>
            <View style={styles.overlay}></View>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>

          <View style={styles.modalContent_text}>
            <Text style={styles.modalDescription}>Difficulté: {difficulty}</Text>

            <Text style={styles.sectionTitle}>Description:</Text>

            <Text style={styles.modalDescription}>{description}</Text>
            <Text style={styles.courseContainer}>{courseElements}</Text>

            <Text style={styles.sectionTitle}>Ingredients:</Text>
            <Text style={styles.ingredientsText}>{ingredients}</Text>

            <Text style={styles.sectionTitle}>Allergènes:</Text>

            <Text style={styles.ingredientsText}>{allergy}</Text>

            <TouchableOpacity
              style={styles.startButton}
              onPress={() => setShowStepsModal(true)}
            >
              <Text style={styles.startButtonText}>Commencer à cuisiner ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Deuxième modal pour les étapes */}
      <Modal animationType="slide" transparent={true} visible={showStepsModal}>
        <View style={styles.stepsModalContainer}>
          <View style={styles.stepsModalContent}>
            <Text style={styles.stepsModalTitle}>Recipe Steps</Text>

            <ScrollView>
              {steps.map((step, index) => (
                <Text key={index} style={styles.stepText}>{`${index + 1}. ${step}`}</Text>
              ))}
            </ScrollView>

            <TouchableOpacity style={styles.closeclotured} onPress={closeStepsModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: '90%',
  },
  modalContent_text: {
    padding: 20,
  },
  modalHeader: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    paddingHorizontal: 10,

  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.lightText,
  },
  modalSubtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.lightText,
    marginBottom: '6%',
    paddingVertical: 4,
    borderRadius: 5,
  },
  courseContainer: {
    flexDirection: 'row',
},
  modalDescription: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ingredientsText: {
    fontSize: 14,
    marginBottom: 10,
  },
  stepText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: '2%',
    backgroundColor: colors.lightBackground,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
  },
  closeclotured: {
    backgroundColor: colors.darkBackground,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  // Styles pour l'image avec overlay
  imageContainer: {
    position: 'relative',
  },
  recipeImage: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  startButton: {
    backgroundColor: colors.darkBackground,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
  },
  // Styles pour le deuxième modal des étapes
  stepsModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  startButton: {
    backgroundColor: colors.darkBackground,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
  },
  // Styles pour le deuxième modal des étapes
  stepsModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  stepsModalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    width: '100%',
    height: '85%',
  },
  stepsModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default RecipeModal;
