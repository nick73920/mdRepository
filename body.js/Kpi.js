//模板页面进来事件

//新增
if(ReactAPI.getParamsInRequestUrl().id == undefined){
}else{//编辑

	//设置更新时间
	ReactAPI.getComponentAPI("DatePicker").APIs("kpiTemplate.modifyTime").setValue(getTime());	

}


//考核页面进来事件

//新增
if(ReactAPI.getParamsInRequestUrl().id == undefined){
}else{//编辑
	
	//设置为不可编辑
	ReactAPI.getComponentAPI('Reference').APIs('kpiEvaluatio.templateId.templateName').setReadonly(true);

}

//选择模板后事件
function callbacktemplateName(obj){
	
	console.log(obj[0].id);
	
	//新增
	if(ReactAPI.getParamsInRequestUrl().id == undefined){
		
		//调用ajax
        ReactAPI.request(
                 {
                   type: "get",
                   data: {},
                   url: "/msService/SESWssKPI/kpiEvaluation/kpiEvaluatio/listEvaluateItem/"+obj[0].id
                 },
                 function(res) {
					 
					 console.log("listEvaluateItem:");
					 console.log(res);
					 
                    if(!res || res.length==0){
                        return;
                    }
                    var grid = ReactAPI.getComponentAPI("SupDataGrid").APIs("SESWssKPI_1.0.0_kpiEvaluation_kpiEvaluationEditdg1571656375249");
					grid.deleteLine();
					
					grid.addLine(res);
					
					//更新保存行
					var lines = [];
					for(var i = 0; i < res.length; i++){
						lines.push(i);
					}
					
					grid.saveAddLine(lines);
                    
                 }
        );
		
	}else{//编辑
		

	
	}

}

// 保存前事件

if(ReactAPI.getComponentAPI('Reference').APIs('kpiEvaluatio.templateId.templateName').getValue().length === 0){
	ReactAPI.openNoun('警告','模板名称不能为空','w');
	return false;
}else{
	return true;
}
