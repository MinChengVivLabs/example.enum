module.exports.function = function displayTimeInterval (dateTimeExpression) {
  var date = dateTimeExpression.date
  var dateInv = dateTimeExpression.dateTimeInterval
  var rslt = ""
  if (date)
    return "have fun "+ date;
  else if (dateInv) {
    rslt = "have fun with Inv "
    var start = dateTimeExpression.dateTimeInterval.start.date.day
    var end = dateTimeExpression.dateTimeInterval.end.date.day
    rslt += "start="+start+" end="+end
    return rslt;
  }
  else 
    return "not fun!";
}
