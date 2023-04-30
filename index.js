
//Event delegation

// const formRef = document.querySelector('#form');
// const tagsRef = Array.from(document.querySelectorAll('.tag'));
// const featureNameRef = document.querySelector('[data-selected]');
// const tagsContainerRef = document.querySelector('.tags');

// //describe handler event on button
// const handleClick = (event) => {
//     const { currentTarget } = event;
//     //const currentTarget = event.currentTarget; identical notes as previous
//     const { name } = currentTarget.dataset //get value using 'dataset'
//     //const name = currentTarget.dataset.name; identical notes as previous
//     featureNameRef.textContent = name;
// };

// const handleAddTag = (event) => {
//     event.preventDefault();
//     const { target } = event;
//     const feature = target.elements.feature;//get link on input
//     const value = feature.value;//get value

//     const tag = document.createElement('button');
//     tag.classList.add('tag');
//     tag.textContent = value;//add text in buttons 
//     tag.dataset.name = value;
//     tag.addEventListener('click', handleClick);
//     tagsContainerRef.append(tag);//add buttons tags
// };
// //without delegetion event
//  tagsRef.forEach((tag) => {
//     tag.addEventListener('click', handleClick);
//  });

// //debugger; //watch tab sources

// formRef.addEventListener('submit', handleAddTag);

//or


const formRef = document.querySelector('#form');
const tagsRef = Array.from(document.querySelectorAll('.tag'));
const featureNameRef = document.querySelector('[data-selected]');
const tagsContainerRef = document.querySelector('.tags');

//describe handler event on button
const handleClick = (event) => {
    const { target } = event;

if (target.nodeName !== 'BUTTON') {
    return
}

    //const currentTarget = event.currentTarget; identical notes as previous
    const { name } = target.dataset //get value using 'dataset'
    //const name = currentTarget.dataset.name; identical notes as previous
    featureNameRef.textContent = name;
};

const handleAddTag = (event) => {
    event.preventDefault();
    const { target } = event;
    const feature = target.elements.feature;//get link on input
    const value = feature.value;//get value

    const tag = document.createElement('button');
    tag.classList.add('tag');
    tag.textContent = value;//add text in buttons 
    tag.dataset.name = value;
    tag.addEventListener('click', handleClick);
    tagsContainerRef.append(tag);//add buttons tags
};


tagsContainerRef.addEventListener('click', handleClick);

formRef.addEventListener('submit', handleAddTag);