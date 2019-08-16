var React = require('react');

class Piece extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            inPlay: false
        }
    }

    insertPiece() {
        this.setState(state => {
            inPlay: true
        })
    }

    render() {
        return (
            <div id="piece">
                {this.state.inPlay ? <p>O</p> : null}
            </div>
        )
    }
}

module.exports = Piece;