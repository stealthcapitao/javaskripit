window.onload = function() {
	// Ф-я рандома чисел
	function getRandomNum(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	// ф-я выбора карт
	function chooseCards() {
		let btnProcess = document.querySelector('.btn').addEventListener('click', () => {
				let allCards = document.querySelectorAll('.box__item');

				// информация
				let informCardOne = document.querySelector('.information__card_one');
				let informCardTwo = document.querySelector('.information__card_two');
				let informAdd = document.querySelector('.information__add');
				let informSum = document.querySelector('.information__sum');

				let randomCardOne = getRandomNum(1, 5);
				let randomCardTwo = getRandomNum(1, 5);

				while (randomCardOne == randomCardTwo) {
					randomCardTwo = getRandomNum(1, 5);
				}

				let addTwoCards = parseInt(allCards[randomCardOne].innerHTML) + parseInt(allCards[randomCardTwo].innerHTML);
				let commonSum = parseInt(0); //сумма всех карт

				informCardOne.innerHTML	= `Первая карта = ${randomCardOne}`;
				informCardTwo.innerHTML	= `Вторая карта = ${randomCardTwo}`;
				informAdd.innerHTML = `Сумма двух карт = ${addTwoCards}`;


				allCards[0].innerHTML = addTwoCards;
				allCards[0].classList.remove('hide');	
				allCards[0].classList.add('box__item_special');
				allCards[0].addEventListener('animationend', () => {
				allCards[0].classList.remove('box__item_special');		
				});

				for (let i = 0; i < allCards.length; i++) {
					commonSum += parseInt(allCards[i].innerHTML);
				}

				informSum.innerHTML	= `Общая сумма равна = ${commonSum}`;

			});
		}
	chooseCards();	
	}