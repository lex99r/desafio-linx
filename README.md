# Linx Impulse - Desafio Técnico Desenvolvedor Fullstack

Criação de duas apis rest para o desafio da Linx

## Instruções de execução das apis:

	1) Instalar MongoDB
	2) Criar um arquivo .env nesse modelo na raiz do projeto
	```
	API_CATALOGO_PORT = 3000
	API_RECOMENDACAO_PORT = 8080
	```
	2) api-catalogo: npm install && npm start
	3) api-recomendacao: npm install && npm start

## Tecnologias usadas na implementação:

	* Node.js + Express: escolhi utilizar Node.js com o framework Express em ambas apis uma que vez Noje.js era obrigatório na api de recomendações e facultativo na api de catálogo

	* MongoDB + Mongoose: escolhi utilizar MongoDB com o ORM Mongoose para persistir os dados da api de catálogo por acreditar que seja opção que casa melhor com Node.js e com o arquivo JSON dado


## Funcionamento da api de catálogo

	A api é responsável por carregar os dados do catalog.json para o SGBD escolhido e definir rotas e controladores para acesso de um produto através de um paramêtro id passado

	Exemplo:

	url: 'localhost:3000/product/:id/'
	RequestType: get
	headers: {'Content-Type': 'application/json'}
	requestBody: {
		'format': 'complete' || 'compact'
	}
	
## Funcionamento da api de recomendações

	Essa api, por sua vez, é responsável por consumir apis de recomendação da Linx, as quais retornam ids de produtos que são usados para consumir a api de catálogo, por fim, a api retorna dois arrays de produtos (produtos mais populares e produtos em oferta), a api também pode receber como parâmetro um tamanho máximo para ambos arrays

	Exemplo:

	url: 'localhost:8080/'
	RequestType: get
	headers: {'Content-Type': 'application-json'}
	query{
		'maxProducts': val >= 10
	}