var user = new User();

$(document).ready(function(){
  $('#expenses').data(expense);
    var expense = expense;
  $('#addExpense').onClick(function(event){
    if (event.which === ){
    $('ul').apend("<li>" + expense + "</li>")
    // user.addExpenses(expense);
    alert("Expense added")
    }
  });

});
