import * as React from 'react';
import {Pressable, Text} from 'react-native';
import {serviceList} from '../../../redux/typings/serviceList';
import styles from './styles';

interface ItemServiceProps {
  item: serviceList.serviceInfo;
  index: number;
  onServiceItemPress: (item: serviceList.serviceInfo) => void;
}

const ItemService = ({item, onServiceItemPress, index}: ItemServiceProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onServiceItemPress(item);
      }}>
      <Text style={styles.serviceName}>{item.service_name}</Text>
    </Pressable>
  );
};

export default ItemService;
