import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./style.css";

function InfoComponent(props) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.date}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component="div">
          <img src={props.hdurl} className="info__image" />
          <p>{props.explanation}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default InfoComponent;
