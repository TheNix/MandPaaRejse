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
    dom.$triggerOn  = document.querySelector('.btn--download');
    dom.$triggerOff = document.querySelector('.modal__close');
    dom.$modal      = document.querySelector('.modal-purchase');
  }

  /**
   * Attach event listeners to DOM elements
   */
  function _addEventListeners() {
    dom.$triggerOn.addEventListener('click', _toggleModalOn );
    dom.$triggerOff.addEventListener('click', _toggleModalOff );

    document.onkeydown = function(e) {
      e = e || window.event;
      if (e.keyCode == 27) { // If ESC is pressed
        _toggleModalOff;
      }
    }
  }

  /**
   * Event handler for toggling modal box
   * @param  {object} event event object
   * @return {void}
   */
  function _toggleModalOn(){
    // Make sure class can only be added once
    if (dom.$modal.classList.contains('is-open') === false) {
      dom.$modal.classList.add('is-open');
    }
  }

  function _toggleModalOff(){
    // Class check not needed, it will always be removed
    dom.$modal.classList.remove('is-open');
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
