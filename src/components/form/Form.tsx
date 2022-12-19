import React from "react";
import TextField from "@mui/material/TextField";
import "./Form.css";

type PropType = {
  setUserInput: Function;
};
const Form = ({ setUserInput }: PropType) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <form>
        <TextField
          id="outlined-helperText"
          label="Please enter the name"
          defaultValue="lamb"
          helperText="suggestions: pizza, pork, pasta..."
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default Form;