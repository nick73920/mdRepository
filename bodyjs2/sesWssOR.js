function callbackPersonLiable(obj){
	ReactAPI.getComponentAPI('Reference').APIs('productPlan.editDept.name').setValue(obj[0].position.department);
}

function callbackPersonLiable(obj){
	ReactAPI.getComponentAPI('Reference').APIs('commitment.responsibleDepartment.name').setValue(obj[0].position.department);
}