var React = require('react');
var Piece = require('./Piece.jsx');

class Column extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rowsPlayed: 0
        }
    }

    insertPiece() {
        this.setState(prevState => {
            rowsPlayed: prevState.rowsPlayed + 1
        })
    }

    render() {
        return (
            <div id="grid-container" style={{display:"grid", border:"1px solid black", width:"300px"}}>
                <Piece />
            </div>
        )
    }
}

module.exports = Column;