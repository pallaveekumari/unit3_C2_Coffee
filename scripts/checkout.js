document.getElementById("confirm").addEventListener("click",order)

function order ()
{

    event.preventDefault();

    var ord=new Promise(function (resolve,reject)
    {
        setTimeout(function()
        {
            resolve("Your order is accepted")
        });
    })

    var ord1=new Promise(function (resolve,reject)
    {
        setTimeout(function()
        {
            resolve("Your order is being Prepared")
        },3000);
    })

    var ord2=new Promise(function (resolve,reject)
    {
        setTimeout(function()
        {
            resolve("Your order is being packed")
        },8000);
    })

    var ord3=new Promise(function (resolve,reject)
    {
        setTimeout(function()
        {
            resolve("Your order is out for delivery")
        },10000);
    })
    var ord4=new Promise(function (resolve,reject)
    {
        setTimeout(function()
        {
            resolve("Order delivered")
        },12000);
    })

    ord.then(function(res)
    {
        alert(res)
    })

    ord1.then(function(res)
    {
        alert(res)
    })

    ord2.then(function(res)
    {
        alert(res)
    })
    ord3.then(function(res)
    {
        alert(res)
    })
    ord4.then(function(res)
    {
        alert(res)
    })
    
}