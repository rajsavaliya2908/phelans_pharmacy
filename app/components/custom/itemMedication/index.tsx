import {Text, View, Pressable, Image} from 'react-native';
import {ItemMedicationProps} from '../typings/itemMedication';
import styles from './styles';
import IMAGES from '../../../assets/images';

const ItemMedication = ({
  item,
  index,
  onDeleteIconPress,
  onEditIconPress,
}: ItemMedicationProps) => {
  const {frequency, set_time} = item;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{set_time}</Text>
      <Text style={styles.title}>{frequency}</Text>
      <View style={styles.btnsContainer}>
        <Pressable
          style={styles.btnContainer}
          onPress={() => {
            onEditIconPress(item);
          }}>
          <Image source={IMAGES.ic_edit} style={styles.logo} />
        </Pressable>
        <Pressable
          style={styles.btnContainer}
          onPress={() => {
            onDeleteIconPress(item);
          }}>
          <Image source={IMAGES.ic_delete} style={styles.logo} />
        </Pressable>
      </View>
    </View>
  );
};

export default ItemMedication;
