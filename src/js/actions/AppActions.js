var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ActionTypes');

var AppActions = {
  addItem: function(item){
    AppDispatcher.handleViewAction({
      actionType:ActionTypes.ADD_ITEM,
      item: item
    })
  },
  removeItem: function(item){
    AppDispatcher.handleViewAction({
      actionType:ActionTypes.REMOVE_ITEM,
      item: item
    })
  }
}

module.exports = AppActions;
