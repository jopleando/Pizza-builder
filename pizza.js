
var pepperonni=$(".btn-pepperonni");
pepperonni.on ("click", shadowButton1)

function shadowButton1(e) {
	$(".pep").fadeToggle();
	$(pepperonni).toggleClass("active")
	$("li:contains('pepperonni')").toggle()
	pricePizza()

}

var pepper=$(".btn-green-peppers");
pepper.on ("click", shadowButton2)

function shadowButton2(e) {
	$(".green-pepper").fadeToggle();
	$(pepper).toggleClass("active")
	$("li:contains('green peppers')").toggle()
	pricePizza()
	
}

var mushroom=$(".btn-mushrooms");
mushroom.on ("click", shadowButton3)

function shadowButton3(e) {
	$(".mushroom").fadeToggle();
	$(mushroom).toggleClass("active")
	$("li:contains('mushroom')").toggle()
	pricePizza()

}

var sauce = $(".sauce")
sauce.toggleClass('sauce-white')
$(".btn-sauce").click(putSauce)

function putSauce(e){
	
	$(".sauce").toggleClass('sauce-white');
	$(sauce).toggleClass("active")
	$("li:contains('white sauce')").toggle()
	pricePizza()
}

var gluten = $(".crust")
	gluten.toggleClass('crust-gluten-free')
	$(".btn-crust").click(offGluten)

function offGluten(e){
	console.log('hemo sio engañao')
	$(".crust").toggleClass('crust-gluten-free');
	$(gluten).toggleClass("active")
	$("li:contains('gluten-free crust')").toggle()
	pricePizza()
}

function pricePizza(){
var priceTotal= 10;
	

if ($(".btn-pepperonni").hasClass('active')){
	priceTotal=priceTotal + 1;
	}
if ($(".btn-green-peppers").hasClass('active')){
	priceTotal=priceTotal + 1;
	}
if ($(".btn-mushrooms").hasClass('active')){
	priceTotal=priceTotal + 1;
	}
if ($(".btn-sauce").hasClass('active')){
		priceTotal=priceTotal + 3;
	} 
if ($("btn-crust").hasClass('active')){
	priceTotal=priceTotal + 5;
	}

 $("strong").html ("$" + priceTotal);

}

/*var pepperonniOff = $(".btn-pepperonni")
var active= $(".btn-pepperonni active")
pepperonniOff.removeClass (active)
pepperonniOff.click(pOff)


function pOff(e) {
	pepperonniOff.addClass (active)
	active.css("background-color", "white")

}


/*function pOff(e) {
	if (pepperonniOff === $(".btn-pepperonni active")){
	console.log ("stoy activo")	
	}else if (pepperonniOff != $(".btn-pepperonni active")){
		pepperonniOff.css("background-color","black")
	}else {
		(pepperonniOff.click($(".btn-pepperonni active")))
	}

	pepperonniOff.click(pOff)
}*/






