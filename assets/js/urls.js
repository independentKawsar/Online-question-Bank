var mainUrl = window.location.href;
var ids = ["http://127.0.0.1:5500/qp.html?id=0&u=0",
            "http://127.0.0.1:5500/qp.html?id=431&u=selectBoard",
            "http://127.0.0.1:5500/qp.html?id=433&u=selectSebaSubjects",
            "http://127.0.0.1:5500/qp.html?id=434&u=selectYear",
            "http://127.0.0.1:5500/qp.html?id=433&u=selectNcertSubjects",
            "http://127.0.0.1:5500/qp.html?id=432&u=selectBoard",
            "http://127.0.0.1:5500/index.html",
            "",
            "",
            "",
        
        ]

var includes=ids.includes(mainUrl)
    if(includes==true){
                        
        console.log("true");
    }
    else{
    console.log("false");

    }      