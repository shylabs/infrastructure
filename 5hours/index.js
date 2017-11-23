console.log("loading function sh");
//http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
exports.handler = (event, context, callback) => {
  callback(null, "hello world");
}
