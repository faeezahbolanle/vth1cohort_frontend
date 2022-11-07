//javascript is the world's most popular scripting language. single line comment
/*
  javascript is the programming language for the web
  javascript is easy to learn.
  we will learn the following javascript concept today:
  1. datatypes
  2. variables
  3. operators.

  before we begin learning let's see the power of javascript below
  The original Javascript versions include ES1 ES2 ES3 (1997-1999)
   The first main revision ESS(2009)
   The second version is ES6(2015)
*/
function ChangeToDate(){
var currentDate = document.getElementById('role')
    currentDate.innerHTML = Date()

}
/*
1. we can use javascript to change html content
*/

function changeContent(){
  var currentValue =document.getElementById('companyOne')
  currentValue.innerHTML = 'Mama Bukka' 
}
/*
 javascript can change html attribute values
*/
function changeAttribute(){
  var currentAttributeValue = document.getElementById('profile_picture') 
  currentAttributeValue.src="../assets/faeezah.webp"
}

/*
 you can write javascript for the web inside html
*/