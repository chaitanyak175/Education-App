import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useRouter } from 'expo-router'

// Define the navigation routes type
type RootStackParamList = {
  Home: undefined;
  java: undefined;
  javascript: undefined;
  python: undefined;
}

// Define the navigation prop type
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Home = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose a Programming Language</Text>
      
      <View style={styles.languageContainer}>
        <Image 
          source={require('../../assets/images/java-logo.png')} 
          style={styles.logo}
          // Fallback placeholder if image not available
          defaultSource={require('../../assets/images/java-logo.png')}
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/Java')}
        >
          <Text style={styles.buttonText}>Java</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.languageContainer}>
        <Image 
          source={require('../../assets/images/javascript-logo.png')} 
          style={styles.logo}
          defaultSource={require('../../assets/images/java-logo.png')}
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/Javascript')}
        >
          <Text style={styles.buttonText}>JavaScript</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.languageContainer}>
        <Image 
          source={require('../../assets/images/python-logo.png')} 
          style={styles.logo}
          defaultSource={require('../../assets/images/python-logo.png')}
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/Python')}
        >
          <Text style={styles.buttonText}>Python</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  languageContainer: {
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4287f5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Home