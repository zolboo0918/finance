//delgetsteia ajillah controller
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings() {
      return DOMstrings;
    },
  };
})();

//sanhuutei ajillah controller
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

//programmiin holbogch  controller
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    //1. oruulah ugugdliig delgetsees olj avna
    console.log(uiController.getInput());
    //2. olj avsan ugugdluude sanhuugiin controllert damjuulj tend handana
    //3. olj avsan ugugdluu web deeree tohiroh hesegt gargana
    //4. tusviig tootsoolno
    //5. etssiin uldegdel, tootsoog delgetsend hevleh
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("Applicatuin started");
      setupEventListeners();
      // ctrlAddItem();
    },
  };
})(uiController, financeController);

appController.init();
