window.onload = function(){

}
let allCards = document.querySelectorAll('.item');
function getRandomNum(max, min){
	return Math.floor(Math.random()*(max-min))+min;
}
function chooseCards(){
	let btnProcess = document.querySelector('.btn').addEventListener('click', () => {
		let allCards = document,querySelectorAll('.box_item');
		
		let informCardOne = document.querySelector('.informating_card_one');
		let informCardTwo = document.querySelector('.informating_card_two');
		let informAdd = document.querySelector('.information_add');
		let informSum = document.querySelector('.information_sum');
		
		let randomCardOne = getRandomNum(1, 5);
		let randomCardTwo = getRandomNum(1, 5);
		
		while (randomCardOne == randomCardTwo){
			randomCardTwo = getRandomNum(1, 5);
		}
		
		let addTwoCards = parseInt(allCards[rando,CardOne].innerHTML) + parseInt(allCards[randomCardTwo].innerHTML);
		let commonSum - parseInt(0);
		
		informCardOne.innetHTML = 'pervaya carta = $(randomCardOne)';
		informCardTwo.innetHTML = 'vtoraya carta = $(randomCardTwo)';
		informAdd.innerHTML = 'summa dvuh cart = $(addTwoCards)';
		
		allCards[0].innerHTML = addTwoCards;
		allCards[0].classList.remove('hide');
		allCards[0].classList.add('box_item_special');
		
		cllCards[0].addEventListener('animationend', () => {
			allCards[0].classList.remove('box_item_special');
		}0;
		
		for (let i = 0; i < allCards.length; i++) {
			
