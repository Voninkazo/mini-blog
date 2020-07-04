console.log('it works');

// code your solution in here
const myPost = () => {
  //Here we will create all elements we need
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
  newSpaceDiv.classList.add('card', 'some-space');
  newBodyDiv.classList.add('card-body');
  newTitle.classList.add('card-title');
  newParagraph.classList.add('card-text');

  //Here we are going to assign the title and the paragraph to their own contents according to the inputs.
  newTitle.textContent = document.getElementById('new-post-title').value;
  newParagraph.textContent = document.getElementById('new-post-title').value;

  return newSpaceDiv;// We return the storage div that contains all of the elements
}

//Now we will listen for the event click
const submitButton = document.getElementById('submit-form');
const newPostList = document.getElementById('post-list');
submitButton.addEventListener('click', ($event) => {
  const realPost = myPost();
  newPostList.appendChild(realPost);//Here we append the new post inside of the div

  // to stop the submission
  $event.preventDefault();
});
