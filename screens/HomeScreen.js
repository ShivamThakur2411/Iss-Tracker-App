import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView , TouchableOpacity, StatusBar, Platform, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>
                                ISS TRACKER APP
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.routeCard}
                            onPress={
                                ()=>{
                                    this.props.navigation.navigate("IssLocation")
                                }
                            }>
                            <Text style={styles.routeText}>
                                ISS Location
                            </Text>
                            <Text style={styles.knowMore}>{"know more --->"}</Text>
                            <Text style={styles.bgDigit}>1</Text>
                            <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard}
                            onPress={
                                ()=>{
                                    this.props.navigation.navigate("Meteor")
                                }
                            }
                        >
                            <Text style={styles.routeText}>
                                Meteors
                            </Text>
                            <Text style={styles.knowMore}>{"know more --->"}</Text>
                            <Text style={styles.bgDigit}>1</Text>
                            <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard}
                            onPress={
                                ()=>{
                                    this.props.navigation.navigate("Updates")
                                }
                            }
                        >
                            <Text style={styles.routeText}>
                                Update
                            </Text>
                            <Text style={styles.knowMore}>{"know more --->"}</Text>
                            <Text style={styles.bgDigit}>1</Text>
                            <Image source={require("../assets/rocket_icon.png")} style={styles.iconImage}/>
                        </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"? StatusBar.currentHeight:0,
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center',
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white',
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:30,
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },
    knowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15,
    },
    bgDigit:{
        position:"absolute",
        color:'blue',
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1,
    },
    iconImage:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80,
    }
})