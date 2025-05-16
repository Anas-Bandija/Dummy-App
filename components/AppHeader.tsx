import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AppHeader = ({ title, onBackPress, userName = 'John Doe', userStatus = 'online', profileImage }: any) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Icon name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Centered Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.userName}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    paddingTop: 70,
    paddingBottom: 30,
    paddingHorizontal: 12,
    backgroundColor: '#075E54',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 12,
    top: 70,
    padding: 8,
    zIndex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default AppHeader;
