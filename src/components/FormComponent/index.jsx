import React from "react";
import DateInput from "../DateInput";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "./style.css";

function FormComponent(props) {
  return (
    <div className="wrapper">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          props.handleSubmit();
        }}
      >
        <DateInput
          handleChange={props.handleChange}
          value={props.value}
          errorText={props.errorText}
        />
        <Box mt={1} mb={1}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={props.errorText.length === 0 ? false : true}
          >
            Search
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default FormComponent;
