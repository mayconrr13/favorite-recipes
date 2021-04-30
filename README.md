<img alt="Banner" title="Lets-cook" src="./public/banner.png" />

<h4 align="center">
	Projeto em andamento!
</h4>
<p align="left">Letś cook é um projeto que permite o usuário salvar suas melhores receitas e utilizá-las a qualquer momento.Todo o projeto foi desenvolvido do completo zero com o conceito "Mobile First", desde a definição e criação da interface o usuário no Figma, procurando garantir a melhor experiência para o mesmo.</p>
<p>Para seu desenvolvimento foi utilizado o NextJS, framwork de ReactJS que permite trabalhar com renderização no lado do servidor. Dentre os recursos disponíveis, foi utilizado o getServerSideProps para a geração de págicas com rotas dinâmicas para cada uma das receitas. Em conjunto, foi utilizado o TypeScript no desenvolvimento da aplicação além do Styled Components para sua estilização.</p>
<p>A filtragem das receitas no dashboard foi implementado com as funções "filter"e "map", permitindo uma busca e reorganização das receitas em tempo real sem a necessidade do reload da página. </p>
<p> O JSON Server foi utilizado para simular uma api no intuito de construir a aplicação com dados obtidos de fontes externas através das requisições com o Axios, deixando o projeto pronto para futura implementação com um back end real.</p>
<p> O processo de favoritar uma receita foi realizado de modo conjunto com o uso do Local Storage e JSON Server, sendo salvo o ID da receita favorita e atualizando no banco de dados o campo isFavorite para o valor correspondente. Foi realizada toda uma tratativa para que a lista de favoritos não pudesse ser perdida caso houvesse algum problema com o Local Storage</p>
<p>Os formulário para criação e edição de receitas são modais criados com React Modal e suas informações são tratadas com React Hook Form com o uso de uncontrolled components e validados com o Yup. Os campos nos formulário para a lista de ingredientes e o modo de preparo das receitas foi realizado com o DraftJS que permite a criação de RichText.</p>
<p> Na sequencia serão impletadas animações na transição das páginas, login social do Gmail com o NextAuth, upload de imagem do usuário no AWS S3 e a utilização do mongoDB para a criação de um banco de dados real.</p>


### Tecnologias utilizadas
---

* NextJS
* TypeScript
* Styled Components
* JSON Server
* React Modal
* React Hook Form
* Yup
* Local Storage
* Figma

### Features
---

- [x] Adicionar, editar e remover receita
- [x] Salvar receitas em favoritos com LocalStorage e JSON Server
- [x] Filtrar lista de receitas por categoria, favoritas e por termo pesquisados
- [x] Formulários com React Hook Form e validados com Yup
- [-] Animação com o Framer Motion na transição das páginas
- [-] Login social com Gmail pelo Next-Auth
- [-] Upload de imagem com Multer e AWS S3
- [-] MongoDB para persistencia de dados utilizando as API Routes do NextJS

### Screenshots
---
* Projeto no Figma

* Mobile

* Web

### Como instalar
---

```bash
# Clone este repositório
$ git clone https://github.com/mayconrr13/lets-cook.git

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn dev

# Execute o servidor
$ yarn server

# Acesse a aplicação
$ http://localhost:3000
```

### Autor
---

<p>Maycon dos Reis Rosário</p>
<p>Portifólio Digital: <a href="http://mayconrr.vercel.app">Acessar</a></p>

### Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Maycon-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mayconreisrosario/)](https://www.linkedin.com/in/mayconreisrosario/)
[![Gmail Badge](https://img.shields.io/badge/-mayconrr13@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:mayconrr13@gmail.com)](mailto:mayconrr13@gmail.com)
