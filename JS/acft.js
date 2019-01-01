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
    
    
    function onDeadliftchange(pval){
        var spnDlftScore=document.getElementById("spnDlftScore");
        //check level
        
        var divAcftLevel= document.getElementById("dvacftlevel").getAttribute("data-lv");
        var compScore=0;
        var isNOGO=false;
        //Check if level exists
        if(divAcftLevel==0||divAcftLevel=='undefined'|| divAcftLevel==null){
        showerrorMessage("Level Not Set");
        return ;
        }
        
        
        var minRscore;
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
         {
             //NO GO
             isNOGO=true;
             
         }
         //check/ for max
         if(pval >=340)
         {
        //100
         compScore=100;
        
            }
        //check for score
        if (pval in deadliftscore.scoreSheet)
        {
         compScore= deadliftscore.scoreSheet[pval]  ;
        }
        
        //update the total score
        if(isNOGO){
            spnNOGO.innerHTML="NO GO";
            spnNOGO.style.display="block";
            compScore=39;
            
        }
        
        spnDlftScore.value=compScore;
        updateAcftScore();
            
            
       
        //spnacftScore+=0;
    }
    function updateAcftScore(){
        //data-sc only event score text
        var spnNOGO=document.getElementById("spnNOGO");    
        var spnacftScore=document.getElementById("spnacftScore");
        var spnDlftScore=document.getElementById("spnDlftScore");
        var spnRunScore=document.getElementById("spnRunScore");
         var spnLtScore=document.getElementById("spnLtScore");
         var spnSDragScore=document.getElementById("spnSDragScore");
         var spnPUScore=document.getElementById("spnPUScore");
         var spnPowerScore=document.getElementById("spnPowerScore");
        
         var eventScores=document.querySelectorAll("input[data-sc='1']");
         
         var finalScore=0;
         
         for(var i=0 ;i <eventScores.length;i++){
             if(eventScores[i].value.length>0){
                 
                finalScore+= parseInt(eventScores[i].value,10);
             }
         }
         
        spnacftScore.value=finalScore;
        
        
    }
    function updateEventScoreCSS(){
        /*
        switch(){
            case 1:
                break;
            case 1:
                break;
                case 1:
                break;
                case 1:
                break;
                case 1:
                break;
                case 1:
                break;
        };*/
    }
//disappear alert
var closeAlert = document.getElementsByClassName("alert");
closeAlert[0].style.display = "none";
function showerrorMessage(msg){
    
        closeAlert[0].style.display = "block";
        errdisplay.innerHTML=msg;
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
    //
}


    