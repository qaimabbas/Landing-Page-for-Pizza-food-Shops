var photos=[

"images/1.jpg",
"images/2.jpg",



];

var i=0;
  function slides(){

  	document.getElementById("photo").src=photos[i];
  	if(i<(photos.length-1))
  		i++;
  		else
  		i=0;
  	
  }

 setInterval(slides,1000)

  var image1=document.getElementById("yes1");
  var image2=document.getElementById("yes2");
  var image3= document.getElementById("yes3");
function pizza(){
	 image1.src='images/pizza4.jpg';
	 image2.src='images/pizza5.jpg';
	 image3.src='images/pizza6.jpg';

	 document.getElementById("utext1").innerHTML="Italian";
	 document.getElementById("utext2").innerHTML="Spanish";
	 document.getElementById("utext3").innerHTML="Franch";

}

function burgers (){
	image1.src='images/burger1.jpg';
	 image2.src='images/burger2.jpg';
	 image3.src='images/burger3.jpg';
	 document.getElementById("utext1").innerHTML="Chicken";
	 document.getElementById("utext2").innerHTML="Beef";
	 document.getElementById("utext3").innerHTML="Bacon";
}

function wraps(){
	image1.src='images/wrap1.jpg';
	 image2.src='images/wrap2.jpg';
	 image3.src='images/wrap3.jpg';
	 document.getElementById("utext1").innerHTML="Salat";
	 document.getElementById("utext2").innerHTML="Beef";
	 document.getElementById("utext3").innerHTML="Chicken";
}

$(".navbar").css("background-color","green");

//$("#div1").fadeOut("slow");
//$("#div1").fadeIn("slow");


//$("#div1").stop(true, true).show().fadeOut(1000);

//setInterval(function(){$("#div1").stop(true, true).show().fadeOut(2000); }, 2000);



$("#div1").slideUp();
$("#div1").slideDown();




$(window).scroll(function(){
  
   $("#div4").slideUp();
   $("#div4").slideDown();

    $("#div3").slideUp();
    $("#div3").slideDown();

    //$("#div4").slideUp();
    //$("#div4").slideDown();
})














