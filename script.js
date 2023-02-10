$(document).ready(function (m) {
    $('.selectpicker').selectpicker();
});

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const parent = document.querySelector('.user-data table')

    const row_table = document.createElement('tr')

    const arrData = ["firstName", "lastName", "address", "pincode", "gender", "State", "Country", "food"]

    for (let i of arrData) {
        const table_data = document.createElement('td')
        if (i == "food") {
            let line = [];
            const a = document.querySelector('.selectpicker').selectedOptions
            const length1 = document.querySelector('.selectpicker').selectedOptions.length;
            if (length1 >= 2) {

            } else {
                alert('select minmum 2 items')

            }
            for (let i = 0; i < length1; i++) {
                const v = document.querySelector('.selectpicker').selectedOptions[i].value
                line.push(v)
            }
            table_data.innerText = line.join(',');
            row_table.append(table_data)
            line = '';
        } else {


            const data = document.querySelector(`#${i}`)
            table_data.innerText = data.value
            row_table.append(table_data)
            data.value = ''
        }
    }

    parent.append(row_table)

})

