let upperBtn = document.querySelector('#upper-controller')
let lowerBtn = document.querySelector('#lower-controller')
let numberList = document.querySelector('.number-list');

// Increment
lowerBtn.addEventListener('click', function () {
    toggleNumberActive();
    addNumber();
    toggleNumberActive();
    scrollListUpward()
})




// Decrement
upperBtn.addEventListener('click', function () {
    scrollListdownward()
    delNumber();
    toggleNumberDeactive()
    toggleNumberActive()

})

function addNumber() {
    const newNum = document.createElement('p')
    newNum.innerText = eval(parseInt(numberList.lastElementChild.innerText) + 1);
    numberList.appendChild(newNum)
}

function toggleNumberActive() {
    let numberListChildrens = numberList.children;
    let currentActiveNumber = numberListChildrens[eval((numberList.children.length) - 2)];
    currentActiveNumber.style.transition = "0.5s";
    currentActiveNumber.classList.toggle('active');
}

function scrollListUpward() {
    numberList.scrollBy(0, 128)

}

// Decrement
function delNumber() {
    numberList.lastElementChild.remove()
}

function toggleNumberDeactive() {
    let numberListChildrens = numberList.children;
    let currentActiveNumber = numberListChildrens[eval((numberList.children.length) - 1)];
    currentActiveNumber.style.transition = "0.5s";
    currentActiveNumber.classList.toggle('active');
}

function scrollListdownward() {
    numberList.scrollBy(0, -128)
}