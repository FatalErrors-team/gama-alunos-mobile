import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";


export const Container = styled.View`
	background-color: #fff;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const MainImage = styled.Image`
	width: 280px;
`;

export const MainText = styled.Text`
	color: #ff725e;
	font-size: 40px;
	margin-top: 15px;
	font-weight: 500;
`;

export const LogoText = styled.Text`
	font-size: 20px;
	font-weight: 200;
`;

export const DescriptionContainer = styled.View`
	width: 70%;
	margin-top: 30px;
	letter-spacing: -1px;
	font-weight: 100;
`;

export const Button = styled(RectButton)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 300px;
	height: 70px;
	background-color: #ff725e;
	border-radius: 15px;
	margin-top: 30px;
`;

export const BtnText = styled.Text`
	color: #fff;
	font-size: 20px;
	font-weight: 500;
`;
