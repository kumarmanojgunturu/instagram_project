document.addEventListener('DOMContentLoaded', function() {
    const feed = document.getElementById('feed');
  
    // Example data (you can replace it with real data from a backend)
    const posts = [
      { 
        username: 'JohnDoe', 
        profilePic: 'https://via.placeholder.com/40', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        likes: 10 
      },
      { 
        username: 'JaneSmith', 
        profilePic: 'https://via.placeholder.com/40', 
        content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 
        likes: 5 
      }
    ];
  
    // Render posts
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      postElement.innerHTML = `
        <header>
          <img class="profile-pic" src="${post.profilePic}" alt="Profile Picture">
          <h3>${post.username}</h3>
        </header>
        <p>${post.content}</p>
        <footer>
          <span class="like-btn">${post.likes} Likes</span>
        </footer>
      `;
  
      feed.appendChild(postElement);
  
      // Like button functionality
      const likeBtn = postElement.querySelector('.like-btn');
      let liked = false;
      likeBtn.addEventListener('click', () => {
        liked = !liked;
        post.likes += liked ? 1 : -1;
        likeBtn.textContent = `${post.likes} ${liked ? 'Liked' : 'Likes'}`;
      });
    });
  });
  