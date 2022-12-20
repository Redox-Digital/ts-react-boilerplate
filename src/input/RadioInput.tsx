import React, { useState } from 'react';

interface Radio {
  name: string;
  title: string;
}

interface RadioProps {
  title: string;
  name: string;
  selectedRadio: string;
  setSelectedRadio: React.Dispatch<React.SetStateAction<string>>;
  elements: Radio[];
}
/**
 * Custom radio input
 *
 * @param {string} title : the fieldset's title
 * @param {string} name : the name of the multiple inputs
 * @param {Radio} elements : each radio element must have a unique `name` and a `title`.
 * @param {React.Dispatch<React.SetStateAction<string>>} setSelectedRadio : the radio setter, handled by the parent.
 * @param {string} selectedRadio : the radio value, handled by the parent.
 */
export default function RadioInput(props: RadioProps) {
  const { title, name, elements, setSelectedRadio, selectedRadio } = props;

  // const [selectedRadio, setSelectedRadio] = useState<string>();
  const [error, setError] = useState<string>();

  const radioHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(evt.target.value);
    // DEV
    setError(evt.target.value);
  };

  return (
    <fieldset className="input input__radio">
      <legend>{title}</legend>
      {elements.map((elt) => (
        <label
          key={elt.name}
          htmlFor={`${elt.name}`}
          className={`${elt.name === selectedRadio ? 'checked' : ''}`}
        >
          <input
            type="radio"
            name={name}
            id={`${elt.name}`}
            value={elt.name}
            checked={selectedRadio === elt.name}
            onChange={radioHandler}
          />
          {elt.title}
        </label>
      ))}
      <small>{error}</small>
    </fieldset>
  );
}
