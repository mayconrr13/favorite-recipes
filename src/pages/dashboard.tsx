import React from 'react'
import { FiBarChart, FiClock, FiPlus, FiSearch, FiStar, FiUsers } from 'react-icons/fi'

import { Container, Header, Navigation, BurgerMenu, Content, SearchInput, FavoriteContainer, RecipeCard, RecipeInfo, RecipesContainer } from '../styles/pages/Dashboard'

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <div>
          <img src="/images/logo.svg" alt="Logo" />

          {/* <Navigation>
            <div>
              <img src="https://avatars.githubusercontent.com/u/69278888?v=4" alt="Avatar"/>
              <div>
                <strong>Maycon</strong>
                <span>13 recipes</span>
              </div>
            </div>
            <button>
              Log Out
            </button>
          </Navigation> */}

          <BurgerMenu type="button">
            <span/>
            <span/>
            <span/>
          </BurgerMenu>
        </div>
      </Header>

      <Content>
        <h1>What are we gonna cook <br/> today, <strong>Maycon</strong>?</h1>

        <SearchInput>
          <input type="text" placeholder="Recipe"/>
          <button type="button">
            <FiSearch />
          </button>
        </SearchInput>

        <h2>Favorites</h2>

        <FavoriteContainer>
          <div>
          <RecipeCard>
              <img src="/images/home-image.png" alt="home"/>
              <section>
                <h2>Filé com fritas</h2>
                <img src="/icons/favorite.svg" alt="Favorite"/>
              </section>
              <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
            </RecipeCard>
          <RecipeCard>
              <img src="/images/home-image.png" alt="home"/>
              <section>
                <h2>Filé com fritas</h2>
                <img src="/icons/favorite.svg" alt="Favorite"/>
              </section>
              <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
            </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          </div>
        </FavoriteContainer>

        <h2>All <span/></h2>

        <RecipesContainer>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
          <RecipeCard>
            <img src="/images/home-image.png" alt="home"/>
            <section>
              <h2>Filé com fritas</h2>
              <img src="/icons/favorite.svg" alt="Favorite"/>
            </section>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
          </RecipeCard>
        </RecipesContainer>
      </Content>

      <button type="button">
        <FiPlus />
      </button>
    </Container>
  )
}
