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

        
        
    </head>
    <body>
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
                       
                       <input  id="optMOS" onchange="alert(value);">
                       <a id="enlist" href="#" onclick="openpopup()"> Enlisted</a>
                       <div class="popupMOS"  id="popupform"> 
                           <ul onclick="closepopup()">
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               <li>12D Inteek</li>
                               
                           </ul>
                       </div>
             </div>
                <div class="acftlevel" ><span>Significant</span>jj</div>
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
    </body>
</html>
