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
    price: 1000,
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
// FIXME the logic here is showing some data but not the correct data for all instances of the upgrades
// Look to zoo keeper and how a paycheck is generated to get a more accurate figure, you want to take not just the power of each upgrade
// But also the amount you have
// FIXME you will want to make sure they gets called ANY time data changes, go through you functions and make sure this is called
// where ever that happens.
WidgetTemp += `<h5>PER MASK SOLD: ${(1 + (clickUpgrades[1].quantity) + (clickUpgrades[0].quantity*clickUpgrades[0].multiplier))}</h5> <h1> WIDGETS: ${widgets} </h1> <h5>PER MATORAN MADE MASK: ${(autoUpgrades[0].quantity*autoUpgrades[0].multiplier)+(autoUpgrades[1].quantity*autoUpgrades[1].multiplier)}</h5>`
document.getElementById('WidgetTemp').innerHTML = WidgetTemp
}

function drawHammerUpgrade(){
    let hammer = clickUpgrades[1]
let hamTemp = ''
hamTemp += `<h3>UPGRADE FORGEHAMMER <button class="font-work-pls button-mask text-success" onclick="buyForgeHammer()">${hammer.price} WIDGETS</button></h3><h6>BOUGHT: ${hammer.quantity}</h6>`
document.getElementById('hamTemp').innerHTML = hamTemp
drawWidgets()
}

function drawFurnaceUpgrade(){
    let furn = clickUpgrades[0]
let furnTemp = ''
furnTemp += `<h3>UPGRADE FURNACE <button class="font-work-pls button-mask text-success" onclick="buyFurnace()">${furn.price} WIDGETS</button></h3><h6>BOUGHT: ${furn.quantity}</h6> `
document.getElementById('furnTemp').innerHTML = furnTemp
drawWidgets()
}

function drawMatoran(){
    let mat = autoUpgrades [1]
    let matTemp = ''
matTemp +=  `<h3>BUY MATORAN <button class="font-work-pls button-mask text-success" onclick="buyMatoran()">${mat.price} WIDGETS</button></h3> <h6>BOUGHT: ${mat.quantity}</h6>`
document.getElementById('matTemp').innerHTML = matTemp
drawWidgets()
}

function drawAv(){
    let av = autoUpgrades [0]
    let avTemp = ''
avTemp +=  `<h3>BUY AV-MATORAN <button class="font-work-pls button-mask text-success" onclick="buyAvMatoran()">${av.price} WIDGETS</button></h3><h6>BOUGHT: ${av.quantity}</h6>`
document.getElementById('avTemp').innerHTML = avTemp
drawWidgets()
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
    drawWidgets()
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
    drawFurnaceUpgrade()
    drawWidgets()
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
    drawMatoran
    drawWidgets()
}

// FIXME Currently the this upgrade has no function in the game. Review this function as purchasing it does not actually benefit the player
function matoranInt(){
    let mat = autoUpgrades[1]
    if (mat.quantity > 0) {
        mat.multiplier++
        widgets += 10*mat.multiplier
        console.log('interval be intervaling')
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
drawAv()
drawWidgets()
}

function newWidgetCount(){
    if (autoUpgrades[0].quantity > 1 || autoUpgrades[1].quantity >1) {
        0
    }
    drawWidgets()
}


// SECTION Intervals
function testInt(){
    setInterval(drawHammerUpgrade, 500)
    setInterval(drawFurnaceUpgrade, 500)
    setInterval(drawMatoran, 500)
    setInterval(drawAv, 500)
}
testInt()
setInterval(avInt, 3000)
setInterval(matoranInt, 3000)