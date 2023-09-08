import React, {useRef, useState} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import PictureListItem from './src/components/PictureListItem';
import ActionButton from './src/components/ActionButton';
import picturesData from './assets/data/pictures.json';

const App = () => {
  const [pictures, setPictures] = useState(picturesData);
  const picturesRef = useRef(picturesData);

  const updatePictureLikesById = (id, total) => {
    for (let i = 0; i < picturesRef.current.length; i++) {
      if (picturesRef.current[i].id === id) {
        picturesRef.current[i].likes = picturesRef.current[i].likes + total;
      }
    }
  };

  const updateAllPicturesLikes = total => {
    for (let i = 0; i < picturesRef.current.length; i++) {
      if (total == 0) {
        picturesRef.current[i].likes = total;
      } else {
        picturesRef.current[i].likes = picturesRef.current[i].likes + total;
      }
    }

    setPictures([...picturesRef.current]);
  };

  const renderItem = ({item}) => {
    return (
      <PictureListItem
        picture={item}
        onItemLiked={id => updatePictureLikesById(id, 1)}
        onItemDisliked={id => updatePictureLikesById(id, -1)}
      />
    );
  };
  const keyExtractor = item => item.id;

  console.log('render App');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4f4f4'}}>
      <View>
        <View style={styles.topContainer}>
          <ActionButton
            title={'Like All'}
            type="like"
            onPress={() => {
              updateAllPicturesLikes(1);
            }}
          />
          <ActionButton
            title={'Reset All'}
            type="reset"
            onPress={() => {
              updateAllPicturesLikes(0);
            }}
          />
          <ActionButton
            title={'Dislike All'}
            type="dislike"
            onPress={() => {
              updateAllPicturesLikes(-1);
            }}
          />
        </View>
        <FlatList
          data={pictures}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={{paddingBottom: 110}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default App;
