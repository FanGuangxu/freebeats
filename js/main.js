$(function(){
    $("a.shop_ico,a.user_ico").click(function(){
        
        var canshu,url;
            var src=$("div.leftbox").find("iframe").attr("s");
            if($(this).attr("class")=="shop_ico"){
                canshu="?t=shop";
            }else{
                canshu="?t=user";
            }
            url=src+canshu;
            $("div.leftbox").find("iframe").attr("src",url);
        
        
        $("div.jianting").stop().animate({
            marginLeft:'-450px'
        },function(){
            $("div.bg").show();
            
        });
        $("div.leftbox").stop().animate({
            marginRight:'0px'
        },function(){
            $("div.bg").click(function(){
                $("div.bg").hide();
                $("div.jianting").stop().animate({marginLeft:'0px'})
                $("div.leftbox").stop().animate({marginRight:'-450px'})
            })
        });
    })
    
    
   
    //头部搜索
    
    
    $("a.search_ico").mouseleave(function(){          
         $('div.topsearch').show(0,function(){
             $("input#topsearch").focus(function(){
                 $(this).val("");
             })
             $("input#topsearch").blur(function(){
                 $(this).val("搜索相关产品...");
             })
         });
     })
    
    $(document).bind('click',function(e){
                var e = e || window.event; //浏览器兼容性
                var elem = e.target || e.srcElement;
                while (elem) { //循环判断至跟节点，防止点击的是div子元素
                    if (elem.id && elem.id=='test') {
                        return;
                    }
                    elem = elem.parentNode;
                }
                $('div.topsearch').css('display','none'); //点击的不是div或其子元素
            });
    
     $("form#formindexsearch").submit(function(){
         var val=$.trim($("#topsearch").val());
         if(val=="" || val=="搜索相关产品..."){
             layer.alert('请输入关键字!', {icon: 2});
             return false;
         }else{
             layer.alert('缺少产品!', {icon: 2});
         }
         return false;
     })
    
    
     
   //ifarme
$("#iframeId").load(function(){
	var mainheight = $(window).height();    
	$(this).height(mainheight);
}); 
 
$("#iframeId").resize(function(){
    var mainheight = $(window).height();    
	$(this).height(mainheight);
})
    
})