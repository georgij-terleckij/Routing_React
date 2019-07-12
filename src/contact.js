import React from 'react';
import axios from 'axios';
import TableRow from './components/contact/TableRow';
export default  class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            array: []
        }
    }


    onChangeHostName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onSubmit(e) {
        //     this.props.history.push('/')
        e.preventDefault(); //Отменяет событие, если оно отменяемое, без остановки дальнейшего распространения этого события
        console.log(`name is: ${this.state.name} and email is: ${this.state.email}`);
        const dateSend = {
            name: this.state.name,
            email: this.state.email
        }
        axios.post('http://localhost:4200/serverport/', dateSend)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            port: ''
        }) //for empty field
    }

    //Получаем данные
    componentDidMount(){
        axios.get('http://localhost:4200/serverport')
            .then(response => {
                this.setState({ array: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow(){
        return this.state.array.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }



    render() {
        return (
            <div style={{marginTop: 50}}>
                <div>
                    <h3>Send me:</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name:  </label>
                            <input type="text" className="form-control" value={this.state.name}  onChange={this.onChangeHostName}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" value={this.state.email}  onChange={this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add To server" className="btn btn-primary"/>
                        </div>
                        {/*<button onClick={this.onSubmit}>Submit</button>*/}
                    </form>
                </div>

                <div>
                    <div className="container">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Port</td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.tabRow()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}

