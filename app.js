let widgets = 0
let clickUpgrades = [
    {
name: 'furnace',
price: 8,
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
    price: 8,
    quantity: 0,
    multiplier: 1
    }, {
    name: 'matoran',
    price: 4,
    quantity: 0,
    multiplier: 1
    }
]

// SECTION Draw functions
function drawWidgets(){
let WidgetTemp = ''
WidgetTemp += ` <h1> WIDGETS: ${widgets} </h1> `
document.getElementById('WidgetTemp').innerHTML = WidgetTemp
}

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


// SECTION Upgrades
function buyForgeHammer(){
    let hammer = clickUpgrades[1]
    if (widgets >= hammer.price) {
        hammer.quantity++
        hammer.multiplier++
// console.log('worked')
    }
}
function buyFurnace(){
    let furn = clickUpgrades[0]
    if (widgets >= furn.price) {
        furn.quantity++
        furn.multiplier += 10
// console.log('worked')
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
    }
    drawWidgets()
}

function matoranInt(){
    let mat = autoUpgrades[1]
    if (mat.quantity > 0) {
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
}
drawWidgets()
}

function avInt(){
    let av = autoUpgrades[0]
    if (av.quantity > 0) {
        widgets += 100*av.multiplier
        console.log('av interval is also intervaling');
    }
    drawWidgets()
}


// SECTION Intervals
setInterval(avInt, 5000)
setInterval(matoranInt, 3000)