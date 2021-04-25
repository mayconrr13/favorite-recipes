import { useRouter } from 'next/dist/client/router';
import { api } from '../services/api';

const router = useRouter();

async function addRecipe(): Promise<void> {
  try {
    const newRecipe = {
      category: 'meal',
      createdAt: '12/04/2021',
      directions:
        '<strong>Calda de Mirtilo</strong><p>Ferva o mel, o açúcar demerara, os mirtilos e a água até reduzir à metade do volume original. Reserve.</p><strong>Panquecas</strong><p>Em uma tigela grande, misture as farinhas, o açúcar, o fermento em pó e sal. Em outra tigela, bata os ovos e, em seguida, acrescente o leite e a baunilha.</p><p> Derreta a manteiga em uma frigideira grande de ferro fundido ou chapa em fogo médio. Bata a manteiga na mistura de leite. Adicione os ingredientes molhados à mistura de farinha e bata até formar uma massa grossa. Não misture demais, a massa não precisa ser totalmente homogênea.</p><p>Mantendo a frigideira em fogo médio, despeje uma concha (equivalente a ¼ xícara) de massa na frigideira, para fazer uma panqueca. Faça mais uma ou duas panquecas, tendo o cuidado de mantê-las uniformemente espaçadas.</p><p>Cozinhe até que apareçam bolhas na superfície das panquecas, e as partes inferiores fiquem douradas, por cerca de dois minutos. Vire com uma espátula e deixe cozinhar cerca de um minuto a mais no segundo lado.</p><p>Sirva imediatamente ou transfira para uma travessa e cubra frouxamente com papel-alumínio para manter aquecido. Repita com a massa restante, acrescentando mais manteiga na frigideira quando necessário. Sirva com calda de mirtilos a gosto.</p>',
      id: '713',
      image: '/home-background.jpg',
      ingredients:
        '<ul><li>1/4 de xícara de chá de mel silvestre</li> <li>1/4 de xícara de chá de mel silvestre </li> <li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li><li>1/4 de xícara de chá de mel silvestre</li></ul>',
      isFavorite: false,
      level: 'Iniciante',
      name: 'Panquecas com mirtilo242',
      preparationTime: '20 minutos',
      updatedAt: '15/04/2021',
      yield: '1 pessoas',
    };

    await api.post('/recipes', newRecipe);
    router.reload();
  } catch (error) {
    console.log(error);
  }
}