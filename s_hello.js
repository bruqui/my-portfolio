var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
tenantId: 'bruqui',
applicationName: 'my-portfolio',
appUid: '4x52DTWLDxG023TKQT',
tenantUid: 'w8F0HG8WRFN4CDL720',
deploymentUid: 'a1520741-661a-45fe-87fc-482a88249451',
serviceName: 'my-portfolio',
stageName: 'dev',
pluginVersion: '3.2.5'})
const handlerWrapperArgs = { functionName: 'my-portfolio-dev-hello', timeout: 6}
try {
  const userHandler = require('./handler.js')
  module.exports.handler = serverlessSDK.handler(userHandler.hello, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
