//风险与安全措施

//页面初始化事件

//新增
if(ReactAPI.getParamsInRequestUrl().id == undefined){
	ReactAPI.getComponentAPI('SupDataGrid').APIs(gridId).setColumnsHideOrShow('location',false);
	ReactAPI.getComponentAPI('SupDataGrid').APIs(gridId).setColumnsHideOrShow('photograph',false);
	ReactAPI.getComponentAPI('SupDataGrid').APIs(gridId).setColumnsHideOrShow('checkConfirm',false);
	ReactAPI.getComponentAPI('SupDataGrid').APIs(gridId).setColumnsHideOrShow('inputText',false);
}else{//编辑

	ReactAPI.getComponentAPI('SystemCode').APIs('riskSafey.ticketType').setReadonly(true);

}





//点击是否必须相应事件
function onchangeBypass(obj){
   handleBypass(obj);
}


function handleBypass(obj){
    var grid = ReactAPI.getComponentAPI("SupDataGrid").APIs(gridId);
    var rows = grid.getSelecteds();
    if(!rows||rows.length==0){
        return;
    }
    var row = rows[0];
    grid.setDatagridCellAttr(row.rowIndex,"sensorBypassName",{readonly:!obj});
    grid.setValueByKey(row.rowIndex,"sensorBypassName",'');
    grid.setDatagridCellAttr(row.rowIndex,"sensorBypassTag",{readonly:!obj});
    grid.setValueByKey(row.rowIndex,"sensorBypassTag",'');
    grid.setDatagridCellAttr(row.rowIndex,"sensorBypassTagValue",{readonly:!obj});
    grid.setValueByKey(row.rowIndex,"sensorBypassTagValue",'');
}

var grid = ReactAPI.getComponentAPI("SupDataGrid").APIs('WTS_1.0.0_riskSafeMeasures_riskSafeyEditdg1573782875868')
var row = grid.getSelecteds()[0]
grid.setDatagridCellAttr(0,"location",{readonly:true});



var grid = ReactAPI.getComponentAPI("SupDataGrid").APIs("VxSIL_1.0.0_baseSensorGroup_baseSensorGroupEditdg1569745505046")
var row = grid.getSelecteds()[0]
grid.setDatagridCellAttr(0,"sensorBypassName",{readonly:true});




var gridId = "WTS_1.0.0_riskSafeMeasures_riskSafeyEditdg1573782875868";
ReactAPI.getComponentAPI('SupDataGrid').APIs(gridId).setColumnsHideOrShow('location',true);