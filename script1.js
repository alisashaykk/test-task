 var token = '1372534187.cd41f12.0f93d3e11bc44c77bd2beb705843d120',
    x = 0;
    y = 0;
    num = 12; // количество загрузок за один раз

$.ajax({    
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token},
    success: function(data){
        console.log(data);
        for( x ; x < num; x++ )
        {	 var date = new Date(parseInt(data.data[x].created_time) * 1000);
            $('table').append('<tr><td rowspan="3"><img src="'+data.data[x].images.standard_resolution.url+'"></td><td><img src="h1.png"></td><td class="likes">' +data.data[x].likes.count+ '</td></tr><tr><td class="description" colspan="2">' +data.data[x].caption.text+ '</td></tr><tr><td colspan="2" class="date">' +(date.getDate()+1)+"/"+date.getMonth()+"/"+date.getFullYear()+ '</td></tr>');
        }

        y = y + num;
    },
    error: function(data){
        console.log(data);
    }
});

//отклик
$(document).ready(function(){

    $("#button").on("click",function (){    
        $.ajax({    
            url: 'https://api.instagram.com/v1/users/self/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: {access_token: token},
            success: function(data){
                console.log(data);
                for( x ; x < y + num; x++ )
                {    
                    var date = new Date(parseInt(data.data[x].created_time) * 1000);
                    $('table').append('<tr><td rowspan="3"><img src="'+data.data[x].images.standard_resolution.url+'"></td><td><img src="h1.png"></td><td class="likes">' +data.data[x].likes.count+ '</td></tr><tr><td class="description" colspan="2">' +data.data[x].caption.text+ '</td></tr><tr><td colspan="2" class="date">' +(date.getDate()+1)+"/"+date.getMonth()+"/"+date.getFullYear()+ '</td></tr>');
                }

                y = y + num;
            },
            error: function(data){
                console.log(data);
            }
        });
    });
});