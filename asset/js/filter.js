//base url
const baseUrl = 'http://localhost:800';
// window.location.href = baseUrl + "/login.html";
let data = {email:"jubaer@gmail.com",password:'dfjsdfj'};

localStorage.getItem("isLogin") ? window.location.href = baseUrl + "/" : '';

async function logMovies() {
    const response = await fetch("http://localhost:8000/login",{
      method:"POST",
      body: JSON.stringify(data)
    });
  
     const movies = await response.json();

     if(movies.login){
        localStorage.setItem("isLogin", "true");
        localStorage.removeItem("isLogin");
        let x = localStorage.getItem("isLogin");
        console.log(x)
     }
    // const movies = await JSON.parse(response);

    // fetch('http://localhost:8000/readAll?id=65998aad755fc93c5d17c141')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));

    console.log(movies)
  }
  logMovies()
  

  