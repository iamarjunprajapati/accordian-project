
function toggleAccordian(id) {
    id = id -1;
    let answers = document.querySelectorAll('.answer');
    let addButton = document.querySelectorAll('.add-button');
    let subtractButton = document.querySelectorAll('.subtract-button');
    if (answers[id].classList.contains('hidden')) {
        answers[id].classList.remove('hidden');
        addButton[id].classList.add('hidden');
        subtractButton[id].classList.remove('hidden');
    }
    else {
        answers[id].classList.add('hidden');
        addButton[id].classList.remove('hidden');
        subtractButton[id].classList.add('hidden');
    }
}

