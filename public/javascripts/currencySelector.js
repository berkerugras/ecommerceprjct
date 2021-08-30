var selector = document.getElementById("currencySelector");
var currencyElements = document.getElementById("price");
var oldPrice=currencyElements.innerText

$(document).ready(function (){
    $("#currencySelector").change(function (){
        $.ajax({
            url: 'https://api.exchangerate-api.com/v4/latest/USD',
            type:'GET',
            dataType:'json',
            success:function (data,textStatus,xhr){
                var usdChangeRate = data.rates
                oldPrice=parseFloat(oldPrice)
                if(selector.value.toUpperCase() in usdChangeRate) {
                    var temp=selector.value.toUpperCase();
                    document.getElementById("price").innerText = Math.round(oldPrice*usdChangeRate[temp]).toString()
                }
            },
            error: function () {
                alert("An error occurred!")
            }
        })
    })
})
