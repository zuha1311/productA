import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from './assets/Logo'
import { alignItems, justifyContent, width } from 'styled-system'
import { TextInput } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native-web'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user)
            {
               navigation.navigate("Home")
            }
        })

        return unsubscribe

    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        })
        .catch(error => alert(error.message))
    }
  
    return (
    <KeyboardAvoidingView
    style = {styles.container}
    behavior = "padding"
    
    
    >
    <View style={styles.headerImage}>
        <Image source = {logo} style = {{width:305,height:159}}/>
    </View>

    <View style = {styles.inputContainer}>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText = {text => setEmail(text)}
            style={styles.input}
            />

<TextInput
            placeholder="Password"
            value={password }
            onChangeText = {text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />




    </View>

    <View style = {styles.buttonContainer}>
            <TouchableOpacity
            onPress = {handleLogin}
            style = {styles.buton}>

                <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress = {handleSignUp}
            style = {[styles.buton, styles.buttonOutline]}>

                <Text style = {styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>


    </View>
    
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#fffbf7',
    alignItems:'center',
    justifyContent:'center',
},

inputContainer:{
    width:'80%'
},

input:{
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,
    backgroundColor:'white'
},

buttonContainer:{
    width: '60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
},

button:{
    backgroundColor:'#1bafff',
    width:'100%',
    padding:15,
    borderRadius:10,
    alignItems:'center'

},
buttonOutline:{
    backgroundColor:'white',
    marginTop:5,
    borderColor:'#1bafff',
    borderWidth:2

},
buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16,
},
buttonOutlineText:{
    color:'#1bafff',
    fontWeight:'700',
    fontSize:16,
}




//container for header image

})