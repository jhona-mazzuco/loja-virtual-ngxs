# LojaVirtualNgxs

Bem-vindo à aplicação de demonstração para o DOJO de ensino do uso de NGXS em projetos. Esta aplicação foi criada com o objetivo de fornecer uma experiência prática para aprender e explorar as capacidades do NGXS no desenvolvimento de aplicações Angular.

O NGXS é um poderoso gerenciador de estado de aplicações em Angular, permitindo a criação e o compartilhamento de estados entre componentes e serviços de forma fácil e eficiente. Com ele, é possível simplificar a estrutura da aplicação, melhorar a escalabilidade e a manutenção do código, além de fornecer uma experiência de desenvolvimento mais intuitiva e coesa.

Esta aplicação de demonstração é um exemplo simples de uma loja virtual com um carrinho de compras. Ela foi criada com o intuito de ensinar o uso do NGXS em um projeto, abrangendo desde a criação de estados até a sua utilização em componentes e serviços. Além disso, ela foi construída com Angular Material, uma biblioteca de componentes de interface do usuário, proporcionando uma experiência de usuário mais agradável.

Sinta-se à vontade para explorar o código fonte desta aplicação, experimentar com as funcionalidades implementadas e fazer melhorias em cima do código. Espero que esta aplicação possa ser uma fonte útil de conhecimento e prática para o aprendizado do NGXS.

### Requisitos:

- [ ] A aplicação deve permitir que os usuários naveguem pelos produtos disponíveis na loja.
- [ ] Os usuários devem ser capazes de adicionar produtos ao carrinho de compras e visualizar os itens que já foram adicionados.
- [ ] Os usuários devem ser capazes de remover itens do carrinho de compras.
- [ ] Os usuários devem ser capazes de visualizar o total da compra.
- [ ] A aplicação deve ser responsiva e amigável para dispositivos móveis.

### Fluxos:

#### 1. Fluxo de navegação de produtos:
  - O usuário acessa a página inicial da loja.
  - Os produtos são exibidos em cards.
  - O usuário pode clicar em um card para visualizar os detalhes do produto.
  - O usuário pode adicionar o produto ao carrinho de compras.

#### 2. Fluxo de carrinho de compras:
  - O usuário acessa a página do carrinho de compras.
  - Os itens adicionados são exibidos em uma lista.
  - O usuário pode remover itens da lista.
  - O usuário pode visualizar o total da compra.

### Estrutura do Projeto:

1. Criação do Projeto: Use o Angular CLI para criar um novo projeto Angular com o nome de "loja-virtual-ngxs".


2. Criação dos Componentes: Crie os componentes necessários para a aplicação:
  - Componente de página inicial da loja.
  - Componente de página do carrinho de compras.
  - Componente de item de produto.
  - Componente de item de carrinho.

3. Configuração do NGXS: Configure o NGXS para gerenciar o estado da aplicação, criando as actions, reducers e selectors necessários.

4. Configuração do Angular Material: Configure o Angular Material para adicionar recursos de interface do usuário à aplicação, incluindo botões, cards e formulários.

5. Conexão de Componentes: Conecte os componentes uns aos outros, permitindo que a loja exiba produtos e permita adicionar itens ao carrinho de compras.

6. Testes e Depuração: Teste e depure a aplicação, garantindo que tudo esteja funcionando conforme o esperado.

7. Adição de Responsividade: Adicione responsividade à aplicação, tornando-a amigável para dispositivos móveis.
