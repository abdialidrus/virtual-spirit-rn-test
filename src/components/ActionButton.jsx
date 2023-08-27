import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ActionButton = ({title, type, onPress}) => {
    let bgColor = '#fff'
    let titleColor = '#fff'
    if (type == 'like') {
        bgColor = '#2b72c4'
    } else if (type == 'dislike') {
        bgColor = '#db2c2c'
    } else {
        titleColor = '#000'
    }

    return <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            <Text style={{color: titleColor}}>{title}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        elevation: 2,
        paddingHorizontal: 20, 
        paddingVertical: 5
    }
})

export default ActionButton