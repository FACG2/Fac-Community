var counter = 1;
var limit = 100;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<div class='skill'><div class='skills col-6'><label class='col-form-label'>skill"+(counter +1)+"</label><br><input type='text' class='form-control' name='skill'></div><div class='values col-6'><label class='col-form-label'>Skill value</label><div  class='SkillsValue'><input class='form-control' name='skillvalue' type='number' value=''></div></div></div>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}

