import { updateMediasOrder } from "../pages/photographer.js";

//Elements of dropdown
let chevronUp;
let chevronDown;
let filterContainer;
let filtersNotSelected;
let filtersContainers;

let filtersArray = [];

function createOrReorderFilters(newOrderedArray) {

    if (!newOrderedArray) {
        //Popularity
        const popularity = document.createElement('p');
        popularity.classList.add('filter-p')
        popularity.setAttribute('value', 'popularity');
        popularity.innerText = 'Popularité';
    
        //Date
        const date = document.createElement('p');
        date.classList.add('filter-p')
        date.setAttribute('value', 'date');
        date.innerText = 'Date';
    
        //Titre
        const title = document.createElement('p');
        title.classList.add('filter-p')
        title.setAttribute('value', 'title');
        title.innerText = 'Titre';
    
        filtersArray = [popularity, date, title];
    } else {
        filtersArray = newOrderedArray;
    }

    filtersArray.forEach((filter, idx) => {
        const filterDiv = document.querySelector(`.filter-${idx+1}`);
        filterDiv.innerHTML = '';
        filterDiv.appendChild(filter);
    })
}

function makeFilterFirst(filter) {
    const index = filtersArray.indexOf(filter);
    if (index > 0) {
      filtersArray.splice(index, 1);
      filtersArray.unshift(filter);
    }
    return filtersArray;
  }

function openDropdown() {
    filtersNotSelected.style.display = 'initial'
    chevronDown.style.display = 'none';
    chevronUp.style.display = 'initial';
    filtersNotSelected.classList.add('active')
}

function closeDropdown() {
    filtersNotSelected.style.display = 'none'
    chevronDown.style.display = 'initial';
    chevronUp.style.display = 'none';
    filtersNotSelected.classList.remove('active')
}

function onClickChevron() {
    chevronDown.addEventListener('click', openDropdown);
    chevronUp.addEventListener('click', closeDropdown);
}

function onClickFilter() {
    filtersContainers.forEach((filter) => {
        filter.addEventListener('click', function(){
            const clickedTag = this.children[0];
            makeFilterFirst(clickedTag);
            createOrReorderFilters(filtersArray);

            const filterValue = clickedTag.attributes.value.value;
            updateMediasOrder(filterValue);
        })
        filter.addEventListener('keydown', function(event){
            if (event.key === 'Enter') {
                const clickedButton = this;
                // filterContainer.setAttribute('aria-activedescendant', clickedButton.attributes.id.value)
                clickedButton.setAttribute('aria-selected', true);
                const buttonsNotSelected = filtersNotSelected.querySelectorAll('button');
                buttonsNotSelected.forEach((btn) => {
                    btn.setAttribute('aria-selected', false);        
                })
            }
        })
    })
}

function onFilterListKeyDown() {
    filterContainer.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !filtersNotSelected.classList.contains('active')) {
            openDropdown();         
        } else if (event.key === 'Enter' && filtersNotSelected.classList.contains('active')) {
            closeDropdown();
            //filterContainer.focus();
        }
    })
}

function init() {

    chevronUp = document.querySelector('.chevron-up');
    chevronDown = document.querySelector('.chevron-down');
    filterContainer = document.querySelector('.filter-container');
    filtersNotSelected = document.querySelector('.filters-not-selected');
    filtersContainers = document.querySelectorAll('.filter');   
   
    createOrReorderFilters();
    onClickChevron();
    onClickFilter();
    onFilterListKeyDown();
}

window.addEventListener('load', () => {
    setTimeout(init ,100);
});