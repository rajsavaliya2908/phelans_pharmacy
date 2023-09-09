import * as React from 'react';
import {Pressable, Text, View} from 'react-native';
import {storeList} from '../../../redux/typings/storeList';
import styles from './styles';

interface ItemStoreProps {
  item: storeList.storeDetail;
  index: number;
  onStoreItemPress: (item: storeList.storeDetail) => void;
}

const ItemStore = ({item, onStoreItemPress, index}: ItemStoreProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onStoreItemPress(item);
      }}>
      <Text style={styles.storeName}>{item.store_name}</Text>
    </Pressable>
  );
};

export default ItemStore;
