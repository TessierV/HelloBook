import React, { useState } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../colors';
import StepsModal from './StepsModal';
import { ingredientImages } from '../constant/ingredientImages';

const RecipeModal = ({ isOpen, onClose, steps, image, recipeName, course, difficulty, description, subtitle, allergy, ingredients }) => {
    const [showStepsModal, setShowStepsModal] = useState(false);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    if (!isOpen) {
        return null;
    }

    const closeStepsModal = () => {
        setShowStepsModal(false);
    };

    const getCourseBackgroundColor = (course) => {
        switch (course) {
            case 'Sain':
                return '#CBE895';
            case '<30min':
                return '#B9E6F7';
            case 'Pasta':
                return '#EAE1B0';
            case 'Monde':
                return '#FFCC99';
            case 'Veggie':
                return '#A6D7A8';
            case 'Poisson':
                return '#BFDFFF';
            case 'Viande':
                return '#D77B89';
            case 'Dessert':
                return '#E1C4FF';
            case 'Am.latine':
                return '#BFDFFF';
            case 'Asie':
                return '#D77B89';
            case 'Thailande':
                return '#E1C4FF';
            case 'Corée':
                return '#BFDFFF';
            case 'Chine':
                return '#BFDFFF';
            case 'Japon':
                return '#D77B89';
            case 'France':
                return '#E1C4FF';
            case 'Italie':
                return '#D77B89';
            case 'Orient':
                return '#E1C4FF';
            case 'Africain':
                return '#D77B89';
            default:
                return '#E9EBF4';
        }
    };


    const renderIngredientItem = (ingredient, index) => {
        const ingredientName = ingredient.replace(/^\d+\s*/, '');
        return (
            <View key={index} style={[styles.ingredientItem, { textAlign: 'center', }]}>
                <Image source={ingredientImages[ingredientName]} style={styles.ingredientImage} />
                <Text style={[styles.ingredientsText, { textAlign: 'center' }]}>{ingredient}</Text>
            </View>
        );
    };

    const maxColumns = 4;
    const formattedIngredients = [];
    for (let i = 0; i < ingredients.length; i += maxColumns) {
        const ingredientsSlice = ingredients.slice(i, i + maxColumns);
        formattedIngredients.push(
            <View key={i} style={styles.ingredientRow}>
                {ingredientsSlice.map((ingredient, index) => (
                    renderIngredientItem(ingredient, index)
                ))}
            </View>
        );
    }

    const showPreviousStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    };

    const showNextStep = () => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const courseElements = course.map((courseItem, index) => (
        <View
            key={index}
            style={styles.courseContainer}
        >
            <Text
                style={{
                    backgroundColor: getCourseBackgroundColor(courseItem),
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    marginTop: 20,
                    marginRight: 5,
                    borderRadius: 5,
                    color: colors.darkText,
                    fontSize: 9,
                }}
            >
                {courseItem}
            </Text>
        </View>
    ));


    return (
        <Modal animationType="slide" transparent={true} visible={isOpen}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.imageContainer}>
                        <Image source={image} style={styles.recipeImage} />
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{recipeName}</Text>
                            <Text style={styles.modalSubtitle}>{subtitle}</Text>
                        </View>
                        <View style={styles.overlay}></View>
                    </View>

                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Image source={require('../img/cross-small.png')} style={styles.closeButtonImage} />

                    </TouchableOpacity>
                    <ScrollView >
                        <View style={styles.modalContent_text}>
                            <Text style={styles.modalDescription}>Difficulté: {difficulty}</Text>

                            <Text style={styles.sectionTitle}>Description:</Text>
                            <View style={styles.ingredientsDivider}></View>


                            <Text style={styles.modalDescription}>{description}</Text>
                            <Text style={styles.courseContainer}>{courseElements}</Text>

                            <Text style={styles.sectionTitle}>Ingredients:</Text>
                            <View style={styles.ingredientsDivider}></View>

                            <View style={styles.sectionIngredient}>
                                <Text style={styles.ingredientsText}>{formattedIngredients}</Text>
                            </View>

                            <Text style={styles.sectionTitle}>Allergènes:</Text>
                            <View style={styles.ingredientsDivider}></View>


                            <Text style={styles.modalDescription}>{allergy}</Text>

                            <TouchableOpacity
                                style={styles.startButton}
                                onPress={() => setShowStepsModal(true)}
                            >
                                <Text style={styles.startButtonText}>Commencer à cuisiner ?</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <StepsModal
                isOpen={showStepsModal}
                onClose={closeStepsModal}
                steps={steps}
                currentStepIndex={currentStepIndex}
                showPreviousStep={showPreviousStep}
                showNextStep={showNextStep}
                />
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
        backgroundColor: colors.mainBackground,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: '90%',
    },
    modalContent_text: {
        padding: 20,
        marginBottom: 100,
    },
    modalHeader: {
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        paddingHorizontal: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.lightText,

    },
    modalSubtitle: {
        fontSize: 11,
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
        fontSize: 11,
        color: colors.greyText,
        marginVertical: 10,
        width: '100%',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        marginTop: '10%',

    },

    ingredientRow: {
        flexDirection: 'row',
        width: '100%',

    },
    ingredientsText: {
        fontSize: 9,
        width: 85,
        marginBottom: 15,
    },
    stepText: {
        fontSize: 11,
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 15,
        right: '4%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
    },
    closeclotured: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: colors.darkBackground,
    },
    closeButtonImage: {
        width: '100%',
        height: '100%',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 14,
    },
    imageContainer: {
        position: 'relative',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    recipeImage: {
        height: 250,
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        },
    startButton: {
        backgroundColor: colors.darkBackground,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    startButtonText: {
        color: colors.lightBackground,
        fontSize: 16,
    },
    ingredientImage: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5,
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
        fontSize: 14,
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
        height: '85%',
    },
    stepsModalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ingredientsDivider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightBackground,
        marginBottom: 20,
    },
    stepImage: {
        width: '100%',
        height: 150,
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
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export default RecipeModal;
