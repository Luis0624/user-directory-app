import React from "react";
import "../styles/Wrapper.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;

// import React from 'react';
// import "../styles/Wrapper.css";

// function Wrapper({ children }) {
//   return (
//       <div className="wrapper">
//         { children }
//       </div>
//   );
// }

// export default Wrapper;
