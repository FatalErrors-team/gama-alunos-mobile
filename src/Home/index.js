import React from "react";
import { View, Text } from "react-native";
import { Container, MainImage, MainText, LogoText, DescriptionContainer, Button, BtnText } from "./style.js";

export default function Home({ navigation }) {
	console.log(navigation);
	return (
		<Container>
			<MainImage
				source={require("../../assets/MainHomeImage.png")}
			/>
			<View>
				<MainText>Home Studies</MainText>
				<LogoText>FatalErrors</LogoText>
			</View>
			<DescriptionContainer>
				<Text>
					A Gama Alunos é sua plataforma preferida de gerenciamento de alunos.
					Somos realmente completos! Temos desde funções mais simples a um
					time completamente disposto a dar suporte 24 horas
				</Text>
			</DescriptionContainer>
			<Button onPress={() => navigation.navigate('ResultList')}>
				<BtnText>Entrar</BtnText>
			</Button>
		</Container>
	);
}
