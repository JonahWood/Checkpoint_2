let widgets = 0
let clickUpgrades = [
    {
name: 'furnace',
price: 800,
quantity: 0,
multiplier: 1
}, {
    name: 'forgeHammer',
    price: 200,
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
    price: 400,
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
    widgets++
    // console.log('and suddenly, it clicked!')
    drawWidgets()
}

function furnace(){

}



function MatoranOne(){
    
}