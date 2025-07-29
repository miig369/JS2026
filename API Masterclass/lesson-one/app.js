const element = document.querySelector(".repos");

fetch("https://api.github.com/users/miig369/repos")
.then((response)=>{
    return response.json()
})
.then(data => console.log(data))
.catch(error => console.log(error))


const getRepos = async() =>{
    try{
        const response = await fetch("https://api.github.com/users/miig369/repos");
        const data = await response.json();
        return data;

    }catch(error){
        console.log(error);
    } 
}

getRepos().then(result => {
    element.innerHTML = result.map((data)=>{
        return `<li>
            <a href="${data.html_url}">${data.name}</a>
            <span>${data.size}</span>
        </li>`
    }).join("")
})
