import React from 'react';
import Tabs from './components/tab/Tabs';
import Content from './components/tab/Content';

class TodoApp2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            items: [
                {
                    label: 'Добавить кнопку',
                    content: 'Content 1',
                    status: '0',
                },
                {
                    label: 'Кнопка 1',
                    content: 'Content 2',
                    status: '1',
                },
                {
                    label: 'Кнопка 2',
                    content: 'Content 3',
                    status: '1',
                },
            ],
            text: '',
            clickedText: '',
            clickedText2: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);

    }


    render() {
        const {clickedText} = this.state;
        const { initialData, activeTabIndex } = this.state;
        const activeItem = this.state.items[activeTabIndex] != null ? this.state.items[activeTabIndex] : 0 ;
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} removeTodo={this.removeTodo}/>
                <br/>
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
                {this.state.activeTabIndex}
                <Tabs
                    handleTabClick={this.handleTabClick}
                    data={this.state.items}
                    activeTabIndex={activeTabIndex}
                />
                <Content content={activeItem.content} />
            </div>
        );
    }

    handleTabClick(index) {
        this.setState({
            activeTabIndex: index,
        });
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
            label: this.state.text,
            content: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {

    removeItem(id, status) {
        if (status !=0) {
            this.props.removeTodo(id);
        }
    }

    render() {
        return (
            <ul className="input-teg">
                {this.props.items.map((item, i) => (
                    <li onClick={() => {
                        this.removeItem(i, item.status)
                    }} key={item.content}>{item.label}</li>
                ))}
            </ul>
        );
    }
}


export default TodoApp2;
