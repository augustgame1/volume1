var ObjectStorage = (function () {
  "use strict";
  try {
    var e = localStorage;
    return {
      save: function (r, t) {
        e.setItem(
          r,
          JSON.stringify(t, function (e, r) {
            if ("$$hashKey" != e) return r;
          })
        );
      },
      load: function (r) {
        return JSON.parse(e.getItem(r));
      },
      clear: function () {
        //e.clear();
      },
    };
  } catch (e) {
    return (
      alert(
        "There is no local storage for you. If you refresh the page, all progress will be lost"
      ),
      {
        save: function (e, r) {},
        load: function (e) {
          return null;
        },
        clear: function () {},
      }
    );
  }
})();
