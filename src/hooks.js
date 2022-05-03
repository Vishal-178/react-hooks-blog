import { useState } from 'react';

//custom hooks
export function useFormInput(initialValue) {
  const [value, setValue] = useState();

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
