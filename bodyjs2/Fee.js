function callbackBudgetAmount(obj){
	
	//新增
	if(ReactAPI.getParamsInRequestUrl().id == undefined){
		ReactAPI.getComponentAPI('InputNumber').APIs('costBudge.budgetAmountBalance').setValue(obj);
		ReactAPI.getComponentAPI('InputNumber').APIs('costBudge.budgetBalance').setValue(obj);
	}else{//编辑
		
		//预算结余 = 预算结余 - 原来的预算额度 + 页面的预算额度
		var newbudgetAmount = ReactAPI.getComponentAPI('InputNumber').APIs('costBudge.budgetAmountBalance').getValue() - budgetAmount + obj;
		ReactAPI.getComponentAPI('InputNumber').APIs('costBudge.budgetAmountBalance').setValue(newbudgetAmount);
		
		//结余 = 结余 - 原来的预算额度 + 页面上的预算额度		
		var newbudgetBalance = budgetBalance - budgetAmount + obj;
		ReactAPI.getComponentAPI('InputNumber').APIs('costBudge.budgetBalance').setValue(newbudgetBalance);
		
		//更新相关值
		budgetAmount = newbudgetAmount;
		budgetBalance = newbudgetBalance;
	
	}

}

function callbackbudgetName(obj){
	
	console.log(obj);
	
	
	
	//新增
	if(ReactAPI.getParamsInRequestUrl().id == undefined){
		console.log('add');
		
		costBudget = obj;
		extractionReceiveAmount = 0;
		
		
	}else{//编辑
		console.log('edit');
	
	}

}

function callbackextractionReceiveAmount(obj){
	
	console.log(obj);

	//设置预算结余值
	if(budgetBalance === '' || budgetBalance == undefined){
		budgetBalance = ReactAPI.getComponentAPI('InputNumber').APIs('budgetExt.budgetCode.budgetBalance').getValue();
		console.log('budgetBalance:' + budgetBalance);
	}
	//设置提取金额值
	if(extractionReceiveAmount === '' || extractionReceiveAmount == undefined){
		extractionReceiveAmount = ReactAPI.getComponentAPI('InputNumber').APIs('budgetExt.extractionReceiveAmount').getValue();
	}
	
	//新增
	if(ReactAPI.getParamsInRequestUrl().id == undefined){
		console.log('add');
		
		ReactAPI.getComponentAPI('InputNumber').APIs('budgetExt.budgetCode.budgetBalance').setValue(budgetBalance - obj);
		
		
	}else{//编辑
	
		console.log('edit');
		//多提10块钱
		//页面结余少十块钱
		
		//结余 = 结余 + 原来的领取金额 - 页面的领取金额
		var newbudgetBalance = budgetBalance + extractionReceiveAmount - obj;
		ReactAPI.getComponentAPI('InputNumber').APIs('budgetExt.budgetCode.budgetBalance').setValue(newbudgetBalance);
		
		extractionReceiveAmount = obj;
		budgetBalance = newbudgetBalance;
		
		
	
	}

}