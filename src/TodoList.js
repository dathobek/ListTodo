import React, {Component} from 'react'


class TodoList extends Component {
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this)
    }

      //declearing the addItem function
    addItem(e){

    }

    render(){
        return (
            <div className="todoListMain">
              <div className="header">
                <form onSubmit={this.addItem}>
                  <input placeholder="enter task">
                  </input>
                  <button type="submit">add</button>
                </form>
              </div>
            </div>
          );
    }
}

export default TodoList;