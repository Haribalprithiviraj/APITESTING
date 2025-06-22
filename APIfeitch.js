let test = document.querySelector('#post')
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    data.forEach(item => {
        test.innerHTML += `
        <div>
            <h1>${item.id} - ${item.title}</h1>
            <p>${item.body}</p>
         </div>   
            `
    });
})