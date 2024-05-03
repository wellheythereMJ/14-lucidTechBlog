document.querySelector("#commentBtn").addEventListener("click", function (event)
{
 console.log(event.target)
const blog_post_id = event.target.dataset.id;
const comment = document.querySelector("#comment").value
console.log(blog_post_id, comment)
fetch("/api/comment/", {
  method: "POST",
  body: JSON.stringify({ blog_post_id, comment }),
  headers: {
    "Content-Type": "application/json",
  },
})
 .then((response) => response.json())
 .then((data) => {
    console.log(data);
    document.location.reload();
  })
   .catch((err) => {
      console.log(err);
    });
})


// get data set 

// get user imput 

// fetch call fetch comment routes, the one to add a comment

// comment route will allow to add post to database
