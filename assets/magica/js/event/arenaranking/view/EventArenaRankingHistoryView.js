define("underscore backbone backboneCommon ajaxControl command text!template/event/arenaranking/EventArenaRankingHistory.html".split(" "),function(b,c,a,d,e,f){return c.View.extend({events:function(){return{}},initialize:function(a){this.template=b.template(f);this.createDom()},render:function(){this.model=d.getPageJson();var a=b.sortBy(this.model.userArenaBattleRankingHistoryList,function(a){return-Date.parse(a.eventId)});console.log(a);this.$el.html(this.template({model:this.arenaJson,history:a}));
return this},createDom:function(){a.content.append(this.render().el);a.setGlobalView();e.getBaseData(a.getNativeObj());a.scrollSet("historyScroll","listScrollInner");a.ready.hide()},removeHandler:function(){this.trigger("removeView");this.remove()}})});