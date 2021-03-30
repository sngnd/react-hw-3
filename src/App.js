import logo from "./logo.svg";
import "./App.css";
import FormComponent from "./components/FormComponent";
import InfoComponent from "./components/InfoComponent";
import { getPost } from "./api";
import { useState, useEffect } from "react";
import {
  getErrorDate,
  getErrorDateRange,
} from "./components/DateInput/checkFormat";
import { Grid, Container } from "@material-ui/core";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [range, setRange] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = () => {
    getPost(searchValue, range).then((response) => {
      if (range) setData([...response.data]);
      else
        setData([
          {
            date: response.data.date,
            explanation: response.data.explanation,
            hdurl: response.data.hdurl,
          },
        ]);
    });
  };

  const handleChange = async (event) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value.includes("/")) {
      setRange(true);
      setErrorText(getErrorDateRange(value));
    } else {
      setErrorText(getErrorDate(value));
      setRange(false);
    }
  };

  const drawInfo = () => {
    return data.map((item) => (
      <InfoComponent
        key={item.date + new Date().getDay()}
        date={item.date}
        hdurl={item.hdurl}
        explanation={item.explanation}
      />
    ));
  };

  return (
    <div className="App">
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center">
          <FormComponent
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            value={searchValue}
            errorText={errorText}
          />
          {drawInfo()}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
