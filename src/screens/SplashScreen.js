
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/Logo.png'; 



export default function App() {
  return (
    <View style={styles.container}>
     <Image source={logo} style={ styles.logo} /> 
     <Text style={styles.splashScreenBottomLine}> 
       Made with love in 
       St Andrews
      </Text>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    width:303,
    height:208,
    marginBottom:10,
  },

  splashScreenBottomLine:{
    color:'#918F8D',
    fontSize:14,
    marginTop: 105
  }

});
