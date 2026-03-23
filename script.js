const form = document.getElementById("loginForm");

if(form){
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("https://rendertest-gyk4.onrender.com/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        document.getElementById("message").innerText = "Login successful!";
        
        // Save token if you return one
        localStorage.setItem("token", data.token);

      } else {
        document.getElementById("message").innerText = data.message;
      }

    } catch (error) {
      console.error(error);
      document.getElementById("message").innerText = "Error connecting to server";
    }
  });
}


const profileBtn = document.getElementById("profileBtn");
if(profileBtn){
  profileBtn.addEventListener("click",async() =>{
    const token = localStorage.getItem("token");
    try{
      const response = await fetch("https://rendertest-gyk4.onrender.com/api/v1/users/profile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });

      const data = await response.json();
      
      if(response.ok){
        window.location.href = "profile.html";
        return;
      }
      window.location.href = "PageNotFound.html";
      return;
    }catch(error){
      console.error(error);
      document.getElementById("message").innerText = "Error connecting to server";
      return;
    }
  })
}

const removetoken = document.getElementById("removetoken");
if(removetoken){
  removetoken.addEventListener("click",async() =>{
    localStorage.removeItem("token");
    return;
  })
}
