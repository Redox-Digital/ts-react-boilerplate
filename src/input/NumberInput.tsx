import React, { useState } from 'react';

interface NumberProps {
  title: string;
  name: string;
  type: string;
  solo: boolean;
  info: string;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  placeholder: number;
}
/**
 * Custom number input
 *
 * @param {string} title : the fieldset's title
 * @param {string} name : the name of the multiple inputs
 * @param {string} type : the input's type
 * @param {string} placeholder : the input's placeholder
 * @param {string} info : input's additionnal infos
 * @param {React.Dispatch<React.SetStateAction<number>>} setValue : the input setter, handled by the parent.
 * @param {number} value : the input's value, handled by the parent.
 */
export default function NumberInput(props: NumberProps) {
  const { title, name, type, solo, info, setValue, value, placeholder } = props;

  const [error, setError] = useState<string>();

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(evt.target.value, 10));
    // DEV, input validation
    setError(evt.target.value);
  };

  if (solo) {
    return (
      <div className="input input__number input__number--solo">
        <label htmlFor={name}>
          {title}
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            placeholder={placeholder.toString()}
            onInput={inputHandler}
          />
        </label>
        <small>{error || info}</small>
      </div>
    );
  }

  return (
    <label htmlFor={name}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder.toString()}
        onInput={inputHandler}
      />
      {title}
    </label>
  );
}
