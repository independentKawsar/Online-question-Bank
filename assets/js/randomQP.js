
        $(document).ready(function(){
            var s = 0;
        
    //         $('#sub-seba-x').hide();
    // $('#seba-x-eng').hide();
    // $('#sub-ncert-x').hide();
    // $('#boardX').hide();
    // $('#boardXII').hide();
    // $('#xiisubjects').hide();
        $('#classx').click(function(){
                s = 1;
                $('#download').hide();
                $('#boardX').show();
                $('#boardXII').hide();
                window.history.pushState({id:1}, null, "?id=431&u=selectBoard");
                console.log(s);
                
                
            });

            $('#sebaX').click(function(){
                s=2;
                $('#sub-seba-x').show();
                $('#seba-x-eng').hide();
                $('#sub-ncert-x').hide();
                $('#boardX').hide();
                $('#boardXII').hide();
                $('#download').hide();
                $('#xiisubjects').hide();
                window.history.pushState({id:1}, null, "?id=433&u=selectSebaSubjects");
                console.log(s);
                });

                $('#eng-seba-x').click(function(){
                    s=3;
                $('#seba-x-eng').show();
                $('#sub-seba-x').hide();
                window.history.pushState({id:1}, null, "?id=434&u=selectYear");
                console.log(s);
                });

                
                $('#ncertX').click(function(){
                    s=2;
                $('#boardX').hide();
                $('#sub-ncert-x').show();
                window.history.pushState({id:1}, null, "?id=433&u=selectNcertSubjects");
                console.log(s);
                });    

            $('#classxii').click(function(){
                s = 1;
                $('#download').hide();
                $('#boardX').hide();
                $('#boardXII').show();
                window.history.pushState({id:1}, null, "?id=432&u=selectBoard");
                console.log(s);
                
            });

            var ids = ["http://127.0.0.1:5500/qp.html?id=0&u=0",
            "http://127.0.0.1:5500/qp.html?id=431&u=selectBoard",
            "http://127.0.0.1:5500/qp.html?id=433&u=selectSebaSubjects",
            "http://127.0.0.1:5500/qp.html?id=434&u=selectYear",
            "http://127.0.0.1:5500/qp.html?id=433&u=selectNcertSubjects",
            "http://127.0.0.1:5500/qp.html?id=432&u=selectBoard"
        
        ]

          

            
            // var includesTwenty = ages.includes(20);
                // if(includesTwenty=="true")
                
            var mainUrl = window.location.href;
                var includes=ids.includes(mainUrl)
                if(includes==true){
                    
                    console.log("true");
                }
                else{
                    $('#sub-seba-x').hide();
                $('#seba-x-eng').hide();
                $('#sub-ncert-x').hide();
                $('#boardX').hide();
                $('#boardXII').hide();
                window.history.pushState({id:1}, null, "?id=0&u=0");
                
                $('#download').show();
                $('#xiisubjects').hide();

                console.log("false");

                }


            var currentUrl = window.location.href;
            if(currentUrl=="http://127.0.0.1:5500/qp.html"){
                $('#sub-seba-x').hide();
                $('#seba-x-eng').hide();
                $('#sub-ncert-x').hide();
                $('#boardX').hide();
                $('#boardXII').hide();
                window.history.pushState({id:1}, null, "?id=0&u=0");
                
                $('#download').show();
                $('#xiisubjects').hide();


            }
            currentUrl = currentUrl.replace(/=/g, '":"');
            currentUrl = currentUrl.replace(/&/g, '","');
            // currentUrl = currentUrl.replace(/%20/g, ' ');
            currentUrl = '{"'+currentUrl+'"}';
            var gUrl = JSON.parse(currentUrl);
            var id = gUrl.id;
            var text = gUrl.u;
            
            
                
            

var getUrl = window.location.search.slice(1);

getUrl = getUrl.replace(/=/g, '":"');
getUrl = getUrl.replace(/&/g, '","');
// getUrl = getUrl.replace(/%20/g, ' ');
getUrl = '{"'+getUrl+'"}';
var url = JSON.parse(getUrl);
var id = url.id;
var text = url.u;

if(id==431){
    
    s = 1;  
    $('#sub-seba-x').hide();
    $('#seba-x-eng').hide();
    $('#sub-ncert-x').hide();
    $('#boardX').show();
    $('#boardXII').hide();
    $('#download').hide();
    $('#xiisubjects').hide();
    console.log(s);
}
if(id==433){
    s=2;
    $('#sub-seba-x').show();
    $('#seba-x-eng').hide();
    $('#sub-ncert-x').hide();
    $('#boardX').hide();
    $('#boardXII').hide();
    $('#download').hide();
    $('#xiisubjects').hide();
}
if(id==434){
    s=2;
    $('#sub-seba-x').hide();
    $('#seba-x-eng').show();
    $('#sub-ncert-x').hide();
    $('#boardX').hide();
    $('#boardXII').hide();
    $('#download').hide();
    $('#xiisubjects').hide();
}
if(id==0){
     
    $('#sub-seba-x').hide();
    $('#seba-x-eng').hide();
    $('#sub-ncert-x').hide();
    $('#boardX').hide();
    $('#boardXII').hide();
    
    $('#download').show();
    $('#xiisubjects').hide();
}

        
        });

        $(window).on('popstate', function() {
      
            var getUrl = window.location.search.slice(1);

            getUrl = getUrl.replace(/=/g, '":"');
            getUrl = getUrl.replace(/&/g, '","');
            // getUrl = getUrl.replace(/%20/g, ' ');
            getUrl = '{"'+getUrl+'"}';
            var url = JSON.parse(getUrl);
            var id = url.id;
            var text = url.u;
            console.log(id);

            if(id==431){
                
                s = 1;  
                $('#sub-seba-x').hide();
                $('#seba-x-eng').hide();
                $('#sub-ncert-x').hide();
                $('#boardX').show();
                $('#boardXII').hide();
                $('#download').hide();
                $('#xiisubjects').hide();
                console.log(s);
            }
            if(id==433){
                s=2;
                $('#sub-seba-x').show();
                $('#seba-x-eng').hide();
                $('#sub-ncert-x').hide();
                $('#boardX').hide();
                $('#boardXII').hide();
                $('#download').hide();
                $('#xiisubjects').hide();
            }
            if(id==0){
                
                $('#sub-seba-x').hide();
                $('#seba-x-eng').hide();
                $('#sub-ncert-x').hide();
                $('#boardX').hide();
                $('#boardXII').hide();
                $('#download').show();
                $('#xiisubjects').hide();
            }

           
    });

        // function detectHistory(){
            
        //     if(s==1){
        //     $('#download').show();
        //     $('#boardX').hide();
        //     $('#boardXII').hide();
        //     $('#sub-seba-x').hide();
        //     s=0;
        //     }
        //     if(s==2){
        //     $('#download').hide();
        //     $('#boardX').show();
        //     $('#boardXII').hide();
        //     $('#sub-seba-x').hide();
        //     $('#sub-ncert-x').hide();
        //     s=1;
        //     }
        //     if(s==3){
        //     $('#seba-x-eng').hide();
        //     $('#sub-seba-x').show();
        //     s=2;
        //     }
        // }
        
    