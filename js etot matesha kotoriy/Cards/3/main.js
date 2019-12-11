window.onload = function() {
	// Ф-я рандома чисел
	function getRandomNum(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	// ф-я выбора карт
	function chooseCards() {
		let btnProcess = document.querySelector('.btn').addEventListener('click', () => {
			let story = document.querySelector('.story');
			let a = 0, b = 0, c = 0; d = 0; e = 0;
			for (let i = 0; i < 100; i++) {
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
				// 13 14 15 16 17
				if (commonSum == 13) {
					a++;
				}
				if (commonSum == 14) {
					b++;
				}
				if (commonSum == 15) {
					c++;
				}
				if (commonSum== 16) {
					d++;
				}
				if (commonSum == 17) {
					e++;
				}

			}
			story.innerHTML = `Тринадцать выпадает = ${a} <br>
								Четырнадцать выпадает = ${b} <br>
								Пятнадцать выпадает = ${c} <br>
								Шестнадцать выпадает = ${d}<br>
								Семнадцать выпадает = ${e}`;
		})
	}

	chooseCards();	
}