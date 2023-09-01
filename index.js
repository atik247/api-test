// const handleCategory = () =>{
//     console.log("hello first");
//     // fetch("https://openapi.programming-hero.com/api/videos/categories")
//     // .then(res=>res.json())
//     // .then((data)=> console.log(data))
//     // .catch((err) => console.log(data));


//     console.log("hello second");
// };

// handleCategory();


// const handleCategory = async () =>{
//     console.log("hello first");
//    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
//     const data = await response.json();
//     console.log(data);


//     console.log("hello second");
// };

// handleCategory();


const handleCategory = async () =>{
    
   const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    const tabContainer=document.getElementById("tab_container");
    data.data.news_category.slice(0, 3).forEach((category) => {
        const div=document.createElement("div")
        div.innerHTML= `
        <a class="tab">${category.category_name}</a> 
        `;
        tabContainer.appendChild(div);
        
    });

    console.log(data.data.news_category);

};

handleCategory();