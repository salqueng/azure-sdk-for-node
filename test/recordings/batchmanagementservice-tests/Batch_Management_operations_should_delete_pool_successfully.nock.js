// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_iaas_pool?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/poolOperationResults/delete-test_iaas_pool?api-version=2017-09-01',
  'retry-after': '15',
  'x-ms-request-id': 'b119fde2-03f9-4874-bf89-9babc178a58a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '234be0d4-4079-4ef2-ba06-36f08f5309a5',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220345Z:234be0d4-4079-4ef2-ba06-36f08f5309a5',
  date: 'Wed, 08 Nov 2017 22:03:44 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/pools/test_iaas_pool?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/poolOperationResults/delete-test_iaas_pool?api-version=2017-09-01',
  'retry-after': '15',
  'x-ms-request-id': 'b119fde2-03f9-4874-bf89-9babc178a58a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '234be0d4-4079-4ef2-ba06-36f08f5309a5',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220345Z:234be0d4-4079-4ef2-ba06-36f08f5309a5',
  date: 'Wed, 08 Nov 2017 22:03:44 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/poolOperationResults/delete-test_iaas_pool?api-version=2017-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '628339aa-8840-4125-8f2b-e1f0a8afa46a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '30d05a9f-69d5-446f-8d87-c93980d2cfa9',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220416Z:30d05a9f-69d5-446f-8d87-c93980d2cfa9',
  date: 'Wed, 08 Nov 2017 22:04:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/poolOperationResults/delete-test_iaas_pool?api-version=2017-09-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '628339aa-8840-4125-8f2b-e1f0a8afa46a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '30d05a9f-69d5-446f-8d87-c93980d2cfa9',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220416Z:30d05a9f-69d5-446f-8d87-c93980d2cfa9',
  date: 'Wed, 08 Nov 2017 22:04:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];