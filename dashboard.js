const token = localStorage.getItem("token");
const render = "https://rendertest-gyk4.onrender.com";
//const render = "http://127.0.0.1:4000"

if(!token){
    window.location.href = "/index.html";
}

async function loadProfile(){
    try{
        const response = await fetch(`${render}/api/v1/users/profile1`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
        });
        const data = await response.text();

        if(!(response.ok)){
            window.location.href = "PageNotFound.html";
            console.log("dashboard activated");
            return;
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        document.open();
        document.write(data);
        document.close();
        
        console.log("smthnotrightindashboard");
        
    }catch(error){
        console.error(error);
        return;
    }
}

loadProfile();