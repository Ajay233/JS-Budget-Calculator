var User = function(){
  this.expenses = []
};

User.prototype.addExpenses = function (num) {
  this.expenses.push(num);
};
