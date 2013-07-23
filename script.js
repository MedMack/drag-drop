var idElt;
var hauteurElt;
var hauteurTotale=0;

$(function(){ 
    $(".prod").mousedown( function () { recupIdClick(this);});  
}); 
function recupIdClick(o)
{
    //on récupère la valeur de la propriété id
    idElt = $(o).attr("id");
    hauteurElt = $(o).attr("hauteur");
    //alert(idElt);
    
}

$(function() {
	var id_num=1;
	//$(".prod").onClick({this.getAttribut})
	$(".prod").draggable({revert:true}) ;
	HandleDragEvent(); 

	$("#wall").droppable({ 
		accept:".prod",
		//activeClass:"zone-drop-active",
		//hoverClass:"zone-drop-survolee",
		over:function(event, ui){
			$("#wall").append('<img src="src/img/'+idElt+'.png" class="prodOnStage ui-draggable" id="IDproductOnStage'+id_num+'"/>');
			id_num++;
			hauteurTotale+=hauteurElt;
			console.log("totale : "+hauteurTotale);
			HandleDragEvent(); 
	}});		 
});

function HandleDragEvent()
{
	$('.prodOnStage').draggable( {
    containment: 'parent',
    cursor: 'move',
    snap: '.prod'
  });
}