//const render = "https://rendertest-gyk4.onrender.com";
const render = "http://127.0.0.1:4000"
const token = localStorage.getItem("token");
const form = document.getElementById("loginForm");


if(form){
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${render}/api/v1/users/login`, {
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

/*const testbutton = document.getElementById("testbutton");
if(testbutton){
  testbutton.addEventListener("click",async()=> {
    window.location.href = "profile.html";
  })
}
*/


const profileBtn = document.getElementById("profileBtn");
if(profileBtn){
  profileBtn.addEventListener("click",async() =>{
    try{
        const response = await fetch(`${render}/api/v1/users/profile1`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
        });
        //const data = await response.text();
        
        if(!(response.ok)){
          //alert("issue");  
          window.location.href = "PageNotFound.html";
            
            console.log("dashboard activated");
            return;
        }
        
        window.location.href = "profile.html";
        //alert("issue");
        console.log("smthnotrightinscript.js");
        return;
        
    }catch(error){
        console.error(error);
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
