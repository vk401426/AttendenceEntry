let selectElement = document.getElementById("sh-att");
selectElement.addEventListener('change', () => {
    const selectedValue = selectElement.value;
    
    if (selectedValue == 'tweek') {
        showAttendence(today.getDay());
    }
    else if (selectedValue == 'tmnth') {
        showAttendence(30); 
    }
    else if (selectedValue == 'ltmnth') {
        showAttendence(90); 
    }
});

function showAttendence(rangeDay) {
    const secB = document.getElementById('sec-b-i');
    secB.innerHTML = ''; 

    for (let i = 0; i < rangeDay; i++) {
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - i); 
        let newDate = pastDate.toDateString();

        
        let attType = '';
        if (pastDate.getDay() === 0) {
            attType = '<div class="ele ele-att-w">Weekend</div>';
        } else if (Math.round(Math.random())) {
            attType = '<div class="ele ele-att-a">Absent</div>';
        } else {
            attType = '<div class="ele ele-att-p">Present</div>';
        }

        
        let newRow = document.createElement('div');
        newRow.classList.add('sec-b-r');
        newRow.innerHTML = `<div class="ele ele-date">${newDate}</div> ${attType} <div class="ele ele-shift">1st Half</div>`;
        secB.appendChild(newRow);
    }
}
showAttendence(today.getDay());
