var gameplay = (function(numbers){

	var field = [];
	var $field = [];
	var $table = $(".table-wrap");
	

	for (var i = 0; i<9; i++){
		$field[i] = $("."+i);
	}

	var keyPressed = function(){
		$table.on("keydown", function(event){
		console.log(event.which);
	});
	}

	var randomCells = function(){
		var first = _randomInteger(0,8);
		var second = _randomInteger(0,8);
		second = (second != first) ? second : _randomInteger(0,8);
		field[first] = 2;
		field[second] = 2;


		_render();
	}



	var  _render = function(){
		for (var i = 0; i<9; i++){

		console.log(field[i] + " "+i);
		$field[i].html(field[i]);
		$field[i].css("background-color", numbers[field[i]]);
		}
	}


	function _randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  	return{
  		randomCells: randomCells,
  		keyPressed: keyPressed
  	}
})(nums)