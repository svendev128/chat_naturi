import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Ovo_protein from "./Ovo_protein";
import Vegan_protein from "./Vegan_protein";
import Pescetarian_protein from "./Pescetarian_protein";
import No_protein from "./No_protein";

const Step8 = (props) => {
  const [proteinComponent, setProteinComponent] = useState(null);

  useEffect(() => {
    const answer = props.answers.find((obj) => obj.step === 8);
    if (answer.answer === "ovo_lacto") {
      console.log("ovo");
      setProteinComponent(<Ovo_protein />);
    } else if (answer.answer === "vegan") {
      console.log("vegan");
      setProteinComponent(<Vegan_protein />);
    } else if (answer.answer === "pescetarian") {
      console.log("pes");
      setProteinComponent(<Pescetarian_protein />);
    } else if (answer.answer === "no") {
      console.log("no");
      setProteinComponent(<No_protein />);
    }
  }, [props.answers]);

  return <Box sx={{ display: "flex" }}>{proteinComponent}</Box>;
};

const mapStateToProps = (state) => ({
  answers: state.question.multiquestion,
});

export default connect(mapStateToProps)(Step8);