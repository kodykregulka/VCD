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
    }
  });

  export default styles;