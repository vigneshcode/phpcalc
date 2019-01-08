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
        '11A': '1Infantry',
        '12A': '1Engineer',
        '13A': '1Field Artillery, General',
        '14A': '2Air Defense Artillery Officer',
        '15A': '1Aviation, General',
        '15B': '1Aviation Combined Arms Operations',
        '15C': '1Aviation All-Source Intelligence',
        '15D': '1Aviation Maintenance Officer',
        '17A': '3Cyber warfare',
        '17B': '3Cyber Electromagnetic Operations Officer',
        '18A': '1Special Forces',
        '19A': '1Armor',
        '25A': '2Signal, General',
        '25G': '2Network Integration',
        '25Z': '3Network Integration',
        '27A': '3Judge Advocate General',
        '27B': '3Military Judge',
        '31A': '2Military Police',
        '35D': '3All Source Intelligence',
        '35E': '3Counter Intelligence (CI)',
        '35F': '3Human Intelligence (HUMINT)',
        '35G': '3Signals Intelligence/Electronic Warfare(SIGINT/EW)',
        '36A': '3Financial Manager',
        '37A': '3Psychological Operations',
        '37X': '3Psychological Operations, Designated',
        '38A': '3Civil Affairs (AA & USAR)',
        '38G': '3Military Government(USAR Only)',
        '38X': '3Civil Affairs, Designated',
        '42B': '2Human Resources Officer',
        '42C': '3Army Music',
        '42H': '2Senior Human Resources Officer',
        '56A': '3Command & Unit Chaplain',
        '56D': '3Clinical Pastoral Educator',
        '56X': '3Chaplain Candidate',
        '60A': '3Operational Medicine',
        '60B': '3Nuclear Medicine Officer',
        '60C': '3Preventive Medicine Officer',
        '60D': '3Occupational Medicine Officer',
        '60F': '3Pulmonary Disease/Critical Care Officer',
        '60G': '3Gastroenterologist',
        '60H': '3Cardiologist',
        '60J': '3Obstetrician & Gynecologist',
        '60K': '3Urologist',
        '60L': '3Dermatologist',
        '60M': '3Allergist, Clinical Immunologist',
        '60N': '3Anesthesiologist',
        '60P': '3Pediatrician',
        '60Q': '3Pediatric Sub-Specialist',
        '60R': '3Child Neurologist',
        '60S': '3Ophthalmologist',
        '60T': '3Otolaryngologist',
        '60U': '3Child Psychiatrist',
        '60V': '3Neurologist',
        '60W': '3Psychiatrist',
        '61A': '3Nephrologist',
        '61B': '3Medical Oncologist/Hematologist',
        '61C': '3Endocrinologist',
        '61D': '3Rheumatologist',
        '61E': '3Clinical Pharmacologist',
        '61F': '3Internist',
        '61G': '3Infectious Disease Officer',
        '61H': '3Family Medicine',
        '61J': '3General Surgeon',
        '61K': '3Thoracic Surgeon',
        '61L': '3Plastic Surgeon',
        '61M': '3Orthopedic Surgeon',
        '61N': '3Flight Surgeon',
        '61P': '3Physiatrist',
        '61Q': '3Radiation Oncologist',
        '61R': '3Diagnostic Radiologist',
        '61U': '3Pathologist',
        '61W': '3Peripheral Vascular Surgeon',
        '61Z': '3Neurosurgeon',
        '62A': '3Emergency Physician',
        '62B': '3Field Surgeon',
        '63A': '3General Dentist',
        '63B': '3Comprehensive Dentist',
        '63D': '3Periodontist',
        '63E': '3Endodontist',
        '63F': '3Prosthodonist',
        '63H': '3Public Health Dentist',
        '63K': '3Pediatric Dentist',
        '63M': '3Orthodontist',
        '63N': '3Oral & Maxillofacial Surgeon',
        '63P': '3Oral Pathologist',
        '63R': '3Executive Dentist',
        '64A': '3Field Veterinary Service',
        '64B': '3Veterinary Preventive Medicine',
        '64C': '3Veterinary Laboratory Animal Medicine',
        '64D': '3Veterinary Pathology',
        '64E': '3Veterinary Biomedical Scientist',
        '64F': '3Veterinary Clinical Medicine',
        '64Z': '3Senior Veterinarian (Immaterial)',
        '65A': '3Occupational Therapy',
        '65B': '3Physical Therapy',
        '65C': '3Dietitian',
        '65D': '3Physician Assistant',
        '65X': '3Specialist Allied Operations',
        '66B': '3Army Public Health Nurse',
        '66C': '3Psychiatric/Behavioral Health Nurse',
        '66E': '3Perioperative Nurse',
        '66F': '3Nurse Anesthetist',
        '66G': '3Obstetrics & Gynecology',
        '66H': '3Medical-Surgical Nurse',
        '66N': '3Generalist Nurse',
        '66P': '3Family Nurse Practitioner',
        '66R': '3Psychiatric/Behavioral Health Nurse Practitioner',
        '66S': '3Critical Care Nursing',
        '66T': '3Emergency Nursing',
        '66W': '3Certified Nurse Midwife',
        '67A': '3Health Services',
        '67B': '3Laboratory Sciences',
        '67C': '3Preventive Medicine Sciences',
        '67D': '3Behavioral Sciences',
        '67E': '3Pharmacy',
        '67F': '3Optometry',
        '67G': '3Podiatry',
        '67J': '3Aeromedical Evacuation',
        '74A': '3Chemical, Biological, Radiological & Nuclear (CBRN)',
        '88A': '1Transportation, General',
        '89E': '1Explosive Ordnance Disposal',
        '90A': '3Logistics',
        '91A': '3Maintenance & Munitions Materiel Officer',
        '92A': '1Quartermaster, General',
        'FA26': '3Information Network Engineering',
        'FA29': '3Electronic Warfare',
        'FA30': '3Information Operations',
        'FA34': '3Strategic Intelligence',
        'FA40': '3Space Operations',
        'FA46': '3Public Affairs',
        'FA47': '3Academy Professor',
        'FA48': '3Foreign Area Officer',
        'FA49': '3Operations Research/Systems Analysis',
        'FA50': '3Force Management',
        'FA51': '3Army Acquisition Corps',
        'FA57': '3Simulation Operations',
        'FA59': '3Strategic Plans and Policy'
},

 warMOS:{
    //heavy-1,significant-2,moderate-3
   '120A':'3Construction Engineering Technician',
'125D':'3Geospatial Engineering Technician',
'131A':'3Field Artillery Targeting Technician',
'140A':'3Command & Control Systems Integrator',
'140E':'3Air & Missile Defense(AMD) Systems Tactician/Technician',
'140X':'3Air Defense Artillery (ADA) Immaterial',
'150A':'3Air Traffic & Air Space Management Technician',
'150U':'3Unmanned Aircraft Systems Operations Technician',
'151A':'3Aviation Maintenance Technician(Nonrated)',
'152B':'1OH-58A/C Scout Pilot(RC)',
'152C':'1OH-6 Pilot',
'152D':'1OH-58D Pilot',
'152E':'1AH-64E Pilot',
'152F':'1AH-64A Attack Pilot',
'152H':'1AH-64D Attack Pilot',
'153A':'1Rotary Wing Aviator (Aircraft Nonspecific)',
'153B':'3UH-1 Pilot (RC)',
'153D':'1UH-60 Pilot',
'153E':'1MH-60 Pilot',
'153L':'1UH-72A Pilot',
'153M':'1UH-60M Pilot',
'154C':'1CH-47D Pilot',
'154E':'1MH-47 Pilot',
'154F':'1CH-47F Pilot',
'155A':'3Fixed Wing Aviator (Aircraft Nonspecific)',
'155E':'3C-12 Pilot',
'155F':'3Jet Aircraft Pilot',
'155G':'30-5A/EO-5B/RC-7 Pilot',
'170A':'3Cyber Operations Technician',
'170B':'3Electronic Warfare Technician (Effective 201810)',
'180A':'3Special Forces Warrant Officer',
'255A':'3Information Services Technician',
'255N':'3Network Management Technician',
'255S':'3Information Protection Technician',
'255Z':'3Senior Network Operations Technician',
'270A':'3Legal Administrator',
'290A':'3Electronic Warfare Technician (Rescind 201810)',
'311A':'3Cid Special Agent',
'350F':'3All Source Intelligence Technician',
'350G':'3Geospatial Intelligence Imagery Technician',
'351L':'3Counterintelligence Technician',
'351M':'3Human Intelligence Collection Technician',
'351Y':'3Area Intelligence Technician',
'351Z':'3Attaché Technician',
'352N':'3Signals Intelligence Analysis Technician',
'352S':'3Signals Collection Technician',
'353T':'3Intelligence Systems Integration & Maintenance Technician',
'420A':'2Human Resources Technician',
'420C':'3Bandmaster',
'640A':'3Food Safety Officer',
'670A':'3Health Services Maintenance Technician',
'740A':'3Chemical, Biological, Radiological & Nuclear (CBRN) Warrant Officer',
'880A':'3Marine Deck Officer',
'881A':'3Marine Engineering Officer',
'882A':'3Mobility Officer',
'890A':'3Ammunition Technician',
'913A':'3Armament System Maintenance Warrant Officer',
'914A':'3Allied Trades Warrant Officer',
'915A':'3Automotive Maintenance Warrant Officer',
'915E':'3Senior Automotive Maintenance Warrant Officer/Senior Ordnance Logistics Warrant',
'919A':'3Engineer Equipment Maintenance Warrant Officer',
'920A':'3Property Accounting Technician',
'920B':'3Supply System Technician',
'921A':'3Airdrop Systems Technician',
'922A':'3Food Service Technician',
'923A':'3Petroleum Technician',
'948B':'3Electronic Systems Maintenance Warrant Officer',
'948D':'3Electronic Missile Systems Maintenance Warrant Officer',
'948E':'3Senior Electronics Maintenance Warrant Officer'
},
 enlistedMOS:{
    //heavy-1,significant-2,moderate-3
    
        '00Z': '3Sergeant Major Nominative',
        '09B': '3Trainee Unassigned',
        '09C': '3Trainee Language',
        '09D': '3College Trainee',
        '09E': '3Trainee Language, Fort Allen PR',
        '09J': '3GED Completion Program',
        '09L': '3Interpreter/Translator',
        '09M': '3March 2 Success',
        '09N': '3Nurse Corps Candidate',
        '09Q': '3Army Legal Immigrant Healthcare Professional Officer Candidate',
        '09R': '3Simultaneous Member Program',
        '09S': '3Commissioned Officer Candidate',
        '09T': '3College Student Army National Guard Officer Program',
        '09U': '3Unqualified In Authorized Army MOS',
        '09W': '3Warrant Officer Candidate',
        '11B': '1Infantryman',
        '11C': '1Indirect Fire Infantryman',
        '11X': '1Infantry Recruit',
        '11Z': '3Infantry Senior Sergeant',
        '12A': '3Engineer Senior Sergeant',
        '12B': '1Combat Engineer',
        '12C': '1Bridge Crewmember',
        '12D': '1Diver',
        '12G': '2Quarrying Specialist(RC)',
        '12H': '3Construction Engineering Supervisor',
        '12K': '3Plumber',
        '12M': '2Firefighter',
        '12N': '3Horizontal Construction Engineer',
        '12P': '1Prime Power Production Specialist',
        '12Q': '3Power Line Distribution Specialist(RC)',
        '12R': '3Interior Electrician',
        '12T': '3Technical Engineer',
        '12V': '2Concrete & Asphalt Equipment Operator (RC)',
        '12W': '3Carpentry & Masonry Specialist',
        '12X': '3General Engineering Supervisor',
        '12Y': '3Geospatial Engineer',
        '12Z': '3Combat Engineering Senior Sergeant',
        '13B': '1Cannon Crewmember',
        '13D': '3Field Artillery Automated Tactical Data System Specialist',
        '13F': '1Joint Fire Support Specialist',
        '13J': '3Fire Control Specialist',
        '13M': '3Multiple Launch Rocket System(MLRS)/High Mobility Artillery Rocket System(HIMARS)',
        '13P': '3Multiple Launch Rocket System(MLRS) Operational Fire Direction Specialist',
        '13R': '3Field Artillery Firefinder Radar Operator',
        '13T': '3Field Artillery Surveyor/Meteorological Crewmember',
        '13X': '3Field Artillery Computer Systems Specialist',
        '13Z': '3Field Artillery Senior Sergeant',
        '14E': '3Patriot Fire Control Enhanced Operator/Maintainer',
        '14G': '3Air Defense Battle Management System Operator',
        '14H': '3Air Defense Enhanced Early Warning Operator',
        '14P': '2Air & Missile Defense (AMD) Crewmember',
        '14S': '2Avenger Crewmember',
        '14T': '3Patriot Launching Station Enhanced Operator/Maintainer',
        '14X': '3Space and Missile Defense Operations',
        '14Z': '3Air Defense Artillery Senior Sergeant',
        '15B': '2Aircraft Powerplant Repairer',
        '15D': '2Aircraft Powertrain Repairer',
        '15E': '2Unmanned Aircraft Systems Repairer',
        '15F': '2Aircraft Electrician',
        '15G': '3Aircraft Structural Repairer',
        '15H': '3Aircraft Pneudraulics Repairer',
        '15J': '2OH-58D Armament/Electrical/Avionics Systems Repairer',
        '15K': '3Aircraft Components Repair Supervisor',
        '15N': '2Avionic Mechanic',
        '15P': '3Aviation Operations Specialist',
        '15Q': '3Air Traffic Control Operator',
        '15R': '2AH-64 Attack Helicopter Repairer',
        '15S': '2OH-58D Helicopter Repairer',
        '15T': '2UH-60 Helicopter Repairer',
        '15U': '2CH-47 Helicopter Repairer',
        '35G': '3Geospatial Intelligence Imagery Analyst',
        '35L': '3Counter Intelligence Agent',
        '35M': '3Human Intelligence Collector',
        '35N': '3Signals Intelligence Analyst',
        '35P': '3Cryptologic Linguist',
        '35Q': '3Cryptologic Network Warfare Specialist',
        '35S': '3Signals Collector/Analyst',
        '35T': '3Military Intelligence Systems Maintainer/Integrator',
        '35V': '3Signals Intelligence(SIGINT) Senior Sergeant/SIGINT Chief',
        '35X': '3Intelligence Senior Sergeant/Chief Intelligence Sergeant',
        '35Y': '3Chief Counter Intelligence/Human Intelligence Sergeant',
        '35Z': '3Intelligence Sergeant Major',
        '36B': '3Financial Management Technician',
        '37F': '3Psychological Operations Specialist',
        '38B': '3Civil Affairs Specialist',
        '42A': '2Human Resources Specialist',
        '42R': '2Musician',
        '42S': '2Special Band Musician',
        '46Q': '3Public Affairs Specialist',
        '46R': '3Public Affairs Broadcast Specialist',
        '46S': '3Public Affairs Mass Communications Specialist',
        '46Z': '3Chief Public Affairs NCO',
        '51C': '3Acquisition, Logistics & Technology (AI&T) Contracting NCO',
        '56M': '3Religious Affairs Specialist',
        '68A': '3Biomedical Equipment Specialist',
        '68B': '3Orthopedic Specialist',
        '68C': '3Practical Nursing Specialist',
        '68D': '3Operating Room Specialist',
        '68E': '3Dental Specialist',
        '68F': '3Physical Therapy Specialist',
        '68G': '3Patient Administration Specialist',
        '68H': '3Optical Laboratory Specialist',
        '68J': '3Medical Logistics Specialist',
        '68K': '3Medical Laboratory Specialist',
        '68L': '3Occupational Therapy Specialist',
        '68M': '3Nutrition Care Specialist',
        '68N': '3Cardiovascular Specialist',
        '68P': '3Radiology Specialist',
        '68Q': '3Pharmacy Specialist',
        '68R': '3Veterinary Food Inspection Specialist',
        '68S': '3Preventive Medicine Specialist',
        '68T': '3Animal Care Specialist',
        '68U': '3Ear, Nose & Throat (ENT) Specialist',
        '68V': '3Respiratory Specialist',
        '68W': '2Health Care Specialist',
        '68X': '3Behavioral Health Specialist',
        '68Y': '3Eye Specialist',
        '68Z': '3Chief Medical NCO',
        '74D': '3Chemical, Biological, Radiological & Nuclear (CBRN) Specialist',
        '79R': '3Recruiter',
        '79S': '3Career Counselor',
        '79T': '3Recruiting & retention NCO (Army National Guard of the United States)',
        '79V': '3Retention & Transition NCO, USAR',
        '88H': '1Cargo Specialist',
        '88K': '1Watercraft Operator',
        '88L': '2Watercraft Engineer',
        '88M': '1Motor Transport Operator',
        '88N': '2Transportation Management Coordinator',
        '88U': '3Railway Specialist (RC)',
        '88Z': '3Transportation Senior Sergeant',
        '89A': '3Ammunition Stock Control & Accounting Specialist',
        '89B': '3Ammunition Specialist',
        '89D': '1Explosive Ordnance Disposal Specialist',
        '91A': '3M1 Abrams Tank System Maintainer',
        '91B': '3Wheeled Vehicle Mechanic',
        '91C': '3Utilities Equipment Repairer',
        '91D': '3Tactical Power Generation Specialist',
        '91E': '3Allied Trades Specialist',
        '91F': '3Small Arms/Towed Artillery Repairer',
        '91G': '3Fire Control Repairer',
        '91H': '3Track Vehicle Repairer',
        '91J': '3Quartermaster & Chemical Equipment Repairer',
        '91L': '3Construction Equipment Repairer',
        '91M': '3Bradley Fighting Vehicle System Maintainer',
        '91P': '3Artillery Mechanic',
        '91S': '3Stryker Systems Maintainer',
        '91X': '3Maintenance Supervisor',
        '91Z': '3Mechanical Maintenance Supervisor',
        '92A': '2Automated Logistical Specialist',
        '92F': '2Petroleum Supply Specialist',
        '92G': '2Culinary Specialist',
        '92L': '3Petroleum Laboratory Specialist',
        '92M': '1Mortuary Affairs Specialist',
        '92R': '2Parachute Rigger',
        '92S': '2Shower & Laundry Specialist (S&L SPC)',
        '92W': '2Water Treatment Specialist',
        '92Y': '3Unit Supply Specialist',
        '92Z': '3Senior Noncommissioned Logistician',
        '94A': '3Land Combat Electronic Missile System Repairer',
        '94D': '3Air Traffic Control Equipment Repairer',
        '94E': '3Radio Equipment Repairer',
        '94F': '3Computer Detection Systems Repairer',
        '94H': '3Test, Measurement, & Diagnostic Equipment(TMDE) Maintenance Support Specialist',
        '94M': '3Radar Repairer',
        '94P': '3Multiple Launch Rocket System Repairer',
        '94R': '3Avionic & Survivability Equipment Repairer',
        '94S': '3Patriot System Repairer',
        '94T': '3Short Range Air Defense System Repairer',
        '94W': '3Electronic Maintenance Supervisor',
        '94Y': '3Integrated Family of Test Equipment(IFTE) Operator',
        '94Z': '3Senior Electronic Maintenance Supervisor',
        '120A': '3Construction Engineering Technician',
        '125D': '3Geospatial Engineering Technician',
        '131A': '3Field Artillery Targeting Technician',
        '140A': '3Command & Control Systems Integrator',
        '140E': '3Air & Missile Defense(AMD) Systems Tactician/Technician',
        '140X': '3Air Defense Artillery (ADA) Immaterial',
        '150A': '3Air Traffic & Air Space Management Technician',
        '150U': '3Unmanned Aircraft Systems Operations Technician',
        '151A': '3Aviation Maintenance Technician(Nonrated)',
        '152B': '1OH-58A/C Scout Pilot(RC)',
        '152C': '1OH-6 Pilot',
        '152D': '1OH-58D Pilot',
        '152E': '1AH-64E Pilot',
        '152F': '1AH-64A Attack Pilot',
        '152H': '1AH-64D Attack Pilot',
        '153A': '1Rotary Wing Aviator (Aircraft Nonspecific)',
        '153B': '3UH-1 Pilot (RC)',
        '153D': '1UH-60 Pilot',
        '153E': '1MH-60 Pilot',
        '153L': '1UH-72A Pilot',
        '153M': '1UH-60M Pilot',
        '154C': '1CH-47D Pilot',
        '154E': '1MH-47 Pilot',
        '154F': '1CH-47F Pilot',
        '155A': '3Fixed Wing Aviator (Aircraft Nonspecific)',
        '155E': '3C-12 Pilot',
        '155F': '3Jet Aircraft Pilot',
        '155G': '30-5A/EO-5B/RC-7 Pilot',
        '170A': '3Cyber Operations Technician',
        '170B': '3Electronic Warfare Technician (Effective 201810)',
        '180A': '3Special Forces Warrant Officer',
        '255A': '3Information Services Technician',
        '255N': '3Network Management Technician',
        '255S': '3Information Protection Technician',
        '255Z': '3Senior Network Operations Technician',
        '270A': '3Legal Administrator',
        '290A': '3Electronic Warfare Technician (Rescind 201810)',
        '311A': '3Cid Special Agent'
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
//                                 liMOS.setAttribute("class","lipopup");
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
            reCheckScoreAfterSelection();
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
                reCheckScoreAfterSelection();
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
    
    
    function onDeadliftchange(){
        
        var txtDeadliftRaw=document.getElementById("txtdl");
        
        var spnDlftScore=document.getElementById("spnDlftScore");
        //check level
        var divAcftLevel= document.getElementById("dvacftlevel").getAttribute("data-lv");
        var compScore=0;
        var minRscore;
        var isNOGO=false;
        //Check for valid input
        var pval=txtDeadliftRaw.value;
         if(pval==""){return;}
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
        var colorrr;
        
        if(compScore>60)
            colorrr="green";
        else
            colorrr="red";
        document.getElementById("testdv").style="width:"+compScore+"px;background-color:"+colorrr+";";
        
   
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
         if(pval==""){return;}
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
         if(pval==""){return;}
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
        //debugger;
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
         if(pval==""){return;}
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
        //debugger;
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
            
            spnNOGO.setAttribute("style","background-color:red;");
           spnNOGO.style.display="block";
        }
        else
        {
           
            spnNOGO.innerHTML="GO";
            spnNOGO.setAttribute("style","background-color:green;");
             spnNOGO.style.display="block";
            
        }
        
        
      
         //Final Score
        spnacftScore.value=finalScore + "/"+ "600";
        
        
    }


function reCheckScoreAfterSelection()
{
    onMileChange();
    onlegTuckChange();
    onSprintCarryChange();
    onPowerThrowChange();
    onPushChange();
    onDeadliftchange();
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
