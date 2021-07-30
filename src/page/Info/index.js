import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import images from "../../services/images";
import colors from '../../styles/colors';

const Info = () => {
  return (
    <Ionicons name="ios-add" size={24} color="white" style={styles.add} />
  
    )
}

export default Info;

const styles = StyleSheet.create({    
  add: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    padding: 3,
    borderRadius: 20,
  },
})