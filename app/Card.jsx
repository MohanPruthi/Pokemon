import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import heartIcon from "../assets/images/heart1.png"
import { withTiming } from 'react-native-reanimated'

const Card = ({name, hp, pokemonImg, typeImg, type, style, description}) => {
    return (
        <View style= {styles.box}>

            <View style={styles.headingSection}>

                <View>
                    <Text style={styles.nameHeading}> {name} </Text>
                </View>

                <View style={styles.hpSection}>
                    <Image source={heartIcon} style={styles.hpImg}/>
                    <Text style= {styles.hpTxt}>HP: {hp}</Text>
                </View>

            </View>

            <Image source={pokemonImg} style={styles.pokemonPic}/>

            <View style={[styles.typeBox, style]}>
                <Image source={typeImg} style={styles.typePic}/>

                <Text style={styles.type}>{type}</Text>
            </View>

            <Text style={styles.description}>{description}</Text>
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        width: 325,
        height: 550,
        backgroundColor: "#15161a",
        margin: 10,
        borderWidth: 0.3,
        borderStyle: "solid",
        borderRadius: 10,
        borderColor: "#44464a",
        padding: 10,
    },

    headingSection:{
        flexDirection: "row", 
        width: 300, 
        justifyContent: "space-between"
    },

    nameHeading: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    },

    hpSection: {
        flexDirection: "row",   
        margin: 5, 
    },

    hpImg: {
        width: 25,
        height: 22,
        marginRight: 3
    },

    hpTxt: {
        color: "white",
        fontSize: 15
    },

    pokemonPic: {
        marginTop: 30,
        alignSelf: "center",
        width: 200,  // Set fixed width
        height: 200, // Set fixed height
        resizeMode: "contain" // Optional: Keep aspect ratio within the defined size
    },

    typeBox: {
        width: "auto",
        height: 70,
        flexDirection: "row",
        borderWidth: 5,
        borderRadius: 20,
        padding: 10,
        alignSelf: "center",
        marginTop: 30,
        justifyContent: "space-between"
    },

    typePic: {
        width: 40,
        height: 40,
        resizeMode: "contain",
        marginRight: 10
    },

    type: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },

    description: {
        color: "white",
        fontSize: 20,
        marginTop: 20,
        alignSelf: "auto"
    }
})


export default Card
