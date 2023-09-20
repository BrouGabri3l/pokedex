# Pokédex

Este é um projeto de Pokédex simples criado usando tecnologias web padrão. Ele permite aos usuários buscar informações sobre diferentes Pokémon, incluindo seus nomes, tipos e imagens.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

- **HTML:** A estrutura básica da página da web foi criada usando HTML (Hypertext Markup Language).

- **CSS:** O estilo visual da página foi estilizado com CSS (Cascading Style Sheets).

- **JavaScript:** A funcionalidade interativa da Pokédex é implementada usando JavaScript.

- **React:** Biblioteca javascript utilizada para facilitar e melhorar criação de websites.

- **Recoil:** Biblioteca do Facebook para gerenciamento de estado compartilhado.

- **Axios:** Biblioteca para requisições HTTP.

- **Tailwindcss:** Biblioteca de estilo baseada em classes utilitárias.

- **HeroIcons:** Icones baseados em tailwindcss.

- **PokéAPI:** Os dados dos Pokémon são obtidos da PokéAPI, uma API pública que fornece informações detalhadas sobre os Pokémon.

## Detalhes sobre o projeto

Para melhor organização do código, o acesso a resposta da API foi separado em hooks da seguinte forma:

```bash
-hooks
    -useLoadApi
    -usePokemon
    -usePokemonList
```

Onde os hooks **usePokemon** e **usePokemonList** utilizam o **useLoadApi** para acesso a api

Estes hooks são utilizados para criar uma abstração de funcionalidades que podem ser reutilizadas, deixando assim o código mais limpo como no exemplo

```javascript
//hooks/usePokemonList.js
import { useState } from 'react';
import useLoadApi from './useLoadApi';

const usePokemonList = () => {
  const [url, setUrl] = useState('/pokemon');
  const { response, error, isLoading } = useLoadApi({
    method: 'get',
    url: url,
  });

  const getPreviousPage = () => {
    setUrl(response.previous);
  };

  const getNextPage = () => {
    setUrl(response.next);
  };

  return { data: response, error, isLoading, getPreviousPage, getNextPage };
};
export default usePokemonList;
```

```javascript
//utilizamos o hook assim
const { getPreviousPage, getNextPage, data, isLoading, error } =
  usePokemonList();
```

A biblioteca recoil foi utilizada para que dados fossem compartilhados entre componentes sem criar uma prop hell

Foi utilizada ao criar o filtro de busca, onde o componente do filtro define um valor para o estado compartilhado e usamos este valor em outro componente

```javascript
//como criar um estado compartilhado com recoil

const nomeDoAtomo = atom({
   key: "chave do atomo",
   default: "valor padrão
})
```
Para utilizar o valor do atomo, utilizamos uma estrutura parecida com a do useState

```javascript
//podemos utilizar o valor e seu setter com
const [valor, setValor] = useRecoilState(nomeDoAtomo)
//apenas  seu valor
const valor = useRecoilValue(nomeDoAtomo)
// ou apenas seu setter
const [setValor] = useSetRecoilState(nomeDoAtomo)
```

## Como Usar

1. Clone este repositório em sua máquina local usando o seguinte comando:

   ```bash
   git clone https://github.com/BrouGabri3l/pokedex.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd pokedex
   ```

3. Instale as dependencias utilizando:

```bash
npm install
```

3. Inicie o projeto utilizando

```bash
npm run dev
```

4. Ou crie um build utilizando

```bash
npm run build
```
