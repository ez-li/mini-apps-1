var React = require('react');
var Column = require('./Column.jsx');

// game board is 6 rows and 7 columns
class GameBoard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        win: false,
        tie: false
      }
    }

    render() {
      return (
        <div id="grid-container" style={{display:"flex", justifyContent: "flex-start", border:"1px solid black", width:"300px"}}>
          <Column /> 
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </div>
      );
    }
  }

module.exports = GameBoard;