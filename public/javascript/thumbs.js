var upBtns = document.querySelectorAll('.thumbs-up-btn');
for (i of upBtns) {
  i.addEventListener('click', async function(event) {
    event.preventDefault();
    event.stopPropagation();
    const post_id = this.innerHTML.toString().split('i>')[
      this.innerHTML.toString().split('i>').length - 1
    ];
    console.log(post_id);
    const response = await fetch('/api/posts/thumbs', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        thumbs_up: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
    
  });
}

async function thumbsUpClickHandler(event) {
  event.preventDefault();

  const response = await fetch('/api/posts/thumbs', {
    method: 'POST',
    body: JSON.stringify({
      thumbs_up: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  alert(id);
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

async function thumbsDownClickHandler(event) {
  event.preventDefault();

  const response = await fetch('/api/posts/thumbs', {
    method: 'POST',
    body: JSON.stringify({
      thumbs_up: false
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

// document.querySelector('.thumbs-up-btn').addEventListener('click', thumbsUpClickHandler);
// document.querySelector('.thumbs-down-btn').addEventListener('click', thumbsDownClickHandler);

// $(document).on('click', '.thumbs-up-btn', thumbsUpClickHandler);
// $(document).on('click', '.thumbs-down-btn', thumbsDownClickHandler);