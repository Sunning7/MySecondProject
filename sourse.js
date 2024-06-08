
let array1 = [];
let array2 = [];


function updateDeviceList() {
    const deviceList = document.getElementById('deviceList');
    deviceList.innerHTML = 'Список приладів:<br>' + array1.map(device => {
        return `Назва: ${device.name}, Потужність: ${device.defaultPower} Вт, Кількість: ${device.quantity}`;
    }).join('<br>');
}



document.getElementById('addDeviceButton').addEventListener('click', () => {
    const name = document.getElementById('deviceName').value;
    const power = parseInt(document.getElementById('devicePower').value);
    const quantity = parseInt(document.getElementById('deviceQuantity').value);

    if (name && power && quantity) {
        array1.push({ name, defaultPower: power, quantity });
        updateDeviceList();
    } else {
        alert('Будь-ласка заповніть всі поля.');
    }
});

function updateWorkParamsList(){
    const workParamsList= document.getElementById('workParamsList');
    workParamsList.innerHTML= 'Параметри роботи:<br>' + array2.map(param =>{
        return `Назва: ${param.name}, Потужніть: ${param.power} Вт, Час: ${param.time} ч`;
    }).join('<br>');
}

document.getElementById('setWorkParamsButton').addEventListener('click', () => {
    const name = document.getElementById('workDeviceName').value;
    const power = parseInt(document.getElementById('workDevicePower').value);
    const time = parseInt(document.getElementById('workDeviceTime').value);

    if (name && power && time) {
        array2.push({ name, power, time });
        updateWorkParamsList();
    } else {
        alert('Будь-ласка заповніть всі поля.');
    }
});