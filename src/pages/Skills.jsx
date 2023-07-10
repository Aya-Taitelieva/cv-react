import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
const Skills = () => {
  //   const nowHtml = 100;
  //   const nowCss = 100;
  //   const nowB = 60;
  //   const nowJs = 60;
  //   const nowR = 60;

  return (
    <div>
      <h2 style={{ marginTop: "5%" }}>My Skills</h2>
      <div className="skills">
        <MDBProgress height="20">
          <MDBProgressBar
            bgColor="dark"
            width="100"
            valuemin={0}
            valuemax={100}>
            100%
          </MDBProgressBar>
        </MDBProgress>
        <p>HTML</p>
        <MDBProgress height="20">
          <MDBProgressBar
            bgColor="dark"
            width="100"
            valuemin={0}
            valuemax={100}>
            100%
          </MDBProgressBar>
        </MDBProgress>
        <p>CSS</p>
        <MDBProgress height="20">
          <MDBProgressBar bgColor="dark" width="95" valuemin={0} valuemax={95}>
            95%
          </MDBProgressBar>
        </MDBProgress>
        <p>Bootstrap</p>
        <MDBProgress height="20">
          <MDBProgressBar bgColor="dark" width="80" valuemin={0} valuemax={80}>
            80%
          </MDBProgressBar>
        </MDBProgress>
        <p>Java Script</p>
        <MDBProgress height="20">
          <MDBProgressBar bgColor="dark" width="70" valuemin={0} valuemax={70}>
            70%
          </MDBProgressBar>
        </MDBProgress>
        <p>React.js</p>
      </div>
    </div>
  );
};

export default Skills;
