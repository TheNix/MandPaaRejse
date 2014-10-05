// Unminified and unconcatenated JS source for development

var App = App || {};

App.Main = (function() {
  "use strict";

  var
      // Store cached references to DOM elements
      // that will be used over and over again
      dom = {};

  /**
   * Initialize function
   * @return {void}
   */
  function initialize() {
    // Set up DOM and cache references
    _setupDOM();

    // Add event listeners
    _addEventListeners();
  }

  /**
   * Set up DOM (create?) elements and cache references for future use
   * @return {void}
   */
  function _setupDOM() {
    dom.$triggerOn  = document.getElementsByClassName('js-btn-trigger');
    dom.$triggerOff = document.getElementsByClassName('modal__close');
    dom.$modal      = document.getElementsByClassName('modal');
  }

  /**
   * Attach event listeners to DOM elements
   */
  function _addEventListeners() {
    for(var i=0;i<dom.$triggerOn.length;i++){
      dom.$triggerOn[i].addEventListener('click', _toggleModalOn );
    }

    for(var i=0;i<dom.$triggerOff.length;i++){
      dom.$triggerOff[i].addEventListener('click', _toggleModalOff );
    }

    document.onkeydown = function(e) {
      e = e || window.event;
      if (e.keyCode == 27) { // If ESC is pressed
        _toggleModalOff();
      }
    }
  }

  /**
   * Event handler for toggling modal box
   * @param  {object} event event object
   * @return {void}
   */
  function _toggleModalOn(){
    var modalId = this.getAttribute('data-trigger');
    var _$modal = document.querySelectorAll('[data-modal-id=' + modalId + ']');

    // Make sure class can only be added once
    if (_$modal[0].classList.contains('is-open') === false) {
      _$modal[0].classList.add('is-open');
    }
  }

  function _toggleModalOff(){
    // Class check not needed, it will always be removed
    for(var i=0;i<dom.$modal.length;i++){
      dom.$modal[i].classList.remove('is-open');
    }
  }

  ////////////////
  // Public API //
  ////////////////

  return {
    initialize: initialize
  };

})();

document.onreadystatechange = function () {
  // Initialize app when document is "ready"
  if (document.readyState == "complete") {
    App.Main.initialize();
  }
}
