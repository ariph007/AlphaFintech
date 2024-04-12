import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const Signup = () => {
  const [countryCode, setCountryCode] = useState("+62");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === 'android' ? 80 : 90

  const signUpHandler = async () => {};

  return (
    <KeyboardAvoidingView style={{flex : 1}} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started!</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number. We will send you a confirmation code there
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { width: 80 }]}
          placeholder="Country code"
          placeholderTextColor={Colors.gray}
          value={countryCode}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Mobile number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(number) => setPhoneNumber(number)}
        />
      </View>
      <Link href={"/login"} asChild replace>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account ? Log In
          </Text>
        </TouchableOpacity>
      </Link>

    <View style={{flex : 1}} />
      <TouchableOpacity
        disabled={phoneNumber == ""}
        style={[
          defaultStyles.pillButton,
          phoneNumber == "" ? styles.disable : styles.enable,
        ]}
        onPress={signUpHandler}
      >
        <Text style={defaultStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enable: {
    backgroundColor: Colors.primary,
    marginBottom: 20,
  },
  disable: {
    backgroundColor: Colors.primaryMuted,
    marginBottom: 20,
  },
});

export default Signup;
