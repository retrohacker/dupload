var dUpload = require("../index.js")

var upload = new dUpload("./Dockerfile.tmpl","./cwd")
upload.mkdir("/opt/usr")
upload.mkdir("/etc/usr")
upload.mv("opt","/opt/usr/src")
upload.mv("etc","/etc/usr/src")
upload.commit(function(e,dockerfile) {
  if(e) return console.log(e)
  console.log(dockerfile)
})
