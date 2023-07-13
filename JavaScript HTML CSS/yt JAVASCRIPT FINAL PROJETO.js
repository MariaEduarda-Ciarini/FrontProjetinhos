let pontuação = JSON.parse(localStorage.getItem('pontuação')) || {
			vitorias: 0,
			derrotas: 0,
			empates: 0
		};

		atualizaçãoPontuação();
 
		/*
		if (!pontuação) {
			pontuação = {
				vitorias: 0,
				derrotas: 0,
				empates: 0
			};
		}
		*/ /// referência

		function inicieOjogo(movimJogador) {
			const comptMove = comptechoosemove();

			let result = '';

			if (movimJogador === 'Tesoura') {
				if (comptMove === 'Pedra') {
					result = 'Você Perdeu.';
				} else if (comptMove === 'Papel') {
					result = 'Você Ganhou.';
				} else if (comptMove === 'Tesoura') {
					result = 'Empate!.';
				}

			} else if (movimJogador === 'Papel') {
				if (comptMove === 'Pedra') {
					result = 'Você Ganhou.';
				} else if (comptMove === 'Papel') {
					result = 'Empate!.';
				} else if (comptMove === 'Tesoura') {
					result = 'Você Perdeu.';
				}

			} else if (movimJogador === 'Pedra') {
				if (comptMove === 'Pedra') {
					result = 'Empate!.';
				} else if (comptMove === 'Papel') {
					result = 'Você Perdeu.';
				} else if (comptMove === 'Tesoura') {
					result = 'Você Ganhou.';
				}
			}

			if (result === 'Você Ganhou.') {
				pontuação.vitorias += 1;
			} else if (result === 'Você Perdeu.') {
				pontuação.derrotas += 1;
			} else if (result === 'Empate!.') {
				pontuação.empates += 1;
			}

			localStorage.setItem('pontuação', JSON.stringify(pontuação));

			atualizaçãoPontuação();

			document.querySelector('.js-result').
			innerHTML = result;
			
			document.querySelector('.js-moves')
			.innerHTML = `Você
		<img src="${movimJogador}-emoji.png"
		class="movi-icon">
		<img src="${comptMove}-emoji.png"
		class="movi-icon">
		Computador`;
		}
		
		function atualizaçãoPontuação(){
		  document.querySelector('.js-pontuação')
		   .innerHTML = `Vitorias: ${pontuação.vitorias}, Derrotas: ${pontuação.derrotas}, Empates: ${pontuação.empates}`;

		}

		function comptechoosemove() {
			const randomNumber = Math.random();

			let comptMove = '';

			if (randomNumber >= 0 && randomNumber < 1 / 3) {
				comptMove = 'Pedra';
			} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
				comptMove = 'Papel';
			} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
				comptMove = 'Tesoura';
			}

			return comptMove;
		}
