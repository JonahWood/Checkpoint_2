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
    price: 800,
    quantity: 0,
    multiplier: 1
    }, {
    name: 'matoran',
    price: 4,
    quantity: 0,
    multiplier: 1
    }
]


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

