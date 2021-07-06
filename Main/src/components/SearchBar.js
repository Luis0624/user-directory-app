  
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import "../styles/SearchBar.css";

const SearchBar = (props) => {
    
    return (
        <Form className="d-flex align-items-center">
          <Form.Group className="pb-3" controlId="employeeSearch">
            <Form.Label>Search by Employee Name</Form.Label>
            <Form.Control 
              type="text"
              value={this.state.search}
              name="search"
              onChange={this.handleInputChange} 
              placeholder="Enter name" />
          </Form.Group>
          <Button 
            className="ml-2" 
            style={{height: 40}} 
            variant="primary" 
            type="submit"
            onClick={ this.handleSubmit }
          >
            Search
          </Button>
        </Form>
    );
}

export default SearchBar;


// import React from "react";
// import "../styles/SearchBar.css";

// function SearchBox({ handleSearchChange }) {
//   return (
//     <div className="searchbox">
//       <form className="form-inline">
//         <input
//           className="form-control"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           onChange={e => handleSearchChange(e)}
//         />
//       </form>
//     </div>
//   );
// }
// export default SearchBox;
