<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
         
        <title>ACFT Calculator(Army Combat Fitness Test) </title>
        <meta name="msvalidate.01" content="685E751923C32277DC780A555B6196B7" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="propeller" content="0824c66d4e1331679709fe210183af4a">
        <meta charset="UTF-8">
              <meta name="description" content="ACFT Calculator- helps to score Army Combat Fitness Test(ACFT). Test consists of 6 events
              Deadlift, Standing power throw, hand release pushup, Sprint/drag/carry, Leg tuck, 2 mile run. Site also list ACFT MOS Breakdown ">
       <meta name="keywords" content="acft calculator,acft app,acft mos breakdown">
        <link rel="icon" 
      type="image/png" 
      href="Image/calc.png">
    <link rel="canonical" href="https://www.acftcalculator.org/"/>
    <meta name="google-site-verification" content="MM66sjHbU0--FDmj_O_-T9iM-d0OR-WybQ1pWV8evDs" />
        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-131523848-1"></script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WRN3PWX');</script>
<!-- End Google Tag Manager -->
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
  "keywords":"acft calculator,acft app,acft mos breakdown",
 "name":"ACFT Calculator",
  "description":"ACFT Calculator- helps to score Army Combat Fitness Test(ACFT). Test consists of 6 events Deadlift, Standing power throw, hand release pushup, Sprint/drag/carry, Leg tuck, 2 mile run. Site also list ACFT MOS Breakdown "
  
}

</script>

        <link rel="stylesheet" type="text/css" href="https://www.acftcalculator.org/CSS/acft.css?v=1.25">
       <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    </head>
    <body itemscope itemtype="http://schema.org/WebPage">
       <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRN3PWX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<!-- MODAL-->
<div id="id01" class="modal">
  <div class="animate modal-content">
    <div class="imgcontainer" style="background-color:#f1f1f1">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>
    <div class="container">
        <label for="uname"><b><h3>ACFT MOS breakdown</h3></b></label>
    <ul id='ulEnlistedMOS'>       
    </ul>
    </div>
  </div>
</div>

        <header class="header">
            <a href="#"><img src="https://www.acftcalculator.org/Image/calc_512.png" alt="acft app icon" style="float: left; margin-left: 5px; width: 80px;height: 80px;"/></a>
            <h1>ACFT CALCULATOR</h1>
<!--            <h4> ACFT Calculator</h4> -->
    
        </header>
        
        
      
            
<!--        dvTable CenterLayout   Table-->
            

      <!--Table Article table-->
       <div id="nobileArti" class="Homecolumn HomeLeft" >
   <article>
        <div class="intro">
            <h3>ACFT Guide :</h3>
             <p>
                 This site is the most easiest way to calculate ACFT score. First step is to select your MOS by clicking either enlisted or warrant or officer button, this will show MOS breakdown and corresponding physical demand level is selected upon clicking MOS. Based on the level each event pass/fail is calculated.
                 Next enter the raw score for each events while entering raw scores points are calculated instantly, if the points are below the standard, red background is displayed around it. When raw scores are entered ACFT score/Total is also calculated instantly.
                 Site also show GO/NO-GO indicator and a clear button at very bottom.
             </p>
            
           <div class="dvIntro">
               <h3>Army Combat Fitness Test</h3>
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
             
        </div>
        
    </article>
    
</div>
    <div class="Homecolumn HomeCenter">
   
       <!--Header Table-->
            <div class="dvTable dvsubTable dvtblHeader" > 
             <div class="dvTableRow" >
                 <div class="alert" style="display:none;">
                <span class="alertclosebtn" onclick="disappearerrorMessage();">&times;</span> 
                 <p id='spnerrordesc'></p>
                 </div>
              </div>
                <div class="dvTableRow">
                 Select MOS

                       
                       <input  type="text" id="optMOS" maxlength="4"  onchange="getMOSManual(this.value);">
                        <button id="btnEnl" class="btnopenfrom" onclick="listMOS(3)">Enlisted</button>
                       <button id="btnWar" class="btnopenfrom" onclick="listMOS(2)">Warrant</button>
                      <button id="btnoff" class="btnopenfrom" onclick="listMOS(1)">Officer</button>
                       

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
                       <input type="text" class="usrInput" placeholder="lbs" name="txtdl" maxlength="3" onKeyUp="onDeadliftchange()" id="txtdl">
<!--                       <span class="spanunit">lbs</span>-->
             </div>
                 <div class="dvTableCellLeft">
                    <input type="text" maxlength="3" data-sc="1" disabled id="spnDlftScore" class="spnScore"></span>
                </div>
<!--                  <div style="width:100%;background-color: grey;">
                     <div id="testdv" >"</div>
                 </div>-->
            </div>
           
            <!--Table row-->
            <div class="dvTableRowAlt"> 
             <div class="dvTableCellRight">
                 Power Throw
             </div>
                   <div class="dvTableCellLeft">
<!--                        <label for="txtpt">  Power Throw </label>-->
                 <input type="text" class="usrInput" maxlength="4" name="txtpt"  placeholder="meter's" onKeyUp="onPowerThrowChange()" style="width:55px" id="txtpt">
<!--                 <span class="spanunit">metre's</span>-->
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
                       <input type="text" class="usrInput" placeholder="reps" onkeyup="onPushChange();" name="txtPusUp" maxlength="3" max="150" id="txtPusUp">
<!--                 <span class="spanunit">rep's</span>-->
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
<input type="text" class="usrInput" placeholder="mm" name="txtspDrCarMin" maxlength="2" max=59  onkeyup="onSprintCarryChange();" id="txtspDrCarMin">
                 <span class="spanunit">:</span>
                 <input type="text" class="usrInput" placeholder="ss" name="txtspDrCarSec" maxlength="2" max=59 onkeyup="onSprintCarryChange();" id="txtspDrCarSec">
<!--                 <span class="spanunit">ss</span>-->
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
                       <input type="text" class="usrInput" placeholder="reps" name="txtLegTuck" onkeyup="onlegTuckChange();" max="50" id="txtLegTuck">
<!--                 <span class="spanunit">rep's</span>-->
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
                       
                       <input type="text" class="usrInput" placeholder="mm" name="txt2Mmin" onkeyup="onMileChange();" maxlength="2" max=59 id="txt2Mmin">
                     <span class="spanunit">:</span>
                       
                     <input type="text" class="usrInput" placeholder="ss" name="txt2Msec" onkeyup="onMileChange();" maxlength="2" max=59 id="txt2Msec">
<!--                 <span class="spanunit">ss</span>-->
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
           
           <button id="btnReset" class="btnopenfrom" onclick="resetAll();">Clear</button>
           <span id="spnNOGO" class="spnNOGO"></span>
             </div>
                   
           </div>
       
       <div style="text-align: center;"><a href='https://play.google.com/store/apps/details?id=org.acftcalculator.acft&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' >
               <img alt='Get it on Google Play' id="playBadge" src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
      <p style="margin: 0px;"> <b>ACFT Moblie App</b> </p>
       </div>
       
      
    </div>
    
       
        <!--Table ad table-->
      <div class="Homecolumn HomeRight">
    <iframe id="noamaad" src="https://www.acftcalculator.org/amazonad.html?v=1.2" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"
width="160" height="620" ></iframe>
</div>
      

-<div class="footer">
    
  <h6 style="color:yellow ;">&copy;Copyright acftcalculator.org</h6>
<!--    <img src="Image/running-track.jpg" alt="track"/>-->
    
</div>
            
       
        <?php
        // put your code here
        ?>

<script type="text/javascript" src="https://www.acftcalculator.org/JS/acft.min.js?v1.5"></script>
<!--<script type="text/javascript">
    amzn_assoc_ad_type = "link_enhancement_widget";
    amzn_assoc_tracking_id = "acft99-20";
    amzn_assoc_linkid = "ae17aca3523c7e9d0131347948656c80";
    amzn_assoc_placement = "";
    amzn_assoc_marketplace = "amazon";
    amzn_assoc_region = "US";
</script>
<script src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"></script>-->
    </body>
</html>
