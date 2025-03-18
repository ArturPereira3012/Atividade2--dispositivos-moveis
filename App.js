import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";

const skins = [
  {
    id: "1",
    nome: "AK-47 | Fire Serpent",
    qualidade: "StatTrak™",
    condição: "Minimal Wear",
    descricao: "A lendária AK-47 Fire Serpent é altamente cobiçada pelos colecionadores de skins de CS2. Com um design tribal verde e um toque envelhecido, essa skin representa poder e resistência em campo.",
    image: require("./assets/fireserpent.png"),
  },
  {
    id: "2",
    nome: "M4A4 | Howl",
    qualidade: "Factory New",
    condição: "Factory New",
    descricao: "A M4A4 Howl é uma das skins mais icônicas do CS2, destacando-se pelo seu design agressivo de um lobo uivando em tons vibrantes de vermelho e preto. Uma skin rara e valiosa.",
    image: require("./assets/howl.png"),
  },
  {
    id: "3",
    nome: "AWP | Dragon Lore",
    qualidade: "Souvenir",
    condição: "Factory New",
    descricao: "A AWP Dragon Lore é a joia da coroa entre as skins de snipers. Seu design apresenta um majestoso dragão dourado, tornando-a uma das skins mais valiosas e desejadas do jogo.",
    image: require("./assets/dragonlore.png"),
  },
  {
    id: "4",
    nome: "Desert Eagle | Blaze",
    qualidade: "StatTrak™",
    condição: "Factory New",
    descricao: "A Desert Eagle Blaze é conhecida por seu efeito flamejante em laranja e amarelo vibrantes. Seu visual ardente faz com que seja uma escolha popular entre jogadores que apreciam estilo e impacto.",
    image: require("./assets/blaze.png"),
  },
  {
    id: "5",
    nome: "Karambit | Doppler",
    qualidade: "Factory New",
    condição: "Phase 2",
    descricao: "A Karambit Doppler é uma das skins de faca mais desejadas, com um padrão hipnotizante em tons metálicos de azul e roxo. Seu formato curvado e letal a torna uma escolha icônica.",
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
              <Text style={styles.description}>Descrição: {skin.descricao}</Text>
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
