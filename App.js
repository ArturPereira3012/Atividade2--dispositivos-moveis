import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles"; 


const skins = [
  {
    id: "1",
    nome: "AK-47 | Fire Serpent",
    qualidade: "StatTrak™",
    condição: "Minimal Wear",
    image: require("./assets/fireserpent.png"),
  },
  {
    id: "2",
    nome: "M4A4 | Howl",
    qualidade: "Factory New",
    condição: "Factory New",
    image: require("./assets/howl.png"),
  },
  {
    id: "3",
    nome: "AWP | Dragon Lore",
    qualidade: "Souvenir",
    condição: "Factory New",
    image: require("./assets/dragonlore.png"),
  },
  {
    id: "4",
    nome: "Desert Eagle | Blaze",
    qualidade: "StatTrak™",
    condição: "Factory New",
    image: require("./assets/blaze.png"),
  },
  {
    id: "5",
    nome: "Glock-18 | Fade",
    qualidade: "StatTrak™",
    condição: "Minimal Wear",
    image: require("./assets/glockfade.png"),
  },
  {
    id: "6",
    nome: "Karambit | Doppler",
    qualidade: "Factory New",
    condição: "Phase 2",
    image: require("./assets/karambitdoppler.png"),
  },
];


const SkinItem = ({ skin }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity onPress={() => setExpanded(!expanded)}>
      <View style={styles.card}>
        <Image source={skin.image} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{skin.nome}</Text>
          {expanded && (
            <>
              <Text style={styles.details}>Qualidade: {skin.qualidade}</Text>
              <Text style={styles.details}>Condição: {skin.condição}</Text>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Skins de CS2</Text>
      <FlatList
        data={skins}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkinItem skin={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}          