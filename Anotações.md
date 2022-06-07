- **Hooks: permite que a gente trabalhe com funções (componentes funcionais), e não somente com classes;**
- **Antes dos hooks, não existia a possibilidade de criar estado, dentro de componentes funcionais (a única forma era receber dados via propriedade);**



### useState()

- **No useState(), passamos o valor inicial: `useState(valorInicial)`;**
- **O useState(), é atribuído a um array de dois elementos. Esse dois elementos correspondem a: primeiro, uma variável (a qual é atribuído o valor inicial, passado no useState()), e segundo, uma função (que serve para alterar o valor da variável): `const [ variavel, setVariavel] = useState(valorInicial)`;**
- **O nome das funções se iniciam pelo termo _set_ e em seguida temos o nome da variável, com a primeira letra em maiúsculo;**
- **Ex.:**

  ```react
  const [contador, setContador] = useState(0);
  
  // Temos o estado 'contador', de valor inicial zero;
  // Para alterar o valor de contador, usamos a função setContador();
  ```

  

### useEffect()

- **Efeito colateral: mudar algo na interface, que acaba gerando alteração (um efeito colateral) em outra informação da interface;**
- **Quando utilizamos o useEffect(), passamos dois parâmetros: o primeiro, uma função que será chamada quando ele for gerar esse efeito colateral, e o segundo, um parâmetro opcional, é a lista de dependência, que é um array (a função será chamada chamada, sempre que o que estiver na lista de dependências, for modificado);**
- **Quando a lista de dependências estiver vazia, a função é automaticamente executada;**



### useRef()

- **O useRef() retorna um objeto (e sempre a mesma referência). Esse objeto terá o valor inicial que iremos passar e, esse valor vai estar associado ao atributo/propriedade _.current_;**
- **A partir do atributo _.current_, conseguimos ter um estado dentro desse objeto;**
- **Sempre que o componente for renderizado, teremos acesso ao mesmo objeto (mesma referência);**
- **Quando o valor da propriedade _.current_ é alterado, não há a necessidade de renderizar, novamente, o componente;**
- **Quando "saimos da tela e voltamos",  recebemos um novo objeto;**
- **Diferente do _useState()_, que sempre renderiza o componente, quando o estado é alterado, o _useRef()_, não provoca uma nova renderização, quando o _.current_ é alterado;**
- **Propriedade _ref_: utilizada para pegar um determinado elemento HTML (a referência);**



### useMemo()

- **Retorna um valor que foi calculado e armazenado (uma espécie de cache);**
- **O primeiro parâmetro é uma função e o segundo, o array das dependências (valores que ativam a função, quando são alterados);**



### useCallback

- **Retorna uma função em cache;**
- **_React.memo()_: cria um cache do componente e, só renderiza o componente, se tivermos propriedades (props) modificadas;**



### useContext

- **Um objeto de contexto é criado a partir do _React.createContext()_;**
- **Para alterar um valor, é necessário mexer no contexto inteiro;**
- **"O contexto irá sobreviver (quando é dado o acesso a toda a aplicação), na aplicação inteira" ("saindo da tela e voltando", o valor atual não será modificado);**



### useReducer

- **O _useReducer_  recebe uma função (que vai evoluir o estado) e um estado inicial (um valor);**
- **Na função temos o estado atual e uma ação (que indica como alterar o estado, para uma nova versão);**
- **Toda ação tem um nome/tipo (essa ação é um objeto);**
- **Quando usamos o _useReducer()_, estamos querendo controlar uma tela, mais complexa, cheia de funcionalidades diferentes, ou estamos querendo usá-lo em um contexto mais global, dentro da aplicação;**



### Custom Hooks

- **Podemos criar o nosso próprio Hook e dentro desse Hook, podemos usar outros Hooks;**



### Context API

- **Usado para estabeler comunicação entre componentes (que estão distantes), a fim da troca de informações (dados);**



### OBS.:

- **Componentes controlados (Controlled Components): um componente controlado é um componente que sempre irá refletir, o estado do componente. Criamos o estado e o estado é uma variável dentro de um componente, que é baseado em função (durante o ciclo de vida daquele componente, iremos ter um estado interno e iremos conseguir modificar o estado). O React é um framework, que tem um ciclo de atualização unidirecional (para que a interface gráfica seja atualizada, precisamos primeiro modificar o estado do componente para que, depois que o estado esteja modificado, isso acabe refletindo a interface gráfica). Não existe modificar a interface e essa modificação refletir no estado. Com isso, ao termos um input na nossa página, não conseguimos digitar nada nele, passar uma entrada, e ver essa modificação na interface gráfica;**

- **Componentes não controlados: componentes que não possuem vinculação, com nenhum estado;**

- **Para modificar o estado de um componente controlado, usamos o evento _onChange()_, onde podemos ter uma arrow function, que passamos o evento como parâmetro e chamamos a função utilizada para alterar o estado e, nessa função, passamos: `evento.target.value` (com isso estamos, gerando um evento na interface gráfica, a partir desse evento, alteramos o estado do componente e, com o estado alterando, a interface é atualizada);**
