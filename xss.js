['/','/flag','/admin','/dashboard','/api','/debug','/secret']
.forEach(p=>{
    var i = document.createElement("iframe");
    i.src = p;
    document.body.appendChild(i);
});
