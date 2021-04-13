$(document).ready(function () {
    $(function(){
        $('.product-option .form-check-label .form-check-input:checked').each(function () {
            $(this).closest('.row').find('.pic-box').removeClass('active');
            $(this).closest('.average').find('.pic-box').addClass('active');
        })
        getPrice();
    })

    //计算产品最后的售价
    function getPrice(){
        var total_attr_price = 0 ;
        $('.pic-box.active').each(function(){
            var attr_price = $.trim($(this).closest('.average').find('.attr_price').val());
            total_attr_price += parseFloat(attr_price);
        })

        var price = parseFloat($('.base_price').val()) + total_attr_price;
        $('.price').val(price);

        //从右到左以每3个数字，以逗号隔开
        var str = price + '' ;
        var str_arr = str.split("").reverse();
        var i = 0;
        var new_str = '';
        $.each(str_arr,function(k,v){
            if(i==2){
                new_str += ','+v;
                i = 0;
            }else{
                new_str += v;
                i ++;
            }
        })
        var display_price = new_str.split("").reverse().join("");
        $('.display_price').text(display_price);
    }


    function getTime(){
        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth()+1);
        if(month < 10){
            month = '0' + month.toString();
        }else{
            month = month.toString();
        }
        var day = date.getDate();
        if(day < 10){
            day = '0' + day.toString();
        }else{
            day = day.toString();
        }
        var hour = date.getHours();
        if(hour < 10){
            hour = '0' + hour.toString();
        }else{
            hour = hour.toString();
        }
        var minute = date.getMinutes();
        if(minute < 10){
            minute = '0' + minute.toString();
        }else{
            minute = minute.toString();
        }
        var second = date.getSeconds();
        if(second < 10){
            second = '0' + second.toString();
        }else{
            second = second.toString();
        }
        return year+month+day+hour+minute+second;
    }

    $('.product-option .pic-box').on('click',function(){
        $(this).closest('.row').find('.pic-box').removeClass('active');
        $(this).addClass('active');
        getPrice();
    })


    $('.add-cart').on('click',function(){
        var custom_code = localStorage.getItem("custom_code");
        if(custom_code == "" || custom_code == "undefined" || custom_code == null){
            var rand_num = parseInt(Math.random()*10+0).toString() + parseInt(Math.random()*10+0).toString() ;
            custom_code = getTime() + rand_num;
            localStorage.setItem("custom_code" , custom_code);
        }


        var cart_domin = "http://local.japanshop.yzhps.cn";//需要添加 上线前需要修改地址
        //var cart_domin = "http://japan.yzhps.cn";//需要添加 上线前需要修改地址
        var data = {};
        data['custom_code']= custom_code;
        data['_t']= 'token2'; //上线前，需要确定该网址对应的token,具体和cms各网站配置一样  每个产品页面需要手动配置
        data['attr_name']={};//sku所有属性名 每个产品页面需要手动配置class
        data['attr_value']={};//sku所有属性值 每个产品页面需要手动配置class

        data['product_title'] = $.trim($('.product_title').text()); //每个产品页面需要手动配置class
        data['sku'] =  $.trim($('.sku').val()); //每个产品页面需要手动配置class
        data['quantity'] = $.trim($('.quantity input[type="number"]').val());//购买数量
        data['price'] = $.trim($('.price').val()); //每个产品页面需要手动配置class

        var i = 0;
        $('.attr_name').each(function(){
            data['attr_name'][i] = $.trim($('.attr_name').eq(i).text());
            i ++;
        })

        var i = 0;
        $('.pic-box.active').each(function(){
            data['attr_value'][i] = $.trim($(this).closest('.average').find('.attr_value').text()) ; //需要添加
            i ++;
        })

        data['img_url'] = $('.sku_img').attr('src') == "" ? "":"placehold.it/200x300" ;//sku图片 //需要添加
        data['customize']= $.trim($('input[name="customize"]').val());//定制要求
        $.ajax({
            url: cart_domin+"/index/cart/addCart",
            type: "POST",
            data: data,
            dataType: 'json',
            async: false,
            success: function (json) {
                // 返回值处理
                console.log( json )
                if(json.status == 400){
                    alert(json.message);
                }else{
                    window.location.href=cart_domin+"/index/cart/cartList?_t="+data['_t']+"&custom_code="+custom_code;//跳转到购物车列表
                }
            }
        });
    })
});
