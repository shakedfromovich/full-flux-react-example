var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ActionTypes.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _books= new Array();

var AppStore = assign({}, EventEmitter.prototype, {
  addChangeListener : function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener : function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  getAllBooks : function(){
    return _books;
  }
});

AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    case ActionTypes.ADD_ITEM :
      _books.push({name:_books.length});
      AppStore.emitChange();
      break;
      case ActionTypes.REMOVE_ITEM :
          _books.pop();
          AppStore.emitChange();
          break;
    default:
          //Do nothing
  }
  return true;
});

module.exports = AppStore;
