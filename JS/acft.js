/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//ACFT LEVEL Array
var acftlevel=["na","HEAVY","SIGNIFICANT","MODERATE"];
//MOS Object
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
//Error SPAN
var errdisplay= document.getElementById("spnerrordesc");
//open MOS Window
function listMOS(Cursel){
                        var lsMOS=document.getElementById("ulEnlistedMOS");
                        var loopli;
                        var selectedMOS;

                        while(lsMOS.hasChildNodes()){
                            lsMOS.removeChild(lsMOS.firstChild);

                        }
                        //Remove Existing <LI>
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
                        //ADD NEW LI
                        for (loopli in selectedMOS){

                            var liMOS=document.createElement("li");

                            liMOS.setAttribute("data-n",selectedMOS[loopli]);
                            liMOS.innerHTML=loopli;
                            lsMOS.appendChild(liMOS);

                        }
                        //Add Event handler
                        var ulChild=document.getElementById("ulEnlistedMOS").children;

                        for(var i=0 ;i<ulChild.length;i++)
                        {
                                    var mylist =ulChild[i];
                                    mylist.onclick=getmyMOS;

                        }
                        //Show Modal
                        document.getElementById('id01').style.display='block';
}
//Event Handler when li clicked
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
            disappearerrorMessage();
 }
//When typed in MOS text
function getMOSManual(e){  
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
            //MOS Description/Level
            if(keyvalue!=="N/A"){
                  divAcftLevel.setAttribute("data-lv",getLevel(keyvalue));
                divAcftLevel.className="acftlevel"+getLevel(keyvalue);
                divAcftLevel.innerHTML=acftlevel[getLevel(keyvalue)];
            }
            else{
            divAcftLevel.setAttribute("data-lv",0);
                divAcftLevel.className="acftlevel";
                disappearerrorMessage();
            }
}
    function getDesc(pVal){
        return pVal.substr(1);
    }
    function getLevel(pVal){
        return pVal.charAt(0);
    }
    

    
    //deadlift score
    var deadliftscore={
        
        minMod:{140:60},
        minSig:{160:65},
        minHvy:{180:70},
        maxMod:{340:100},
       
        scoreSheet:{
            140:60,
            141:61,
            142:61,
            143:61,
            144:61,
            145:62,
            146:62,
            147:62,
            148:62,
            149:62,
            150:63,
            151:63,
            152:63,
            153:63,
            154:63,
            155:64,
            156:64,
            157:64,
            158:64,
            159:64,
            160:65,
            161:66,
            162:66,
            163:66,
            164:66,
            165:67,
            166:67,
            167:67,
            168:67,
            169:67,
            170:68,
            171:68,
            172:68,
            173:68,
            174:68,
            175:69,
            176:69,
            177:69,
            178:69,
            179:69,
            180:70,
           181:70,
            182:70,
            183:70,
            184:70,
            185:71,
            186:71,
            187:71,
            188:71,
            189:71, 
            190:72,
            191:72,
          192:72,
          193:72,
          194:72,
          195:73,
          196:73,
          197:73,
          198:73,
          199:73,          
            200:74,
            201: 74,
        202: 74,
        203: 74,
        204: 74,
        205: 75,
        206: 75,
        207: 75,
        208: 75,
        209: 75,
            210:76,
            211: 76,
        212: 76,
        213: 76,
        214: 76,
        215: 77,
        216: 77,
        217: 77,
        218: 77,
        219: 77,
            220:78,
            221: 78,
        222: 78,
        223: 78,
        224: 78,
        225: 79,
        226: 79,
        227: 79,
        228: 79,
        229: 79,
            230:80,
            231: 80,
        232: 80,
        233: 80,
        234: 80,
        235: 81,
        236: 81,
        237: 81,
        238: 81,
        239: 81,
            240:82,
            241: 82,
        242: 82,
        243: 82,
        244: 82,
        245: 83,
        246: 83,
        247: 83,
        248: 83,
        249: 83,
            250:84,
            251: 84,
        252: 84,
        253: 84,
        254: 84,
        255: 85,
        256: 85,
        257: 85,
        258: 85,
        259: 85,
            260:86,
            261: 86,
        262: 86,
        263: 86,
        264: 86,
        265: 87,
        266: 87,
        267: 87,
        268: 87,
        269: 87,
            270:88,
            271: 88,
        272: 88,
        273: 88,
        274: 88,
        275: 89,
        276: 89,
        277: 89,
        278: 89,
        279: 89,
            280:90,
          281: 90,
        282: 90,
        283: 90,
        284: 90,
        285: 91,
        286: 91,
        287: 91,
        288: 91,
        289: 91,  
            290:92,
            291: 92,
        292: 92,
        293: 92,
        294: 92,
        295: 93,
        296: 93,
        297: 93,
        298: 93,
        299: 93,
            300:94,
            301: 94,
        302: 94,
        303: 94,
        304: 94,
        305: 95,
        306: 95,
        307: 95,
        308: 95,
        309: 95,
            310:96,
            311: 96,
        312: 96,
        313: 96,
        314: 96,
        315: 97,
        316: 97,
        317: 97,
        318: 97,
        319: 97,
            320:98,
            321: 98,
        322: 98,
        323: 98,
        324: 98,
        325: 98,
        326: 98,
        327: 98,
        328: 98,
        329: 98,
            330:99,
            331: 99,
        332: 99,
        333: 99,
        334: 99,
        335: 99,
        336: 99,
        337: 99,
        338: 99,
        339: 99,
            340:100
            
        }
        
    };
    
    
    function onDeadliftchange(event){
        
        var txtDeadliftRaw=document.getElementById("txtdl");
        var spnDlftScore=document.getElementById("spnDlftScore");
        //check level
        var divAcftLevel= document.getElementById("dvacftlevel").getAttribute("data-lv");
        var compScore=0;
        var minRscore;
        var isNOGO=false;
        //Check for valid input
        var pval=txtDeadliftRaw.value;
         
        var patt = /[^0-9]/;
        var res = patt.test(pval);
        if(res)
        {
            spnDlftScore.value=0;
            return;
        }
        
        if( pval==0||pval=='undefined'|| pval==null||pval.length<2)
        {
            spnDlftScore.value=0;
            return;
        }
        
        //Check if level exists
        if(divAcftLevel==0||divAcftLevel=='undefined'|| divAcftLevel==null){
        showerrorMessage("Oh! You forgot to select MOS");
        return ;
        }
        
        switch (divAcftLevel)
        {
            //Heavy
            case "1":
                minRscore=180;
             break;
             //Significant
              case "2":
                minRscore=160;
                //Moderate
             break;
              case "3":
                minRscore=140;
             break;
                
        };
      
        //check for min
         if (pval < 140|| pval < minRscore)
         {             //NO GO
             isNOGO=true;
         }
         //check/ for max
         if(pval >=340)
         {//100
             compScore=100;
            }
            
            if (isNOGO)
            {
                compScore=39;
            }
            
        //check for score
        if (pval in deadliftscore.scoreSheet)
        {
         compScore= deadliftscore.scoreSheet[pval]  ;
        }

        //update the total score
       
        spnDlftScore.value=compScore;
        updateAcftScore();
        
    }
    
   
        
     var powerThrowScore={   
         minMod:{'4.6':60},
        minSig:{'6.6':65},
        minHvy:{'8.5':70},
        maxMod:{'13.5':100},
        scoreSheet:{
            '4.6': 60,
        '4.7': 60,
        '4.8': 60,
        '4.9': 60,
        '5.0': 60,
        '5.1': 60,
        '5.2': 60,
        '5.3': 61,
        '5.4': 61,
        '5.5': 61,
        '5.6': 62,
        '5.7': 62,
        '5.8': 62,
        '5.9': 63,
        '6.0': 63,
        '6.1': 63,
        '6.2': 64,
        '6.3': 64,
        '6.4': 64,
        '6.5': 65,
        '6.6': 65,
        '6.7': 65,
        '6.8': 65,
        '6.9': 65,
        '7.0': 66,
        '7.1': 66,
        '7.2': 66,
        '7.3': 66,
        '7.4': 66,
        '7.5': 67,
        '7.6': 67,
        '7.7': 67,
        '7.8': 67,
        '7.9': 67,
        '8.0': 68,
        '8.1': 68,
        '8.2': 68,
        '8.3': 69,
        '8.4': 69,
        '8.5': 70,
        '8.6': 71,
        '8.7': 71,
        '8.8': 72,
        '8.9': 73,
        '9.0': 73,
        '9.1': 74,
        '9.2': 75,
        '9.3': 75,
        '9.4': 76,
        '9.5': 77,
        '9.6': 77,
        '9.7': 78,
        '9.8': 79,
        '9.9': 79,
        '10.0': 80,
        '10.1': 81,
        '10.2': 81,
        '10.3': 82,
        '10.4': 83,
        '10.5': 83,
        '10.6': 84,
        '10.7': 85,
        '10.8': 85,
        '10.9': 86,
        '11.0': 87,
        '11.1': 87,
        '11.2': 88,
        '11.3': 89,
        '11.4': 89,
        '11.5': 90,
        '11.6': 91,
        '11.7': 91,
        '11.8': 92,
        '11.9': 93,
        '12.0': 93,
        '12.1': 94,
        '12.2': 94,
        '12.3': 95,
        '12.4': 95,
        '12.5': 96,
        '12.6': 96,
        '12.7': 96,
        '12.8': 97,
        '12.9': 97,
        '13.0': 98,
        '13.1': 98,
        '13.2': 99,
        '13.3': 99,
        '13.4': 99,
        '13.5': 100
        }
     };
      function onPowerThrowChange(){
           var txtDeadliftRaw=document.getElementById("txtpt");
        var spnDlftScore=document.getElementById("spnPowerScore");
        //check level
        var divAcftLevel= document.getElementById("dvacftlevel").getAttribute("data-lv");
        var compScore=0;
        var minRscore;
        var isNOGO=false;
        //TODO
        //Check Validation
        //Check 6.5
        //Add zero after whole number
        //
        //Check for valid input
        var pval=txtDeadliftRaw.value;
         
        var patt = /[^0-9\.]/;
        var res = patt.test(pval);
        if(res)
        {
            spnDlftScore.value=0;
            return;
        }
        
        if( pval==0||pval=='undefined'|| pval==null)
        {
            spnDlftScore.value=0;
            return;
        }
        
        //Check if level exists
        if(divAcftLevel==0||divAcftLevel=='undefined'|| divAcftLevel==null){
       showerrorMessage("Oh! You forgot to select MOS");
        return ;
        }
        
        switch (divAcftLevel)
        {
            //Heavy
            case "1":
                minRscore=8.5;
             break;
             //Significant
              case "2":
                minRscore=6.5;
                //Moderate
             break;
              case "3":
                minRscore=4.6;
             break;
                
        };
        
         pval=parseFloat(pval);
        //check for min
         if (pval < 4.6|| pval < minRscore)
         {             //NO GO
             isNOGO=true;
         }
         //check/ for max
         if(pval >=13.5)
         {//100
             compScore=100;
            }
            
            if (isNOGO)
            {
                compScore=39;
            }
            
            if( /[\.]/.test(txtDeadliftRaw.value))
            {pval=txtDeadliftRaw.value;}
            else
            {pval=txtDeadliftRaw.value +".0";}
          //check for score
        if (pval in powerThrowScore.scoreSheet)
        {
         compScore= powerThrowScore.scoreSheet[pval]  ;
        }

        //update the total score
       
        spnDlftScore.value=compScore;
        updateAcftScore();
          
      }
      var releasePushScore={
        minMod:{10:60},
        minSig:{20:65},
        minHvy:{30:70},
        maxMod:{70:100},
        scoreSheet:{
                    10:60,
                    11:60,
                    12:61,
                    13:61,
                    14:62,
                    15:62,
                    16:63,
                    17:63,
                    18:64,
                    19:64,
                    20:65,
                    21:65,
                    22:66,
                    23:66,
                    24:67,
                    25:67,
                    26:68,
                    27:68,
                    28:69,
                    29:69,
                    30:70,
                    31:71,
                    32:72,
                    33:73,
                    34:74,
                    35:75,
                    36:76,
                    37:77,
                    38:78,
                    39:79,
                    40:80,
                    41:81,
                    42:82,
                    43:83,
                    44:84,
                    45:85,
                    46:86,
                    47:87,
                    48:88,
                    49:89,
                    50:90,
                    51:90,
                    52:91,
                    53:91,
                    54:92,
                    55:92,
                    56:93,
                    57:93,
                    58:94,
                    59:94,
                    60:95,
                    61:95,
                    62:96,
                    63:96,
                    64:97,
                    65:97,
                    66:98,
                    67:98,
                    68:99,
                    69:99,
                    70:100
                    }
      };
      function onPushChange(){
          var txtPusUp=document.getElementById("txtPusUp");
        var spnPUScore=document.getElementById("spnPUScore");
        //check level
        var divAcftLevel= document.getElementById("dvacftlevel").getAttribute("data-lv");
        var compScore=0;
        var minRscore;
        var isNOGO=false;
        //Check for valid input
        var pval=txtPusUp.value;
         
        var patt = /[^0-9]/;
        var res = patt.test(pval);
        if(res)
        {
            spnPUScore.value=0;
            return;
        }
        
        if( pval==0||pval=='undefined'|| pval==null||pval==0)
        {
            spnPUScore.value=0;
            return;
        }
        
        //Check if level exists
        if(divAcftLevel==0||divAcftLevel=='undefined'|| divAcftLevel==null){
        showerrorMessage("Oh! You forgot to select MOS");
        return ;
        }
        
        switch (divAcftLevel)
        {
            //Heavy
            case "1":
                minRscore=10;
             break;
             //Significant
              case "2":
                minRscore=20;
                //Moderate
             break;
              case "3":
                minRscore=30;
             break;
                
        };
      
        //check for min
         if (pval < 10|| pval < minRscore)
         {             //NO GO
             isNOGO=true;
         }
         //check/ for max
         if(pval >=70)
         {//100
             compScore=100;
            }
            
            if (isNOGO)
            {
                compScore=39;
            }
            
        //check for score
        if (pval in releasePushScore.scoreSheet)
        {
         compScore= releasePushScore.scoreSheet[pval]  ;
        }

        //update the total score
       
        spnPUScore.value=compScore;
        updateAcftScore();
      }
      
      var sprintCarryScore={
          minMod:{'3:35':60},
        minSig:{'2:45':65},
        minHvy:{'2:09':70},
        maxMod:{'1:40':100},
        scoreSheet:{

                '1:40':100,
                '1:41':98,
                '1:42':97,
                '1:43':96,
                '1:44':95,
                '1:45':94,
                '1:46':93,
                '1:47':92,
                '1:48':91,
                '1:49':90,
                '1:50':89,
                '1:51':88,
                '1:52':87,
                '1:53':86,
                '1:54':85,
                '1:55':84,
                '1:56':83,
                '1:57':82,
                '1:58':81,
                '1:59':80,
                '2:00':79,
                '2:01':78,
                '2:02':77,
                '2:03':76,
                '2:04':75,
                '2:05':74,
                '2:06':73,
                '2:07':72,
                '2:08':71,
                '2:09':70,
                '2:10':69,
                '2:11':69,
                '2:12':69,
                '2:13':69,
                '2:14':69,
                '2:15':69,
                '2:16':69,
                '2:17':68,
                '2:18':68,
                '2:19':68,
                '2:20':68,
                '2:21':68,
                '2:22':68,
                '2:23':68,
                '2:24':67,
                '2:25':67,
                '2:26':67,
                '2:27':67,
                '2:28':67,
                '2:29':67,
                '2:30':67,
                '2:31':66,
                '2:32':66,
                '2:33':66,
                '2:34':66,
                '2:35':66,
                '2:36':66,
                '2:37':66,
                '2:38':65,
                '2:39':65,
                '2:40':65,
                '2:41':65,
                '2:42':65,
                '2:43':65,
                '2:44':65,
                '2:45':65,
                '2:46':64,
                '2:47':64,
                '2:48':64,
                '2:49':64,
                '2:50':64,
                '2:51':64,
                '2:52':64,
                '2:53':64,
                '2:54':64,
                '2:55':64,
                '2:56':63,
                '2:57':63,
                '2:58':63,
                '2:59':63,
                '3:00':63,
                '3:01':63,
                '3:02':63,
                '3:03':63,
                '3:04':63,
                '3:05':63,
                '3:06':62,
                '3:07':62,
                '3:08':62,
                '3:09':62,
                '3:10':62,
                '3:11':62,
                '3:12':62,
                '3:13':62,
                '3:14':62,
                '3:15':62,
                '3:16':61,
                '3:17':61,
                '3:18':61,
                '3:19':61,
                '3:20':61,
                '3:21':61,
                '3:22':61,
                '3:23':61,
                '3:24':61,
                '3:25':61,
                '3:26':60,
                '3:27':60,
                '3:28':60,
                '3:29':60,
                '3:30':60,
                '3:31':60,
                '3:32':60,
                '3:33':60,
                '3:34':60,
                '3:35':60
                        }
      };
      function onSprintCarryChange(){
           var txtspDrCarMin=document.getElementById("txtspDrCarMin").value;
           var txtspDrCarSec=document.getElementById("txtspDrCarSec").value;
          if(txtspDrCarMin=="" && txtspDrCarSec=="")
           {return;}
        var spnSDragScore=document.getElementById("spnSDragScore");
        //check level
        var divAcftLevel= document.getElementById("dvacftlevel").getAttribute("data-lv");
        var compScore=0;
        var minRscore;
        var isNOGO=false;
        debugger;
        //Check for valid input
         var patt = /[^0-9]/;
        var res = patt.test(txtspDrCarMin);
        if(res)
        {
            spnSDragScore.value=0;
            return;
        }
        res = patt.test(txtspDrCarSec);
        if(res)
        {
            spnSDragScore.value=0;
            return;
        }
        
         //Check if level exists
        if(divAcftLevel==0||divAcftLevel=='undefined'|| divAcftLevel==null){
        showerrorMessage("Oh! You forgot to select MOS");
        return ;
        }
        
        if(txtspDrCarSec.length==0)
        {
            txtspDrCarSec="0";
        }
        
       if (txtspDrCarSec.length <2)
        {
           txtspDrCarSec= "0" + txtspDrCarSec;
        }
        
        if (txtspDrCarMin.length >1)
        {
           if(txtspDrCarMin.charAt(0)==0)
           {
               txtspDrCarMin= txtspDrCarMin.charAt(1);
           }
                        
        }
        
       
       var pval= txtspDrCarMin + ":" + txtspDrCarSec;
                
         
       var pvalDate= "00:" +( txtspDrCarMin.length==1 ? "0" + pval : pval);
        
        if( pval==0||pval=='undefined'|| pval==null||pval==0)
        {
            spnSDragScore.value=0;
            return;
        }
        
       
        switch (divAcftLevel)
        {
            //Heavy
            case "1":
                minRscore="00:02:09";
             break;
             //Significant
              case "2":
                minRscore="00:02:45";
                //Moderate
             break;
              case "3":
                minRscore="00:03:35";
             break;
                
        };
      
        //check for min
         if (pvalDate > "00:03:35" || pvalDate > minRscore)
         {             //NO GO
             isNOGO=true;
         }
         //check/ for max
         if(pvalDate <="00:01:40")
         {//100
             compScore=100;
            }
            
            if (isNOGO)
            {
                compScore=39;
            }
            
        //check for score
        if (pval in sprintCarryScore.scoreSheet)
        {
         compScore= sprintCarryScore.scoreSheet[pval]  ;
        }

        //update the total score
       
        spnSDragScore.value=compScore;
        updateAcftScore();
          
      }
      
      
      var legTuckScore={
           minMod:{1:60},
        minSig:{3:65},
        minHvy:{5:70},
        maxMod:{20:100},
        scoreSheet:{
                20: 100,
                19: 98,
                18: 96,
                17: 94,
                16: 92,
                15: 90,
                14: 88,
                13: 86,
                12: 84,
                11: 82,
                10: 80,
                9: 78,
                8: 76,
                7: 74,
                6: 72,
                5: 70,
                4: 67,
                3: 65,
                2: 63,
                1: 60
                }
      };
      function onlegTuckChange(){
          
            var txtLegTuck=document.getElementById("txtLegTuck");
        var spnLtScore=document.getElementById("spnLtScore");
        //check level
        var divAcftLevel= document.getElementById("dvacftlevel").getAttribute("data-lv");
        var compScore=0;
        var minRscore;
        var isNOGO=false;
        //Check for valid input
        var pval=txtLegTuck.value;
         
        var patt = /[^0-9]/;
        var res = patt.test(pval);
        if(res)
        {
            spnLtScore.value=0;
            return;
        }
        
        if( pval==0||pval=='undefined'|| pval==null||pval==0)
        {
            spnLtScore.value=0;
            return;
        }
        
        //Check if level exists
        if(divAcftLevel==0||divAcftLevel=='undefined'|| divAcftLevel==null){
        showerrorMessage("Level Not Set");
        return ;
        }
        
        switch (divAcftLevel)
        {
            //Heavy
            case "1":
                minRscore=5;
             break;
             //Significant
              case "2":
                minRscore=3;
                //Moderate
             break;
              case "3":
                minRscore=1;
             break;
                
        };
      
        //check for min
         if (pval < 1|| pval < minRscore)
         {             //NO GO
             isNOGO=true;
         }
         //check/ for max
         if(pval >=20)
         {//100
             compScore=100;
            }
            
            if (isNOGO)
            {
                compScore=39;
            }
            
        //check for score
        if (pval in legTuckScore.scoreSheet)
        {
         compScore= legTuckScore.scoreSheet[pval]  ;
        }

        //update the total score
       
        spnLtScore.value=compScore;
        updateAcftScore();
          
      }
      
      var mileScore={
           minMod:{'21:07':60},
        minSig:{'19:00':65},
        minHvy:{'18:00':70},
        maxMod:{'12:45':100},
        scoreSheet:{
            '12:45': 100,
        '12:46': 99,
        '12:47': 99,
        '12:48': 99,
        '12:49': 99,
        '12:50': 99,
        '12:51': 99,
        '12:52': 99,
        '12:53': 99,
        '12:54': 99,
        '12:55': 99,
        '12:56': 99,
        '12:57': 99,
        '12:58': 99,
        '12:59': 99,
        '13:00': 99,
        '13:01': 98,
        '13:02': 98,
        '13:03': 98,
        '13:04': 98,
        '13:05': 98,
        '13:06': 98,
        '13:07': 98,
        '13:08': 98,
        '13:09': 98,
        '13:10': 98,
        '13:11': 98,
        '13:12': 98,
        '13:13': 98,
        '13:14': 98,
        '13:15': 98,
        '13:16': 97,
        '13:17': 97,
        '13:18': 97,
        '13:19': 97,
        '13:20': 97,
        '13:21': 97,
        '13:22': 97,
        '13:23': 97,
        '13:24': 97,
        '13:25': 97,
        '13:26': 97,
        '13:27': 97,
        '13:28': 97,
        '13:29': 97,
        '13:30': 97,
        '13:31': 96,
        '13:32': 96,
        '13:33': 96,
        '13:34': 96,
        '13:35': 96,
        '13:36': 96,
        '13:37': 96,
        '13:38': 96,
        '13:39': 96,
        '13:40': 96,
        '13:41': 95,
        '13:42': 95,
        '13:43': 95,
        '13:44': 95,
        '13:45': 95,
        '13:46': 95,
        '13:47': 95,
        '13:48': 95,
        '13:49': 95,
        '13:50': 95,
        '13:51': 94,
        '13:52': 94,
        '13:53': 94,
        '13:54': 94,
        '13:55': 94,
        '13:56': 94,
        '13:57': 94,
        '13:58': 94,
        '13:59': 94,
        '14:00': 94,
        '14:01': 93,
        '14:02': 93,
        '14:03': 93,
        '14:04': 93,
        '14:05': 93,
        '14:06': 93,
        '14:07': 93,
        '14:08': 93,
        '14:09': 93,
        '14:10': 93,
        '14:11': 92,
        '14:12': 92,
        '14:13': 92,
        '14:14': 92,
        '14:15': 92,
        '14:16': 92,
        '14:17': 92,
        '14:18': 92,
        '14:19': 92,
        '14:20': 92,
        '14:21': 91,
        '14:22': 91,
        '14:23': 91,
        '14:24': 91,
        '14:25': 91,
        '14:26': 91,
        '14:27': 91,
        '14:28': 91,
        '14:29': 91,
        '14:30': 91,
        '14:31': 90,
        '14:32': 90,
        '14:33': 90,
        '14:34': 90,
        '14:35': 90,
        '14:36': 90,
        '14:37': 90,
        '14:38': 90,
        '14:39': 90,
        '14:40': 90,
        '14:41': 89,
        '14:42': 89,
        '14:43': 89,
        '14:44': 89,
        '14:45': 89,
        '14:46': 89,
        '14:47': 89,
        '14:48': 89,
        '14:49': 89,
        '14:50': 89,
        '14:51': 88,
        '14:52': 88,
        '14:53': 88,
        '14:54': 88,
        '14:55': 88,
        '14:56': 88,
        '14:57': 88,
        '14:58': 88,
        '14:59': 88,
        '15:00': 88,
        '15:01': 87,
        '15:02': 87,
        '15:03': 87,
        '15:04': 87,
        '15:05': 87,
        '15:06': 87,
        '15:07': 87,
        '15:08': 87,
        '15:09': 87,
        '15:10': 87,
        '15:11': 86,
        '15:12': 86,
        '15:13': 86,
        '15:14': 86,
        '15:15': 86,
        '15:16': 86,
        '15:17': 86,
        '15:18': 86,
        '15:19': 86,
        '15:20': 86,
        '15:21': 85,
        '15:22': 85,
        '15:23': 85,
        '15:24': 85,
        '15:25': 85,
        '15:26': 85,
        '15:27': 85,
        '15:28': 85,
        '15:29': 85,
        '15:30': 85,
        '15:31': 84,
        '15:32': 84,
        '15:33': 84,
        '15:34': 84,
        '15:35': 84,
        '15:36': 84,
        '15:37': 84,
        '15:38': 84,
        '15:39': 84,
        '15:40': 84,
        '15:41': 83,
        '15:42': 83,
        '15:43': 83,
        '15:44': 83,
        '15:45': 83,
        '15:46': 83,
        '15:47': 83,
        '15:48': 83,
        '15:49': 83,
        '15:50': 83,
        '15:51': 82,
        '15:52': 82,
        '15:53': 82,
        '15:54': 82,
        '15:55': 82,
        '15:56': 82,
        '15:57': 82,
        '15:58': 82,
        '15:59': 82,
        '16:00': 82,
        '16:01': 81,
        '16:02': 81,
        '16:03': 81,
        '16:04': 81,
        '16:05': 81,
        '16:06': 81,
        '16:07': 81,
        '16:08': 81,
        '16:09': 81,
        '16:10': 81,
        '16:11': 80,
        '16:12': 80,
        '16:13': 80,
        '16:14': 80,
        '16:15': 80,
        '16:16': 80,
        '16:17': 80,
        '16:18': 80,
        '16:19': 80,
        '16:20': 80,
        '16:21': 79,
        '16:22': 79,
        '16:23': 79,
        '16:24': 79,
        '16:25': 79,
        '16:26': 79,
        '16:27': 79,
        '16:28': 79,
        '16:29': 79,
        '16:30': 79,
        '16:31': 78,
        '16:32': 78,
        '16:33': 78,
        '16:34': 78,
        '16:35': 78,
        '16:36': 78,
        '16:37': 78,
        '16:38': 78,
        '16:39': 78,
        '16:40': 78,
        '16:41': 77,
        '16:42': 77,
        '16:43': 77,
        '16:44': 77,
        '16:45': 77,
        '16:46': 77,
        '16:47': 77,
        '16:48': 77,
        '16:49': 77,
        '16:50': 77,
        '16:51': 76,
        '16:52': 76,
        '16:53': 76,
        '16:54': 76,
        '16:55': 76,
        '16:56': 76,
        '16:57': 76,
        '16:58': 76,
        '16:59': 76,
        '17:00': 76,
        '17:01': 75,
        '17:02': 75,
        '17:03': 75,
        '17:04': 75,
        '17:05': 75,
        '17:06': 75,
        '17:07': 75,
        '17:08': 75,
        '17:09': 75,
        '17:10': 75,
        '17:11': 74,
        '17:12': 74,
        '17:13': 74,
        '17:14': 74,
        '17:15': 74,
        '17:16': 74,
        '17:17': 74,
        '17:18': 74,
        '17:19': 74,
        '17:20': 74,
        '17:21': 73,
        '17:22': 73,
        '17:23': 73,
        '17:24': 73,
        '17:25': 73,
        '17:26': 73,
        '17:27': 73,
        '17:28': 73,
        '17:29': 73,
        '17:30': 73,
        '17:31': 72,
        '17:32': 72,
        '17:33': 72,
        '17:34': 72,
        '17:35': 72,
        '17:36': 72,
        '17:37': 72,
        '17:38': 72,
        '17:39': 72,
        '17:40': 72,
        '17:41': 71,
        '17:42': 71,
        '17:43': 71,
        '17:44': 71,
        '17:45': 71,
        '17:46': 71,
        '17:47': 71,
        '17:48': 71,
        '17:49': 71,
        '17:50': 71,
        '17:51': 70,
        '17:52': 70,
        '17:53': 70,
        '17:54': 70,
        '17:55': 70,
        '17:56': 70,
        '17:57': 70,
        '17:58': 70,
        '17:59': 70,
        '18:00': 70,
        '18:01': 69,
        '18:02': 69,
        '18:03': 69,
        '18:04': 69,
        '18:05': 69,
        '18:06': 69,
        '18:07': 69,
        '18:08': 69,
        '18:09': 69,
        '18:10': 69,
        '18:11': 68,
        '18:12': 68,
        '18:13': 68,
        '18:14': 68,
        '18:15': 68,
        '18:16': 68,
        '18:17': 68,
        '18:18': 68,
        '18:19': 68,
        '18:20': 68,
        '18:21': 67,
        '18:22': 67,
        '18:23': 67,
        '18:24': 67,
        '18:25': 67,
        '18:26': 67,
        '18:27': 67,
        '18:28': 67,
        '18:29': 67,
        '18:30': 67,
        '18:31': 67,
        '18:32': 67,
        '18:33': 67,
        '18:34': 67,
        '18:35': 67,
        '18:36': 66,
        '18:37': 66,
        '18:38': 66,
        '18:39': 66,
        '18:40': 66,
        '18:41': 66,
        '18:42': 66,
        '18:43': 66,
        '18:44': 66,
        '18:45': 66,
        '18:46': 66,
        '18:47': 66,
        '18:48': 66,
        '18:49': 66,
        '18:50': 66,
        '18:51': 65,
        '18:52': 65,
        '18:53': 65,
        '18:54': 65,
        '18:55': 65,
        '18:56': 65,
        '18:57': 65,
        '18:58': 65,
        '18:59': 65,
        '19:00': 65,
        '19:01': 64,
        '19:02': 64,
        '19:03': 64,
        '19:04': 64,
        '19:05': 64,
        '19:06': 64,
        '19:07': 64,
        '19:08': 64,
        '19:09': 64,
        '19:10': 64,
        '19:11': 64,
        '19:12': 64,
        '19:13': 64,
        '19:14': 64,
        '19:15': 64,
        '19:16': 64,
        '19:17': 64,
        '19:18': 64,
        '19:19': 64,
        '19:20': 64,
        '19:21': 64,
        '19:22': 64,
        '19:23': 64,
        '19:24': 64,
        '19:25': 64,
        '19:26': 64,
        '19:27': 64,
        '19:28': 64,
        '19:29': 64,
        '19:30': 64,
        '19:31': 64,
        '19:32': 64,
        '19:33': 64,
        '19:34': 64,
        '19:35': 64,
        '19:36': 64,
        '19:37': 64,
        '19:38': 64,
        '19:39': 64,
        '19:40': 64,
        '19:41': 64,
        '19:42': 64,
        '19:43': 64,
        '19:44': 64,
        '19:45': 64,
        '19:46': 64,
        '19:47': 64,
        '19:48': 64,
        '19:49': 64,
        '19:50': 64,
        '19:51': 64,
        '19:52': 64,
        '19:53': 64,
        '19:54': 64,
        '19:55': 64,
        '19:56': 64,
        '19:57': 64,
        '19:58': 64,
        '19:59': 64,
        '20:00': 64,
        '20:01': 64,
        '20:02': 64,
        '20:03': 64,
        '20:04': 64,
        '20:05': 64,
        '20:06': 64,
        '20:07': 64,
        '20:08': 64,
        '20:09': 64,
        '20:10': 64,
        '20:11': 63,
        '20:12': 63,
        '20:13': 63,
        '20:14': 63,
        '20:15': 63,
        '20:16': 63,
        '20:17': 63,
        '20:18': 63,
        '20:19': 63,
        '20:20': 63,
        '20:21': 62,
        '20:22': 62,
        '20:23': 62,
        '20:24': 62,
        '20:25': 62,
        '20:26': 62,
        '20:27': 62,
        '20:28': 62,
        '20:29': 62,
        '20:30': 62,
        '20:31': 61,
        '20:32': 61,
        '20:33': 61,
        '20:34': 61,
        '20:35': 61,
        '20:36': 61,
        '20:37': 61,
        '20:38': 61,
        '20:39': 61,
        '20:40': 61,
        '20:41': 61,
        '20:42': 61,
        '20:43': 61,
        '20:44': 61,
        '20:45': 61,
        '20:46': 60,
        '20:47': 60,
        '20:48': 60,
        '20:49': 60,
        '20:50': 60,
        '20:51': 60,
        '20:52': 60,
        '20:53': 60,
        '20:54': 60,
        '20:55': 60,
        '20:56': 60,
        '20:57': 60,
        '20:58': 60,
        '20:59': 60,
        '21:00': 60,
        '21:01': 60,
        '21:02': 60,
        '21:03': 60,
        '21:04': 60,
        '21:05': 60,
        '21:06': 60,
        '21:07': 60
        }
      };
      function onMileChange(){
          var txt2Mmin=document.getElementById("txt2Mmin").value;
           var txt2Msec=document.getElementById("txt2Msec").value;
           
           if(txt2Mmin=="" && txt2Msec=="")
           {return;}
           
        var spnRunScore=document.getElementById("spnRunScore");
        //check level
        var divAcftLevel= document.getElementById("dvacftlevel").getAttribute("data-lv");
        var compScore=0;
        var minRscore;
        var isNOGO=false;
        debugger;
        //Check for valid input
         var patt = /[^0-9]/;
        var res = patt.test(txt2Mmin);
        if(res)
        {
            spnRunScore.value=0;
            return;
        }
        res = patt.test(txt2Msec);
        if(res)
        {
            spnRunScore.value=0;
            return;
        }
        
         //Check if level exists
        if(divAcftLevel==0||divAcftLevel=='undefined'|| divAcftLevel==null){
        showerrorMessage("Oh! You forgot to select MOS");
        return ;
        }
        
        if(txt2Msec.length==0)
        {
            txt2Msec="0";
        }
        
       if (txt2Msec.length <2)
        {
           txt2Msec= "0" + txt2Msec;
        }
        
        if (txt2Mmin.length >1)
        {
           if(txt2Mmin.charAt(0)==0)
           {
               txt2Mmin= txt2Mmin.charAt(1);
           }
                        
        }
        
       
       var pval= txt2Mmin + ":" + txt2Msec;
                
         
       var pvalDate= "00:" +( txt2Mmin.length==1 ? "0" + pval : pval);
        
        if( pval==0||pval=='undefined'|| pval==null||pval==0)
        {
            spnRunScore.value=0;
            return;
        }
        
       
        switch (divAcftLevel)
        {
            //Heavy
            case "1":
                minRscore="00:18:00";
             break;
             //Significant
              case "2":
                minRscore="00:19:00";
                //Moderate
             break;
              case "3":
                minRscore="00:21:07";
             break;
                
        };
      
        //check for min
         if (pvalDate > "00:21:07" || pvalDate > minRscore)
         {             //NO GO
             isNOGO=true;
         }
         //check/ for max
         if(pvalDate <="00:12:45")
         {//100
             compScore=100;
            }
            
            if (isNOGO)
            {
                compScore=39;
            }
            
        //check for score
        if (pval in mileScore.scoreSheet)
        {
         compScore= mileScore.scoreSheet[pval]  ;
        }

        //update the total score
       
        spnRunScore.value=compScore;
        updateAcftScore();
      }
      
    function updateAcftScore(){
        //data-sc only event score text
        var isNOGO=false;
        var spnNOGO=document.getElementById("spnNOGO");    
        var spnacftScore=document.getElementById("spnacftScore");
        var spnDlftScore=document.getElementById("spnDlftScore");
        var spnRunScore=document.getElementById("spnRunScore");
         var spnLtScore=document.getElementById("spnLtScore");
         var spnSDragScore=document.getElementById("spnSDragScore");
         var spnPUScore=document.getElementById("spnPUScore");
         var spnPowerScore=document.getElementById("spnPowerScore");
        var divAcftLevel= document.getElementById("dvacftlevel").getAttribute("data-lv");
          var minRscore;
          
        switch (divAcftLevel)
        {
            //Heavy
            case "1":
                minRscore=70;
             break;
             //Significant
              case "2":
                minRscore=65;
                //Moderate
             break;
              case "3":
                minRscore=60;
             break;
                
        };
        
         var eventScores=document.querySelectorAll("input[data-sc='1']");
         
         var finalScore=0;
         var eventScore=0;
         for(var i=0 ;i <eventScores.length;i++){
             if(eventScores[i].value.length>0){
                 
                 eventScore=parseInt(eventScores[i].value,10);
                //NO GO 
                if(eventScore<minRscore)
                 {
                     eventScores[i].setAttribute("style","background-color:red;");
                     isNOGO=true;
                 }
                 else
                 {
                      eventScores[i].setAttribute("style","background-color:white;");
                 }
                 
                finalScore+= eventScore;
             }
         }
        
        
        //Check NO GO & format
         if(isNOGO){
            spnNOGO.innerHTML="NO GO";
            spnNOGO.style.display="block";
            
        }
        else
        {
           spnNOGO.style.display="none";
        }
        
        
        //Final Score
        spnacftScore.value=finalScore;
        
        
        
    }
 
//disappear alert
var closeAlert = document.getElementsByClassName("alert");
closeAlert[0].style.display = "none";
function showerrorMessage(msg){
    
        closeAlert[0].style.display = "block";
        errdisplay.innerHTML=msg;
    }
    function disappearerrorMessage(){
    
        closeAlert[0].style.display = "none";
        
    }
function alertclose(e){
       var div = e.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }

        
function resetAll(){
    
    var inputall=document.querySelectorAll("input[type='text']");

    
    
    for( var i=0;i<inputall.length;i++)
    {
       inputall[i].value="";
    }
    disappearerrorMessage();
     var spnNOGO=document.getElementById("spnNOGO");    
    spnNOGO.style.display = "none";
    
     var eventScores=document.querySelectorAll("input[data-sc='1']");
         
         for(var i=0 ;i <eventScores.length;i++){
            
                      eventScores[i].setAttribute("style","background-color:white;");

         }
         
        
           document.getElementById("spnMOSdesc").innerHTML="";
           var divAcftLevel= document.getElementById("dvacftlevel");
           divAcftLevel.setAttribute("data-lv","");
           divAcftLevel.className="acftlevel";
           divAcftLevel.innerHTML="";
}


    