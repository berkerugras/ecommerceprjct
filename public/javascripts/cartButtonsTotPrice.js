const product_ID = document.getElementsByClassName("productID");
const variantID=document.getElementsByClassName("cartdetail-container");
const input=document.getElementsByClassName('quantity')
let sum=0;
for(let i=0;i<input.length;i++) {
    let price= cart.items[i].variant.price
    document.getElementsByClassName("price_text")[i].innerHTML="<b>Price:</b>"+`<span class="productPrice">${price*input[i].value}</span>`+"$"
    sum=sum+price*input[i].value;
    input[i].addEventListener('input', (e) => {
        if (e.target.value === "0" || e.target.value==="") {
            if (confirm('Are you sure you want to remove the item')) {
                e.target.value="0";
            } else {
                e.target.value = 1;
            }
        }

        $.ajax({
            type:'GET',
            url:"/cart/changeItemQuantity/"+product_ID[i].id+"/"+variantID[i].id+"/"+e.target.value,
            dataType:'json',
            success:function (data,textStatus,xhr){
                let pDifference;
                let total;
                pDifference=price*e.target.value-parseFloat(document.getElementsByClassName("productPrice")[i].innerText)
                total=pDifference+parseFloat(document.getElementById("SumPrice").innerText)

                document.getElementsByClassName("price_text")[i].innerHTML="<b>Price:</b>"+`<span class="productPrice">${price*e.target.value}</span>`+"$"
                document.getElementById("total_Price").innerHTML="Total Price: "+`<b id="SumPrice">${total.toFixed(2)} $</b>`
                if(e.target.value==="0" || e.target.value==="" ){
                    location.reload()
                }

            },
            error: function () {
                alert("An error occurred!")
            }

        })
    })
}
document.getElementById("total_Price").innerHTML="Total Price: "+`<b id="SumPrice">${sum.toFixed(2)}</b>`
