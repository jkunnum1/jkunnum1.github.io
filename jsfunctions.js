var num = 0;
var winner = false;
function boxclick(eleID) {
	if (winner == false)
	{
		if (num % 2 == 0)
		{
			document.getElementById(eleID).innerHTML = 'X';
			document.getElementById(eleID).onclick = false;
			a1 = document.getElementById(eleID).value = 'x';
		}
		else
		{
			document.getElementById(eleID).innerHTML = 'O';
			document.getElementById(eleID).onclick = false;
			a1 = document.getElementById(eleID).value = 'o';
		}
		num = num + 1;
		checkWinner()
	}
}
function checkWinner(){
	a1 = document.getElementById("a1").value;
	a2 = document.getElementById("a2").value;
	a3 = document.getElementById("a3").value;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	c1 = document.getElementById("c1").value;
	c2 = document.getElementById("c2").value;
	c3 = document.getElementById("c3").value;

	// check to see who won, if there is one
	if ((a1 == a2 && a2 == a3 && (a1 == 'x')) ||
		(a1 == b2 && b2 == c3 && (a1 == 'x')) ||
		(a1 == b1 && b1 == c1 && (a1 == 'x')) ||
		(b1 == b2 && b2 == b3 && (b1 == 'x')) ||
		(c1 == b2 && b2 == a3 && (c1 == 'x')) ||
		(c1 == c2 && c2 == c3 && (c1 == 'x')) ||
		(a2 == b2 && b2 == c2 && (a2 == 'x')) ||
		(a3 == b3 && b3 == c3 && (a3 == 'x'))
		){
		document.getElementById("test").innerHTML = "X IS THE WINNER!!";
		winner = true;
	}
	else{
		if ((a1 == a2 && a2 == a3 && (a1 == 'o')) ||
		(a1 == b2 && b2 == c3 && (a1 == 'o')) ||
		(a1 == b1 && b1 == c1 && (a1 == 'o')) ||
		(b1 == b2 && b2 == b3 && (b1 == 'o')) ||
		(c1 == b2 && b2 == a3 && (c1 == 'o')) ||
		(c1 == c2 && c2 == c3 && (c1 == 'o')) ||
		(a2 == b2 && b2 == c2 && (a2 == 'o')) ||
		(a3 == b3 && b3 == c3 && (a3 == 'o'))
		){
		document.getElementById("test").innerHTML = "O IS THE WINNER!!";
		winner = true;
		}
		else
		{
			if (num == 9)
			{
				document.getElementById("test").innerHTML = "IT'S A TIE!";
			}
		}
		}
}
function clearboard() {
	location.reload();
}