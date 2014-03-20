
var R = require("request");
var QS = require("querystring")

var PixnetApi = function(client_id) {
  this.client_id = client_id;

}

var dafault_callback = function (error, response, body ) {
  json = JSON.parse(body);
  console.log(json);
}

PixnetApi.prototype.getAbsUrl = function(path, qs) {
  qs = qs || {};
  qs.client_id = this.client_id;
  return "http://emma.pixnet.cc/"+path+".json?"+QS.stringify(qs);
}


PixnetApi.prototype.getUseRate = function(cb) {
  R.get(this.getAbsUrl("index/rate"), cb);
}

module.exports = PixnetApi;