import React, {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

interface TextFormProps {
  value: string;
  onChange: (texts: string) => void;
}

const TextFormBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextFormProps
> = ({ value = '', onChange }, ref) => {
  const [text, setText] = React.useState<string>(value);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = e.target.value;

    setText(value);
    onChange(value);
  };

  return <textarea onChange={handleChange} value={text} ref={ref} />;
};

export const TextForm = forwardRef(TextFormBase);
// import React, {
//   ChangeEvent,
//   forwardRef,
//   ForwardRefRenderFunction,
// } from 'react';

// interface TextFormProps {
//   value: string[];
//   onChange: (texts: string[]) => void;
// }

// const TextFormBase: ForwardRefRenderFunction<
//   HTMLTextAreaElement,
//   TextFormProps
// > = ({ value = [], onChange }, ref) => {
//   const [text, setText] = React.useState<string>(value.join('\n'));

//   const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
//     const value = e.target.value;

//     setText(value);
//     onChange(value.split('\n'));
//   };

//   return <textarea onChange={handleChange} value={text} ref={ref} />;
// };

// export const TextForm = forwardRef(TextFormBase);
