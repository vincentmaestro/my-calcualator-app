let operator = 0;
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', e => {
        operator = document.querySelector('.result').querySelector('input').value;
        document.querySelector('.result').querySelector('input').value += e.target.value;

        if(button.className === 'clear') {
            document.querySelector('.result').querySelector('span').textContent = "";
            document.querySelector('.result').querySelector('input').value = "";
            if(!document.querySelector('.close-brackets').classList.contains('hb')) {
                document.querySelector('.close-brackets').classList.add('hb');
                document.querySelector('.open-brackets').classList.remove('hb');
            } 
        }

        if(button.classList.contains('open-brackets')) {
            button.classList.add('hb');
            document.querySelector('.close-brackets').classList.remove('hb');
        }

        if(button.classList.contains('close-brackets')) {
            button.classList.add('hb');
            document.querySelector('.open-brackets').classList.remove('hb');
        }

        if(button.classList.contains('percentage') && operator) {
            document.querySelector('.result').querySelector('span').textContent = operator+'%';
            document.querySelector('.result').querySelector('input').value = eval(operator/100);
        }

        if(button.className === 'delete') {
            if(document.querySelector('.result').querySelector('input').value[document.querySelector('.result').querySelector('input').value.length - 1] === '(') {
                document.querySelector('.close-brackets').classList.add('hb');
                document.querySelector('.open-brackets').classList.remove('hb');
            }
            document.querySelector('.result').querySelector('input').value = operator.toString().slice(0, -1);
        }

        if(button.className === 'equals' && operator) {
            document.querySelector('.result').querySelector('span').textContent = operator;
            document.querySelector('.result').querySelector('input').value = eval(operator);
        }

    });
});