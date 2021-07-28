import React from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import Routes from "./src/routes";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) 
    return <AppLoading />;

  return (
    <>
      <StatusBar  backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
