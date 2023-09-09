import * as React from 'react';
import {Pressable, Text} from 'react-native';
import {userList} from '../../../redux/typings/userList';
import styles from './styles';

interface ItemUserProps {
  item: userList.userDetail;
  index: number;
  onUserItemPress: (item: userList.userDetail) => void;
}

const ItemUser = ({item, onUserItemPress, index}: ItemUserProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        onUserItemPress(item);
      }}>
      <Text style={styles.storeName}>{item.name}</Text>
    </Pressable>
  );
};

export default ItemUser;
