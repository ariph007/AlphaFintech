import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);
  console.log(assets);

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
        />
      )}
      <View style={{marginTop: 80, padding: 20}}>
        <Text style={styles.header}>Ready to change the way you money ?</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Link href={'/login'} style={[defaultStyles.pillButton, styles.loginLink]} asChild>
          <TouchableOpacity>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </Link>
        <Link href={'/signup'} style={[defaultStyles.pillButton, styles.signupLink]} asChild>
          <TouchableOpacity>
            <Text style={styles.textSignup}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: '100%',
    height:'100%',
    position: "absolute",
  },
  header:{
    fontSize: 36,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white'
  },
  buttonWrapper:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 40,
    padding: 5
  },
  textLogin: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500'
  },
  textSignup: {
    color: Colors.dark,
    fontSize: 22,
    fontWeight: '500'
  },
  loginLink:{
    backgroundColor: Colors.dark,
    flex: 1
  },
  signupLink:{
    backgroundColor: 'white',
    flex: 1
  }
});

export default Page;
