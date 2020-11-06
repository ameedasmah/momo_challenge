import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            email: "",
            address: "",
            userId : ''
        }
    }


    handelC(e) {
        let { name, value } = e.target
        console.log(value)
        this.setState({ [name]: value })
    }

    handelClick(e) {
        e.preventDefault()
        const obj = this.state;

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(obj)
        };
        fetch('/', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                this.setState({ userId:data.data._id })
            });

    }

 
    handelClick11(e) {
        e.preventDefault()
        const obj = this.state;

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(obj)
        };
        fetch('/1', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        let { username, password, email, address } = this.state;
        return (
            <div >
                <h2>HTML Forms</h2>

                <form>
                    <label htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="username" value={username} onChange={this.handelC.bind(this)} />
                    <label htmlFor="lname">Last name:</label>
                    <input type="password" id="lname" name="password" value={password} onChange={this.handelC.bind(this)} />
                    <input type="submit" value="Submit" onClick={this.handelClick.bind(this)} />
                </form>
                <form>
                    <label htmlFor="fname">First name:</label>
                    <input type="email" id="email" name="email" value={email} onChange={this.handelC.bind(this)} />
                    <label htmlFor="lname">Last name:</label>
                    <input type="text" id="address" name="address" value={address} onChange={this.handelC.bind(this)} />
                    <input type="submit" value="Submit" onClick={this.handelClick11.bind(this)} />
                </form>

                <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>

            </div>
        )
    }
}





ReactDOM.render(<App />, document.getElementById('app'));