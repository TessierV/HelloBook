import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { colors } from '../colors';

const AnnouncementModal = ({ isVisible, onClose }) => {
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
        <Image source={require('../img/UnderConstruction.png')} style={styles.AnnouncementIcon} />
          <Text style={styles.modalText}>
            "En construction. Bientôt disponible !"
          </Text>
          <TouchableOpacity style={styles.SoonButton} onPress={onClose}>
            <Text style={styles.ButtonText}>Bientôt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const AnnouncementBuilding  = ({ test }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity style={styles.announcementButton} onPress={toggleModal}>
        <Text style={styles.buttonText}>{test}</Text>
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
    color: colors.darkText,
    fontSize: 14,
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
    height: '50%',
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
  SoonButton: {
    paddingVertical: '3%',
    borderRadius: 10,
    width: '80%',
    backgroundColor: colors.secondColors,
  },
  ButtonText:{
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.darkBackground,},
});

export default AnnouncementBuilding;
