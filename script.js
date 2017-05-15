/**
 * p5js boilerplate
 * 
 * 
 */

var posicao;
var velocidade;

// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 480 x 400
	createCanvas(480, 400);

	posicao = createVector(width / 2, height / 2);
	direita = createVector(1, 0);
	esquerda = createVector(-1, 0);
	praBaixo = createVector(0, 1);
	praCima = createVector(0, -1);
	parado = createVector(0, 0);

	velocidade = parado;
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de cinza
	background(240);

	posicao = posicao.add(velocidade);

	ellipse(posicao.x, posicao.y, 50);
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		// posicao.x = posicao.x + 10;
		velocidade = direita;
	}
	if (keyCode == LEFT_ARROW) {
		// posicao.x = posicao.x - 10;
		velocidade = esquerda;
	}
	if (keyCode == DOWN_ARROW) {
		// posicao.y = posicao.y + 10;
		velocidade = praBaixo;
	}
	if (keyCode == UP_ARROW) {
		// posicao.y = posicao.y - 10;
		velocidade = praCima;
	}
	if (keyCode == 32) {
		// posicao.y = posicao.y - 10;
		velocidade = parado;
	}
}