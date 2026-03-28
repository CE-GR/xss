fetch('/flag')
.then(r=>r.text())
.then(d=>{
    document.body.innerText = d;
});
