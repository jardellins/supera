import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";
import api from "../../services/api";
import { Feather } from "@expo/vector-icons";
import { getValue } from "../../context/AddCart";
import { useNavigation } from "@react-navigation/native";

import imgGame from "../../assets/games.png";
import styles from "./styles";
import ListGames from "../../components/ListGames";
import ListSort from "../../components/ListSort";

const Home = () => {
  const [gamesList, setGamesList] = useState([]);
  const [sort, setSort] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);

  const { total } = getValue();

  const navigation = useNavigation();

  useEffect(() => {
    async function fetchGames() {
      const { data } = await api.get("/games");

      setGamesList(data);
    }

    fetchGames();

    setSort(["Menor preço", "Maior preço", "Relevantes", "Ordem Alfabética"]);
  }, []);

  async function handleRefreshing() {
    setRefreshing(true);
    const { data } = await api.get("/games");

    setGamesList(data);
    setSelectedOrder("");
    setRefreshing(false);
  }

  async function handleSelectOrder(order) {
    let newOrder;

    switch (order) {
      case "Menor preço":
        newOrder = await api.get("/games?_sort=price&_order=asc");
        setGamesList(newOrder.data);
        setSelectedOrder("Menor preço");
        break;
      case "Maior preço":
        newOrder = await api.get("/games?_sort=price&_order=desc");
        setGamesList(newOrder.data);
        setSelectedOrder("Maior preço");
        break;
      case "Relevantes":
        newOrder = await api.get("/games?_sort=score");
        setGamesList(newOrder.data);
        setSelectedOrder("Relevantes");
        break;
      case "Ordem Alfabética":
        newOrder = await api.get("/games?_sort=name");
        setGamesList(newOrder.data);
        setSelectedOrder("Ordem Alfabética");
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>
            The Games {"\n"}
            place
          </Text>
          <Image
            source={imgGame}
            resizeMode="contain"
            style={styles.imageIcon}
          />
        </View>
        <View style={styles.containerInfo}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Cart")}
          >
            {total > 0 && <View style={styles.added} />}
            <Feather name="shopping-cart" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.order}>
        <Text style={styles.orderTitle}>Ordernar por:</Text>
        <FlatList
          data={sort}
          keyExtractor={(index) => index}
          renderItem={({ item }) => (
            <ListSort
              title={item}
              onClick={() => handleSelectOrder(item)}
              active={item === selectedOrder}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        data={gamesList}
        renderItem={({ item }) => (
          <ListGames title={item.name} price={item.price} image={item.image} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => handleRefreshing()}
          />
        }
      />
    </View>
  );
};

export default Home;
