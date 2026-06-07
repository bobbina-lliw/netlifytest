const token = localStorage.getItem("token");
const render = "https://rendertest-gyk4.onrender.com";
if(!token){
    window.location.href = "/index.html";
}

async function loadProfile(){
    try{
        const response = await fetch(`${render}/api/v1/users/profile`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
        });
        const data = await response.json();
        
        if(!(response.ok)){
            window.location.href = "PageNotFound.html";
            console.log("dashboard activated");
            return;
        }
        console.log("smthnotrightindashboard");
        
    }catch(error){
        console.error(error);
        return;
    }
}

