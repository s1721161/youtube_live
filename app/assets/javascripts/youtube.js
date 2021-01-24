var active=0;

$(function () {
    $('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('nav').removeClass('open');
      $('.overlay').removeClass('open');
    } else {
      $(this).addClass('active');
      $('nav').addClass('open');
      $('.overlay').addClass('open');
    }
  });
  $('.overlay').on('click',function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $('.menu-trigger').removeClass('active');
      $('nav').removeClass('open');      
    }
  });
});
$(function get_size(){
    var b=$(".item");
    console.log(b.height());
});

$(function () {
    $(".modal-open").click(function () {
        $(this).blur(); 
        if ($(".modal-overlay")[0]) return false;
        $("body").append('<div class="modal-overlay"></div>'); 
        $(".modal-overlay").fadeIn("slow");
        $(".modal").fadeIn("slow");
        $(".modal-overlay,.modal-close").unbind().click(function () {
            $(".modal,.modal-overlay").fadeOut("slow", function () {
                $('.modal-overlay').remove(); 
            });
        });
    });
});



var tmp = $('.live:last').data('id');
$(function () {
    function buildMESSAGE(message) {
        var search=$.inArray(message.vid, list);
        if(search!=-1){

        }
        else if ($("span#" + message.vid) ==message.vid && search!=-1) {
            $("iframe." + message.vid).remove();
            $("span#" + message.vid).remove();
        }

        else{
            list.push(message.vid)
            console.log(list);
            var did= message.id;
            var title=message.title;
            var messages = $('#liveitem').append('<span id="'+message.vid +'" data-title="'+title+'"><img src="'+ message.pic +'" class="live" data-id="' + did + '"id="' + message.vid + '"onclick="createEMBED(this.id,' +did+ ', this.src)"></span><p class="info">'+ title +' </p>');
        }
    }

$(function () {
    setInterval(update, 1000);
});

function update() { 
    if ($('.live')[0]) { 
        var message_id = $('.live:last').data('id'); 

    } 
    else {
        var message_id = 0
    }
    $.ajax({
        url: location.href,
        type: 'GET',
        data: {
            message: { id: message_id } 
        },
        dataType: 'json'
    })
    .always(function (data) { 
        $.each(data, function (i, data) { 
                buildMESSAGE(data); 
        });
    });
}
});

function ahoo(id){
    $("img#"+id).hover(function(){
        $(this).next("p").show();
    },function(){
        $(this).next("p").hide();
    });
    //$("img#"+id).mouseenter(function(){ 
        //var a =$(this).attr("data-title")
    //})
};


function resize_iframe(){
    $("iframe").on("load", function(){
        if(active==1){
            try {
                $(this).width(1349);
                $(this).height(758);
            } catch (e) {
            }      
         }
         if(active==2){
            try {
                $(this).width(765);
                $(this).height(430);
            } catch (e) {
            }      
         }
         if(active==3 || active==4){
            try {
                $(this).width(672);
                $(this).height(378);
            } catch (e) {
            }      
         }
         if(active==5 || active==6){
            try {
                $(this).width(508);
                $(this).height(286);
            } catch (e) {
            }      
         }
         if(active==7 || active==8 || active==9){
            try {
                $(this).width(446);
                $(this).height(251);
            } catch (e) {
            }      
         }
         if(active==10 || active==11 || active==12){
            try {
                $(this).width(380);
                $(this).height(213);
            } catch (e) {
            }      
         }
         if(active>12){
            try {
                $(this).width(333);
                $(this).height(187);
            } catch (e) {
            }      
         }
    });
    $("iframe").trigger("load");
}

function removeEMBED(id, data_id, src){
    var did = data_id;
    var a = $("span#"+id).data();
    if(active==1){
        $("#playeing").removeClass("nowplaying");
    }
    active--;
    $("iframe."+id).remove();
    $("span#"+id).html('<img src="' + src + '" class="live" title="a" data-title="'+ a.title +'" data-id="' + did + '" id="' + id + '"onclick="createEMBED(this.id,'+did+', this.src)"></span><p class="info">'+ a.title +' </p>');
    $(".live" + "#" + id).css('outline', " ");
    ahoo(id);
    resize_iframe();
}


function createEMBED(id, data_id, src) {
    var a = $("span#"+id).data();
    var did=data_id;
    if(active==0){
        $("#playing").addClass("nowplaying");
    }
    active++;
    $("span#"+id).html('<img src="' + src + '" class="live" title="a" data-title="'+ a.title +'" data-id="' + did + '" id="' + id + '"onclick="removeEMBED(this.id,'+did+ ', this.src)"></span><p class="info">'+ a.title +' </p>');
    $("#playing").append('<iframe class="'+id+'" id ="'+id+'" data-vid="'+ did +'" width="534" height="334" src="https://www.youtube.com/embed/' + id +'?autoplay=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>');
    $("#" + id + ">" + ".live" ).css('outline', 'thick double #32a1ce');
    ahoo(id);
    resize_iframe();
}



$(document).ready(function () {
    $("p").text("jQuery稼働テスト(稼働中)");
});
