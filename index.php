<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>ACFT Calculator</title>
        
        <link rel="stylesheet" type="text/css" href="CSS/acft.css">
        
<!--<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"></link>-->
<!--<script src="https://code.jquery.com/jquery-1.12.4.js"></script>-->
  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script type="text/javascript" src="JS/acft.js"></script>
  <!--<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->
<!--<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
        -->
        
    </head>
    <body>
        <style>




/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 1px 0;
  position: relative;
}



.container {
  padding: 10px;
 
}


/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 50%;
  height: 50%;
    overflow: scroll;
 /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}


li {
display:inline-flex;
width:80px;
list-style-type: none;
  border-color:burlywood;
  border-style:solid;
  border-width: 1px;
  
}
li:hover{
 
  background-color: rgba(195, 182, 39, 0.9);
  cursor:pointer;
}
</style>


<div id="id01" class="modal">
  <div class="animate modal-content">
    <div class="imgcontainer" style="background-color:#f1f1f1">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>
    <div class="container">
    <label for="uname"><b>Select your MOS</b></label>
    <ul id='ulEnlistedMOS'>       
    </ul>
    </div>
  </div>
</div>


<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var acftlevel=["na","HEAVY","SIGNIFICANT","MODERATE"];
var MOS={
 officerMOS:{
    //heavy-1,significant-2,moderate-3
    "11A":"1Infantry",
    "12A":"1Engineer",
    "09C":"3Trainee Language",
    "09D":"3College Trainee",
    "09E":"3Trainee Language, Fort Allen PR",
    "09J":"3GED Completion Program",
    "09L":"3Interpreter/Translator",
    "09M":"3March 2 Success",
    "09N":"3Nurse Corps Candidate"
},

 warMOS:{
    //heavy-1,significant-2,moderate-3
    "120A":"3Construction Engineering Technician",
    "125D":"3Geospatial Engineering Technicican",
    "09C":"3Trainee Language",
    "09D":"3College Trainee",
    "09E":"3Trainee Language, Fort Allen PR",
    "09J":"3GED Completion Program",
    "09L":"3Interpreter/Translator",
    "09M":"3March 2 Success",
    "09N":"3Nurse Corps Candidate"
},
 enlistedMOS:{
    //heavy-1,significant-2,moderate-3
    
     "00Z":"3Sergeant Major Nominative",
    "09B":"3Trainee Unassigned",
    "09C":"3Trainee Language",
    "09D":"3College Trainee",
    "09E":"3Trainee Language, Fort Allen PR",
    "09J":"3GED Completion Program",
    "09L":"3Interpreter/Translator",
    "09M":"3March 2 Success",
    "09N":"3Nurse Corps Candidate"
    }
};
function listMOS(Cursel){
var lsMOS=document.getElementById("ulEnlistedMOS");

var loopli;
var selectedMOS;


while(lsMOS.hasChildNodes()){
    lsMOS.removeChild(lsMOS.firstChild);
    
}
switch(Cursel)
{
    case 1:
         selectedMOS=MOS.officerMOS;
        break;
    case 2:
         selectedMOS=MOS.warMOS;
        break;
    default:
        selectedMOS=MOS.enlistedMOS;
}
for (loopli in selectedMOS){
    
    var liMOS=document.createElement("li");
    
    liMOS.setAttribute("data-n",selectedMOS[loopli]);
    liMOS.innerHTML=loopli;
    lsMOS.appendChild(liMOS);

}

var ulChild=document.getElementById("ulEnlistedMOS").children;

for(var i=0 ;i<ulChild.length;i++)
{

            var mylist =ulChild[i];
            mylist.onclick=getmyMOS;
           
            
}
document.getElementById('id01').style.display='block';
}
function getmyMOS(){
   
    pMOS= this.innerHTML;
    var txtMOS= document.getElementById("optMOS");
    
        txtMOS.value =pMOS;
       document.getElementById("spnMOSdesc").innerHTML=getDesc(this.getAttribute("data-n"));
       var divAcftLevel= document.getElementById("dvacftlevel");
       divAcftLevel.setAttribute("data-lv",getLevel(this.getAttribute("data-n")));
       divAcftLevel.innerHTML=acftlevel[getLevel(this.getAttribute("data-n"))];
       divAcftLevel.className="acftlevel"+getLevel(this.getAttribute("data-n"));
    document.getElementById('id01').style.display='none';
    }

function getMOSManual(e){
    
   //find in MOS
   
   var key=e.toUpperCase();
   var keyvalue;
   var sp=document.getElementById("spnMOSdesc");
     var divAcftLevel= document.getElementById("dvacftlevel");
     
     
    
  
   if(key in MOS.enlistedMOS)
   {
       
               keyvalue=MOS.enlistedMOS[key];       
   }
   else if(key in MOS.officerMOS)
   {
       
               keyvalue=MOS.officerMOS[key];
   }
   else if(key in MOS.warMOS){
       
               keyvalue=MOS.warMOS[key];
   }
   else
   {
       keyvalue="N/A";
   }
   
   sp.innerHTML=getDesc(keyvalue);
   
   if(keyvalue!=="N/A"){
         divAcftLevel.setAttribute("data-lv",getLevel(keyvalue));
       divAcftLevel.className="acftlevel"+getLevel(keyvalue);
       divAcftLevel.innerHTML=acftlevel[getLevel(keyvalue)];
   }
   else{
   divAcftLevel.setAttribute("data-lv",0);
       divAcftLevel.className="acftlevel";
   }
}
function getDesc(pVal){
    return pVal.substr(1);
}
function getLevel(pVal){
    return pVal.charAt(0);
}
</script>

        <header class="header">
            <h1> ACFT Calculator</h1> 
        </header>
        
        
        <section>
            
<!--           Table-->
            
<div class="dvTable CenterLayout">
    
       <!--Table row-->
            <div class="dvTableRow"> 
             <div class="dvTableCellRight">
                 MOS
             </div>
                   <div class="dvTableCellLeft">
                       
                       <input  type="text" id="optMOS" maxlength="4"  onchange="getMOSManual(this.value);">
                       <button id="btnoff" class="btnopenfrom" onclick="listMOS(1)">Officer</button>
                       <button id="btnWar" class="btnopenfrom" onclick="listMOS(2)">Warrant</button>
                       <button id="btnEnl" class="btnopenfrom" onclick="listMOS(3)">Enlisted</button>
                       

             </div>
                
            </div>
         <!--Table row-->
            <div class="dvTableRow"> 
             <div class="dvTableCellRight" >
                <span id='spnMOSdesc'></span>
             </div>
                   <div id="dvacftlevel" class="acftlevel">
                      
             </div>
                
            </div>
          
            <!--Table row-->
            <div class="dvTableRowAlt"> 
             <div class="dvTableCellRight" style="background-color:#847520;; height: 50px;">
                 Events
             
            </div>
                 <div class="dvTableCellLeft" style="background-color:#A0B385; height: 50px;">
               Raw Score
             
            </div>
                <div class="dvTableCellLeft" style="background-color:#A0B385; height: 50px;">
                    Points
                </div>
            </div>
            <!--Table row-->
            <div class="dvTableRow"> 
             <div class="dvTableCellRight" >
                 Dead Lift
             </div>
                   <div class="dvTableCellLeft">
                       <input type="text" class="usrInput" name="txtdl" maxlength="3" id="txtdl">
                       <span class="spanunit">lbs</span>
             </div>
                 <div class="dvTableCellLeft">
                    Points
                </div>
            </div>
            <!--Table row-->
            <div class="dvTableRowAlt"> 
             <div class="dvTableCellRight">
                 Power Throw
             </div>
                   <div class="dvTableCellLeft">
                 <input type="text" class="usrInput" maxlength="4" name="txtpt" style="width:55px" id="txtpt">
                 <span class="spanunit">metre's</span>
             </div>
                  <div class="dvTableCellLeft">
                    Points
                </div>
            </div>
            
            <!--Table row-->
            <div class="dvTableRow"> 
             <div class="dvTableCellRight">
                 Release Push-ups
             </div>
                   <div class="dvTableCellLeft">
                 <input type="text" class="usrInput" name="txtPusUp" max="150" id="txtPusUp">
                 <span class="spanunit">rep's</span>
             </div>
                  <div class="dvTableCellLeft">
                    Points
                </div>
            </div>
            
            <!--Table row-->
            <div class="dvTableRowAlt"> 
             <div class="dvTableCellRight">
                 Sprint/Drag/Carry
             </div>
                   <div class="dvTableCellLeft">
                 <input type="text" class="usrInput" name="txtspDrCarMin" maxlength="2" id="txtspDrCarMin">
                 <span class="spanunit">mm</span>
                 <input type="text" class="usrInput" name="txtspDrCarSec" maxlength="2" id="txtspDrCarSec">
                 <span class="spanunit">ss</span>
             </div>
                  <div class="dvTableCellLeft">
                    Points
                </div>
            </div>
            
            <!--Table row-->
            <div class="dvTableRow"> 
             <div class="dvTableCellRight">
                 Leg Tuck
             </div>
                   <div class="dvTableCellLeft">
                 <input type="text" class="usrInput" name="txtLegTuck" max="50" id="txtLegTuck">
                 <span class="spanunit">rep's</span>
             </div>
                  <div class="dvTableCellLeft">
                    Points
                </div>
            </div>
            
          <!--Table row-->
            <div class="dvTableRowAlt"> 
             <div class="dvTableCellRight">
               2-Mile Run
             </div>
                   <div class="dvTableCellLeft">
                       
                       
                       <input type="text" class="usrInput" name="txt2Mmin" maxlength="2" id="txt2Mmin">
                     <span class="spanunit">mm</span>
                       
                  <input type="text" class="usrInput" name="txt2Msec" maxlength="2" id="txt2Msec">
                 <span class="spanunit">ss</span>
             </div>
                  <div class="dvTableCellLeft">
                    Points
                </div>
            </div>
    
           <!--Table row-->
            <div class="dvTableRow"> 
             <div class="dvTableCellRight">
           Score:
             </div>
                   <div class="dvTableCellLeft">
                 
             </div>
            </div>
    
</div>

         
<footer class="footer">
    <h6>&copy;Copyright ACFT Calculator</h6>
    <img src="Image/running-track.jpg"/>
</footer>
            
        </section>
        <?php
        // put your code here
        ?>
<script>


</script>
    </body>
</html>
