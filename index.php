<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
         
        <title>ACFT Calculator - Army Combat Fitness Test Calculator </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ACFT - Army Combat Fitness Test Calculator - ACFT Calculator" />
        <meta property="og:url" content="https://www.acftcalculator.org" />
        <meta property="og:site_name" content="ACFT" />
        <meta charset="UTF-8"
              mame="description" content="ACFT Calculator helps to calculate New Army PT test ACFT. Army Combat Fitness Test(ACFT) consists of 6 events
              Deadlift, Standing power throw, T pushup, Sprint/drag/carry, Leg tuck, 2 mile run. ">
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
<script type="application/ld+json">
{
  "@context": "http://schema.org",
	"@type":"WebSite", 
  "url": "https://www.acftcalculator.org",
  "keywords":"acft calculator,acft calc,new army PT test calculator,acft app,acft cal,army combat fitness test calculator,US army PT test calculator",
 "name":"ACFT Calculator",
  "description":"ACFT Calculator helps to calculate New Army PT test ACFT. Army Combat Fitness Test(ACFT) consists of 6 events Deadlift, Standing power throw, T pushup, Sprint/drag/carry, Leg tuck, 2 mile run.",
  "potentialAction":{"@type":"SearchAction","target":"https://www.acftcalculator.org/?s={search_term_string}","query-input":"required name=search_term_string"}
}

</script>

        <link rel="stylesheet" type="text/css" href="CSS/acft.css?v=1.21">
       <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    </head>
    <body itemscope itemtype="http://schema.org/WebPage">
       
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
            <h1 itemprop="name">Army Combat Fitness Test(ACFT) Calculator </h1>
<!--            <h4> ACFT Calculator</h4> -->
    
        </header>
        
        
      
            
<!--        dvTable CenterLayout   Table-->
            

      <!--Table Article table-->
       <div id="nobileArti" class="Homecolumn HomeLeft" >
   <article>
        <div class="intro">
            
            
           <div class="dvIntro">
               <h3>ACFT - Army Combat Fitness Test</h3>
            <p >
                
                The new ACFT is a gender and age neutral army fitness test, it is proposed to take effect late 2020.The ACFT is made up of six events each with 100 point system.
                    <ul class="descul">        
                        <li>Deadlift</li>
                        <li>Standing power throw</li> 
                        <li>T push-ups(hand raised, or release)</li> 
                        <li>Sprint/drag/carry</li>
                        <li>Leg tucks</li>
                        <li>2-mile run</li>
                    </ul>
        </p>   
        <p>
            Standards are different based on military occupation specialty(MOS), it is divided by “heavy,” “significant" and “moderate” physical demand.
            Minimum Standards for a "GO" in each events.
                <ul class="descul">    
                    <li>Heavy-70 pts</li>
                    <li>Significant- 65 pts</li>
                    <li>Moderate -60 pts</li>
                </ul>
            </p>
           </div>
             <h3>ACFT Calculator</h3>
             <p>
                 
                 ACFT Calculator site helps to calculate ACFT score easily based on MOS selected. Site well show scores for
                 each event & GO/NO-GO indicator, everything happens the moment the user enters their raw score.
             </p>
        </div>
        
    </article>
    
</div>
    <div class="Homecolumn HomeCenter">
   
       <!--Header Table-->
            <div class="dvTable dvsubTable dvtblHeader" > 
             <div class="dvTableRow" >
                 <div class="alert">
                <span class="alertclosebtn" onclick="disappearerrorMessage();">&times;</span> 
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
<!--                     <span class="spanunit" style="color:white;">Physical Demand Level</span>-->
                   <div id="dvacftlevel" class="acftlevel">
                      
             </div>
            </div>
                </div>
       
       <!--Table Events row-->
          <div class="dvTable dvtblcontent"  style="width:90%;">
              
            <!--Table row-->
            <div class="dvTableRowAlt"> 
             <div class="dvTableCellRight" style="background-color:#847520; color:white;height: 40px;" >
                 Events
<!--             style="background-color:#847520;; height: 50px;"-->
            </div>
                 <div class="dvTableCellLeft" style="background-color:#847520; color:white; height: 40px;" >
               Raw Score
<!--             style="background-color:#A0B385; height: 50px;"-->
            </div>
                <div class="dvTableCellLeft" style="background-color:#847520; color:white; height: 40px;" >
<!--                    style="background-color:#A0B385; height: 50px;"-->
                    Points
                </div>
            </div>
            <!--Table row-->
            <div class="dvTableRow"> 
             <div class="dvTableCellRight" >
                 Dead Lift
                
             </div>
                   <div class="dvTableCellLeft">
<!--                       <label for="txtdl"> Dead Lift</label>-->
                       <input type="text" class="usrInput"  name="txtdl" maxlength="3" onKeyUp="onDeadliftchange()" id="txtdl">
                       <span class="spanunit">lbs</span>
             </div>
                 <div class="dvTableCellLeft">
                    <input type="text" maxlength="3" data-sc="1" disabled id="spnDlftScore" class="spnScore"></span>
                </div>
                  <div style="width:100%;background-color: grey;">
                     <div id="testdv" >"</div>
                 </div>
            </div>
           
            <!--Table row-->
            <div class="dvTableRowAlt"> 
             <div class="dvTableCellRight">
                 Power Throw
             </div>
                   <div class="dvTableCellLeft">
<!--                        <label for="txtpt">  Power Throw </label>-->
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
<!--                       <label for="txtPusUp"> Release Push-ups </label>-->
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
<!--                        <label for="txtspDrCarMin"> Sprint/Drag/Carry </label>-->
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
<!--                         <label for="txtLegTuck"> Leg Tuck </label>-->
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
<!--                        <label for="txtLegTuck">2-Mile Run</label>-->
                       
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
           <span id="spnNOGO" class="spnNOGO"></span>
             </div>
                   
           </div>
    </div>
    
       
        <!--Table ad table-->
      <div class="Homecolumn HomeRight">
    <iframe id="noamaad" src="amazonad.html" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"
width="120" height="620"></iframe>
</div>
      

<footer class="footer">

<!--    <h6>&copy;Copyright AcftCalculator.org</h6>-->
    <img src="Image/running-track.jpg" alt="track"/>
</footer>
            
       
        <?php
        // put your code here
        ?>
<script type="text/javascript" src="JS/acft.js?v=1.01"></script>
<!--<script type="text/javascript" src="JS/acft.min.js?v1.1"></script>-->
<script type="text/javascript">
    amzn_assoc_ad_type = "link_enhancement_widget";
    amzn_assoc_tracking_id = "acft99-20";
    amzn_assoc_linkid = "ae17aca3523c7e9d0131347948656c80";
    amzn_assoc_placement = "";
    amzn_assoc_marketplace = "amazon";
    amzn_assoc_region = "US";
</script>
<script src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"></script>
    </body>
</html>