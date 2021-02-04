import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if(size == "big") {
    buttonStyles.push(styles.bigButton)
  }

  if(theme == "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if(theme == "primary") {
    buttonStyles.push(styles.buttonPrimary);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>

)};

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 25
    },
    textSecondary: {
        color: "#060606"
    },
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: buttonWidth - 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: buttonWidth,
        margin: 5
    },
    bigButton: {
        width: screen.width / 2 -10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 40
    },
    buttonSecondary: {
        backgroundColor: "#a6a6a6"
    },
    buttonPrimary: {
        backgroundColor: "#f09a36"
    }

})