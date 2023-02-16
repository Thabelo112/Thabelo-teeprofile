var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contects");
 
function opentab(tabname){
for(tablink of tablinks){
    tablinks.classlist.remove("Active-link");

}for( tabcontent of tabcontents){
    tabcontents.classlist.remove("Active-tab");

}
event.currentTarget.classlist.add("active-link");

document.getElementById(tabname).classList.add("active-tab")

 }