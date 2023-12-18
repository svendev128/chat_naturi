import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Vegan_carbohydrate from "./Vegan_carbohydrate";
import No_carbohydrate from "./No_carbohydrate";

const Step9 = (props) => {
  const [carbohydrateComponent, setcarbohydrateComponent] = useState(null);

  useEffect(() => {
    const answer = props.answers.find((obj) => obj.step === 8);
    if (answer.answer === "vegan") {
      console.log("ovo");
      setcarbohydrateComponent(<Vegan_carbohydrate />);
    } else {
      setcarbohydrateComponent(<No_carbohydrate />);
    }
  }, [props.answers]);

  return <Box sx={{ display: "flex" }}>{carbohydrateComponent}</Box>;
};

const mapStateToProps = (state) => ({
  answers: state.question.multiquestion,
});

export default connect(mapStateToProps)(Step9);