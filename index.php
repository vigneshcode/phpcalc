<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <link rel="icon" 
      type="image/png" 
      href="Image/calc.png">
        
        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-131523848-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-131523848-1');
</script>

        <meta charset="UTF-8">
        <title>ACFT Calculator</title>
        
        <link rel="stylesheet" type="text/css" href="CSS/acft.css?v=1.0">
       
    </head>
    <body>
       
<!-- MODAL-->
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

        <header class="header">
            <h1> ACFT Calculator</h1> 
            <h5>Army Combat Fitness Test</h5>
        </header>
        
        
      
            
<!--           Table-->
            
<div class="dvTable CenterLayout">
    
       <!--Header Table-->
            <div class="dvTable dvsubTable dvtblHeader" > 
             <div class="dvTableRow" >
                 <div class="alert">
                <span class="alertclosebtn" onclick="alertclose(this);">&times;</span> 
                 <p id='spnerrordesc'></p>
                 </div>
              </div>
                <div class="dvTableRow">
                 Select MOS

                       
                       <input  type="text" id="optMOS" maxlength="4"  onchange="getMOSManual(this.value);">
                       <button id="btnoff" class="btnopenfrom" onclick="listMOS(1)">Officer</button>
                       <button id="btnWar" class="btnopenfrom" onclick="listMOS(2)">Warrant</button>
                       <button id="btnEnl" class="btnopenfrom" onclick="listMOS(3)">Enlisted</button>
                       

             </div>
                <div class="dvTableRow" >
                <p id='spnMOSdesc'></p>
             </div>
                 <div class="dvTableRow" >
                   <div id="dvacftlevel" class="acftlevel">
                      
             </div>
            </div>
                </div>
       
       <!--Table Events row-->
          <div class="dvTable dvtblcontent" style="width:100%" >
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
                       <input type="text" class="usrInput"  name="txtdl" maxlength="3" onKeyUp="onDeadliftchange()" id="txtdl">
                       <span class="spanunit">lbs</span>
             </div>
                 <div class="dvTableCellLeft">
                    <input type="text" maxlength="3" data-sc="1" disabled id="spnDlftScore" class="spnScore"></span>
                </div>
            </div>
            <!--Table row-->
            <div class="dvTableRowAlt"> 
             <div class="dvTableCellRight">
                 Power Throw
             </div>
                   <div class="dvTableCellLeft">
                 <input type="text" class="usrInput" maxlength="4" name="txtpt"  onKeyUp="onPowerThrowChange()" style="width:55px" id="txtpt">
                 <span class="spanunit">metre's</span>
             </div>
                  <div class="dvTableCellLeft">
                     <input type="text" maxlength="3" disabled data-sc="1" id="spnPowerScore" class="spnScore"></span>
                </div>
            </div>
            
            <!--Table row-->
            <div class="dvTableRow"> 
             <div class="dvTableCellRight">
                 Release Push-ups
             </div>
                   <div class="dvTableCellLeft">
                       <input type="text" class="usrInput" onkeyup="onPushChange();" name="txtPusUp" maxlength="3" max="150" id="txtPusUp">
                 <span class="spanunit">rep's</span>
             </div>
                  <div class="dvTableCellLeft">
                     <input type="text" maxlength="3" disabled data-sc="1" id="spnPUScore" class="spnScore"></span>
                </div>
            </div>
            
            <!--Table row-->
            <div class="dvTableRowAlt"> 
             <div class="dvTableCellRight">
                 Sprint/Drag/Carry
             </div>
                   <div class="dvTableCellLeft">
                       <input type="text" class="usrInput" name="txtspDrCarMin" maxlength="2" max=59 onkeyup="onSprintCarryChange();" id="txtspDrCarMin">
                 <span class="spanunit">mm</span>
                 <input type="text" class="usrInput" name="txtspDrCarSec" maxlength="2" max=59 onkeyup="onSprintCarryChange();" id="txtspDrCarSec">
                 <span class="spanunit">ss</span>
             </div>
                  <div class="dvTableCellLeft">
                     <input type="text" maxlength="3" disabled data-sc="1" id="spnSDragScore" class="spnScore"></span>
                </div>
            </div>
            
            <!--Table row-->
            <div class="dvTableRow"> 
             <div class="dvTableCellRight">
                 Leg Tuck
             </div>
                   <div class="dvTableCellLeft">
                       <input type="text" class="usrInput" name="txtLegTuck" onkeyup="onlegTuckChange();" max="50" id="txtLegTuck">
                 <span class="spanunit">rep's</span>
             </div>
                  <div class="dvTableCellLeft">
                   <input type="text" maxlength="3" disabled data-sc="1" id="spnLtScore" class="spnScore"></span>
                </div>
            </div>
            
          <!--Table row-->
            <div class="dvTableRowAlt"> 
             <div class="dvTableCellRight">
               2-Mile Run
             </div>
                   <div class="dvTableCellLeft">
                       
                       
                       <input type="text" class="usrInput" name="txt2Mmin" onkeyup="onMileChange();" maxlength="2" max=59 id="txt2Mmin">
                     <span class="spanunit">mm</span>
                       
                     <input type="text" class="usrInput" name="txt2Msec" onkeyup="onMileChange();" maxlength="2" max=59 id="txt2Msec">
                 <span class="spanunit">ss</span>
             </div>
                  <div class="dvTableCellLeft">
                    <input type="text" maxlength="3" disabled data-sc="1" id="spnRunScore" class="spnScore"></span>
                </div>
            </div>
           </div>
       <!--Table footer table-->
           <div class="dvTable dvsubTable dvtblFooter" style="background-color: #e7e3e3;" >
            <div class="dvTableRow"> 
             
           Score: <input type="text" maxlength="3" disabled id="spnacftScore" class="spnScore"></span>
           
           <button id="btnReset" class="btnopenfrom" onclick="resetAll();">Reset</button>
           <span id="spnNOGO" class="spnScore danger"></span>
             </div>
                   
           </div>
     </div>
</div>

</div>       
<footer class="footer">
    <h4 style="color:red;">Note:Scores calculated are based on the proposed standards.</h4>
    <h6>&copy;Copyright AcftCalculator.org</h6>
    <img src="Image/running-track.jpg"/>
</footer>
            
       
        <?php
        // put your code here
        ?>
<!--<script type="text/javascript" src="JS/acft.js?v=1.0"></script>-->
<script type="text/javascript" src="JS/acft.min.js?v1.0"></script>

    </body>
</html>
