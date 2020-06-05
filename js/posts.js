class Posts {
    async getPosts() {
        fetch('posts.json')
          .then(async response => {
            const postData = await response.json()
            var postsElement = document.getElementById("posts");
            Array.prototype.forEach.call(postData, function (el) {
              const post = document.createElement('div');
              post.setAttribute('class', 'col-lg-3 col-md-6 col-sm-12 mt-4 mb-4');
              post.innerHTML = `
                <img src="${el.url}" class="img-fluid" alt="image">
                <h3 class="text-light font-weight-bold mt-3 text-center">${el.title}</h3>
                <p class="text-light mt-3  text-justify text-p">${el.body}</p>
                <div class="rating text-danger ">
                  <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
              `;
              postsElement.appendChild(post)
            });
          })
      }

      getById(id){

      }
}