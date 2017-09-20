const test = require('tape');
const usersFunctions = require('../model/queries/users.js');


test("Check the user's existing", (t) => {
 usersFunctions.checkUser('wadia', (err, res)=>{
      if (err){
        console.log(err)
      }else{
        var actual = res;
        var expected = true;
        t.equal(actual,expected,'should return true');  
      }
  t.end();
 })
});