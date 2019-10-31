function productPlanViewClick(){
	var rowDate = ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWSSPlan_1.0.0_productPlan_productPlanList_productPlan_sdg').getSelecteds();
	if(rowDate.length != 1){
		ReactAPI.showMessage('w',ReactAPI.international.getText('ec.business.view.choose.one'));
        return false;
	}
	var url = '/msService/SESWSSPlan/productPlan/productPlan/productPlanView?__pc__=dGhyZWVTaW11bHRMaXN0X3VwZGF0ZV9tb2RpZnlfU0VTV3NzU1NfMS4wLjBfdGhyZWVTaW11bHRfdGhyZWVTaW11bHRMaXN0fA__&entityCode=SESWSSPlan_1.0.0_productPlan&id=' + rowDate[0].id;
	window.open(url);
}


function trackFeedBackClick(){
	console.log('trackFeedBackClick');

	var rowDate = ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWSSPlan_1.0.0_productPlan_indictorTaskList_indictorTask_sdg').getSelecteds();
	if(rowDate.length != 1){
		ReactAPI.showMessage('w',ReactAPI.international.getText('ec.business.view.choose.one'));
        return false;
	}

	var url = '/msService/SESWSSPlan/productPlan/indictorTask/indictorTaskEdit?__pc__=aW5kaWN0b3JUYXNrTGlzdF9zaW5nbGVFZGl0X21vZGlmeV9TRVNXU1NQbGFuXzEuMC4wX3Byb2R1Y3RQbGFuX2luZGljdG9yVGFza0xpc3R8&viewCode=SESWSSPlan_1.0.0_productPlan_indictorTaskList&entityCode=SESWSSPlan_1.0.0_productPlan&iscrosscompany=false&openType=frame&viewType=edit&id=' + rowDate[0].id;
	window.open(url);
}

function assessmentScoreClick(){
	console.log('assessmentScoreClick');
	var url = 'http://192.168.95.164:8080/msService/SESWSSPlan/productPlan/indictorTask/indictorTaskEdit?__pc__=aW5kaWN0b3JUYXNrTGlzdF9hYWFfYWRkX1NFU1dTU1BsYW5fMS4wLjBfcHJvZHVjdFBsYW5faW5kaWN0b3JUYXNrTGlzdHw_&viewCode=SESWSSPlan_1.0.0_productPlan_indictorTaskList&entityCode=SESWSSPlan_1.0.0_productPlan&iscrosscompany=false&openType=frame&viewType=edit';
	window.open(url);
}

//选择人事件
function callbackeditor(obj){
	ReactAPI.getComponentAPI('Reference').APIs('productPlan.editDept.name').setValue(obj[0].position.department);
}

//保存前确认指标已新增
var rowDate = ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWSSPlan_1.0.0_productPlan_productPlanEditdg1571877152109').getDatagridData();
if(rowDate.length === 0){
	//ReactAPI.showMessage('w',ReactAPI.international.getText('ec.business.view.choose.one'));
	ReactAPI.showMessage('w','必需填入一条指标记录!');
	return false;
}

//选年
function planTypeClick(obj){
	console.log(obj);
	if(obj === 'SESWSSPlan_SESWSSPlan_planType/001'){
		ReactAPI.getComponentAPI('Reference').APIs('productPlan.planQuarter').setReadonly(true);
	}else if(obj === 'SESWSSPlan_SESWSSPlan_planType/002'){
		
	}else if(obj === 'SESWSSPlan_SESWSSPlan_planType/003'){
		
	}
}

//选季


//选月

