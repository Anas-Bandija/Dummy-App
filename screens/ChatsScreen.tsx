import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import Icon from "react-native-vector-icons/AntDesign"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker'

export default function ChatsScreen() {
  const [cardName, onChangeCardName] = useState("")
  const [cardDescription, onChangeCardDescription] = useState('');
  const [date, setDate] = useState<any>(new Date())
  const [openMode, setOpenMode] = useState<any>(false)

  const handleTakePhoto = async () => {
    try {
      const result = await launchCamera({ mediaType: 'photo' });
      if (result.assets && result.assets.length > 0) {
        const photo = result.assets[0];
        console.log("Photo URI:", photo.uri);
        // You can set state here if needed
      }
    } catch (error) {
      console.log("Camera Error:", error);
    }
  }

  const handleTakePhotoFromLib = async () => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' })
      if (result.assets && result.assets.length > 0) {
        const photo = result.assets[0];
        console.log("Photo URI:", photo.uri);
        // You can set state here if needed
      }
    } catch (error) {
      console.log("Camera Error:", error);
    }
  }

  return (
    <ScrollView>
      <AppHeader title={"Chats"} />
      <View style={styles.container}>
        <Text style={styles.heading}>Add Card</Text>
        <View>
          <Text style={styles.lable}>Card Name:</Text>
          <TextInput
            style={styles.cardName}
            placeholder='Card Name...'
            value={cardName}
            onChangeText={onChangeCardName}
          />
          <Text style={styles.lable}>Card Description:</Text>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={5}
            placeholder="Card Description..."
            value={cardDescription}
            onChangeText={onChangeCardDescription}
          />
          <Text style={styles.lable}>Card Image:</Text>
          <View style={styles.modal}>
            <TouchableOpacity style={styles.greenBtn} onPress={handleTakePhoto}>
              <Icon name='camera' size={30} color={"white"} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.greenBtn} onPress={handleTakePhotoFromLib}>
              <Icon name="addfolder" size={30} color={"white"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.lable}>Card Time & Date:</Text>
          <View style={styles.modal}>
            <TouchableOpacity style={styles.greenBtn} onPress={() => setOpenMode('date')}>
              <Icon name="calendar" size={30} color={"white"} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.greenBtn} onPress={() => setOpenMode('time')}>
              <Icon name="clockcircleo" size={30} color={"white"} />
            </TouchableOpacity>
          </View>

          <DatePicker
            modal
            open={openMode !== null}
            date={date}
            mode={openMode === 'time' ? 'time' : 'date'}
            onConfirm={(selectedDate) => {
              setOpenMode(null);
              setDate(selectedDate);
            }}
            onCancel={() => setOpenMode(null)}
          />
          <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Add Card</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30
  },
  addButton: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  cardName: {
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    marginVertical: 10,
    padding: 10
  },
  textArea: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top', // aligns text at the top
    borderRadius: 8,
  },
  btn: {
    backgroundColor: "blue",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 8
  },
  btnText: {
    fontSize: 20,
    color: "white",
  },
  modal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12
  },
  greenBtn: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8
  },
  lable:{
    fontSize:15,
    marginVertical:15
  }
})