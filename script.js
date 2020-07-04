console.log('it works');

// code your solution in here
//Here we will create all elements we need
const newPostList = document.getElementById('post-list');
const newSpaceDiv = document.createElement('div');
const newBodyDiv = document.createElement('div');
const newTitle = document.createElement('h5');
const newParagraph = document.createElement('p');

//Then we append them to their parents
newPostList.appendChild(newSpaceDiv);
newSpaceDiv.appendChild(newBodyDiv);
newBodyDiv.appendChild(newTitle);
newBodyDiv.appendChild(newParagraph);

// We will give them classes
newSpaceDiv.classList.add('some-space');
newBodyDiv.classList.add('card-body');
newTitle.classList.add('card-title');
newParagraph.classList.add('card-text');