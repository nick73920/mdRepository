function callbackPersonLiable(obj){
	ReactAPI.getComponentAPI('Reference').APIs('productPlan.editDept.name').setValue(obj[0].position.department);
}

//初始化不安全人员列表
ReactAPI.getComponentAPI("SupDataGrid").APIs("sesWssOR_1.0.0.0_safePerson_safepersonEditdg1573800805588").deleteLine();
ReactAPI.getComponentAPI("SupDataGrid").APIs("sesWssOR_1.0.0.0_safePerson_safepersonEditdg1573800805588").addLine(staffBehavior);