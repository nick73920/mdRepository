function callbackPersonLiable(obj){
	ReactAPI.getComponentAPI('Reference').APIs('productPlan.editDept.name').setValue(obj[0].position.department);
}