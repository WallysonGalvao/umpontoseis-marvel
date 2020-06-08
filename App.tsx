import React from "react";
import { StatusBar, Text } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "gilroy-bold": require("./assets/fonts/gilroy-bold.ttf"),
    "gilroy-heavy": require("./assets/fonts/gilroy-heavy.ttf"),
    "gilroy-medium": require("./assets/fonts/gilroy-medium.ttf"),
    "gilroy-regular": require("./assets/fonts/gilroy-regular.ttf"),
    "gilroy-semibold": require("./assets/fonts/gilroy-semibold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </>
  );
}
