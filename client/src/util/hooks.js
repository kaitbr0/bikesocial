import { useState } from "react";
export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    //send mutation to server to persist users
    // console.log(event, values);
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
