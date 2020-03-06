var accItem = document.getElementsByClassName('questions-answer');
var accHD = document.getElementsByClassName('questions-answer__title');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'questions-answer close';
    }
    if (itemClass == 'questions-answer close') {
        this.parentNode.className = 'questions-answer open';
    }
}