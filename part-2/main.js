let randomarr = ["a", "d", "b", "a", "g"]

let form = document.querySelector("#encode")
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let userInput = document.querySelector("input").value
    userInputArr = userInput.split("")
    for (let i=0; i<userInputArr.length; i++) {
        userInputArr[i] = parseInt(userInputArr[i], 36) - 9;
        str = userInputArr[i].toString();
        let random = 0
        while (str.length < 4) {
            str += randomarr[random]
            random++
        }
        userInputArr[i] = str
    }
    console.log(userInputArr)
    for (let j=0; j<userInputArr.length; j++) {
        let newDiv = document.createElement("div")
        newDiv.style.backgroundColor = `#${userInputArr[j]}`
        newDiv.innerHTML = userInputArr[j]
        newDiv.classList.add("colorBox")
        let content = document.querySelector("content")
        content.appendChild(newDiv)
    }
    let explination = "Here is your phrase as a bunch of different shades of blue. Enter them into the Decode box without spaces to display your phrase"
    let newBox = document.querySelector("p")
    newBox.textContent = explination

    document.querySelector("#decode").style.display = "flex"
    form.style.display = "none"
})

