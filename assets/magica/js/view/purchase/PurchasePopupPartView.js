define(["underscore","backbone","backboneCommon","ajaxControl","command"],function(n,m,a,k,f,p){var g,h=!1,l=!1;return m.View.extend({className:"stoneWrap commonFrame4",events:function(){return{}},initialize:function(a,b){this.listenTo(this.parentView,"removeChild",this.removeView);this.model=a;h=!1;l=b},render:function(){var a=this.model.commonMoney.coin+" USD";l&&(a=this.model.commonMoney.subCoin+" CAD");3<a.length&&(a=a.replace(/(\d)(?=(\d\d\d)+$)/g,"$1,"));this.$el.html(this.template({model:this.model,
dispNum:a}));return this},purchaseConfirm:function(e){e.preventDefault();if(!a.isScrolled()){var b=a.storage.user.toJSON(),d=k.getPageJson().currentTime;(b=b.purchaseAt)&&(d.substr(0,7),b.substr(0,7));g=this;this.purchaseDecide(e)}},ageCheck:function(){var e=a.storage.user.toJSON().birthDay.split("/"),b=k.getPageJson().currentTime.split(" ")[0].split("/"),d=Number(b[0]-e[0]);Number(e[1])>Number(b[1])&&d--;return d},purchaseDecide:function(e){e.preventDefault();if(!a.isScrolled()&&!h){h=!0;a.androidKeyStop=
!0;a.tapBlock(!0);a.addClass(a.doc.getElementById("curtain"),"show");var b=g.parentView;$("#commandDiv").on("purchaseCallback",function(d,c){h=!1;$("#commandDiv").off("purchaseCallback");a.androidKeyStop=!1;d=function(){!c||c&&!c.message?(a.tapBlock(!1),b.nativeFlag&&setTimeout(function(){f.setWebView(!1)},1E3),b.removeView()):(new a.PopupClass({content:c.message,closeBtnText:"OK",exClass:"purchaseError",popupType:"typeC"},null,null,function(){b.nativeFlag&&setTimeout(function(){f.setWebView(!1)},
1E3);b.removeView()}),a.tapBlock(!1))};"error"!==c.resultCode?(c&&c.fox&&f.setFoxData(c.fox),c&&c.adjust&&f.setAdjustData(c.adjust),a.responseSetStorage(c),a.globalMenuView&&a.globalMenuView.itemChangeHandler(),a.removeClass(a.doc.getElementById("curtain"),"show"),d(c)):(a.tapBlock(!1),a.removeClass(a.doc.getElementById("curtain"),"show"),new a.PopupClass({content:c.errorTxt,closeBtnText:"OK",exClass:"purchaseError",popupType:"typeC"},null,null,d))});f.purchaseItem(g.model);window.isBrowser&&(a.androidKeyStop=
!1,b.nativeFlag&&f.setWebView(!1),b.removeView(),a.tapBlock(!1),a.removeClass(a.doc.getElementById("curtain"),"show"))}},removeView:function(){g&&(g=null);this.off();this.remove()}})});