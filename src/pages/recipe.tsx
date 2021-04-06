import React from "react";
import { FiBarChart, FiChevronLeft, FiClock, FiEdit, FiStar, FiTrash, FiUsers } from "react-icons/fi";
import { ActionButton } from "../components/ActionButton";
import { Header } from "../components/Header";

import { Container, Content, RecipeInfo } from '../styles/pages/Recipe'

export default function Recipe() {
  return (
    <Container>
      <Header />

      <Content>
        <nav>
          <button type="button">
            <FiChevronLeft />
          </button>

          <div>
            <ActionButton property="Edit" icon={FiEdit}/>
            <ActionButton property="Delete" icon={FiTrash} />
          </div>
        </nav>

        <div>
          <h1>Filé com fritas</h1>
          <FiStar />
        </div>

        <p>description</p>

        <RecipeInfo>
          <div>
            <FiClock />
            <p>30 minutes</p>
          </div>
          <div>
            <FiUsers />
            <p>2 people</p>
          </div>
          <div>
            <FiBarChart />
            <p>Easy</p>
          </div>
        </RecipeInfo>

        <div>
          <div />
          <button>
            <img src="/images/home-image.png" alt="image1"/>
          </button>
          <button>
            <img src="/images/home-image.png" alt="image2"/>
          </button>
          <button>
            <img src="/images/home-image.png" alt="image2"/>
          </button>
        </div>

        <h2>Ingredients</h2>
        <ul>
          <li>700g de contra filé</li>
          <li>700g de contra filé</li>
          <li>700g de contra filé</li>
          <li>700g de contra filé</li>
          <li>700g de contra filé</li>
          <li>700g de contra filé</li>
        </ul>

        <h2>Directions</h2>
        <div>
          Comece temperando a carne, ainda crua, com sal e pimenta-do-reino (a gosto).
          Em uma panela, coloque uma quantidade pequena de óleo, leve em fogo médio e despeje a cebola com o alho. <br/>
          Em seguida, coloque a carne temperada e refogue até o ponto desejado.
          Abaixe o fogo e adicione a mussarela <br/>
          Continue refogando a carne, até o queijo derreter, quando estiver derretido, desligue o fogo. <br/>
          Corte as batatas em tiras e frite em óleo quente. <br/>
          Ao terminar de fazer o contra filé e as batatas, coloque num tabuleiro e acrescente o restante do queijo mussarela. <br/>
          Ideal, colocar ainda quente para o queijo derreter.
          E está pronto! <br/>
          Muito fácil e gostoso. <br/>
        </div>
      </Content>
    </Container>
  )
}