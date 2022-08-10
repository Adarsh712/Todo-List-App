exports.getDate = function () {
  var options = { weekday: "long", day: "numeric", month: "long" };
  var today = new Date();
  return today.toLocaleDateString("en-US", options);
};
