import React, { useState } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../colors';

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
            case 'Calorie Smart':
                return '#CBE895';
            case 'Pasta':
                return '#EAE1B0';
            case 'World':
                return '#FFCC99';
            case 'Veggie':
                return '#A6D7A8';
            case 'Fish':
                return '#BFDFFF';
            case 'Meat':
                return '#D77B89';
            case 'Dessert':
                return '#E1C4FF';
            default:
                return '#E9EBF4';
        }
    };

    const ingredientImages = {
        Oignon: require('../img/recipe/onion.png'),
        Carotte: require('../img/recipe/carrot.png'),
        "Gousse d'ail": require('../img/recipe/garlic.png'),
        "Saucisse de Toulouse": require('../img/recipe/sausage.png'),
        "Fenouil": require('../img/recipe/leek.png'),
        "g Riz pour risotto": require('../img/recipe/rice-bowl.png'),
        "g Riz": require('../img/recipe/rice-bowl.png'),
        "g Graines de sésame": require("../img/recipe/sesame.png"),
        "g Mascarpone": require('../img/recipe/sour-cream.png'),
        "g Tomme râpée": require('../img/recipe/cheese.png'),
        "Fenouil moulu": require('../img/recipe/green_spice.png'),
        Sel: require('../img/recipe/white_spice.png'),
        Poivre: require('../img/recipe/black_spice.png'),
        Poivre: require('../img/recipe/black_spice.png'),
        Huile:  require('../img/recipe/oil.png'),
        "½ Gingembre":  require('../img/recipe/ginger.png'),
        "Pak choï": require('../img/recipe/pak-choi.png'),
        "Filet de poulet":  require('../img/recipe/chicken-breast.png'),

        "ml Huile de sésame":  require('../img/recipe/oil.png'),
        "Sauce asiatique sucrée": require('../img/recipe/shoyu.png'),


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
                    padding: 5,
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
                    <ScrollView>
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

            {/* Deuxième modal pour les étapes */}
            <Modal animationType="slide" transparent={true} visible={showStepsModal}>
                <View style={styles.stepsModalContainer}>
                    <View style={styles.stepsModalContent}>
                        <Text style={styles.stepsModalTitle}>Recipe Steps</Text>

                        <ScrollView>
                            <View key={currentStepIndex} style={styles.stepContainer}>
                                <Image source={steps[currentStepIndex].image} style={styles.stepImage} />
                                <Text style={styles.stepText}>{`${currentStepIndex + 1}. ${steps[currentStepIndex].text}`}</Text>
                            </View>
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

                            <TouchableOpacity onPress={closeStepsModal}>
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
        color: 'gray',
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
        color: 'white',
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
