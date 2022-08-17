const display = document.getElementById('div1');
const buttons = Array.from(document.querySelectorAll('button'));

buttons.map((button) => {
	button.addEventListener('click', (e) => {
		switch (e.target.innerText) {
			case 'c':
				display.innerText = '';
        break;
      case '×':
        display.innerText += '*';
        break;
      case '÷':
        display.innerText += '/';
        break;
			case '=':
				try {
          display.innerText = eval(display.innerText);
          
          console.log(typeof display.innerText);
				} catch {
					display.innerText = 'Error';
				}
				break;
			default:
				display.innerText += e.target.innerText;
		}
	});
});
