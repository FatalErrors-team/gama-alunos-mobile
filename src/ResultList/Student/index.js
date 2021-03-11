import React from 'react';
import { Container, ContainerText, Text } from './style.js';

export default function Student({ nome, curso, conceito }) {

	function capitalize(string) {
		return `${string[0].toUpperCase()}${string.substr(1, string.length).toLowerCase()}`
	}

  return (
    <Container>
 			<ContainerText>
				<Text>{nome}</Text>
			</ContainerText>
			<ContainerText>
				<Text>{curso}</Text>
			</ContainerText>
			<ContainerText>
				<Text>{capitalize(conceito)}</Text>
			</ContainerText>
		</Container>
  );
}
