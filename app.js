let widgets = 100000
let clickUpgrades = [
    {
name: 'furnace',
price: 200,
quantity: 0,
multiplier: 20,
}, {
    name: 'forgeHammer',
    price: 100,
    quantity: 0,
    multiplier: 1
}
]
let autoUpgrades = [
    {
    name: 'avMatoran',
    price: 500000,
    quantity: 0,
    multiplier: 0
    }, {
    name: 'matoran',
    price: 500,
    quantity: 0,
    multiplier: 0
    }
]


// SECTION Click Counter
function clickCounter(){
    let hammer = clickUpgrades[1]
    let furn = clickUpgrades[0]
    if (hammer.quantity > 0) {
        widgets += hammer.multiplier
    } else {
        widgets++
    }
    if (furn.quantity > 0) {
        widgets += furn.multiplier
}
    drawWidgets()
}


// SECTION Draw functions
function drawWidgets(){
let WidgetTemp = ''
WidgetTemp += `<h5>PER MASK SOLD: ${1 + (autoUpgrades[1].quantity + autoUpgrades[0].quantity*autoUpgrades[0].multiplier)}</h5> <h1> WIDGETS: ${widgets} </h1> <h5>PER MATORAN MADE MASK: ${(autoUpgrades[0].quantity*100)+(autoUpgrades[1].quantity*5)}</h5>`
document.getElementById('WidgetTemp').innerHTML = WidgetTemp
}

function drawHammerUpgrade(){
    let hammer = clickUpgrades[1]
let hamTemp = ''
hamTemp += `<h3>UPGRADE FORGEHAMMER <button class="font-work-pls button-mask text-success" onclick="buyForgeHammer()">${hammer.price} WIDGETS</button> </h3>`
document.getElementById('hamTemp').innerHTML = hamTemp
}

function drawFurnaceUpgrade(){
    let furn = clickUpgrades[0]
let furnTemp = ''
furnTemp += `<h3>UPGRADE FURNACE <button class="font-work-pls button-mask text-success" onclick="buyFurnace()">${furn.price} WIDGETS</button> </h3>`
document.getElementById('furnTemp').innerHTML = furnTemp
}

function drawMatoran(){
    let mat = autoUpgrades [1]
    let matTemp = ''
matTemp +=  `<h3>BUY MATORAN <button class="font-work-pls button-mask text-success" onclick="buyMatoran()">${mat.price} WIDGETS</button> </h3>`
document.getElementById('matTemp').innerHTML = matTemp
}

function drawAv(){
    let av = autoUpgrades [0]
    let avTemp = ''
avTemp +=  `<h3>BUY AV-MATORAN <button class="font-work-pls button-mask text-success" onclick="buyMatoran()">${av.price} WIDGETS</button> </h3>`
document.getElementById('avTemp').innerHTML = avTemp
}

// SECTION Upgrades
function buyForgeHammer(){
    let hammer = clickUpgrades[1]
    if (widgets >= hammer.price) {
        hammer.quantity++
        widgets -= hammer.price
        hammer.multiplier++
        hammer.price += 100
// console.log('worked')
    } else {
        window.alert("Look out Kholii head! You don't have enough widgets!")
    }
    drawHammerUpgrade()
}
function buyFurnace(){
    let furn = clickUpgrades[0]
    if (widgets >= furn.price) {
        furn.quantity++
        widgets -= furn.price
        furn.multiplier += 10
        furn.price += 200
// console.log('worked')
    } else {
        window.alert("Look out Kholii head! You don't have enough widgets!")
    }
}

function buyMatoran(){
    let mat = autoUpgrades[1]
    if (widgets >= mat.price) {
        mat.quantity++
        widgets -= mat.price
        mat.multiplier++
        mat.price += 200
    console.log('matoran worked')
    } else {
        window.alert("Look out Kholii head! You don't have enough widgets!")
    }
    drawWidgets()
}

function matoranInt(){
    let mat = autoUpgrades[1]
    if (mat.quantity > 0) {
        mat.multiplier++
        widgets += 10*mat.multiplier
        console.log('interval be intervaling')
    }
    drawWidgets()
}

function buyAvMatoran(){
    let av = autoUpgrades[0]
if (widgets >= av.price) {
    av.quantity++
    widgets -= av.price
    av.multiplier++
    av.price += 1000
    console.log('av worked');
} else {
    window.alert("Look out Kholii head! You don't have enough widgets!")
}
drawWidgets()
}

function avInt(){
    let av = autoUpgrades[0]
    if (av.quantity > 0) {
        multiplier++
        widgets += 100*av.multiplier
        console.log('av interval is also intervaling');
    }
    drawWidgets()
}

function newWidgetCount(){
    if (autoUpgrades[0].quantity > 1 || autoUpgrades[1].quantity >1) {
        0
    }
}


// SECTION Intervals
function testInt(){
    setInterval(drawHammerUpgrade, 500)
    setInterval(drawFurnaceUpgrade, 500)
    setInterval(drawMatoran, 500)
    setInterval(drawAv, 500)
}
testInt()
setInterval(avInt, 5000)
setInterval(matoranInt, 3000)