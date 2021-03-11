import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.mainImage}
          source={require("../../assets/MainHomeImage.png")}
        />
        <View>
          <Text style={styles.mainText}>Home Studies</Text>
          <Text style={styles.logoText}>FatalErrors</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            A Gama Alunos é sua plataforma preferida de gerenciamento de alunos.
            Somos realmente completos! Temos desde funções mais simples a um
            time completamente disposto a dar suporte 24 horas
          </Text>
        </View>
        <RectButton style={styles.button}>
          <Text style={styles.btnText}>Entrar</Text>
        </RectButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImage: {
    width: 280,
  },
  mainText: {
    color: "#FF725E",
    fontSize: 40,
    marginTop: 15,
    fontWeight: "500",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "200",
  },
  descriptionContainer: {
    width: "70%",
    marginTop: 30,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 70,
    backgroundColor: "#FF725E",
    borderRadius: 15,
    marginTop: 30,
  },
  btnText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500",
  },
});
