import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      textAlign: 'center',
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      margin: 10
    },
    mic_button: {
      position: 'absolute',
      right: 90,
      top: 40
    },
    chat_button: {
      position: 'absolute',
      right: 50,
      top: 40
    },
    settings_button: {
      position: 'absolute',
      right: 10,
      top: 40
    },
    title_text: {
        textAlign:'center',
        padding: 10,
        margin: 10
    },
    search_bar:{
      textAlign: 'center',
      borderColor: "black",
      borderWidth: 1.5,
      borderRadius: 20
    },
    card_front: {
      width: 100,
      height: 150,
      borderColor: "black",
      borderWidth: 1.5,
      borderRadius: 20,
      backgroundColor: "#FFFFFF",
      flexDirection: 'row'
    },
    card_red: {
      color: 'red',
      fontSize: 30
    },
    card_black: {
      color: 'black',
      fontSize: 30
    },
    card_logo:{
      color: 'gray',
      fontSize: 15,
      textAlign: 'center'
    },
    card_back: {
      width: 100,
      height: 150,
      borderColor: "black",
      borderWidth: 1.5,
      borderRadius: 20,
      backgroundColor: "#1839a1",
      justifyContent: 'center'
    }
  });

  export default styles;