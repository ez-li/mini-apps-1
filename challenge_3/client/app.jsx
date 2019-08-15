
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
        this.setState({
            showCheckout: false,
            f1: true,
            f2: false
        })
    }

    f1Submit() {
        this.setSetate({
            showCheckout: false,
            f1: false,
            f2: true
        })
    }

    render() {
        return (
                <div>
                    <form>
                        {this.state.showCheckout ? <button id="button-checkout" onClick={this.handleCheckout}>Checkout</button> : null}
                    </form>
                    {this.state.f1 ? <FormOne f1State={this.f1Submit}/> : null}
                </div>
            )
    }
}

// f1submit={this.f1submit} f1nameHandler={this.f1nameHandler} f1emailHandler={this.f1emailHandler} f1passwordHandler={this.f1passwordHandler}

class FormOne extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.f1submit = this.f1submit.bind(this);
    }

    handleName(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    f1submit() {
        $.ajax({
            type: "POST",
            url: "/f1",
            data: {name: this.state.name,
            email: this.state.email,
            password: this.state.password}
        })
        .done((data) => {
            console.log('success ajax');
            console.log(data);
        }).fail((data) => {
            console.log('failed ajax');
        })
        props.f1Submit();
    }

    render() {
        return (
            <form id="f1" onSubmit={this.f1submit}>
                Name
                <input id="name" type="text" name="name" onChange={this.handleName}></input><br></br>
                Email
                <input id="email" type="text" name="email" onChange={this.handleEmail}></input><br></br>
                Password
                <input id="password" type="password" name="password" onChange={this.handlePassword}></input><br></br>
                <input type="submit"></input>
                {/* <button id="button-f1" onClick={this.f1submit}>Submit</button> */}
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));