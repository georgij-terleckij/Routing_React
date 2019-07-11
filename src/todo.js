import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            clickedText: '',
            clickedText2: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeTodo = this.removeTodo.bind(this);

    }


    render() {
        const {clickedText} = this.state;
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} removeTodo={this.removeTodo}/>
                <br/>
                {/*<ControlledTabs />*/}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button style={{visibility: 'hidden'}}>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    removeTodo(i) {
        let items = this.state.items.slice();//copy array from prevState
        items.splice(i, 1);// remove element
        this.setState({
            items// update state
        });
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {

    removeItem(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <ul className="input-teg">
                {this.props.items.map((item, i) => (
                    <li onClick={() => {
                        this.removeItem(i)
                    }} key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}
//
// class TodoList extends React.Component {
//
//     removeItem(id) {
//         this.props.removeTodo(id);
//     }
//
//     render() {
//         return (
//             <ul className="input-teg">
//                 {this.props.items.map((item, i) => (
//                     <li key={item.id}>{item.text}</li>
//                 ))}
//             </ul>
//         );
//     }
// }
//
// class ControlledTabs extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state = {
//             key: 'home',
//         };
//     }
//
//     render() {
//         return (
//             <Tabs
//                 id="controlled-tab-example"
//                 activeKey={this.state.key}
//                 onSelect={key => this.setState({ key })}
//             >
//                 <Tab eventKey="home" title="Home">
//                     <Sonnet />
//                 </Tab>
//                 <Tab eventKey="profile" title="Profile">
//                     <Sonnet />
//                 </Tab>
//                 <Tab eventKey="contact" title="Contact" disabled>
//                     <Sonnet />
//                 </Tab>
//             </Tabs>
//         );
//     }
// }


export default TodoApp;
