
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCheckout: true,
            f1: false,
            f2: false
        };
        this.handleCheckout = this.handleCheckout.bind(this);
    }

    handleCheckout() {
        event.preventDefault();
        this.setState({
            showCheckout: false,
            f1: true,
            f2: false
        })
    }

    handleFormOne() {
        event.preventDefault();
        this.setState({
            f1: false,
            f2: false,
        })
    }

    render() {
        return (
                <div>
                    <form method="POST" action="/">
                        {this.state.showCheckout ? <button id="button" onClick={this.handleCheckout}>Checkout</button> : null}
                    </form>
                    {this.state.f1 ? <FormOne/> : null}
                </div>
            )
    }
}

function FormOne() {
    return (
        <form method="POST" action="/formOne">
            Name
            <input id="name" type="text" name="name"></input><br></br>
            Email
            <input id="email" type="text" name="email"></input><br></br>
            Password
            <input id="password" type="password" name="password"></input><br></br>
            <input type="submit"></input>
        </form>
    )
}

// function FormTwo() {
//     return (
//         <form method="POST" action="/formTwo">
//             Address
//             <input id="line1" type="text" name="line1"></input><br></br>
//             <input id="line2" type="text" name="line2"></input><br></br>
//             City
//             <input id="city" type="text" name="city"></input><br></br>
//             State
//             <input id="state" type="text" name="state"></input><br></br>
//             Phone Number
//             <input id="phone" type="text" name="phone"></input><br></br>
//             <input type="submit"></input>
//         </form>
//     )
// }

ReactDOM.render(<App />, document.getElementById('app'));