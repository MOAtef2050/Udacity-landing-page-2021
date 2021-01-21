/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navigation = document.getElementById("navbar__list");
 const sections = document.querySelectorAll("section");

/*
 * End Global Variables
*/


// build the nav
const navbar= ()=>{
let navContainer = '' ;
//loops over all sections
sections.forEach(section=>{
 navContainer += `<li><a class=" menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`
});
//append elements to navigation list
navigation.insertAdjacentHTML('beforeend',navContainer) ;
}



// Add class 'active' to section when near top of viewport

const getVisibleSectionIndex=()=> {
    let minor = window.innerHeight;
    visibleSectionIndex = -1;

    sections.forEach((section, index) => {
        let offset = section.getBoundingClientRect();
        if(Math.abs(offset.top) < minor){
            minor = Math.abs(offset.top);
            visibleSectionIndex = index;
        }
    });
    return visibleSectionIndex;
};

//set or remove "your-active-class" function
function setActiveSection(){
    visibleSectionIndex = getVisibleSectionIndex();

    // If visibleSection exists
    if(visibleSectionIndex != -1){
        // create a list of Atags from navigation menu
        let navATags = document.querySelectorAll('.menu__link');

        // Loop through all section
        for (let i = 0; i < sections.length; i++) {
            //Add active state to the section and navigation
            if (i == visibleSectionIndex){
                sections[i].classList.add('your-active-class');
                navATags[i].classList.add('your-active-class');
            }
            // Remove active state from the section and navigation
            else{
                sections[i].classList.remove('your-active-class');
                navATags[i].classList.remove('your-active-class');
            }
        }; 
    };
};

// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll",setActiveSection);


// Build menu 
navbar();





