/** @jsx React.DOM */
var React = require('react');
var ReactTable = require('react-table');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getBooksState(){
    return {
        allBooks : AppStore.getAllBooks()};
}
var App = React.createClass({
    getInitialState: function() {
        return getBooksState();
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    addItem:function(){
      AppActions.addItem('this is the item');
    },
    removeItem:function(){
        AppActions.removeItem('this is the item');
    },
    render:function(){
      return (
        <div className="wrapper">
          <h3 onClick={this.addItem}>Click this Title to add item</h3>
            <h3 onClick={this.removeItem}>Click this Title to remove item</h3>
            <ReactTable data={this.state.allBooks} class="table table-striped" />
        </div>
      )
    },
    _onChange: function() {
        this.setState(getBooksState());
    }

  });

module.exports = App;
