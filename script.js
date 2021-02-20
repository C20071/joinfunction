function getp1() {
    var inputs = [];
    for (let i = 1; i < inputs.length; i++)
    {
        inputs.push(document.getElementById("box"+i).value);
        inputs.join(" .");
        document.getElementById("showp1").innerHTML= inputs.join(". ");
    }
}

function getp2() {
    var inputs = [];
    for (let i = 1; i < inputs.length; i++)
    {
        inputs.push(document.getElementById("box2"+i).value);
        inputs.join(" .");
        document.getElementById("showp2").innerHTML= inputs.join(". ");
    }
}
