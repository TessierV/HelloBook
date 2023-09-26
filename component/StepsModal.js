import React, { useState } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../colors';

const StepsModal = ({ isOpen, onClose, steps, currentStepIndex, showPreviousStep, showNextStep }) => {
  const [stepChecklist, setStepChecklist] = useState(steps.map((step) => step.text.map(() => false)));

  const toggleStep = (index) => {
    const updatedChecklist = [...stepChecklist];
    updatedChecklist[index] = !updatedChecklist[index];
    setStepChecklist(updatedChecklist);
  };

  const renderStep = (step, stepIndex) => {
    const substeps = step.text;

    const handleSubstepToggle = (substepIndex) => {
      const updatedChecklist = [...stepChecklist];
      updatedChecklist[stepIndex][substepIndex] = !updatedChecklist[stepIndex][substepIndex];
      setStepChecklist(updatedChecklist);
    };

    const checkedSubstepsCount = stepChecklist[stepIndex].filter((isChecked) => isChecked).length;

    return (
        <View key={stepIndex} style={styles.stepContainer}>
                      <View style={styles.ingredientsDivider}></View>

          <Image source={step.image} style={styles.stepImage} />
          <View style={styles.noteContainer}>
            <Image source={require('../img/editicon.png')} style={styles.noteIcon} />
            <Text style={styles.noteText}>Veillez à bien respecter les quantités indiquées à gauche pour préparer votre recette !</Text>
          </View>
          <View style={styles.stepscolomn}>

          <Text style={styles.stepsModalTitle}>Steps</Text>

          <Text style={styles.stepCount}>
            {checkedSubstepsCount} / {substeps.length} checked
          </Text>

          </View>
          <View style={styles.ingredientsDivider}></View>



          {substeps.map((substep, substepIndex) => (
            <View key={substepIndex} style={styles.stepscolomn}>
              <TouchableOpacity onPress={() => handleSubstepToggle(substepIndex)}>
                <Image source={stepChecklist[stepIndex][substepIndex] ? require('../img/checkbox.png') : require('../img/box.png')} style={styles.checkboxImage} />
              </TouchableOpacity>
              <Text style={[styles.stepText, { color: stepChecklist[stepIndex][substepIndex] ? colors.greyText : 'black' }]}>

              {substep}</Text>
            </View>
          ))}


        </View>
      );
    };


  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <View style={styles.stepsModalContainer}>
        <View style={styles.stepsModalContent}>
          <View style={styles.stepscolomn}>
            <Text style={styles.stepsModalTitle}>Recipe Steps</Text>
            <Text style={styles.stepCount}>{currentStepIndex + 1} / {steps.length}</Text>
          </View>
          <ScrollView   showsVerticalScrollIndicator={false} >
            {renderStep(steps[currentStepIndex], currentStepIndex)}
          </ScrollView>

          <View style={styles.stepsModalButtons}>

            <TouchableOpacity
              onPress={showPreviousStep}
              disabled={currentStepIndex === 0}
              style={{
                opacity: currentStepIndex === 0 ? 0.5 : 1,
              }}
            >
              <Image source={require('../img/angle-small-left.png')} style={styles.closeButtonIcons} />
              <Text style={styles.stepsButton}>Précédent</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose}>
              <Image source={require('../img/cross-circle.png')} style={styles.closeButtonIcons} />
              <Text style={styles.stepsButton}>Fermer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={showNextStep}
              disabled={currentStepIndex === steps.length - 1}
              style={{
                opacity: currentStepIndex === steps.length - 1 ? 0.5 : 1,
              }}
            >
              <Image source={require('../img/angle-small-right.png')} style={styles.closeButtonIcons} />
              <Text style={styles.stepsButton}>Suivant</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '90%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    // Styles pour le deuxième modal des étapes
    stepsModalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    stepsModalContent: {
        backgroundColor: colors.mainBackground,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 20,
        width: '100%',
        height: '90%',
    },
    stepsModalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.darkBackground,

    },
    ingredientsDivider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightBackground,
        marginBottom: 20,
    },
    stepImage: {
        width: '100%',
        height: 180,
        borderRadius: 10,
    },
    stepsModalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',


    },
    stepsButton: {
        marginTop: "8%",
    },
    closeButtonIcons: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    checkboxImage: {
        width: 15,
        height: 15,
        marginLeft: '3%',
    },
    stepscolomn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',
        alignItems: 'center',
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
    ingredientsDivider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightBackground,
        marginBottom: 20,
    },
    stepText:{
        fontSize: 11,
        flex: 1,
    },
    stepCount: {
        color: colors.darkBackground,
        fontWeight: 'bold',
    },
    stepContainer: {
      marginBottom: 100,
    },
});

export default StepsModal;
