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
    //オーバーレイとコンテンツの表示
    $(".modal-open").click(function () {
        $(this).blur(); //ボタンからフォーカスを外す
        if ($(".modal-overlay")[0]) return false; //新たにオーバーレイが追加されるのを防ぐ
        $("body").append('<div class="modal-overlay"></div>'); //オーバーレイ用のHTMLをbody内に追加
        $(".modal-overlay").fadeIn("slow"); //オーバーレイの表示
        $(".modal").fadeIn("slow"); //モーダルウインドウの表示

        //モーダルウインドウの終了
        $(".modal-overlay,.modal-close").unbind().click(function () {
            $(".modal,.modal-overlay").fadeOut("slow", function () { //閉じるボタンかオーバーレイ部分クリックでフェードアウト
                $('.modal-overlay').remove(); //フェードアウト後、オーバーレイをHTMLから削除
            });
        });
    });
});



var list = []
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
            var messages = $('#liveitem').append('<span id="'+message.vid +'"><img src="'+ message.pic +'" class="live"  data-id="' + did + '"id="' + message.vid + '"onclick="createEMBED(this.id,' +did+ ', this.src)"></span>');
}
    }


    $(function () {
        setInterval(update, 1000);
    });
    function update() { 
        if ($('.live')[0]) { 
            var message_id = $('.live:last').data('id'); 

        } else { //ない場合は
            var message_id = 0 //0を代入
        }
        $.ajax({ //ajax通信で以下のことを行う
            url: location.href, //urlは現在のページを指定
            type: 'GET', //メソッドを指定
            data: { //railsに引き渡すデータは
                message: { id: message_id } //このような形(paramsの形をしています)で、'id'には'message_id'を入れる
            },
            dataType: 'json' //データはjson形式
        })
        .always(function (data) { 
                $.each(data, function (i, data) { 
                    buildMESSAGE(data); 
                });
            });
    }
});

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
    if(active==1){
        $("#playeing").removeClass("nowplaying");
    }
    active--;
    $("iframe."+id).remove();
    $("span#"+id).html('<img src="' + src + '" class="live" data-id="' + did + '" id="' + id + '"onclick="createEMBED(this.id,'+did+', this.src)">');
    $(".live" + "#" + id).css('outline', " ");
    resize_iframe();
}


function createEMBED(id, data_id, src) {
    var did=data_id;
    if(active==0){
        $("#playing").addClass("nowplaying");
    }
    active++;
    $("span#"+id).html('<img src="' + src + '" class="live" data-id="' + did + '" id="' + id + '"onclick="removeEMBED(this.id,'+did+ ', this.src)">');
    $("#playing").append('<iframe class="'+id+'" id ="'+id+'" data-vid="'+ did +'" width="534" height="334" src="https://www.youtube.com/embed/' + id +'?autoplay=1 frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>');
    $("#" + id + ">" + ".live" ).css('outline', 'thick double #32a1ce');
    resize_iframe();
}



$(document).ready(function () {
    $("p").text("jQuery稼働テスト(稼働中)");
});
