# farmLinkApp
**Single Page Application** baseada na estrutura **MVVM** com Boostrap, Durandal e Knockout JS.

Implementacão provisória desenvolvida especialmente para visualizacão no dispositivo **Pixel 2 XL**.

## Páginas incluídas
- **Início** - apresentação do aplicativo
- **Entrar/Criar Conta**
- **Home** - visualização de produtos e posts de produtores seguidos
- **Novo Pedido** - pode ser acessada clicando em "Encomendar →" no primeiro post da Home
- **Finalizar Pedido** 
- **Tela de Confirmação**
- **Pedidos** - Guardados, Histórico e Pendentes
- **Pesquisa**
- **Meu Perfil** - visualização de perfil, posts, seguidores e prévia de botões de Seguir e Mensagem (que não aparecerão no perfil do próprio usuário)
- **Formas de Pagamento** - associação de contas PayPal ou MB Way

## Como executar o aplicativo
O aplicativo deve ser executado através de um host, que pode ser ativado utilizando o IIS Express ou plataformas como o XAMPP.

Para visualizar o aplicativo corretamente, abra-o no Google Chrome e pressione ``F12`` para abrir o painel de DevTools e pressione ``Ctrl + Shift + M`` para pré-visualizar a versão para dispositivos móveis. Na barra superior da página, selecione o dispositivo **Pixel 2 XL**.

Por tratar-se de uma versão prévia, desenvolvida ao longo de um curto período, as páginas foram feitas especialmente para as dimensões do **Pixel 2 XL**, não respondendo a mudanças de largura ou altura no ecrã.  

## Funcionalidades
O aplicativo não possui qualquer conexão com um banco de dados, local ou em nuvem, portanto utiliza variáveis globais para simular a experiência do usuário ao manipular elementos do aplicativo.

Um exemplo dessa simulação está na página **Novo Pedido**, em que o usuário consegue selecionar produtos que deseja encomendar. Os dados são armazenados em variáveis globais com estrutura definida - tal estrutura pode servir de base a uma futura implementação que utilize como dados em JSON.

Por exemplo, um objeto do array ``products``:
```
{
    name: 'Morango',
    price: 5.80,
    unit: 'kg',
    min: 0.1,
    max: 100,
    amount: 0.5,
    imgUrl: './images/products/morango.svg',
    active: false
}
```
Apesar de tratar-se de uma variável estática, a informação dinâmica vinda em JSON de uma base de dados teria uma estrutura muito semelhante. 

Criando as Views e ViewModels do sistema com base nessa estrutura, economizamos tempo caso seja realizada, no futuro, a migração destes dados para um servidor.

***Por Estevão Rolim e Enzo Borges***