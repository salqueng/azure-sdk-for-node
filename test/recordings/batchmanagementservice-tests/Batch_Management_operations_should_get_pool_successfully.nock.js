// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_iaas_pool?api-version=2017-09-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_iaas_pool\",\"name\":\"test_iaas_pool\",\"type\":\"Microsoft.Batch/batchAccounts/pools\",\"etag\":\"W/\\\"0x8D526F491DDC420\\\"\",\"properties\":{\"lastModified\":\"2017-11-08T22:03:40.3898912Z\",\"creationTime\":\"2017-11-08T22:03:40.3898912Z\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2017-11-08T22:03:40.3898912Z\",\"allocationState\":\"Steady\",\"allocationStateTransitionTime\":\"2017-11-08T22:03:40.534651Z\",\"vmSize\":\"STANDARD_A1\",\"interNodeCommunication\":\"Disabled\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\"nodeFillType\":\"Spread\"},\"deploymentConfiguration\":{\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter-smalldisk\",\"version\":\"latest\"},\"nodeAgentSkuId\":\"batch.node.windows amd64\",\"windowsConfiguration\":{\"enableAutomaticUpdates\":true}}},\"scaleSettings\":{\"fixedScale\":{\"targetDedicatedNodes\":0,\"targetLowPriorityNodes\":0,\"resizeTimeout\":\"PT15M\"}},\"resizeOperationStatus\":{\"targetDedicatedNodes\":0,\"nodeDeallocationOption\":0,\"resizeTimeout\":\"PT15M\",\"startTime\":\"2017-11-08T22:03:40.3898912Z\"},\"currentDedicatedNodes\":0,\"currentLowPriorityNodes\":0}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1305',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 08 Nov 2017 22:03:40 GMT',
  etag: 'W/"0x8D526F491DDC420"',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '8131d365-54ec-48df-97ed-4cc2e1dfae22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'f04279e6-4396-4130-9ce2-6a0e935c2666',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220343Z:f04279e6-4396-4130-9ce2-6a0e935c2666',
  date: 'Wed, 08 Nov 2017 22:03:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_iaas_pool?api-version=2017-09-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_iaas_pool\",\"name\":\"test_iaas_pool\",\"type\":\"Microsoft.Batch/batchAccounts/pools\",\"etag\":\"W/\\\"0x8D526F491DDC420\\\"\",\"properties\":{\"lastModified\":\"2017-11-08T22:03:40.3898912Z\",\"creationTime\":\"2017-11-08T22:03:40.3898912Z\",\"provisioningState\":\"Succeeded\",\"provisioningStateTransitionTime\":\"2017-11-08T22:03:40.3898912Z\",\"allocationState\":\"Steady\",\"allocationStateTransitionTime\":\"2017-11-08T22:03:40.534651Z\",\"vmSize\":\"STANDARD_A1\",\"interNodeCommunication\":\"Disabled\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\"nodeFillType\":\"Spread\"},\"deploymentConfiguration\":{\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"MicrosoftWindowsServer\",\"offer\":\"WindowsServer\",\"sku\":\"2016-Datacenter-smalldisk\",\"version\":\"latest\"},\"nodeAgentSkuId\":\"batch.node.windows amd64\",\"windowsConfiguration\":{\"enableAutomaticUpdates\":true}}},\"scaleSettings\":{\"fixedScale\":{\"targetDedicatedNodes\":0,\"targetLowPriorityNodes\":0,\"resizeTimeout\":\"PT15M\"}},\"resizeOperationStatus\":{\"targetDedicatedNodes\":0,\"nodeDeallocationOption\":0,\"resizeTimeout\":\"PT15M\",\"startTime\":\"2017-11-08T22:03:40.3898912Z\"},\"currentDedicatedNodes\":0,\"currentLowPriorityNodes\":0}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1305',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 08 Nov 2017 22:03:40 GMT',
  etag: 'W/"0x8D526F491DDC420"',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '8131d365-54ec-48df-97ed-4cc2e1dfae22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'f04279e6-4396-4130-9ce2-6a0e935c2666',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220343Z:f04279e6-4396-4130-9ce2-6a0e935c2666',
  date: 'Wed, 08 Nov 2017 22:03:42 GMT',
  connection: 'close' });
 return result; }]];