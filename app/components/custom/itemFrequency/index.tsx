import * as React from 'react';
import {Pressable, Text, View} from 'react-native';
import {storeList} from '../../../redux/typings/storeList';
import styles from './styles';

interface ItemStoreProps {
  item: string;
  index: number;
  onFrequencyItemPress: (item: string) => void;
}

const ItemFrequency = ({item, onFrequencyItemPress, index}: ItemStoreProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onFrequencyItemPress(item);
      }}>
      <Text style={styles.frequency}>{item}</Text>
    </Pressable>
  );
};

export default ItemFrequency;
