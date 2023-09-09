import React, {forwardRef} from 'react';
import {Alert, Text, Pressable, View, Image} from 'react-native';
import IMAGES from '../../../assets/images';
import string from '../../../utils/string';
import {ModalUserProps} from '../typings/modaluser';
import styles from './styles';
import ModalBox from 'react-native-modalbox';

const ModalUser = forwardRef<ModalBox, ModalUserProps>(
  (
    {onUserModalClose, onUserModalSubmit, onUserNamePress, patientInfo},
    ref,
  ) => {
    return (
      <ModalBox
        ref={ref}
        style={{backgroundColor: 'transparent'}}
        position="center">
        <Pressable style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Pressable
                style={styles.closeIconContainer}
                onPress={() => onUserModalClose()}>
                <Image style={styles.closeIcon} source={IMAGES.ic_cancel} />
              </Pressable>
              <Text style={styles.patientTitle}>{string.patientInfo}</Text>
              <Text style={styles.patientInfo}>{string.verifyPatientInfo}</Text>
            </View>
            <View style={styles.bottom}>
              <Text style={styles.selectPatient}>{string.selectPateint}</Text>
              <Pressable
                style={styles.userNameContainer}
                onPress={onUserNamePress}>
                <Text style={styles.userName}>{patientInfo.name}</Text>
                <Image source={IMAGES.ic_down} style={styles.downArrowIcon} />
              </Pressable>
              <Pressable
                style={styles.btnContainer}
                onPress={onUserModalSubmit}>
                <Text style={styles.btnText}>{string.next}</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </ModalBox>
    );
  },
);

export default ModalUser;
