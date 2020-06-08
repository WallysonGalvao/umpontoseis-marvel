import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as Crypto from "expo-crypto";

import api from "../../services/api";

import Section from "../../components/Section";
import Card from "../../components/Card";

import Menu from "../../assets/icons/menu.svg";
import Logo from "../../assets/icons/logo.svg";
import Search from "../../assets/icons/search.svg";

import Hero from "../../assets/icons/hero.svg";
import Villain from "../../assets/icons/villain.svg";
import Antihero from "../../assets/icons/antihero.svg";
import Alien from "../../assets/icons/alien.svg";
import Human from "../../assets/icons/human.svg";

import mock from "../../assets/application.json";

const Home = () => {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState(mock);

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Menu />
        <Logo />
        <Search />
      </View>

      <View style={styles.head}>
        <Text style={styles.title}>Bem vindo ao Marvel Heroes</Text>
        <Text style={styles.description}>Escolha o seu personagem</Text>
      </View>

      <View style={styles.categories}>
        <LinearGradient colors={["#005BEA", "#00C6FB"]} style={styles.circle}>
          <Hero />
        </LinearGradient>
        <LinearGradient colors={["#ED1D24", "#ED1F69"]} style={styles.circle}>
          <Villain />
        </LinearGradient>
        <LinearGradient colors={["#B224EF", "#7579FF"]} style={styles.circle}>
          <Antihero />
        </LinearGradient>
        <LinearGradient colors={["#0BA360", "#3CBA92"]} style={styles.circle}>
          <Alien />
        </LinearGradient>
        <LinearGradient colors={["#FF7EB3", "#FF758C"]} style={styles.circle}>
          <Human />
        </LinearGradient>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Section title="Heróis" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {characters.heroes.map((character) => (
            <TouchableOpacity
              key={String(character.name)}
              onPress={() => navigation.navigate("Detail", { character })}
              activeOpacity={0.6}
            >
              <Card
                name={character.name}
                alterEgo={character.alterEgo}
                imagePath={character.imagePath}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Section title="Vilões" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {characters.villains.map((character) => (
            <TouchableOpacity
              key={String(character.name)}
              onPress={() => navigation.navigate("Detail", { character })}
              activeOpacity={0.6}
            >
              <Card
                name={character.name}
                alterEgo={character.alterEgo}
                imagePath={character.imagePath}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Section title="Anti-heróis" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {characters.antiHeroes.map((character) => (
            <TouchableOpacity
              key={String(character.name)}
              onPress={() => navigation.navigate("Detail", { character })}
              activeOpacity={0.6}
            >
              <Card
                name={character.name}
                alterEgo={character.alterEgo}
                imagePath={require("../../assets/chars/spider-man.png")}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Section title="Aliens" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {characters.aliens.map((character) => (
            <TouchableOpacity
              key={String(character.name)}
              onPress={() => navigation.navigate("Detail", { character })}
              activeOpacity={0.6}
            >
              <Card
                name={character.name}
                alterEgo={character.alterEgo}
                imagePath={character.imagePath}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Section title="Humanos" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {characters.humans.map((character) => (
            <TouchableOpacity
              key={String(character.name)}
              onPress={() => navigation.navigate("Detail", { character })}
              activeOpacity={0.6}
            >
              <Card
                name={character.name}
                alterEgo={character.alterEgo}
                imagePath={character.imagePath}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  head: {
    marginTop: 20,
  },
  title: {
    fontFamily: "gilroy-semibold",
    fontSize: 14,
    color: "#B7B7C8",
  },
  description: {
    fontFamily: "gilroy-heavy",
    fontSize: 32,
    color: "#313140",
  },
  categories: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B7B7C8",
  },
});
