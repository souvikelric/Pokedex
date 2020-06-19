// import React, { Component } from "react";
// import Card from "../components/Card";
// import ReactCardFlip from "react-card-flip";
// import BackCard from "../components/BackCard";
// import "../components/Card.css";

// class FlipCard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isFlipped: false,
//     };
//   }
//   handleClick = (e) => {
//     e.preventDefault();
//     this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
//   };
//   render() {
//     return (
//       <ReactCardFlip
//         containerStyle={{
//           display: "inline-block",
//           boxShadow: "6px 10px 12px rgba(44, 43, 43, 0.8)",
//           background:
//             "linear-gradient(to right, rgb(235, 126, 126), rgb(221, 221, 132))",
//           margin: "20px",
//           padding: "0 5px",
//           paddingTop: "15px",
//           paddingBottom: "15px",
//           width: "300px",
//           borderRadius: "20px",
//           cursor: "pointer",
//         }}
//         flipSpeedFrontToBack={0.4}
//         isFlipped={this.state.isFlipped}
//         flipDirection="horizontal"
//       >
//         <Card
//           onClick={this.handleClick}
//           name={this.props.name}
//           url={this.props.url}
//           key={this.props.key}
//         />
//         <BackCard
//           onClick={this.handleClick}
//           name={this.props.name}
//           url={this.props.url}
//           key={this.props.key}
//         />
//       </ReactCardFlip>
//     );
//   }
// }

// export default FlipCard;
