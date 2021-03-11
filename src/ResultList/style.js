import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: 800;
	color: #fff;
	text-align: center;
	font-size: 22px;
	font-weight: bold;
	margin-bottom: 15px;
	margin-top: 15px;
`;

export const Image = styled.Image`
	flex: 1;
	margin-top: 40px;
	margin-bottom: 40px;
`;

export const ListContainer = styled.SafeAreaView`
	flex: 2;
	width: 100%;
	background-color: #ff725e;
	border-top-left-radius: 50px;
	border-top-right-radius: 50px;
	box-shadow: 10px 10px 20px rgba(143, 143, 143, 0.1);
`;

export const List = styled.FlatList``;

