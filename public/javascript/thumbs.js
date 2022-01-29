var post_id;
var upBtns = document.getElementsByClassName('thumbs-up-btn');
Array.from(upBtns).forEach (element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    post_id = element.dataset.postid;
    addThumbs(true);
  });
});

var downBtns = document.getElementsByClassName('thumbs-down-btn');
Array.from(downBtns).forEach (element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    post_id = element.dataset.postid;
    addThumbs(false);
  });
});
   
async function addThumbs(thumbsUp){
  try {
    const response = await fetch('/api/posts/thumbs', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        thumbs_up: thumbsUp
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.location.reload();

  } catch(err) {
    console.log(err);
  }
}
