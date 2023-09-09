import React, {forwardRef} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {AppState} from '../../../redux';
import {userList} from '../../../redux/typings/userList';
import ItemUser from '../itemUser';
import ModalBox from 'react-native-modalbox';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ModalUserListProps {
  onUserItemPress: (item: userList.userDetail) => void;
  userList: userList.userDetail[];
}

const ModalUserList = forwardRef<ModalBox, ModalUserListProps>(
  ({onUserItemPress, userList}, ref) => {
    const renderStoreItem = (props: {
      item: userList.userDetail;
      index: number;
    }) => {
      return <ItemUser {...props} onUserItemPress={onUserItemPress} />;
    };

    return (
      <ModalBox ref={ref} style={styles.modalContainer} position="bottom">
        <SafeAreaView edges={['bottom']}>
          <FlatList
            contentContainerStyle={styles.listContainer}
            keyExtractor={(item, index) => `UserList-${index}`}
            data={userList}
            renderItem={renderStoreItem}
          />
        </SafeAreaView>
      </ModalBox>
    );
  },
);

export default ModalUserList;
