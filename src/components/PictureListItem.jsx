import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import ActionButton from "./ActionButton";

const PictureListItem = ({picture, onItemLiked, onItemDisliked}) => {

    console.log('render picture ' + picture.id);
    return (
        <View style={styles.card}>
            <Image 
                source={{
                    uri: picture.imageUrl
                }}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: 200
                }}
            />
            <View style={styles.cardContentBottom}>
                <View style={styles.likeCounter}>
                    <Text>{picture.likes} Like</Text>
                </View>
                <View style={styles.actionButtonContainer}>
                    <ActionButton 
                        title='Like' 
                        type='like'
                        onPress={() => {
                            onItemLiked(picture.id)
                        }} 
                    />
                    <View style={{width: 10}} />
                    <ActionButton 
                        title='Dislike' 
                        type='dislike'
                        onPress={() => {
                            onItemDisliked(picture.id)
                        }} 
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        elevation: 3,
        marginHorizontal:10, 
        marginVertical:5, 
        backgroundColor:'#fff',
        overflow: 'hidden'
    },
    cardContentBottom: {
        flex:1, 
        flexDirection:'row', 
        alignContent:'space-between', 
        alignItems:'center', 
        justifyContent:'space-between', 
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    likeCounter: {
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#d1d6d6',
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    actionButtonContainer: {
        flexDirection:'row', 
        alignContent:'space-between', 
        justifyContent:'space-between'
    }
})

export default PictureListItem