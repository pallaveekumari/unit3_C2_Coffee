// On clicking remove button the item should be removed from DOM as well as localstorage.



var bucket=JSON.parse(localStorage.getItem("coffee"));


bucket.map(function(el,index)
{

    let innerbox=document.createElement("div")
    
    let image=document.createElement("img")
    image.src=el.image;

     let name=document.createElement("h2")
     name.innerText=el.title;

    let price=document.createElement("h3")
    price.innerText=el.price;

    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.setAttribute("id","remove_coffee")

    btn.addEventListener("click",function()
    {
        Remove(el,index)
    })
    innerbox.append(image,name,price,btn)
   document.getElementById("bucket").append(innerbox)

})


function Remove(el,index)
{
    bucket.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(bucket))
    window.location.reload()
}

let sum=0;
for(let i=0;i<bucket.length;i++)
{
    sum=sum+bucket[i].price;
}

document.getElementById("total_amount").innerText=sum;