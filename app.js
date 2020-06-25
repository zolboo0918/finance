//delgetsteia ajillah controller
var uiController = (function () {
  console.log("hello");
})();

//sanhuutei ajillah controller
var financeController = (function () {
  console.log("hi");
})();

//programmiin holbogch  controller
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    //1. oruulah ugugdliig delgetsees olj avna
    console.log("дэлгэцээс өгөгдлөө авах хэсэг");
    //2. olj avsan ugugdluude sanhuugiin controllert damjuulj tend handana

    //3. olj avsan ugugdluu web deeree tohiroh hesegt gargana

    //4. tusviig tootsoolno

    //5. etssiin uldegdel, tootsoog delgetsend hevleh
  };

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
