import React, { useState } from 'react';

interface SelectInputProps {
  select: {
    title: string;
    name: string;
    info: string;
    options: { name: string; title: string }[];
  };
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Custom select input
 *
 * @param {string} title : the fieldset's title
 * @param {string} name : the name of the multiple inputs
 * @param {string} type : the input's type
 * @param {string} placeholder : the input's placeholder
 * @param {string} info : input's additionnal infos
 * @param {React.Dispatch<React.SetStateAction<string>>} setValue : the input setter, handled by the parent.
 * @param {number} value : the input's value, handled by the parent.
 */
export default function SelectInput(props: SelectInputProps) {
  const { select, setValue } = props;

  const [error, setError] = useState<string>();

  const inputHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(evt.target.value);
    // setValue(parseInt(evt.target.value, 10));
    // DEV, input validation
    setError(evt.target.value);
  };

  return (
    <div className="input input__select">
      <label htmlFor={select.name}>
        {select.title}
        <select name={select.name} onChange={inputHandler}>
          {select.options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.title}
            </option>
          ))}
        </select>
      </label>
      <small>{error || select.info}</small>
    </div>
  );
}
