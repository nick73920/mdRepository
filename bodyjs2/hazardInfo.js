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