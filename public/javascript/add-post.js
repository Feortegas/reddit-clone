async function newTextPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('textarea[name="post-text"]').value;

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    // document.location.replace('/dashboard');
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

async function newImagePostHandler(event) {
  event.preventDefault();
  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('textarea[name="post-text"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    console.log(response.statusText);
  }
}

document.onpaste = (e) => {
  const imgTabActive = document.querySelector('#image-form').style.display;
  // Make sure clipboard is not empty and Image Tab is currently selected
  if (e.clipboardData.files.length > 0 && imgTabActive === 'block') {
    const fileInput = document.querySelector('#image-file');
    fileInput.files = e.clipboardData.files;
    // Check the recent content of clipboard if it is an image file
    if (e.clipboardData.files[0].type.startsWith("image/")) {
      previewImage(e.clipboardData.files[0]);
    }
  }
};

async function previewImage(file) {
  var fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    document.querySelector('#image-preview').src = fileReader.result;
  };
}

// Toggleable Tabs
function showForm(e, tabName) {
  // Get all elements with class="tabContents" and hide them
  let tabContents = document.querySelectorAll(".tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Get all elements with class="tabLinks" and remove the class "active"
  let tabLinks = document.querySelectorAll(".tab-links");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " active";
}

document.querySelector('#text-form').addEventListener('submit', newTextPostHandler);
document.querySelector('#image-form').addEventListener('submit', newImagePostHandler);
// document.querySelector('#file-preview').addEventListener('change', previewImageFile);