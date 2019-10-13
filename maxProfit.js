var maxProfit = function (prices) {
  var min = Infinity;
  var maxProfit = 0;
  prices.forEach(function (element) {
    if (element < min) {
      min = element;
    } else if (element - min > maxProfit) {
      maxProfit = element - min;
    }
  })
  return maxProfit;
};