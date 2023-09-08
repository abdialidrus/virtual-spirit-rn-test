import React, {useState} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import PictureListItem from './src/components/PictureListItem';
import ActionButton from './src/components/ActionButton';

const App = () => {
  const picturesInitialState = [
    {
      id: 1,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg',
      likes: 0,
    },
    {
      id: 2,
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg',
      likes: 0,
    },
    {
      id: 3,
      imageUrl:
        'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg',
      likes: 0,
    },
  ];

  const [pictures, setPictures] = useState(picturesInitialState);

  const updatePictureLikesById = (id, total) => {
    setPictures(current =>
      current.map(picture => {
        if (picture.id == id) {
          return {...picture, likes: picture.likes + total};
        }

        return picture;
      }),
    );
  };

  const updateAllPicturesLikes = total => {
    setPictures(current =>
      current.map(picture => {
        if (total == 0) {
          return {...picture, likes: total};
        }

        return {...picture, likes: picture.likes + total};
      }),
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4f4f4'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
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
          renderItem={({item}) => (
            <PictureListItem
              picture={item}
              onItemLiked={id => updatePictureLikesById(id, 1)}
              onItemDisliked={id => updatePictureLikesById(id, -1)}
            />
          )}
          keyExtractor={picture => picture.id}
          contentContainerStyle={{paddingBottom: 110}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default App;
