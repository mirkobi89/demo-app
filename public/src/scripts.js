var counter = 0;
$(".comunication").on("click", function(e){
	counter++;
	$(this).addClass('comunication-checked');
	if(counter===2){
	window.location.href = "chatbot";
	}
})
