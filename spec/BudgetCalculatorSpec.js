describe ('Budget Calculator', function(){

  beforeEach(function(){
    user = new User
    user.expenses.push(100);
    user.expenses.push(20);
    user.expenses.push(300);
  });
  it ('it can store input', function(){
    expect(user.expenses).toEqual([100, 20, 300])
  });
});
