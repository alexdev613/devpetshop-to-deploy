# Aplicação: PetShopDev

Esse aplicação simula um ecommerce de uma loja de Petshop. O intuito inicial do projeto foi demonstrar minha habilidade em usar Context API e usar estados globais em toda aplicação, criando um carrinho de compras, e funcionalidades essenciais manipular estados conforme o uso da aplicação entre páginas de maneira concisa e segura.

## Recursos e ferramentas utilizadas

Nesta aplicação além de Context API, utilizei hooks do react como useEffect, useState, o useContext para poder trabalhar com o context criado nas páginas e componentes que precisei de tais informações dos estados criados no arquivo de context.

Criei um a aplicação utilizando o TailwindCSS para os estilos deixando-a totalmente responsiva. Há um menu hamburger para telas menores de 640px que deixou a aparência da aplicação mais amigável em smarthones, com uma leve transição de animação no menu, e gada página há links diferentes para a ocasião da página, para esta funcionalidade eu usei o useLocation e o useMatch do react-router-dom, também criei um layout pré-definido para todas as páginas através do Outlet, também do react-router, e também criei as rotas das páginas também com esta biblioteca.

Também utilizei o react-hot-toast para personalizar toasts interativos que informam ao usuário quando o produto foi adicionado no carrinho, quando a compra foi efetuada e quando produto saiu do carrinho...

## Outras considerações:

Este projeto começou bem simples, e a princípio só havia a loja, a página de detalhes e a página do carrinho de compras. Porém, para deixar ela mais profissional e com ar de um negócio real, criei seções para a página Home, que se compõe de um seção de Banner, de About, OurServices (simulando serviços que um petshop possa oferecer), Products (onde tem alguns produtos pra venda e passar a ideia central do projeto que é adicionar itens ao carrinho de compras), e a seção de Feedback (que é lida como uma seção de depoimento de clientes).

### Finalização

Este projeto, está finalizado em sua versão 2.0. Mas possivelmente pode haver acréscimos futuramente para implementar mais funcionalidades típicas de um ecommerce. Aceito sugestões e pedidos de pull requests que serão analizados. Vamos programar juntos?

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
