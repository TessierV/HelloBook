import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Linking } from 'react-native';
import { colors } from '../colors';

const AnnouncementModal = ({ isVisible, onClose }) => {
  const helloFreshLink = 'https://www.hellofresh.fr/';
  const Github = "https://github.com/TessierV";
  const Portfolio = "https://tessiervanessa.netlify.app/";

  const openHelloFreshSite = () => {
    Linking.openURL(helloFreshLink);
  };

  const openGithub = () => {
    Linking.openURL(Github);
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Image source={require('../img/cross-small.png')} style={styles.closeIcon} />
        </TouchableOpacity>
        <Image source={require('../img/announcement.png')} style={styles.AnnouncementIcon} />
        <TouchableOpacity style={styles.linkButton} onPress={openGithub}>
            <Text style={styles.linkButtonText}>Made with ❤ by Vanessa</Text>
          </TouchableOpacity>
          <Text style={styles.modalText}>
            Ce projet est une réalisation personnelle et non commerciale,
            conçu dans le cadre d'une courte session d'entraînement. Elle n'a pas pour but d'être commercialisé.
          </Text>
          <TouchableOpacity style={styles.linkButton} onPress={openHelloFreshSite}>
            <Text style={styles.linkButtonText}>Les recettes proviennent du site HelloFresh</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const AnnouncementButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity style={styles.announcementButton} onPress={toggleModal}>
        <Text style={styles.buttonText}>Annonce</Text>
      </TouchableOpacity>
      <AnnouncementModal isVisible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  announcementButton: {
    justifyContent: 'center',
  },
  AnnouncementIcon: {
    width: 160,
    height: 160,
  },
  buttonText: {
    fontSize: 14,
    color: colors.darkText,

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.mainBackground,
    width: '80%',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  modalText: {
    fontSize: 12,
    textAlign: 'justify',
    marginBottom: '5%',
  },
  linkButton: {
    marginBottom: 20,
  },
  linkButtonText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: '5%',
    right: '5%',
  },
  closeIcon: {
    width: 35,
    height: 35,
  },
});

export default AnnouncementButton;
