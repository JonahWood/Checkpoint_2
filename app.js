let widgets = 0



function drawWidgets(){
let WidgetTemp = ''
WidgetTemp += ` <h1> Widgets: ${widgets} </h1> `
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