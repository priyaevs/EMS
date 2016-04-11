//$ represents jquery
function hideWidget(obj){
    $(obj).hide();
}

function showWidget(obj){
    $(obj).show();
}

/*
 obj:
*/
getRequestObj=function(ty,url1,dt){
    return {
            type:ty,
            url:url1,
            dataType : "json",
            data:dt
            };
}
