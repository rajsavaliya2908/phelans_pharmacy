import React, {useState} from 'react';
import {Modal, View, Alert, TextInput, Pressable, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Methods from '../../../utils/methods';
// import { forgotPasswordApi } from '../../../api/forgotPassword';
import string from '../../../utils/string';
import {forgotPasswordRequest} from '../../../redux/actions/forgotPassword';
import COLORS from '../../../utils/colors';
import styles from './styles';

const ForgotPasswordModal = ({visible, onRequestClose, onDismiss}: any) => {
  const dispatch = useDispatch();
  const [forgotEmail, setForgotEmail] = useState<any>('');
  const handleChange = (text: string) => {
    setForgotEmail(text);
  };

  const handleSubmit = async () => {
    if (!forgotEmail.trim().length) {
      Alert.alert(string.appName, string.emailValidation);
    } else if (!Methods.isValidEmail(forgotEmail)) {
      Alert.alert(string.appName, string.emailFormatValidation);
    } else if (!forgotEmail.trim().length) {
      Alert.alert(string.appName, string.passwordValidation);
    } else {
      dispatch(
        forgotPasswordRequest({
          email: forgotEmail,
        }),
      );
    }
  };

  return (
    <>
      <Modal
        visible={visible}
        transparent
        onRequestClose={onRequestClose}
        onDismiss={onDismiss}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.fPass}>{string.Forgot_Password}</Text>
            <Text style={styles.EmailText}>{string.Enteryouremailaddress}</Text>
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.emailString}>{string.Email_address}</Text>
            <TextInput
              value={forgotEmail}
              onChangeText={handleChange}
              placeholder="@email"
              style={{backgroundColor: COLORS.grey}}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.btnContainer} onPress={handleSubmit}>
              <Text style={styles.btnText}>{string.Proceed}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ForgotPasswordModal;
