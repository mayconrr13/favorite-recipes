// import React from 'react';
// import { api } from '../services/api';

// export default function teste(): JSX.Element {
//   async function handleTask() {
//     const response = await api.get('/recipes?isFavorite=false&name=Panqueca93');
//     console.log(response);
//   }

//   return (
//     <>
//       <p>tests page</p>
//       <button onClick={handleTask}>get data</button>
//     </>
//   );
// }

// useRefs e Controlled components
// import React, { useRef, useState } from 'react';

// export default function Teste(): JSX.Element {
//   const recipeRef = useRef(null);
//   const imageRef = useRef(null);
//   const prepRef = useRef(null);
//   const yieldRef = useRef(null);
//   const ingredientsRef = useRef(null);
//   const directionsRef = useRef(null);

//   const [category, setCategory] = useState('');
//   const [level, setLevel] = useState('beginner');

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log(recipeRef.current.value);
//     console.log(imageRef.current.value);
//     console.log(prepRef.current.value);
//     console.log(category);
//     console.log(level);
//     console.log(yieldRef.current.value);
//     console.log(ingredientsRef.current.value);
//     console.log(directionsRef.current.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" id="recipe" ref={recipeRef} />
//       <input type="text" id="image" ref={imageRef} />
//       <input type="text" id="prep" ref={prepRef} />
//       <input type="text" id="yield" ref={yieldRef} />
//       <div>
//         <input
//           type="radio"
//           name="category"
//           id="1"
//           placeholder="1"
//           onClick={() => setCategory('1')}
//         />
//         <input
//           type="radio"
//           name="category"
//           id="2"
//           placeholder="2"
//           onClick={() => setCategory('2')}
//         />
//         <input
//           type="radio"
//           name="category"
//           id="3"
//           placeholder="3"
//           onClick={() => setCategory('3')}
//         />
//         <input
//           type="radio"
//           name="category"
//           id="4"
//           placeholder="4"
//           onClick={() => setCategory('4')}
//         />
//         <input
//           type="radio"
//           name="category"
//           id="5"
//           placeholder="5"
//           onClick={() => setCategory('5')}
//         />
//         <input
//           type="radio"
//           name="category"
//           id="6"
//           placeholder="6"
//           onClick={() => setCategory('6')}
//         />
//         <input
//           type="radio"
//           name="category"
//           id="7"
//           placeholder="7"
//           onClick={() => setCategory('7')}
//         />
//         <input
//           type="radio"
//           name="category"
//           id="8"
//           placeholder="8"
//           onClick={() => setCategory('8')}
//         />
//       </div>
//       <div>
//         <input
//           type="radio"
//           name="level"
//           id="1"
//           onClick={() => setLevel('beginner')}
//         />
//         <input
//           type="radio"
//           name="level"
//           id="2"
//           onClick={() => setLevel('intermidiate')}
//         />
//         <input
//           type="radio"
//           name="level"
//           id="3"
//           onClick={() => setLevel('advanced')}
//         />
//       </div>
//       <textarea name="ingredients" id="ing" ref={ingredientsRef} />
//       <textarea name="directions" id="dir" ref={directionsRef} />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

import styles from '../styles/pages/teste.module.css';

interface OptionsProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: boolean;
}

const OptionBase: ForwardRefRenderFunction<HTMLInputElement, OptionsProps> = (
  { label, checked, ...rest },
  ref,
) => {
  return (
    <>
      <p className={checked ? styles.active : ''}>{label}</p>
      <input type="radio" ref={ref} {...rest} />
    </>
  );
};

const Options = forwardRef(OptionBase);

import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react';
import {
  Controller,
  useController,
  UseControllerProps,
  useForm,
} from 'react-hook-form';

export default function Teste(): JSX.Element {
  // const [category, setCategory] = useState('');
  const [level, setLevel] = useState('beginner');
  const { register, handleSubmit, control } = useForm();
  console.log(level);

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input id="recipe" label="Receita" {...register('loca')} />
      <Input id="image" label="Imagem" {...register('image')} />
      <Input id="prep" label="Tempo" {...register('prep')} />
      <Input id="yield" label="Rendimento" {...register('yield')} />
      <div>
        <Options
          value="default"
          name="category"
          label="Categoria"
          {...register('category')}
        />
        <Options
          value="meal"
          name="category"
          label="Refeição"
          {...register('category')}
        />
        <Options
          value="deserts"
          name="category"
          label="Sobremesa"
          {...register('category')}
        />
        <Options
          value="vegetarian"
          name="category"
          label="Vegetariano"
          {...register('category')}
        />
      </div>
      <div />

      <div>
        <Options
          type="radio"
          label="Iniciante"
          value="begginer"
          onClick={() => setLevel('begginer')}
          checked={level === 'begginer'}
          {...register('level')}
        />
        <Options
          type="radio"
          label="Intermediário"
          onClick={() => setLevel('intermidiate')}
          value="intermidiate"
          checked={level === 'intermidiate'}
          {...register('level')}
        />
        <Options
          type="radio"
          label="Avançado"
          value="advanced"
          onClick={() => setLevel('advanced')}
          checked={level === 'advanced'}
          {...register('level')}
        />
      </div>

      <textarea name="ingredients" id="ing" {...register('ingredients')} />
      <textarea name="directions" id="dir" {...register('directions')} />

      <button type="submit">Submit</button>
    </form>
  );
}
