define("underscore backbone backboneCommon ajaxControl command text!template/config/ConfigTop.html js/view/config/ConfigTopDataPopView".split(" "),function(k,r,a,n,d,t,l){var p,q,h,c,m,g=0,u=function(b){b.preventDefault();if(!(a.isScrolled()||0<g)){g++;a.tapBlock(!0);b={password:a.doc.getElementById("transferPassword").value};var f=function(b){"error"!==b.resultCode&&(a.responseSetStorage(b),new a.PopupClass({title:"Transfer Data",content:"Your password has been set.",closeBtnText:"Close",popupType:"typeC"}),
a.tapBlock(!1),g=0,a.addClass(a.doc.getElementById("menuPanel").getElementsByClassName("noPassIcon")[0],"off"),a.doc.getElementById("transferSettings").textContent="Password Set")};""!==a.doc.getElementById("transferPassword").value?a.doc.getElementById("transferPassword").value===a.doc.getElementById("checkPassWord").value?7<a.doc.getElementById("transferPassword").value.length&&16>a.doc.getElementById("transferPassword").value.length?n.ajaxPost(a.linkList.userPassword,b,f):(new a.PopupClass({title:"Error",
content:"A password must be 8-15 characters.",popupType:"typeC",closeBtnText:"Close"}),a.tapBlock(!1)):(new a.PopupClass({title:"Error",content:"The passwords do not match.",popupType:"typeC",closeBtnText:"Close"}),a.tapBlock(!1)):(new a.PopupClass({title:"Transfer Data",content:"Enter a password.",popupType:"typeC",closeBtnText:"Close"}),a.tapBlock(!1))}},v=function(b){b.preventDefault();a.isScrolled()||0<g||(g++,n.ajaxPost(a.linkList.userChangeName,m,function(b){"error"!==b.resultCode&&(a.responseSetStorage(b),
new a.PopupClass({title:"Change Name",content:"Your Player Name has been updated.",closeBtnText:"Close",popupType:"typeC"}),a.tapBlock(!1),g=0,a.doc.getElementById("userName").textContent=m.name,a.addClass(a.doc.getElementById("nameChange"),"off"))}))};return r.View.extend({events:function(){var b={};b[a.cgti+" #menuPanel .btn"]=this.switchShow;b[a.cgti+" #transfer"]=this.transferHandler;b[a.cgti+" #nameChange"]=this.nameChangeHandler;b[a.cgti+" #idCopy"]=this.userIdCopy;b[a.cgti+" #transferIdCopy"]=
this.transferIdCopy;b[a.cgti+" #cacheClear"]=this.cacheClear;b[a.cgti+" .slider"]=this.sliderCount;b[a.cgti+" #voices .checkBox"]=this.voicePopHandler;b[a.cgti+" #fullVoiceBtn"]=this.fullVoiceDownload;b[a.cgti+" #movies .checkBox"]=this.moviePopHandler;b[a.cgti+" #movieAddBtn"]=this.movieAddBtn;b[a.cgti+" #allDownload"]=this.allDownloadPopHandler;b["change .selectClass"]=this.selectHandler;b[a.cgti+" #pushAP"]=this.pushApToggle;b[a.cgti+" #pushEvent"]=this.pushEventToggle;return b},initialize:function(a){this.template=
k.template(t);g=0;this.createDom()},render:function(){p=n.getPageJson();this.$el.html(this.template(p));return this},createDom:function(){a.content.append(this.render().el);this.resourceConfig={};this.resourceConfig.voice=0;this.resourceConfig.movie=0;this.noticeAp=this.noticeSet=!1;c=this;this.configAllReGet();l.prototype.rootView=this;l.prototype.template=$("#dataPopInner").text();a.setGlobalView();a.scrollSet("dataWrap","configScroll");a.ready.hide();window.isLocal&&window.isBrowser&&(1===c.resourceConfig.voice?
(a.addClass(a.doc.getElementById("voiceDataWrap"),"on"),a.removeClass(a.doc.getElementById("voiceDataOffWrap"),"on"),a.removeClass(a.doc.getElementById("fullVoiceBtn"),"off")):0===c.resourceConfig.voice&&(a.removeClass(a.doc.getElementById("voiceDataWrap"),"on"),a.addClass(a.doc.getElementById("voiceDataOffWrap"),"on"),a.addClass(a.doc.getElementById("fullVoiceBtn"),"off")),2===c.resourceConfig.movie?(a.addClass(a.doc.getElementById("movieDataWrap"),"on"),a.removeClass(a.doc.getElementById("movieDataLowWrap"),
"on"),a.removeClass(a.doc.getElementById("movieDataOffWrap"),"on"),a.removeClass(a.doc.getElementById("movieAddBtn"),"off")):1===c.resourceConfig.movie?(a.removeClass(a.doc.getElementById("movieDataWrap"),"on"),a.addClass(a.doc.getElementById("movieDataLowWrap"),"on"),a.removeClass(a.doc.getElementById("movieDataOffWrap"),"on"),a.removeClass(a.doc.getElementById("movieAddBtn"),"off")):(a.removeClass(a.doc.getElementById("movieDataWrap"),"on"),a.removeClass(a.doc.getElementById("movieDataLowWrap"),
"on"),a.addClass(a.doc.getElementById("movieDataOffWrap"),"on"),a.addClass(a.doc.getElementById("movieAddBtn"),"off")),c.noticeSet?c.noticeSet&&(a.doc.getElementById("pushEvent").textContent="ON"):a.doc.getElementById("pushEvent").textContent="OFF",c.noticeAp?c.noticeAp&&(a.doc.getElementById("pushAP").textContent="ON"):a.doc.getElementById("pushAP").textContent="OFF")},switchShow:function(b){b.preventDefault();if(!a.isScrolled()){var f=a.doc.getElementById("configWrap");f.classList.contains(b.currentTarget.dataset.type)||
(f.className="commonFrame1",a.addClass(f,b.currentTarget.dataset.type),a.removeClass(a.doc.getElementById("menuPanel").getElementsByClassName("current")[0],"current"),a.addClass(b.currentTarget,"current"),a.doc.getElementById("listTitle").textContent=b.currentTarget.textContent,a.doc.getElementById("configWrap").scrollTop=0,"datas"===b.currentTarget.dataset.type&&a.scrollRefresh())}},transferHandler:function(b){b.preventDefault();a.isScrolled()||(g=0,b=k.template(a.doc.getElementById("transferInner").textContent),
new a.PopupClass({title:"Transfer Data",content:b({user:a.storage.user.toJSON()}),exClass:"transferPop",popupType:"typeE",closeBtnText:"Cancel",decideBtnText:"OK"}),a.nativeKeyBoard("transferPassword",-1,1),a.nativeKeyBoard("checkPassWord",-1,1),a.doc.getElementById("popupArea").getElementsByClassName("decideBtn")[0].addEventListener(a.cgti,u))},nameChangeHandler:function(b){b.preventDefault();if(!a.isScrolled()&&!b.currentTarget.classList.contains("off")){g=0;b=k.template($("#nameChangePop").text());
var f=a.doc.getElementById("userName").textContent;new a.PopupClass({title:"Change Name",content:b(),closeBtnText:"Close",decideBtnText:"Change"});a.doc.getElementById("changeName").value=a.doc.getElementById("userName").textContent;a.doc.getElementById("textCount").textContent=f.length;a.doc.getElementById("popupArea").getElementsByClassName("decideBtn")[0].addEventListener(a.cgti,this.nameChangeConfirm);a.nativeKeyBoard("changeName",8,null,"textCount")}},nameChangeConfirm:function(b){b.preventDefault();
a.isScrolled()||(a.tapBlock(!0),m={name:a.doc.getElementById("changeName").value},""===a.doc.getElementById("changeName").value?(new a.PopupClass({title:"Change Name",content:"Enter your Player Name.",closeBtnText:"Close",popupType:"typeC"}),a.tapBlock(!1),g=0):(new a.PopupClass({title:"Change Name",content:"Are you sure you want to change your Player Name to "+m.name+"?\x3cbr\x3e\x3cbr\x3e\x3cspan class\x3d'c_red'\x3ePlayer Names can be changed only once a day.",closeBtnText:"Close",decideBtnText:"Change"}),
a.tapBlock(!1),a.doc.getElementById("popupArea").getElementsByClassName("decideBtn")[0].addEventListener(a.cgti,v)))},userIdCopy:function(b){b.preventDefault();a.isScrolled()||(b=a.storage.gameUser.get("inviteCode"),d.copyClipboard(b),new a.PopupClass({title:"Player ID",content:"Copied to your clipboard.",closeBtnText:"OK",popupType:"typeC"}))},transferIdCopy:function(b){b.preventDefault();a.isScrolled()||(b=a.storage.user.get("personalId"),d.copyClipboard(b),new a.PopupClass({title:"Transfer ID",
content:"Copied to your clipboard.",closeBtnText:"OK",popupType:"typeC"}))},cacheClear:function(b){a.isScrolled()||q||(d.clearWebCache(!0),new a.PopupClass({title:"Cache Clear",content:"Cache has been cleared.",closeBtnText:"Close",popupType:"typeC"}),a.addClass(b.currentTarget,"grayScale"),q=!0)},sliderCount:function(a){a.preventDefault();this.paramaterSet(a.currentTarget.id,a.currentTarget.value)},voicePopHandler:function(b){b.preventDefault();a.isScrolled()||(b={type:"voice"},b.onFlag=1===this.resourceConfig.voice?
!0:!1,new a.PopupClass({title:"Change Data Settings",content:"",popupType:"typeC"},null,null,function(){h.removeView()}),h=new l(b),a.doc.getElementById("popupArea").getElementsByClassName("popupTextArea")[0].appendChild(h.render().el))},fullVoiceDownload:function(b){b.preventDefault();a.isScrolled()||new a.PopupClass({title:"Download All Story Voice Data",content:'Download all remaining Voices for the Main Story. \x3cbr\x3e\x3cspan class\x3d"c_red"\x3e※We recommend using a stable Wi-Fi network.',
closeBtnText:"Cancel",decideBtnText:"OK",exClass:"allDlPop"},null,function(){$(".decideBtn").on(a.cgti,function(b){b.preventDefault();a.isScrolled()||($(".decideBtn").off(),a.androidKeyStop=!0,window.isBrowser?(d.downloadFileConfigPage("fullvoice"),new a.PopupClass({title:"Downloading Data",content:"Data downloaded.",closeBtnText:"OK",popupType:"typeC"}),a.androidKeyStop=!1):($("#commandDiv").on("nativeCallback",function(){$("#commandDiv").off();c.configAllReGet();d.setWebView(!0);d.startBgm(a.settingBgm);
new a.PopupClass({title:"Downloading Data",content:"Data downloaded.",closeBtnText:"OK",popupType:"typeC"});a.androidKeyStop=!1}),d.setWebView(!1),d.downloadFileConfigPage("fullvoice")))})},function(){$(".decideBtn").off()})},moviePopHandler:function(b){b.preventDefault();if(!a.isScrolled()){var f={type:"movie"};f.onFlag=0<this.resourceConfig.movie?!0:!1;f.newType=b.currentTarget.dataset.movieType;f.oldType=this.resourceConfig.movie;new a.PopupClass({title:"Change Data Settings",content:"",popupType:"typeC"},
null,null,function(){h.removeView()});h=new l(f);a.doc.getElementById("popupArea").getElementsByClassName("popupTextArea")[0].appendChild(h.render().el)}},movieAddBtn:function(b){b.preventDefault();a.isScrolled()||($("#commandDiv").on("nativeCallback",function(b,e){$("#commandDiv").off();c.configAllReGet();d.setWebView(!0);d.startBgm(a.settingBgm);new a.PopupClass({title:"Downloading Data",content:"Data downloaded.",closeBtnText:"OK",popupType:"typeC"});a.androidKeyStop=!1}),a.androidKeyStop=!0,d.setWebView(!1),
d.downloadFile("movie",{isVisibleCancel:!0,description:!0,note:!0}))},allDownloadPopHandler:function(b){b.preventDefault();a.isScrolled()||(b=k.template($("#allDownloadPop").text()),new a.PopupClass({title:"Download All",content:b({voice:c.resourceConfig.voice,movie:c.resourceConfig.movie}),closeBtnText:"Cancel",decideBtnText:"OK",exClass:"allDlPop"}),a.doc.getElementById("popupArea").getElementsByClassName("decideBtn")[0].addEventListener(a.cgti,c.allDataDownload),a.addClass(a.doc.getElementById("popupArea").getElementsByClassName("decideBtn")[0],
"popupCloseBtn"))},allDataDownload:function(b){b.preventDefault();a.isScrolled()||(a.androidKeyStop=!0,window.isBrowser?(a.addClass(a.doc.getElementById("voiceDataWrap"),"on"),a.addClass(a.doc.getElementById("movieDataWrap"),"on"),c.resourceConfig.voice=1,c.resourceConfig.movie=1,new a.PopupClass({title:"Downloading Data",content:"Data downloaded.",closeBtnText:"OK",popupType:"typeC"}),a.androidKeyStop=!1):($("#commandDiv").on("nativeCallback",function(){$("#commandDiv").off();$("#commandDiv").on("nativeCallback",
function(){$("#commandDiv").off();c.configAllReGet();d.setWebView(!0);d.startBgm(a.settingBgm);new a.PopupClass({title:"Downloading Data",content:"Data downloaded.",closeBtnText:"OK",popupType:"typeC"});a.androidKeyStop=!1});d.downloadFileConfigPage("all")}),d.setWebView(!1),d.removeAsset("common","nativeCallback")))},selectHandler:function(a){var b=a.currentTarget.dataset.val,e=a.currentTarget.value;if("off"!==e){a=e.substr(0,2)|0;var e=e.substr(2,2)|0,g={};g[b]={};g[b].isEnable=1;g[b].hour=a;g[b].min=
e;d.noticeSetWeekly(g)}else{if(0===this.noticeWeekly[b].isEnable)return;d.noticeOffWeekly('["'+b+'"]')}c.configAllReGet()},pushApToggle:function(b){b.preventDefault();if(!a.isScrolled()){if(this.noticeAp)d.noticeApFullOff();else{b=a.storage.userStatusList.findWhere({statusId:"ACP"}).toJSON();var f=a.storage.userStatusList.findWhere({statusId:"MAX_ACP"}).toJSON();b=a.getApRemainTime(b,f,p.currentTime);1>b?d.noticeApFullTurnOn():d.noticeApFullSet(b)}c.configAllReGet()}},pushEventToggle:function(b){b.preventDefault();
if(!a.isScrolled()){if(this.noticeSet)d.noticeRestore();else{b=a.storage.user.toJSON();var f=a.storage.gameUser.toJSON();d.noticeTurnOn({tag1:b.purchaseTag,tag2:f.levelTag,tag3:f.progressTag})}c.configAllReGet()}},configAllReGet:function(){var b=0;$("#configCallback").on("configCallback",function(d,e){void 0!==e.bgm?a.doc.getElementById("bgmSlider").value=10*e.bgm:void 0!==e.se?a.doc.getElementById("soundSlider").value=10*e.se:void 0!==e.vo?a.doc.getElementById("voiceSlider").value=10*e.vo:void 0!==
e.movie||void 0!==e.voice?(c.resourceConfig.voice=e.voice,c.resourceConfig.movie=e.movie,a.donwloadConfig=e):void 0!==e.pnote?c.noticeSet=1===e.pnote?!0:!1:void 0!==e.Sun?c.noticeWeekly=e:void 0!==e.ap&&(c.noticeAp=1===e.ap?!0:!1,a.noticeAp=c.noticeAp);b++;6<b&&(1===c.resourceConfig.voice?(a.addClass(a.doc.getElementById("voiceDataWrap"),"on"),a.removeClass(a.doc.getElementById("voiceDataOffWrap"),"on")):0===c.resourceConfig.voice&&(a.removeClass(a.doc.getElementById("voiceDataWrap"),"on"),a.addClass(a.doc.getElementById("voiceDataOffWrap"),
"on"),a.addClass(a.doc.getElementById("fullVoiceBtn"),"off")),2===c.resourceConfig.movie?(a.addClass(a.doc.getElementById("movieDataWrap"),"on"),a.removeClass(a.doc.getElementById("movieDataLowWrap"),"on"),a.removeClass(a.doc.getElementById("movieDataOffWrap"),"on"),a.removeClass(a.doc.getElementById("movieAddBtn"),"off")):1===c.resourceConfig.movie?(a.removeClass(a.doc.getElementById("movieDataWrap"),"on"),a.addClass(a.doc.getElementById("movieDataLowWrap"),"on"),a.removeClass(a.doc.getElementById("movieDataOffWrap"),
"on"),a.removeClass(a.doc.getElementById("movieAddBtn"),"off")):(a.removeClass(a.doc.getElementById("movieDataWrap"),"on"),a.removeClass(a.doc.getElementById("movieDataLowWrap"),"on"),a.addClass(a.doc.getElementById("movieDataOffWrap"),"on"),a.addClass(a.doc.getElementById("movieAddBtn"),"off")),c.noticeSet?c.noticeSet&&(a.doc.getElementById("pushEvent").textContent="ON"):a.doc.getElementById("pushEvent").textContent="OFF",c.noticeAp?c.noticeAp&&(a.doc.getElementById("pushAP").textContent="ON"):a.doc.getElementById("pushAP").textContent=
"OFF",k.each(c.noticeWeekly,function(b,d){var c="0"+b.hour,f="0"+b.min;0<b.isEnable&&(a.doc.getElementById(d).getElementsByClassName("selectClass")[0].value=c.substr(-2)+f.substr(-2))}),$("#configCallback").off())});d.getBGMVolume("configCallback");d.getSEVolume("configCallback");d.getVOVolume("configCallback");d.getDownloadConfig("configCallback");d.noticeGetStatus("configCallback");d.noticeGetWeekly("configCallback");d.noticeApConfig("configCallback")},paramaterSet:function(a,c){switch(a){case "bgmSlider":c=
(c/10).toFixed(2);d.setBGMVolume(c);break;case "soundSlider":c=(c/10).toFixed(2);d.setSEVolume(c);break;case "voiceSlider":c=(c/10).toFixed(2),d.setVOVolume(c)}}})});