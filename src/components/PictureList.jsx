import React from "react";
import { View, FlatList } from "react-native";
import PictureListItem from "./PictureListItem";

const PictureList = ({pictures, onItemLiked, onItemDisliked}) => {
    return <View>
        <FlatList
            data={pictures}
            renderItem={({item}) => (
                <PictureListItem
                    picture={item}
                    onItemLiked={onItemLiked}
                    onItemDisliked={onItemDisliked}
                />
            )}
            keyExtractor={picture => picture.id}
            contentContainerStyle={{paddingBottom: 110}}
        />
    </View>
}

export default PictureList