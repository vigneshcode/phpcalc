/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//alert("dd");
$( function() {
  
    var availableTags = [{
      label:"ActionScript",
      value:1
  },{
      label:"Addd",
      value:2
  },{
      label:"del",
      value:3
  },{
      label:"cr",
      value:4
  },{
      label:"dede",
      value:5
  }
      
    ];
    $( "#optMOS" ).autocomplete({
      source: availableTags
    });
  } );
  
  function openpopup(){
      var ahre=document.getElementById("enlist");
      
      var pp=document.getElementById("popupform");
      pp.style.left=ahre.style.left;
      pp.style.top=ahre.style.top;
              pp.style.display="block";
  }
  function closepopup(){
      document.getElementById("popupform").style.display="none";
  }