select t.resourcepointcode,t.*,t.rowid from plbd_employeeresource t
where t.resourcepointcode = 'ses' or t.resourcepointcode = 'SES_Org_Resource'
;

select t.resourcepointcode,t.*,t.rowid from plbd_jobresource t
where t.resourcepointcode = 'ses' or t.resourcepointcode = 'SES_Org_Resource'
;

select t.resourcepointcode,t.*,t.rowid from plbd_roleresource t
where t.resourcepointcode = 'ses' or t.resourcepointcode = 'SES_Org_Resource'
;

select t.resourcepointcode,t.* from plbd_resourcepermission t
where resourcepointcode = 'ses'
;