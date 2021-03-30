import React from 'react';

interface Props {
  children: any;
}

export default function Wrraper( props: Props ) {
	return (
		<html lang="pt-br">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Pratica 3 - SD - gRPC</title>
			</head>
			{props.children}
		</html>
	)
}