// midterm


var list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];


for (let i = 0; i<list.length;i++){
    let ele =document.createElement("div")
    let nameEle = document.createElement("h1")
    let soundEle = document.createElement("h3")

    nameEle.innerHTML=list[i].name
    soundEle.innerHTML=list[i].sound

    if (list[i].sound>5){
        nameEle.innerHTML = nameEle.innerHTML.fontcolor("blue")
    }

    ele.appendChild(nameEle);
    ele.appendChild(soundEle);
    document.body.appendChild(ele);
}


let countDown = 10
let ele2 = document.createElement("div")
let countDownEle = document.createElement("h1")
countDownEle.innerHTML="cool we hit the number"
ele2.appendChild(countDownEle)

if (countDown<15){
    let button= document.createElement("button")
    button.innerHTML= "Click me to count down "+ countDown
    button.addEventListener("click", function (){
        countDown= countDown+1
        button.innerHTML= "Click me to count down "+ countDown
        if (countDown>=15){
            document.body.appendChild(ele2)
        }
    })


    document.body.appendChild(button)
}



