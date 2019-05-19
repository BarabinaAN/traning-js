function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        reg = /\D/g,
        optionIndex = 1;

    totalValue.textContent = 0;

    function updateTotal() {
        optionIndex = place.options[place.selectedIndex].value;
        total = (daysSum * personsSum)*4500*optionIndex;
        if (restDays.value == '') {
            total = 0;
        }
        if (persons.value == '') {
            total = 0;
        }
        if (total > 0) {
            totalValue.textContent = total;
        }
    }

    function checkCalcValue(el) {
        el.setAttribute('type', 'text');
        if (reg.test(el.value)) {
            el.value = el.value.replace(reg, '');
        }
    }    

    persons.addEventListener('input', function() {
        checkCalcValue(this);
        personsSum = +this.value;
        updateTotal(restDays);
    });

    restDays.addEventListener('input', function() {
        checkCalcValue(this);
        daysSum = +this.value;
        updateTotal(persons);
    });

    place.addEventListener('change', function() {
        
        if (restDays.value == '' || persons.value == '') {
            totalValue.textContent = 0;
        } else {
            let a = total,
                b = this.options[this.selectedIndex].value / optionIndex;

            total = a * b;
            totalValue.textContent = total.toFixed();
            optionIndex = this.options[this.selectedIndex].value;
        }
    }); 
}

module.exports = calc;