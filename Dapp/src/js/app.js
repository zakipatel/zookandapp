App = {
  web3Provider: null,
  contracts: {},

  init: function() {

    return App.initWeb3();
  },

  initWeb3: function() {
    /*
     * Replace me...
     */
     // Is there an injected web3 instance?
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider;
      } else {
        // If no injected web3 instance is detected, fall back to Ganache
        App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      }
      web3 = new Web3(App.web3Provider);

     return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */
    return App.bindEvents();
  },

  bindEvents: function() {
  },

  markAdopted: function(adopters, account) {
    /*
     * Replace me...
     */
  },

  handleAdopt: function(event) {
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
