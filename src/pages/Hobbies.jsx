import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Hobbies = () => {
  return (
    <div>
      <h2 style={{ margin: "5%" }}>My hobbies</h2>
      <div className="hobbies">
        <div className="hobbies-card">
          <MDBCard>
            <MDBCardImage
              src="https://data.whicdn.com/images/346534822/original.jpg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                I like to use acrylic and oil paints in drawing.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="hobbies-card">
          <MDBCard>
            <MDBCardImage
              src="https://avatars.mds.yandex.net/i?id=3232161889cb3c1346549c3b0fe6eea9f3ed8b62-9146954-images-thumbs&n=13"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>Learning to play the piano.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="hobbies-card">
          <MDBCard>
            <MDBCardImage
              src="https://gortest.ru/wp-content/uploads/bf59e6c71a6750fd7596513e441d3948.jpg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                I like to sculpt different things from clay.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
