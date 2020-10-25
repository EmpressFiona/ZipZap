define(["jquery","backbone","backboneCommon","command"],function(e,t,c,d){function F(a,b){var d=a.id;a=(new (t.Model.extend({url:b,parse:function(a){return a[d]}}))).fetch({success:function(a,b){c.setStorage(a,d);p[d]=b[d];w(b)}});f.push(a)}function G(a,b){var d=a.id;a=(new (t.Collection.extend({url:b,parse:function(a){return a[d]}}))).fetch({success:function(a,b){c.setStorage(a,d);p[d]=b[d];w(b)}});f.push(a)}function E(a,b){a=e.ajax({url:b,type:"GET",dataType:"json"}).done(function(a){console.log("fetch",
a);for(var b in a)u.push(b),p[b]=a[b];w(a)});f.push(a)}function w(a){"undefined"!==typeof a.resultCode&&"error"==a.resultCode&&y();e.extend(z,a);A+=1;A==B+1&&e(q).trigger("complete",z)}function y(){for(var a=f.length,b=0;b<a;b++)4!=f[b].readyState&&f[b].abort()}function r(){d.startBgm("bgm00_system01");d.changeBg("web_common.ExportJson");d.stopMemoriaTop();d.endQuest();d.endArena();d.endL2d();d.hideMiniChara();d.popEventBranch();d.hideSubQuestBg();d.popEventSingleRaid();d.callTouchesClear();d.weekQuestTopUnset();
d.stopComposeEffect();d.turnOffCamera();d.stopNormalGachaMemoria();d.formationPreviewRemove();d.enemyFormationPreviewRemove();d.endGachaAnimation();d.endPlayMovie();d.hideEventDungeon();d.hideEventRaid();d.setWebView()}function C(a,b){clearTimeout(g);g=null;v=0;"error"!==a.resultCode&&b&&b(a);c.loading.hide()}function H(a,b){clearTimeout(g);g=null;var k=v=0;_.each(a,function(a,n,f){var m=c.storageType[n]||null;u.push(n);p[n]=f[n];switch(m){case "model":var m={},g=t.Model.extend({url:c.linkList[n]});
c.hasModel(n)?(m[n]=a,c.responseSetStorage(m)):(m=new g(a),c.setStorage(m,n));break;case "collection":m={},g=t.Collection.extend({url:c.linkList[n]}),c.hasModel(n)?(m[n]=a,c.responseSetStorage(m)):(a=new g(a),c.setStorage(a,n))}if(Object.keys(f).length-1==k){if(q.interruptCheck(f,b))return;a:{if("undefined"!==typeof f.resultCode&&("error"==f.resultCode&&y(),"maintenance"==f.resultCode)){if(l)break a;l=!0;160>(window.app_ver.split(".").join("")|0)?(r(),location.href="#/Maintenance",location.reload()):
d.nativeReload("#/Maintenance");break a}e(q).trigger("complete",f)}}k=k+1||0})}function x(a,b,k){if(b.responseJSON&&"maintenance"==b.responseJSON.resultCode)l||(l=!0,160>(window.app_ver.split(".").join("")|0)?(r(),location.href="#/Maintenance"):d.nativeReload("#/Maintenance"));else if(0==b.status)c.tapBlock(!1),c.loading.hide(),c.androidKeyStop=!0,new c.PopupClass({title:"Connection Error",popupId:"resultCodeError",content:"Please try again with a stronger connection.",decideBtnText:"Reload",canClose:!1},
null,function(){e("#resultCodeError .decideBtn").on(c.cgti,function(a){e("#resultCodeError .decideBtn").off();d.nativeReload("#/TopPage");window.isDebug&&window.isBrowser&&(location.href="#/TopPage",location.reload())})});else if(429==b.status||502==b.status||503==b.status)b=429==b.status||502==b.status?3E3:1500,clearTimeout(g),g=null,2>=v?g=setTimeout(function(){e.ajax(a);v++;g=null},b):(clearTimeout(g),g=null,v=0,c.loading.hide(),c.tapBlock(!1),c.androidKeyStop=!0,new c.PopupClass({title:"Connection Error",
popupId:"resultCodeError",content:"The server is under heavy access.\x3cbr\x3ePlease try again later.",decideBtnText:"Title",canClose:!1},null,function(){e("#resultCodeError .decideBtn").on(c.cgti,function(a){e("#resultCodeError .decideBtn").off();d.nativeReload("#/TopPage");window.isDebug&&window.isBrowser&&(location.href="#/TopPage",location.reload())})}))}var D,g,v=0,A=0,B=0,z={},p={},u={},f=[],l=!1;e(document).ajaxSend(function(a,b,c){window.g_sns?(b.setRequestHeader("USER-ID-FBA9X88MAE",window.g_sns),
window.isDebug&&window.g_token&&b.setRequestHeader("F4-Access-Token",window.g_token),window.app_ver&&b.setRequestHeader("F4S-CLIENT-VER",window.app_ver),window.sendHostName||(window.sendHostName=location.hostname),b.setRequestHeader("X-Platform-Host",window.sendHostName),window.modelName&&b.setRequestHeader("CLIENT-MODEL-NAME",window.modelName),window.osVersion&&b.setRequestHeader("CLIENT-OS-VER",window.osVersion),window.bootCount&&b.setRequestHeader("CLIENT-SESSION-ID",window.bootCount),window.webInitTime&&
b.setRequestHeader("WEBVIEW-SESSION-ID",window.webInitTime),window.isDebug&&(a={message:""},a.message+=window.g_sns+" /n",a.message+=window.g_token+" /n",a.message+=window.app_ver+" /n",a.message+=window.sendHostName+" /n",a.message+=window.modelName+" /n",a.message+=window.bootCount+" /n",a.message+=webInitTime+" /n",d.sendMessageLog(a))):window.isDebug||window.isBrowser||y()});e(document).ajaxStart(function(a){c.loading.show()});e(document).ajaxError(function(a,b,k,m){"timeout"==m?(c.tapBlock(!1),
c.loading.hide(),c.androidKeyStop=!0,new c.PopupClass({title:"Connection Error",popupId:"resultCodeError",content:"Please try again with a stronger connection.",decideBtnText:"Reload",canClose:!1},null,function(){e("#resultCodeError .decideBtn").on(c.cgti,function(a){e("#resultCodeError .decideBtn").off();d.nativeReload("#/TopPage");window.isDebug&&window.isBrowser&&(location.href="#/TopPage",location.reload())})})):"abort"==m?(c.tapBlock(!1),c.loading.hide()):b.responseJSON&&"maintenance"==b.responseJSON.resultCode&&
!l&&(l=!0,160>(window.app_ver.split(".").join("")|0)?(r(),location.href="#/Maintenance",location.reload()):d.nativeReload("#/Maintenance"))});e(document).ajaxComplete(function(a,b){200==b.status&&b.responseJSON&&b.responseJSON.fox&&d.setFoxData(b.responseJSON.fox);200==b.status&&b.responseJSON&&b.responseJSON.adjust&&d.setAdjustData(b.responseJSON.adjust);if(!window.webInitTime&&b.responseJSON&&b.responseJSON.currentTime){a=b.responseJSON.currentTime.split(" ");var k="";_.each(a[0].split("/"),function(a){k+=
a});_.each(a[1].split(":"),function(a){k+=a});window.webInitTime=k}400==b.status?c.loading.hide():b.responseJSON&&"maintenance"==b.responseJSON.resultCode?l||(l=!0,160>(window.app_ver.split(".").join("")|0)?(r(),location.href="#/Maintenance",location.reload()):d.nativeReload("#/Maintenance")):200!==b.status&&429!==b.status&&502!==b.status&&503!==b.status?(a=b.status?b.status:"-",window.isBrowser&&404==b.status||(D=function(){c.tapBlock(!1);c.loading.hide();e("#resultCodeError .decideBtn").on(c.cgti,
function(a){e("#resultCodeError .decideBtn").off();d.nativeReload("#/TopPage");window.isDebug&&window.isBrowser&&(location.href="#/TopPage",location.reload())})},c.androidKeyStop=!0,"-"==a?new c.PopupClass({title:"Connection error",popupId:"resultCodeError",content:"Please try again with a stronger connection.",decideBtnText:"Reload",canClose:!1},null,D):new c.PopupClass({title:"Unexpected error",popupId:"resultCodeError",content:"An unexpected error occurred.\x3cbr\x3eWe are sorry for the inconvenience.["+
a+"]",decideBtnText:"Title",canClose:!1},null,D))):b.responseJSON&&"error"==b.responseJSON.resultCode&&(c.tapBlock(!1),c.loading.hide(),new c.PopupClass({title:b.responseJSON.title,popupId:"resultCodeError",content:b.responseJSON.errorTxt,closeBtnText:"Close"}))});e.ajaxSetup({timeout:2E4});var q={interruptCheck:function(a,b){a.forceClearCache&&d.clearWebCache();if(a.resourceUpdated)return c.androidKeyStop=!0,new c.PopupClass({title:"Update",popupId:"resultCodeError",content:"Data has been updated.\x3cbr\x3eReturning to the Title Page.",
decideBtnText:"Title",canClose:!1},null,function(){c.tapBlock(!1);c.loading.hide();e("#resultCodeError .decideBtn").on(c.cgti,function(a){e("#resultCodeError .decideBtn").off();d.nativeReload("#/TopPage");window.isDebug&&window.isBrowser&&(location.href="#/TopPage",location.reload())})}),!0;a.interrupt&&!b&&(-1==a.interrupt.page.indexOf(c.location)&&(c.interrupt=a.interrupt.page),location.href=a.interrupt.page,b=window.app_ver.split(".").join("")|0,"#/TopPage"==a.interrupt.page?160>b||window.isDebug&&
window.isBrowser?(r(),location.href="#/TopPage",location.reload()):d.nativeReload("#/TopPage"):"#/NewVersionRecommend"==a.interrupt.page?160>b||window.isDebug&&window.isBrowser?(r(),location.href="#/NewVersionRecommend",location.reload()):d.nativeReload("#/NewVersionRecommend"):"#/Ban"==a.interrupt.page&&(160>b||window.isDebug&&window.isBrowser?(r(),location.href="#/Ban",location.reload()):d.nativeReload("#/Ban")));return!1},ajaxPost:function(a,b,c){f=[];a=e.ajax({url:a,type:"POST",contentType:"application/JSON",
dataType:"JSON",data:JSON.stringify(b),error:function(a){console.log("通信エラーのポップアップ出したい");x(this,a)},success:function(a){C(a,c)}});f.push(a)},ajaxPlainPost:function(a,b,c){f=[];a=e.ajax({url:a,type:"POST",contentType:"text/plain",dataType:"text",data:b,error:function(a){x(this,a)},success:function(a){C(a,c)}});f.push(a)},ajaxSimpleGet:function(a,b,c){f=[];a=e.ajax({url:""!==b?a+"/"+b:a,type:"GET",error:function(a){x(this,a)},success:function(a){window.isLocal&&(a=JSON.parse(a));q.interruptCheck(a,
!1)||C(a,c)}});f.push(a)},pageModelGet:function(a,b,c){window.g_sns||d.getSNS();window.isDebug&&!window.g_token&&d.getAccessToken();if(window.isLocal)this.eachGet(a,b);else this.onceGet(a,b,c)},eachGet:function(a,b){p=null;p={};A=0;f=[];u=null;u=[];-1!==location.href.indexOf("file:///")&&""!==c.location&&E({id:c.location},"/magica/json/page/"+c.location+".json");b=0;z={};for(B=a.length;b<B;){var d=c.storageType[a[b].id]||null,e=c.linkList[a[b].id];if(!c.hasModel(a[b].id)||a[b].refresh)switch(d){case "model":F(a[b],
e);break;case "collection":G(a[b],e);break;case null:E(a[b],e)}else p[a[b].id]=c.storage[a[b].id].toJSON(),w(c.storage[a[b].id].toJSON());b=b+1|0}},onceGet:function(a,b,d){var f=d?"POST":"GET";p=null;p={};u=null;u=[];for(var g=b?!0:!1,k=b="",h=0,l=0;h<a.length;){var r=c.storageType[a[h].id]||null,q=c.hasModel(a[h].id),v=a[h].refresh;!q||q&&v?("collection"===r&&q&&c.storage[a[h].id].reset(),delete c.storage[a[h].id],"GET"==f?b+=0===l?"value\x3d"+a[h].id:","+a[h].id:"POST"==f&&(k+=0===l?""+a[h].id:
","+a[h].id),l=l+1|0):p[a[h].id]=c.storage[a[h].id].toJSON();h=h+1|0}var t;"GET"==f?t=b=-1!=b.indexOf("value\x3d")?b+("\x26timeStamp\x3d"+(new Date).getTime()):b+("timeStamp\x3d"+(new Date).getTime()):"POST"==f&&(""!==k&&(d.value=k),t=JSON.stringify(d));a={url:"/magica/api/page/"+c.location,type:f,dataType:"json",data:t};"POST"==f&&(a.contentType="application/JSON");a.error=function(a){x(this,a)};a.success=function(a){H(a,g)};e.ajax(a)},getPageJson:function(){return p},getPagePureJsons:function(){return u}};
return q});