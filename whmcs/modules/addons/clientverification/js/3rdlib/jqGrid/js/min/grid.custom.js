!function(e,t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],function(r){return t(r,e.document)}):"object"==typeof module&&module.exports?module.exports=function(e,r){return e||(e=window),void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(e)),require("./grid.base"),require("./jquery.fmatter"),require("./grid.common"),t(r,e.document),r}:t(jQuery,e.document)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var r=e.jgrid,a=r.jqID,i=e.fn.jqGrid,o=i.getGuiStyles,s=i.getGridRes;r.extend({getColProp:function(e){var t,r={},a=this[0];return null!=a&&a.grid&&void 0!==(t=a.p.iColByName[e])?a.p.colModel[t]:r},setColProp:function(t,r){return this.each(function(){var a,i=this,o=i.p;i.grid&&null!=o&&r&&void 0!==(a=o.iColByName[t])&&e.extend(!0,o.colModel[a],r)})},sortGrid:function(e,t,r){return this.each(function(){var a,i,o,s=this,l=s.grid,n=s.p,d=n.colModel,c=d.length,u=!1;if(l)for(e||(e=n.sortname),"boolean"!=typeof t&&(t=!1),i=0;i<c;i++)if((a=d[i]).index===e||a.name===e){!0===n.frozenColumns&&!0===a.frozen&&(u=l.fhDiv.find("#"+n.id+"_"+e)),u&&0!==u.length||(u=l.headers[i].el),("boolean"!=typeof(o=a.sortable)||o)&&s.sortData("jqgh_"+n.id+"_"+e,i,t,r,u);break}})},clearBeforeUnload:function(){return this.each(function(){var a,i=this,o=i.p,s=i.grid,l=r.clearArray,n=Object.prototype.hasOwnProperty;e.isFunction(s.emptyRows)&&s.emptyRows.call(i,!0,!0),e(t).off("mousemove.jqGrid mouseup.jqGrid"+o.id),e(i).off();var d,c=s.headers.length;for(d=0;d<c;d++)s.headers[d].el=null;for(a in s)s.hasOwnProperty(a)&&(s.propOrMethod=null);var u=["formatCol","sortData","updatepager","refreshIndex","setHeadCheckBox","constructTr","clearToolbar","fixScrollOffsetAndhBoxPadding","rebuildRowIndexes","modalAlert","toggleToolbar","triggerToolbar","formatter","addXmlData","addJSONData","ftoolbar","_inlinenav","nav","grid","p"];for(c=u.length,d=0;d<c;d++)n.call(i,u[d])&&(i[u[d]]=null);i._index={},l(o.data),l(o.lastSelectedData),l(o.selarrrow),l(o.savedRow),o.editingInfo={}})},GridDestroy:function(){return this.each(function(){var t=this,r=t.p;if(t.grid&&null!=r){r.pager&&e(r.pager).remove();try{e("#alertmod_"+a(r.id)).remove(),e(t).jqGrid("clearBeforeUnload"),e(r.gBox).remove()}catch(e){}}})},GridUnload:function(){return this.each(function(){var t=this,r=e(t),a=t.p,i=e.fn.jqGrid;t.grid&&(r.removeClass(i.getGuiStyles.call(r,"grid","ui-jqgrid-btable")),a.pager&&(a.pager.substr(1,e.jgrid.uidPref.length)===e.jgrid.uidPref?e(a.pager).remove():e(a.pager).empty().removeClass(i.getGuiStyles.call(r,"pager.pager","ui-jqgrid-pager "+i.getGuiStyles.call(r,"bottom"))).removeAttr("style").removeAttr("dir")),r.jqGrid("clearBeforeUnload"),r.removeAttr("style").removeAttr("tabindex").removeAttr("role").removeAttr("aria-labelledby").removeAttr("style"),r.empty(),r.insertBefore(a.gBox).show(),e(a.pager).insertBefore(a.gBox).show(),e(a.gBox).remove())})},setGridState:function(t){return this.each(function(){var r=this,a=r.p,o=r.grid,s=o.cDiv,l=e(o.uDiv),n=e(o.ubDiv);if(o&&null!=a){var d=function(e){return i.getIconRes.call(r,"gridMinimize."+e)},c=d("visible"),u=d("hidden");"hidden"===t?(e(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv",a.gView).slideUp("fast"),a.pager&&e(a.pager).slideUp("fast"),a.toppager&&e(a.toppager).slideUp("fast"),!0===a.toolbar[0]&&("both"===a.toolbar[1]&&n.slideUp("fast"),l.slideUp("fast")),a.footerrow&&e(".ui-jqgrid-sdiv",a.gBox).slideUp("fast"),e(".ui-jqgrid-titlebar-close span",s).removeClass(c).addClass(u),a.gridstate="hidden"):"visible"===t&&(e(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv",a.gView).slideDown("fast"),a.pager&&e(a.pager).slideDown("fast"),a.toppager&&e(a.toppager).slideDown("fast"),!0===a.toolbar[0]&&("both"===a.toolbar[1]&&n.slideDown("fast"),l.slideDown("fast")),a.footerrow&&e(".ui-jqgrid-sdiv",a.gBox).slideDown("fast"),e(".ui-jqgrid-titlebar-close span",s).removeClass(u).addClass(c),a.gridstate="visible")}})},filterToolbar:function(i){return this.each(function(){var l=this,n=l.grid,d=e(l),c=l.p,u=r.info_dialog,h=r.htmlEncode;if(!this.ftoolbar){var p,f=e.extend(!0,{autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:c.prmNames.filters,stringResult:!1,groupOp:"AND",defaultSearch:"bw",idMode:"new",searchOperators:!1,resetIcon:"&times;",applyLabelClasses:!0,loadFilterDefaults:!0,operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^",in:"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},r.search,c.searching||{},i||{}),v=c.colModel,g=function(e){return s.call(d,e)},m=g("errors.errcap"),b=g("edit.bClose"),y=g("edit.msg"),w=o.call(l,"states.hover"),q=o.call(l,"states.select"),C=o.call(l,"filterToolbar.dataField"),j={},D=function(e){var t="gs_";switch(f.idMode){case"compatibility":t+=c.idPrefix;break;case"new":t+=c.id+"_"}return t+e},x=function(e){return"#"+a(D(e))},S=function(e){var t=(e.value||"").split(":");return{on:t[0]||"on",off:t[1]||"off"}},G=function(t){var r,a,i,o,s,l,n=c.postData[f.sFilter],d={},u=c.iColByName;if(t)for(a=0;a<v.length;a++)!1!==(s=v[a]).search&&(l=s.searchoptions||{},d[s.name]={op:l.sopt?l.sopt[0]:"select"===s.stype||"checkbox"===s.stype?"eq":f.defaultSearch,data:void 0!==l.defaultValue?l.defaultValue:""});if(!n||!c.search)return d;if("string"==typeof n)try{n=e.parseJSON(n)}catch(e){n={}}else n=n||{};if(i=n.rules||{},null==n||null!=n.groupOp&&null!=f.groupOp&&n.groupOp.toUpperCase()!==f.groupOp.toUpperCase()||null==i||0===i.length||null!=n.groups&&n.groups.length>0)return d;for(a=0;a<i.length;a++)for(s=v[u[(o=i[a]).field]],r=0;r<v.length;r++)if(((s=v[r]).index||s.name)===o.field&&!1!==s.search){if((l=s.searchoptions||{}).sopt){if(e.inArray(o.op,l.sopt)<0)continue}else if("select"===s.stype||"checkbox"===s.stype){if("eq"!==o.op)continue}else if(o.op!==f.defaultSearch)continue;d[s.name]={op:o.op,data:o.data}}return d},z=function(e,t){switch(t){case 1:e.data("state",1).prop({checked:!0,indeterminate:!1});break;case 0:e.data("state",0).prop({checked:!1,indeterminate:!1});break;default:e.data("state",-1).prop({checked:!1,indeterminate:!0})}},F=function(){var t={},r=0,a={};e.each(v,function(){var i,o,s=this,d=s.index||s.name,u=s.searchoptions||{},h=e(x(s.name),!0===s.frozen&&!0===c.frozenColumns?n.fhDiv:n.hDiv),p=function(e,t){var r=s.formatoptions||{};return void 0!==r[e]?r[e]:g("formatter."+(t||s.formatter)+"."+e)},v=function(e){var t=p("thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g,"\\$1");return e.replace(new RegExp(t,"g"),"")};if(o=f.searchOperators?h.parent().prev().children("a").data("soper")||f.defaultSearch:u.sopt?u.sopt[0]:"select"===s.stype||"checkbox"===s.stype?"eq":f.defaultSearch,"custom"===s.stype&&e.isFunction(u.custom_value)&&h.length>0&&"SPAN"===h[0].nodeName.toUpperCase())i=u.custom_value.call(l,h.children(".customelement").first(),"get");else if("select"===s.stype)i=h.prop("multiple")?null==(i=h.val())||0===i.length?"":i.join(c.inFilterSeparator||","):h.val();else if("checkbox"===s.stype){var m=S(u);switch(h.data("state")){case-1:i="";break;case 0:i=m.off;break;default:i=m.on}}else switch(i=e.trim(h.val()),s.formatter){case"integer":""!==(i=v(i).replace(p("decimalSeparator","number"),"."))&&(i=String(parseInt(i,10)));break;case"number":""!==(i=v(i).replace(p("decimalSeparator"),"."))&&"0"===String(i).charAt(0)&&(i=String(parseFloat(i)));break;case"currency":var b=p("prefix"),y=p("suffix");b&&b.length&&(i=i.substr(b.length)),y&&y.length&&(i=i.substr(0,i.length-y.length)),""!==(i=v(i).replace(p("decimalSeparator"),"."))&&(i=String(parseFloat(i)))}if(i||"nu"===o||"nn"===o||e.inArray(o,c.customUnaryOperations)>=0)t[d]=i,a[d]=o,r++;else if(t.hasOwnProperty(d)&&delete t[d],!f.stringResult&&!f.searchOperators&&"local"!==c.datatype)try{null!=c.postData&&c.postData.hasOwnProperty(d)&&delete c.postData[d]}catch(e){}});var i=r>0;if(f.stringResult||f.searchOperators||"local"===c.datatype){var o='{"groupOp":"'+f.groupOp+'","rules":[',s=0;e.each(t,function(e,t){s>0&&(o+=","),o+='{"field":"'+e+'",',o+='"op":"'+a[e]+'",',o+='"data":"'+(t+="").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',s++}),o+="]}",c.postData[f.sFilter]=o,e.each([f.sField,f.sValue,f.sOper],function(e,t){c.postData.hasOwnProperty(t)&&delete c.postData[t]})}else e.extend(c.postData,t);var u;c.searchurl&&(u=c.url,d.jqGrid("setGridParam",{url:c.searchurl}));var h="stop"===d.triggerHandler("jqGridToolbarBeforeSearch");!h&&e.isFunction(f.beforeSearch)&&(h=f.beforeSearch.call(l)),h||d.jqGrid("setGridParam",{search:i}).trigger("reloadGrid",[e.extend({page:1},f.reloadGridSearchOptions||{})]),u&&d.jqGrid("setGridParam",{url:u}),d.triggerHandler("jqGridToolbarAfterSearch"),e.isFunction(f.afterSearch)&&f.afterSearch.call(l)},O=function(t){var r,a={},i=0;t="boolean"!=typeof t||t,e.each(v,function(){var t,o,s=this,d=e(x(s.name),!0===s.frozen&&!0===c.frozenColumns?n.fhDiv:n.hDiv),u=s.searchoptions||{};switch(void 0!==u.defaultValue&&(t=u.defaultValue),r=s.index||s.name,s.stype){case"checkbox":z(d,-1);break;case"select":if(o=!(d.length>0)||!d[0].multiple,d.find("option").each(function(r){if(this.selected=0===r&&o,e(this).val()===t)return this.selected=!0,!1}),void 0!==t)a[r]=t,i++;else try{delete c.postData[r]}catch(e){}break;case"text":if(d.val(t||""),void 0!==t)a[r]=t,i++;else try{delete c.postData[r]}catch(e){}break;case"custom":e.isFunction(u.custom_value)&&d.length>0&&"SPAN"===d[0].nodeName.toUpperCase()&&(void 0===t&&(t=""),u.custom_value.call(l,d.children(".customelement").first(),"set",t))}});var o=i>0;if(c.resetsearch=!0,f.stringResult||f.searchOperators||"local"===c.datatype){var s='{"groupOp":"'+f.groupOp+'","rules":[',u=0;e.each(a,function(e,t){u>0&&(s+=","),s+='{"field":"'+e+'",',s+='"op":"eq",',s+='"data":"'+(t+="").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',u++}),s+="]}",c.postData[f.sFilter]=s,e.each([f.sField,f.sValue,f.sOper],function(e,t){c.postData.hasOwnProperty(t)&&delete c.postData[t]})}else e.extend(c.postData,a);var h;c.searchurl&&(h=c.url,d.jqGrid("setGridParam",{url:c.searchurl}));var p="stop"===d.triggerHandler("jqGridToolbarBeforeClear");!p&&e.isFunction(f.beforeClear)&&(p=f.beforeClear.call(l)),p||t&&d.jqGrid("setGridParam",{search:o}).trigger("reloadGrid",[e.extend({page:1},f.reloadGridResetOptions||{})]),h&&d.jqGrid("setGridParam",{url:h}),d.triggerHandler("jqGridToolbarAfterClear"),e.isFunction(f.afterClear)&&f.afterClear.call(l)},k=function(){var t=e("tr.ui-search-toolbar",n.hDiv),r=!0===c.frozenColumns&&e("tr.ui-search-toolbar",n.fhDiv);"none"===t.css("display")?(t.show(),r&&r.show()):(t.hide(),r&&r.hide()),!0===c.frozenColumns&&(d.jqGrid("destroyFrozenColumns"),d.jqGrid("setFrozenColumns"))},T=g("search.odata")||[],_=c.customSortOperations,R=function(t,r,a){e("#sopt_menu").remove(),r=parseInt(r,10),a=parseInt(a,10)+18;var i,s=0,n=[],u=e(t).data("soper"),p=e(t).data("colname"),g=e(".ui-jqgrid-view").css("font-size")||"11px",m="<ul id='sopt_menu' class='"+o.call(l,"searchToolbar.menu","ui-search-menu")+"' role='menu' tabindex='0' style='z-index:9999;display:block;font-size:"+g+";left:"+r+"px;top:"+a+"px;'>";if(void 0!==(s=c.iColByName[p])){var b,y,C,j,D,x=v[s],S=e.extend({},x.searchoptions);for(S.sopt||(S.sopt=[],S.sopt[0]="select"===x.stype||"checkbox"===x.stype?"eq":f.defaultSearch),e.each(T,function(){n.push(this.oper)}),null!=_&&e.each(_,function(e){n.push(e)}),s=0;s<S.sopt.length;s++)C=S.sopt[s],-1!==(i=e.inArray(C,n))&&(void 0!==(b=T[i])?(j=f.operands[C],D=b.text):null!=_&&(j=(y=_[C]).operand,D=y.text),m+='<li class="ui-menu-item '+(u===C?q:"")+'" role="presentation"><a class="ui-corner-all g-menu-item" tabindex="0" role="menuitem" value="'+h(C)+'" data-oper="'+h(j)+'"><table><tr><td style="width:25px">'+h(j)+"</td><td>"+h(D)+"</td></tr></table></a></li>");m+="</ul>",e("body").append(m),e("#sopt_menu").addClass("ui-menu ui-widget ui-widget-content ui-corner-all"),e("#sopt_menu > li > a").hover(function(){e(this).addClass(w)},function(){e(this).removeClass(w)}).click(function(){var r=e(this).attr("value"),a=e(this).data("oper");if(d.triggerHandler("jqGridToolbarSelectOper",[r,a,t]),e("#sopt_menu").hide(),e(t).data("soper",r).text(a),!0===f.autosearch){var i=e(t).parent().next().children()[0];(e(i).val()||"nu"===r||"nn"===r||e.inArray(r,c.customUnaryOperations)>=0)&&F()}})}},V=[],H=e("<tr></tr>",{class:"ui-search-toolbar",role:"row form"});f.loadFilterDefaults&&(j=G()||{}),e.each(v,function(a){var i,s,n,d,h,v,q,x=this,S=x.searchoptions||{},G=x.editoptions||{},O=e("<th></th>",{class:o.call(l,"colHeaders","ui-th-column ui-th-"+c.direction+" "+(f.applyLabelClasses?x.labelClasses||"":"")),role:"gridcell","aria-describedby":c.id+"_"+x.name}),k=e("<div></div>"),R=e("<table class='ui-search-table'><tbody><tr><td class='ui-search-oper'></td><td class='ui-search-input'></td><td class='ui-search-clear' style='width:1px'></td></tr></tbody></table>"),I=R.children("tbody").children("tr").children("td"),A=I.eq(0),M=I.eq(1),B=I.eq(2);if(!0===this.hidden&&O.css("display","none"),this.search=!1!==this.search,void 0===this.stype&&(this.stype="text"),i=e.extend({mode:"filter",name:x.name,cm:x,iCol:a,id:D(x.name)},S),this.search){if(f.searchOperators){for(d=c.search&&null!=j[this.name]?j[this.name].op:i.sopt?i.sopt[0]:"select"===x.stype||"checkbox"===x.stype?"eq":f.defaultSearch,h=0;h<T.length;h++)if(T[h].oper===d){n=f.operands[d]||"";break}if(void 0===n&&null!=_){var P;for(P in _)if(_.hasOwnProperty(P)&&P===d){n=_[P].operand;break}}void 0===n&&(n="="),A.append("<a title='"+(null!=i.searchtitle?i.searchtitle:g("search.operandTitle"))+"' data-soper='"+d+"' class='"+o.call(l,"searchToolbar.operButton","soptclass")+"' data-colname='"+this.name+"'>"+n+"</a>")}if(A.data("colindex",a),null!=i.sopt&&1!==i.sopt.length||A.hide(),c.search&&null!=j[this.name]&&(i.defaultValue=j[this.name].data),void 0===i.clearSearch&&(i.clearSearch="text"===this.stype),i.clearSearch){var N=e.isFunction(f.resetTitle)?f.resetTitle.call(l,{options:f,cm:x,cmName:x.name,iCol:a}):(g("search.resetTitle")||"Clear Search Value")+" "+r.stripHtml(c.colNames[a]);B.append("<a title='"+N+"' aria-label='"+N+"' class='"+o.call(l,"searchToolbar.clearButton","clearsearchclass")+"'><span>"+f.resetIcon+"</span></a>")}else B.hide();switch(k.append(R),this.stype){case"checkbox":var E=void 0!==i.defaultValue?i.defaultValue:"-1";q=e("<input role='search' type='checkbox' class='"+C+"' name='"+(x.index||x.name)+"' id='"+D(x.name)+"' aria-labelledby='jqgh_"+c.id+"_"+x.name+"' data-state='"+E+"'/>"),"-1"===E?q.prop("indeterminate",!0):"1"===E&&q.prop("checked",!0),q.click(function(){var t=e(this);switch(t.data("state")){case-1:z(t,1);break;case 0:z(t,-1);break;default:z(t,0)}!0===f.autosearch&&F()}),M.append(q),i.attr&&q.attr(i.attr),V.push({elem:q[0],options:i});break;case"select":if(s=this.surl||i.dataUrl)e.ajax(e.extend({url:s,context:{$tdInput:M,options:i,cm:x,iCol:a},dataType:"html",success:function(a,o,s){var n,d,c,u=this.cm,h=this.iCol,p=this.options,v=this.$tdInput;void 0!==p.buildSelect?(n=p.buildSelect.call(l,a,s,u,h))&&v.append(n):v.append(a),(c=v.children("select")).attr({name:u.index||u.name,id:D(u.name)}),p.attr&&c.attr(p.attr),c.addClass(C),c.css({width:"100%"}),0===c.find("option[value='']").length&&"string"==typeof i.noFilterText&&((d=t.createElement("option")).value="",d.innerHTML=i.noFilterText,c.prepend(d),null!=e(c[0].options[c[0].selectedIndex]).attr("selected")||c[0].multiple||(c[0].selectedIndex=0)),c[0].multiple&&0===c.find("option[selected]").length&&-1!==c[0].selectedIndex&&(c[0].options[c[0].selectedIndex].selected=!1),void 0!==p.defaultValue&&c.val(p.defaultValue),r.bindEv.call(l,c[0],p),r.fullBoolFeedback.call(l,p.selectFilled,"jqGridSelectFilled",{elem:c[0],options:p,cm:u,cmName:u.name,iCol:h,mode:"filter"}),!0===f.autosearch&&c.change(function(){return F(),!1})}},r.ajaxOptions,c.ajaxSelectOptions||{}));else{var U,L,W;if(x.searchoptions?(U=void 0===S.value?G.value||"":S.value,L=void 0===S.separator?G.separator||":":S.separator,W=void 0===S.delimiter?G.delimiter||";":S.delimiter):x.editoptions&&(U=void 0===G.value?"":G.value,L=void 0===G.separator?":":G.separator,W=void 0===G.delimiter?";":G.delimiter),S.generateValue&&null!=c.indexByColumnData[x.name]&&(U=l.generateValueFromColumnIndex(x.name,L,W)),U){if((v=t.createElement("select")).style.width="100%",q=e(v).attr({name:x.index||x.name,role:"search",id:D(x.name),"aria-describedby":c.id+"_"+x.name}),i.attr&&q.attr(i.attr),!r.fillSelectOptions(v,U,L,W,null!=i.attr&&i.attr.multiple)&&"string"==typeof i.noFilterText){var $=t.createElement("option");$.value="",$.innerHTML=i.noFilterText,$.selected=!0,q.prepend($)}void 0!==i.defaultValue&&q.val(i.defaultValue),q.addClass(C),V.push({elem:v,options:i}),M.append(v),r.fullBoolFeedback.call(l,i.selectFilled,"jqGridSelectFilled",{elem:v,options:x.searchoptions||G,cm:x,cmName:x.name,iCol:a,mode:"filter"}),!0===f.autosearch&&q.change(function(){return F(),!1})}}break;case"text":q=e("<input role='search' type='text' class='"+C+"' name='"+(x.index||x.name)+"' id='"+D(x.name)+"' aria-labelledby='jqgh_"+c.id+"_"+x.name+"' value='"+(void 0!==i.defaultValue?i.defaultValue:"")+"'/>"),M.append(q),i.attr&&q.attr(i.attr),V.push({elem:q[0],options:i}),!0===f.autosearch&&(f.searchOnEnter?q.keypress(function(e){return 13===(e.charCode||e.keyCode||0)?(F(),!1):this}):q.keydown(function(e){switch(e.which){case 13:return!1;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:p&&clearTimeout(p),p=setTimeout(function(){F()},f.autosearchDelay)}}));break;case"custom":M.append("<span style='width:100%;padding:0;box-sizing:border-box;' name='"+(x.index||x.name)+"' id='"+D(x.name)+"'/>");try{if(!e.isFunction(i.custom_element))throw"e1";var J=i.custom_element.call(l,void 0!==i.defaultValue?i.defaultValue:"",i);if(!J)throw"e2";J=e(J).addClass("customelement"),k.find("span[name='"+(x.index||x.name)+"']").append(J)}catch(e){"e1"===e&&u.call(l,m,"function 'custom_element' "+y.nodefined,b),"e2"===e?u.call(l,m,"function 'custom_element' "+y.novalue,b):u.call(l,m,"string"==typeof e?e:e.message,b)}}}O.append(k),O.find(".ui-search-oper .soptclass,.ui-search-clear .clearsearchclass").hover(function(){e(this).addClass(w)},function(){e(this).removeClass(w)}),H.append(O),f.searchOperators||A.hide()}),e(n.hDiv).find(">div>.ui-jqgrid-htable>thead").append(H),e.each(V,function(){r.bindEv.call(l,this.elem,this.options)}),f.searchOperators&&(e(".soptclass",H).click(function(t){var r=e(this).offset(),a=r.left,i=r.top;R(this,a,i),t.stopPropagation()}),e("body").on("click",function(t){"soptclass"!==t.target.className&&e("#sopt_menu").hide()})),e(".clearsearchclass",H).click(function(){var t,r,a=e(this).closest(".ui-search-clear"),i=a.siblings(".ui-search-oper"),o=i.children("a"),s=o.data("soper"),l=parseInt(i.data("colindex"),10),n=a.siblings(".ui-search-input"),d=v[l],u=e.extend({},d.searchoptions||{}),h=u.defaultValue||"";switch(d.stype){case"select":h?n.find("select").val(h):n.find("select")[0].selectedIndex=0;break;case"checkbox":z(n.find("input[type=checkbox]"),-1);break;default:n.find("input").val(h)}("nu"===s||"nn"===s||e.inArray(s,c.customUnaryOperations)>=0)&&(t=u.sopt?u.sopt[0]:"select"===d.stype||"checkbox"===d.stype?"eq":f.defaultSearch,r=null!=_&&null!=_[t]?_[t].operand:f.operands[t]||"",o.data("soper",t).text(r)),!0===f.autosearch&&F()}),l.ftoolbar=!0,l.triggerToolbar=F,l.clearToolbar=O,l.toggleToolbar=k,!0===c.frozenColumns&&(d.jqGrid("destroyFrozenColumns"),d.jqGrid("setFrozenColumns")),d.on("jqGridRefreshFilterValues.filterToolbar"+(f.loadFilterDefaults?" jqGridAfterLoadComplete.filterToolbar":""),function(){var t,r,a,i,o,s,n,d=G(!0)||{};if(f.stringResult||f.searchOperators||"local"===c.datatype||!c.search){for(t in d)if(d.hasOwnProperty(t)&&(r=d[t],a=e(x(t)),s=a.closest("th.ui-th-column"),a.length>0&&s.length>0)){if(n=(c.colModel[s[0].cellIndex]||{}).searchoptions||{},"SELECT"===a[0].tagName.toUpperCase()&&a[0].multiple)a.val(r.data.split(c.inFilterSeparator||","));else if(a.is("input[type=checkbox]")){var u=S(n);z(a,r.data===u.on?1:r.data===u.off?0:-1)}else if(a.find(".customelement").length>0&&e.isFunction(n.custom_value)){var h=n.custom_value.call(l,a.find(".customelement").first(),"get");""===r.data&&void 0!==n.defaultValue&&(r.data=n.defaultValue),void 0===h&&(h=""),r.data!==h&&String(r.data)!==String(h)&&n.custom_value.call(l,a.find(".customelement").first(),"set",r.data)}else""===r.data&&void 0!==n.defaultValue&&(r.data=n.defaultValue),e.trim(a.val())!==String(r.data)&&a.val(r.data);(i=a.closest(".ui-search-input").siblings(".ui-search-oper").children(".soptclass")).data("soper",r.op),i.text(f.operands[r.op]||(c.customSortOperations[r.op]||{}).operand)}for(o=0;o<c.colModel.length;o++)t=c.colModel[o].name,d.hasOwnProperty(t)||e(x(t)).val("")}})}})},destroyFilterToolbar:function(){return this.each(function(){var t=this;t.ftoolbar&&(t.triggerToolbar=null,t.clearToolbar=null,t.toggleToolbar=null,t.ftoolbar=!1,e(t.grid.hDiv).find("table thead tr.ui-search-toolbar").remove(),!0===t.p.frozenColumns&&e(t).jqGrid("destroyFrozenColumns").jqGrid("setFrozenColumns"))})},destroyGroupHeader:function(t){return void 0===t&&(t=!0),this.each(function(){var r,a,i,o,s,l=this,n=l.grid,d=l.p.colModel,c=e("table.ui-jqgrid-htable thead",n.hDiv);if(n){e(l).off(".setGroupHeaders");var u=e("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),h=n.headers;for(r=0,a=h.length;r<a;r++){s=d[r].hidden?"none":"",i=e(h[r].el).width(h[r].width).css("display",s);try{i.removeAttr("rowSpan")}catch(e){i.attr("rowSpan",1)}u.append(i),(o=i.children("span.ui-jqgrid-resize")).length>0&&(o[0].style.height=""),i.children("div")[0].style.top=""}e(c).children("tr.ui-jqgrid-labels").remove(),e(c).prepend(u),!0===t&&e(l).jqGrid("setGridParam",{groupHeader:null})}})},setGroupHeaders:function(t){return t=e.extend({useColSpanStyle:!1,applyLabelClasses:!0,groupHeaders:[]},t||{}),this.each(function(){this.p.groupHeader=t;var a,i,s,l,n,d,c,u,h,p,f,v,g,m,b=this,y=0,w=b.p,q=w.colModel,C=q.length,j=b.grid.headers,D=e("table.ui-jqgrid-htable",b.grid.hDiv),x=r.isCellClassHidden,S=D.children("thead").children("tr.ui-jqgrid-labels"),G=S.last().addClass("jqg-second-row-header"),z=D.children("thead"),F=D.find(".jqg-first-row-header");void 0===F[0]?F=e("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):F.empty();for(e(b).prepend(z),s=e("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header"),a=0;a<C;a++)if(n=j[a].el,d=e(n),i=q[a],c={height:"0",width:j[a].width+"px",display:i.hidden?"none":""},e("<th>",{role:"gridcell"}).css(c).addClass("ui-first-th-"+w.direction+(t.applyLabelClasses?" "+(i.labelClasses||""):"")).appendTo(F),n.style.width="",m=o.call(b,"colHeaders","ui-th-column-header ui-th-"+w.direction+" "+(t.applyLabelClasses?i.labelClasses||"":"")),h=function(e,t){var r;for(r=0;r<t.length;r++)if(t[r].startColumnName===e)return t[r];return 0}(i.name,t.groupHeaders)){for(p=h.numberOfColumns,f=h.titleText,v=0,u=0;u<p&&a+u<C;u++)q[a+u].hidden||x(q[a+u].classes)||v++;l=e("<th>").addClass(m).css({height:"22px","border-top":"0 none"}).html(f),v>0&&l.attr("colspan",String(v)),w.headertitles&&l.attr("title",l.text()),0===v&&l.hide(),d.before(l),s.append(n),y=p-1}else 0===y?t.useColSpanStyle?d.attr("rowspan",S.length+1):(e("<th>").addClass(m).css({display:i.hidden?"none":"","border-top":"0 none"}).insertBefore(d),s.append(n)):(s.append(n),y--);(g=e(b).children("thead")).prepend(F),s.insertAfter(G),D.prepend(g),t.useColSpanStyle&&(D.find("span.ui-jqgrid-resize").each(function(){var t=e(this).parent();t.is(":visible")&&(this.style.cssText="height:"+t.height()+"px !important;cursor:col-resize;")}),D.find(".ui-th-column>div").each(function(){var t=e(this),r=t.parent();r.is(":visible")&&r.is(":has(span.ui-jqgrid-resize)")&&!t.hasClass("ui-jqgrid-rotate")&&!t.hasClass("ui-jqgrid-rotateOldIE")&&t.css("top",(r.height()-t.outerHeight(!0))/2+"px")})),e(b).triggerHandler("jqGridAfterSetGroupHeaders")})},getNumberOfFrozenColumns:function(){var e=this;if(0===e.length)return 0;var t,r=(e=e[0]).p.colModel,a=r.length,i=-1;for(t=0;t<a&&!0===r[t].frozen;t++)i=t;return i+1},setFrozenColumns:function(t){return t=t||{},this.each(function(){var r=this,i=e(r),s=r.p,l=r.grid;if(l&&null!=s&&!0!==s.frozenColumns){var n,d,c=s.colModel,u=c.length,h=-1,p=!1,f=[],v=a(s.id),g=o.call(r,"states.hover"),m=o.call(r,"states.disabled");if(!0!==s.subGrid&&!0!==s.treeGrid&&!s.scroll){for(n=0;n<u&&!0===c[n].frozen;n++)p=!0,h=n,f.push("#jqgh_"+v+"_"+a(c[n].name));if(s.sortable&&((d=e(l.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels")).sortable("destroy"),i.jqGrid("setGridParam",{sortable:{options:{items:f.length>0?">th:not(:has("+f.join(",")+"),:hidden)":">th:not(:hidden)"}}}),i.jqGrid("sortableColumns",d)),h>=0&&p){var b=s.caption?e(l.cDiv).outerHeight():0,y=e(".ui-jqgrid-htable",s.gView).height();s.toppager&&(b+=e(l.topDiv).outerHeight()),!0===s.toolbar[0]&&"bottom"!==s.toolbar[1]&&(b+=e(l.uDiv).outerHeight()),l.fhDiv=e("<div style='position:absolute;overflow:hidden;"+("rtl"===s.direction?"right:0;border-top-left-radius:0;":"left:0;border-top-right-radius:0;")+"top:"+b+"px;height:"+y+"px;' class='"+o.call(r,"hDiv","frozen-div ui-jqgrid-hdiv")+"'></div>"),l.fbDiv=e("<div style='position:absolute;overflow:hidden;"+("rtl"===s.direction?"right:0;":"left:0;")+"top:"+(parseInt(b,10)+parseInt(y,10)+1)+"px;overflow:hidden;' class='frozen-bdiv ui-jqgrid-bdiv'></div>"),e(s.gView).append(l.fhDiv);var w=e(".ui-jqgrid-htable",s.gView).clone(!0),q=w[0].tHead.rows;if(s.groupHeader){e(q[0].cells).filter(":gt("+h+")").remove(),e(q).filter(".jqg-third-row-header").each(function(){e(this).children("th[id]").each(function(){var t,a=e(this).attr("id");a&&a.substr(0,r.id.length+1)===r.id+"_"&&(t=a.substr(r.id.length+1),s.iColByName[t]>h&&e(this).remove())})});var C,j,D=-1,x=-1;e(q).filter(".jqg-second-row-header").children("th").each(function(){if(C=parseInt(e(this).attr("colspan")||1,10),j=parseInt(e(this).attr("rowspan")||1,10),j>1?(D++,x++):C&&(D+=C,x++),D===h)return!1}),D!==h&&(x=h),e(q).filter(".jqg-second-row-header,.ui-search-toolbar").each(function(){e(this).children(":gt("+x+")").remove()})}else e(q).each(function(){e(this).children(":gt("+h+")").remove()});if(e(w).width(1),e(l.fhDiv).append(w).scroll(function(){this.scrollLeft=0}),s.footerrow){var S=e(".ui-jqgrid-bdiv",s.gView).height();l.fsDiv=e("<div style='position:absolute;"+("rtl"===s.direction?"right:0;":"left:0;")+"top:"+(parseInt(b,10)+parseInt(y,10)+parseInt(S,10)+1)+"px;' class='frozen-sdiv ui-jqgrid-sdiv'></div>"),e(s.gView).append(l.fsDiv);var G=e(".ui-jqgrid-ftable",s.gView).clone(!0);e("tr",G).each(function(){e("td:gt("+h+")",this).remove()}),e(G).width(1),e(l.fsDiv).append(G)}i.on("jqGridSortCol.setFrozenColumns",function(t,r,a){var i=e("tr.ui-jqgrid-labels:last th:eq("+s.lastsort+")",l.fhDiv),o=e("tr.ui-jqgrid-labels:last th:eq("+a+")",l.fhDiv);e("span.ui-grid-ico-sort",i).addClass(m),e(i).attr("aria-selected","false"),e("span.ui-icon-"+s.sortorder,o).removeClass(m),e(o).attr("aria-selected","true"),s.viewsortcols[0]||s.lastsort!==a&&(e("span.s-ico",i).hide(),e("span.s-ico",o).show())}),e(s.gView).append(l.fbDiv),e(l.bDiv).scroll(function(){e(l.fbDiv).scrollTop(e(this).scrollTop())}),e(l.fbDiv).on("mousewheel.setFrozenColumns DOMMouseScroll.setFrozenColumns",function(a){l.bDiv.scrollTop+=e.isFunction(t.mouseWheel)?t.mouseWheel.call(r,a):"mousewheel"===a.type?-a.originalEvent.wheelDelta/10:6*a.originalEvent.detail}),!0===s.hoverrows&&e(s.idSel).off("mouseover.jqGrid mouseout.jqGrid");var z=function(e,t){var r=e.height();Math.abs(r-t)>=1&&t>0&&(e.height(t),r=e.height(),Math.abs(t-r)>=1&&e.height(t+Math.round(t-r)))},F=function(e,t){var r=e.width();Math.abs(r-t)>=1&&(e.width(t),r=e.width(),Math.abs(t-r)>=1&&e.width(t+Math.round(t-r)))},O=function(t,r,a,i){var o,l,d,c,u,h,p,f,v,g,m,b,y=e(r).position().top;if(null!=t&&t.length>0){if(t[0].scrollTop=r.scrollTop,t.css("rtl"===s.direction?{top:y,right:0}:{top:y,left:0}),d=t.children("table").children("thead").children("tr"),0===(c=e(r).children("div").children("table").children("thead").children("tr")).length&&(d=e(t.children("table")[0].rows),c=e(e(r).children("div").children("table")[0].rows)),l=Math.min(d.length,c.length),g=l>0?e(d[0]).position().top:0,m=l>0?e(c[0]).position().top:0,a>=0)for(i>=0&&(l=Math.min(i+1,l)),o=a;o<l;o++)if("none"!==(u=e(c[o])).css("display")&&u.is(":visible")){if(y=u.position().top,h=e(d[o]),p=h.position().top,f=u.height(),null!=s.groupHeader&&s.groupHeader.useColSpanStyle)for(b=u[0].cells,n=0;n<b.length;n++)null!=(v=b[n])&&"TH"===v.nodeName.toUpperCase()&&(f=Math.max(f,e(v).height()));z(h,f+(y-m)+(g-p))}z(t,r.clientHeight)}},k={resizeDiv:!0,resizedRows:{iRowStart:0,iRowEnd:-1}},T={header:k,resizeFooter:!0,body:k};i.on("jqGridAfterGridComplete.setFrozenColumns",function(){e(s.idSel+"_frozen").remove(),e(l.fbDiv).height(l.hDiv.clientHeight);var t=e(this).clone(!0),r=t[0].rows,a=i[0].rows;if(e(r).filter("tr[role=row]").each(function(){e(this.cells).filter("td[role=gridcell]:gt("+h+")").remove()}),l.fbRows=r,t.width(1).attr("id",s.id+"_frozen"),t.appendTo(l.fbDiv),!0===s.hoverrows){var o=function(t,r,a){e(t)[r](g),e(a[t.rowIndex])[r](g)};e(r).filter(".jqgrow").hover(function(){o(this,"addClass",a)},function(){o(this,"removeClass",a)}),e(a).filter(".jqgrow").hover(function(){o(this,"addClass",r)},function(){o(this,"removeClass",r)})}O(l.fhDiv,l.hDiv,0,-1),O(l.fbDiv,l.bDiv,0,-1),l.sDiv&&O(l.fsDiv,l.sDiv,0,-1)});var _=function(t){e(l.fbDiv).scrollTop(e(l.bDiv).scrollTop()),t.header.resizeDiv&&O(l.fhDiv,l.hDiv,t.header.resizedRows.iRowStart,t.header.resizedRows.iRowEnd),t.body.resizeDiv&&O(l.fbDiv,l.bDiv,t.body.resizedRows.iRowStart,t.body.resizedRows.iRowEnd),t.resizeFooter&&l.sDiv&&t.resizeFooter&&O(l.fsDiv,l.sDiv,0,-1);var r=l.fhDiv[0].clientWidth;t.header.resizeDiv&&null!=l.fhDiv&&l.fhDiv.length>=1&&z(e(l.fhDiv),l.hDiv.clientHeight),t.body.resizeDiv&&null!=l.fbDiv&&l.fbDiv.length>0&&F(e(l.fbDiv),r),t.resizeFooter&&null!=l.fsDiv&&l.fsDiv.length>=0&&F(e(l.fsDiv),r)};e(s.gBox).on("resizestop.setFrozenColumns",function(){setTimeout(function(){_(T)},50)}),i.on("jqGridInlineEditRow.setFrozenColumns jqGridInlineAfterRestoreRow.setFrozenColumns jqGridInlineAfterSaveRow.setFrozenColumns jqGridAfterEditCell.setFrozenColumns jqGridAfterRestoreCell.setFrozenColumns jqGridAfterSaveCell.setFrozenColumns jqGridResizeStop.setFrozenColumns",function(e,t){var r=i.jqGrid("getInd",t);_({header:{resizeDiv:!1,resizedRows:{iRowStart:-1,iRowEnd:-1}},resizeFooter:!0,body:{resizeDiv:!0,resizedRows:{iRowStart:r,iRowEnd:r}}})}),i.on("jqGridResizeStop.setFrozenColumns",function(){_(T)}),i.on("jqGridResetFrozenHeights.setFrozenColumns",function(e,t){_(t||T)}),l.hDiv.loading||i.triggerHandler("jqGridAfterGridComplete"),s.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){var t=this,r=e(t),i=t.grid,s=t.p,l=a(s.id);if(i&&!0===s.frozenColumns){if(e(i.fhDiv).remove(),e(i.fbDiv).off(".setFrozenColumns"),e(i.fbDiv).remove(),i.fhDiv=null,i.fbDiv=null,i.fbRows=null,s.footerrow&&(e(i.fsDiv).remove(),i.fsDiv=null),r.off(".setFrozenColumns"),!0===s.hoverrows){var n,d=o.call(t,"states.hover");r.on("mouseover.jqGrid",function(t){n=e(t.target).closest("tr.jqgrow"),"ui-subgrid"!==e(n).attr("class")&&e(n).addClass(d)}).on("mouseout.jqGrid",function(t){n=e(t.target).closest("tr.jqgrow"),e(n).removeClass(d)})}if(s.frozenColumns=!1,s.sortable){var c=e(i.hDiv).find(".ui-jqgrid-htable .ui-jqgrid-labels");c.sortable("destroy"),r.jqGrid("setGridParam",{sortable:{options:{items:">th:not(:has(#jqgh_"+l+"_cb,#jqgh_"+l+"_rn,#jqgh_"+l+"_subgrid),:hidden)"}}}),r.jqGrid("sortableColumns",c)}}})}})});
//# sourceMappingURL=grid.custom.js.map