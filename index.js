var fs        = require('fs'),
    varstring = require('varstring')

var dUpload = module.exports = function dUpload(dockerfile,cwd) {
  this.dockerfile = dockerfile
  this.cwd = cwd
  this.mvscript = ""
  this.mkdirscript = ""
}

dUpload.prototype.mv = function mv(src,dst) {
  this.mvscript += "mv "+src+" "+dst+";"
}

dUpload.prototype.mkdir = function mkdir(dst) {
  this.mkdirscript += "mkdir -p "+dst+";" 
}

dUpload.prototype.commit = function commit(cb) {
  if(!this.mvscript.length > 0) mvscript = "echo 'No Files to Move!'"
  if(!this.mkdirscript.length > 0) mkdirscript = "echo 'No Directories to Make!'"
  var obj = {}
  obj.mvscript = this.mvscript
  obj.mkdirscript = this.mkdirscript
  obj.cwd = this.cwd
  fs.readFile(this.dockerfile,'utf-8',function(e,data) {
    if(e) return cb(e)
    return cb(null,varstring(data,obj))
  })
}
