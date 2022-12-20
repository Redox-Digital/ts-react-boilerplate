import React, { useState } from 'react';

interface TextProps {
  title: string;
  name: string;
  type: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  placeholder: string;
  info: string;
}
/**
 * Custom text input
 *
 * @param {string} title : the fieldset's title
 * @param {string} name : the name of the multiple inputs
 * @param {string} type : the input's type
 * @param {string} placeholder : the input's placeholder
 *  * @param {string} info : input's additionnal infos
 * @param {React.Dispatch<React.SetStateAction<string>>} setValue : the input setter, handled by the parent.
 * @param {string} value : the input's value, handled by the parent.
 */
export default function TextInput(props: TextProps) {
  const { title, name, type, info, setValue, value, placeholder } = props;

  // const [selectedRadio, setSelectedRadio] = useState<string>();
  const [error, setError] = useState<string>();

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    // DEV, input validation
    setError(evt.target.value);
  };

  return (
    <div className="input input__text">
      <label htmlFor="textInput">
        {title}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onInput={inputHandler}
        />
      </label>
      <small>{error || info}</small>
    </div>
  );
}
