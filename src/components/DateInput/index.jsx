import TextField from "@material-ui/core/TextField";

function DateInput(props) {
  return (
    <TextField
      onChange={props.handleChange}
      value={props.value}
      label="Enter date or date range"
      error={props.errorText.length === 0 ? false : true}
      helperText={props.errorText}
    />
  );
}

export default DateInput;
