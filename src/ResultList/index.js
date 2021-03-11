import React, { useState, useEffect } from 'react';
import Student from './Student/index.js';
import { Container, Image, Title, ListContainer, List } from './style.js';
import axios from 'axios';
import AppLoading from 'expo-app-loading';


export default function ResultList() {

	const [alunos, setAlunos] = useState([{}]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('https://gama-alunos-node.herokuapp.com/api/v1/alunos')
			.then((result) => {
				axios
					.get('https://gama-alunos-node.herokuapp.com/api/v1/alunos', { headers: { "X-Persistence-Type": "REST" } })
					.then((result2) => {

						setAlunos([ ...result.data.data, ...result2.data.data]);
					})
					.catch(() => {
						console.log('Rapaz... deu erro.')
					})
					.finally(() => {
						setLoading(false);
					})
			})
			.catch(() => {
				console.log('Rapaz... deu erro.');
			})
	}, []);

	function renderItem({ item }) {
		return (
			<Student
				nome={item.nome}
				curso={item.curso.nome}
				conceito={item.conceito}
			/>
		);
	}

	return (
		<Container>
			{isLoading ? (
				<AppLoading />
			) : (	
				<>
					<Image 
						source={require('../../assets/ListImage.png')}/>
					<ListContainer>
						<Title>Lista de Resultados</Title>
						<List
							data={alunos}
							renderItem={renderItem}
							keyExtractor={(item) => (!!(item._id) ? item._id : item.id)}
						/>
					</ListContainer>
				</>
			)}
		</Container>
	)
};
