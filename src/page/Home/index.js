import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import api from "../../services/api";

import imgGame from "../../assets/games.png";
import styles from "./styles";
import ListGames from "../../components/ListGames";

const Home = () => {
  const [gamesList, setGamesLis] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const { data } = await api.get("/games");

      setGamesLis(data);
    }

    fetchGames();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          The Games {"\n"}
          place
        </Text>
        <Image source={imgGame} resizeMode="contain" style={styles.imageIcon} />
      </View>

      <View style={styles.line} />

      <FlatList
        data={gamesList}
        renderItem={({ item }) => (
          <ListGames title={item.name} price={item.price} image={item.image} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
};

export default Home;
