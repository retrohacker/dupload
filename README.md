docker-upload
===

# Usage

From node.js

```js
var dUpload = require("docker-upload")

var upload = new dUpload("./Dockerfile.tmpl","./cwd")
upload.mkdir("/opt/usr")
upload.mkdir("/etc/usr")
upload.mv("opt","/opt/usr/src")
upload.mv("etc","/etc/usr/src")
upload.commit(function(e,dockerfile) {
  if(e) return console.log(e)
  console.log(dockerfile)
})
```

Inside _Dockerfile.tmpl_

```text
FROM nodesource/node:jessie

ADD {cwd} /tempcwd
WORKDIR /tempcwd

RUN {mkdirscript}
RUN {mvscript}
```

Result

```
FROM nodesource/node:jessie

ADD ./cwd /tempcwd
WORKDIR /tempcwd

RUN mkdir -p /opt/usr;mkdir -p /etc/usr;
RUN mv opt /opt/usr/src;mv etc /etc/usr/src;
```
