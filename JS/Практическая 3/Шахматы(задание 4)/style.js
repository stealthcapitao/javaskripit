function chess() {
	let mainBlock = document.querySelector('.main-block');
	let block;
	let bgcolor = true;
	for (let i = 1; i <= 9; i++) {
		for (let j = 1; j <= 9; j++) {
			block = document.createElement('div');
			if (bgcolor)
			 	block.className = ' block white';
			else
			 	block.className = 'block black';
			block.innerHTML = `<p>${i*j}</p>`;
			mainBlock.appendChild(block);
			bgcolor = !bgcolor
		}
	} 
}
chess();