// Add the coffee to local storage with key "coffee"

async function orderplace()
{
    let res=await fetch("https://masai-mock-api.herokuapp.com/coffee/menu")
    let data1= await res.json()
    // console.log(data)
    display(data1.menu.data)
}

orderplace()
var arr=JSON.parse(localStorage.getItem("coffee")) || []

function display(data)
{
    let container=document.getElementById("menu")
    data.map(function(el)
    {
        let box=document.createElement("div");
         box.setAttribute("class","innerbox")

        let image=document.createElement("img")
        image.src=el.image;
        image.setAttribute("id","bucketimg")

         let name=document.createElement("h2")
         name.innerText=el.title;

        let price=document.createElement("h3")
        price.innerText=el.price;

        let btn=document.createElement("button")
        btn.innerText="Add to bucket"
        btn.setAttribute("id","add_to_bucket")

        btn.addEventListener("click",function()
        {
            bucket(el)
        })
        box.append(image,name,price,btn)
        container.append(box)
    })

   
}

function bucket(el)
{
    arr.push(el)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload();
}

document.getElementById("coffee_count").innerText=arr.length;