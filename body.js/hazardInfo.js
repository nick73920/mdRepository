//去掉了对照条件
( "material".ID <> ${materialId,Long})

//过滤出危化品
select * from BASESET_MATERIALS;
select * from BASESET_MATERIAL_ATTRSS;
select * from BASESET_MATERIAL_ATTRIBUTES;

//选择人事件
function callbackResponsiblePerson(obj){
	ReactAPI.getComponentAPI('Reference').APIs('hazardInfo.responsibleDepartment.name').setValue(obj[0].position.department);
}

//发生可能性
function callbackpossibility(obj){
	
	var possibility = obj.substr(obj.length-1,1);
	var severity = ReactAPI.getComponentAPI("SupDataGrid").APIs("SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846").getSelecteds()[0]['severity'];
	
	if(severity !== null && severity.value !== undefined){
		
		var mutiResult = parseInt(possibility) * parseInt(severity.value);
		
		if(mutiResult < 8){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/001", value: "一般风险", type: "reference"}
		}else if(mutiResult >= 8 && mutiResult < 12){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/002", value: "重大风险", type: "reference"}
		}else if(mutiResult >= 12){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/003", value: "特大风险", type: "reference"}
		}
		
	}
	else{
		ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846').getSelecteds()[0].riskRank = {}
	}
	
}

//后果严重性
function callbackSeverity(obj){
	
	var possibility = ReactAPI.getComponentAPI("SupDataGrid").APIs("SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846").getSelecteds()[0]['possibility'];
	var severity = obj.substr(obj.length-1,1);
	
	if(possibility !== null && possibility.value !== undefined){
		
		var mutiResult = parseInt(possibility.value) * parseInt(severity);
		
		if(mutiResult < 8){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/001", value: "一般风险", type: "reference"}
		}else if(mutiResult >= 8 && mutiResult < 12){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/002", value: "重大风险", type: "reference"}
		}else if(mutiResult >= 12){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/003", value: "特大风险", type: "reference"}
		}
		
	}
	else{
		ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846').getSelecteds()[0].riskRank = {}
	}
	
}


parseInt(ReactAPI.getComponentAPI("SupDataGrid").APIs("SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846").getSelecteds()[0]['possibility'].value) * parseInt(ReactAPI.getComponentAPI("SupDataGrid").APIs("SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572317201846").getSelecteds()[0]['severity'].value)

function callbackriskRank(obj){
	
	console.log(obj);
	
}

//发生可能性
function callbackpossibility(obj){
	
	var possibility = obj.substr(obj.length-1,1);
	var severity = ReactAPI.getComponentAPI("SupDataGrid").APIs("SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572326978046").getSelecteds()[0]['severity'];
	
	if(severity !== null && severity.value !== undefined){
		
		var mutiResult = parseInt(possibility) * parseInt(severity.value);
		
		if(mutiResult < 8){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572326978046').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/001", value: "一般风险", type: "reference"}
		}else if(mutiResult >= 8 && mutiResult < 12){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572326978046').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/002", value: "重大风险", type: "reference"}
		}else if(mutiResult >= 12){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572326978046').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/003", value: "特大风险", type: "reference"}
		}
		
	}
	else{
		ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572326978046').getSelecteds()[0].riskRank = {}
	}
	
}




//后果严重性
function callbackSeverity(obj){
	
	var possibility = ReactAPI.getComponentAPI("SupDataGrid").APIs("SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572326978046").getSelecteds()[0]['possibility'];
	var severity = obj.substr(obj.length-1,1);
	
	if(possibility !== null && possibility.value !== undefined){
		
		var mutiResult = parseInt(possibility.value) * parseInt(severity);
		
		if(mutiResult < 8){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572326978046').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/001", value: "一般风险", type: "reference"}
		}else if(mutiResult >= 8 && mutiResult < 12){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572326978046').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/002", value: "重大风险", type: "reference"}
		}else if(mutiResult >= 12){
			ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572326978046').getSelecteds()[0].riskRank = {id: "SESWssHS_SESWssHS_riskRank/003", value: "特大风险", type: "reference"}
		}
		
	}
	else{
		ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572326978046').getSelecteds()[0].riskRank = {}
	}
	
}

//保存应急物资 重复判断
ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1573449568700').getDatagridData()

ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1573449568700').getDatagridData().length

ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1573449568700').getDatagridData()[0].supplyId.id
ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1573449568700').getDatagridData()[0].supplyId.name


var errMsgs = [];

//应急物资
var grid1 = ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1573449568700').getDatagridData();
for(var i = 0; i < grid1.length - 1; i++){
	for(var j = i + 1; j < grid1.length; j++){
		if(grid1[i].supplyId.id === grid1[j].supplyId.id){
			errMsgs.push(grid1[i].supplyId.name + '数据重复(应急物资)');
		}
	}
}

//相关预案
var grid2 = ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572849908491').getDatagridData();
for(var i = 0; i < grid2.length - 1; i++){
	for(var j = i + 1; j < grid2.length; j++){
		if(grid2[i].hazardplanId.id === grid2[j].hazardplanId.id){
			errMsgs.push(grid2[i].hazardplanId.planName + '数据重复(相关预案)');
		}
	}
}

//关联危化品
var grid3 = ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssHS_1.0.0_hazardInfo_hazardInfoEditdg1572836938577').getDatagridData();
for(var i = 0; i < grid3.length - 1; i++){
	for(var j = i + 1; j < grid3.length; j++){
		if(grid3[i].materialId.id === grid3[j].materialId.id){
			errMsgs.push(grid3[i].materialId.name + '数据重复(关联危化品)');
		}
	}
}

if(errMsgs.length > 0){
	ReactAPI.showMessage('w',errMsgs.join('\n'));
	return false;
}
