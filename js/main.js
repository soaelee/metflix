const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");


// Select tab content Item
function selectItem(e){
    //Add border to current tab
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add("show");
}

function removeBorder(){
    const current = document.querySelector('.tab-border');
    current.classList.remove('tab-border');
}

function removeShow(){
    const current = document.querySelector('.show');
    current.classList.remove('show');
}

//Listen for tab click
tabItems.forEach((item) => item.addEventListener('click', selectItem));
