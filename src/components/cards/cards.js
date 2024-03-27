export const DigiPlusResponsibilityMatrixCards = (props) => {
  const {
    role,
    company,
    offerings,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    paragraphFive,
    imageUrl,
  } = props;

  // const cardContainerStyle = {
  //   backgroundImage: `url(${imageUrl})`,
  //   minHeight: "200px", // Set a minimum height for uniformity
  //   display: "flex", // Use flex display
  //   flexDirection: "column", // Stack children vertically
  //   justifyContent: "space-between", // Space evenly within container
  // };
  // const cardContainerStyle = {
  //   minHeight: "200px", // Set a minimum height for uniformity
  //   display: "flex", // Use flex display
  //   flexDirection: "column", // Stack children vertically
  //   justifyContent: "space-between", // Space evenly within container
  //   // backgroundImage: `url(${imageUrl})`, // Add the backgroundImage property here
  // };

  return (
    <>
      <div
        className="eightGearImg my-3 d-flex align-items-end"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="card imgCardBg mt-auto d-flex h-75">
          <div className="card-body d-flex flex-column justify-content-center align-items-md-start">
            {/* <div className="card-body d-flex flex-column justify-content-center align-items-center align-items-md-start"> */}
            <h6 className="mb-2 text-md-start">{role}</h6>
            <h5
              className="card-title spaceTitle text-md-start"
              style={{ fontSize: "1rem", marginBottom: "10px" }}
            >
              {company}
            </h5>
            <p className="text-md-start">{offerings}</p>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphOne}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphTwo}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphThree}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphFour}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphFive}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="eightGearImg my-3 d-flex align-items-end"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="card imgCardBg mt-auto d-flex h-75">
          <div className="card-body d-flex flex-column justify-content-center align-items-center align-items-md-start">
            <h6 className="mb-2">{role}</h6>
            <h5
              className="card-title spaceTitle"
              style={{ fontSize: "1rem", marginBottom: "10px" }}
            >
              {company}
            </h5>
            <p>{offerings}</p>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphOne}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphTwo}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphThree}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphFour}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphFive}</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div
        className="eightGearImg my-3 d-flex align-items-end"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="card imgCardBg mt-auto d-flex h-75">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h6 className="mb-2">{role}</h6>
            <h5
              className="card-title spaceTitle"
              style={{ fontSize: "1rem", marginBottom: "10px" }}
            >
              {company}
            </h5>
            <p>{offerings}</p>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphOne}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphTwo}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphThree}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphFour}</p>
              <p style={{ fontSize: "0.8rem", margin: 0 }}>{paragraphFive}</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
