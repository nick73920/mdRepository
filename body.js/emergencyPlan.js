//应急通讯录过滤
var errMsgs = [];

//应急通讯录
var grid1 = ReactAPI.getComponentAPI('SupDataGrid').APIs('SESWssEP_1.0.0_emergencyPlan_emergencyPlanEditdg1572511494248').getDatagridData();
for(var i = 0; i < grid1.length - 1; i++){
	for(var j = i + 1; j < grid1.length; j++){
		if(grid1[i].personId.personId.id === grid1[j].personId.personId.id){
			errMsgs.push(grid1[i].personId.personId.name + '数据重复(应急通讯录)');
		}
	}
}

if(errMsgs.length > 0){
	ReactAPI.showMessage('w',errMsgs.join('\n'));
	return false;
}