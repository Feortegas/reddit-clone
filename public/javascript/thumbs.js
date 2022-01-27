var post_id;
var upBtns = document.getElementsByClassName('thumbs-up-btn');
Array.from(upBtns).forEach (element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    post_id = element.dataset.postid;
    addThumbs(true);
  } else if (event.target.className === 'bi bi-hand-thumbs-down') {
    post_id = event.target.getAttribute("data-postid");
    addThumbs(false);
  }
});

var downBtns = document.getElementsByClassName('thumbs-down-btn');
Array.from(downBtns).forEach (element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    post_id = element.dataset.postid;
    addThumbs(false);
    return;
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
    console.log(post_id);
    console.log(thumbsUp);
    alert('check');
    document.location.reload();

  } catch(err) {
    alert(err);
  }
}
