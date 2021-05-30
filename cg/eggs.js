//how do you get a function to only run once?
var cntA=0;
var cntB=0;
var cntC=0;


function changeImageA() {
    var image = document.getElementById('the-divA');
    if (cntA>=1) {
        image.src = "/eggs/bA.png";
        image.style.height = '135px';
        image.style.width = '75px';
        document.getElementById("the-divA").className = "shake-chunk";
        }
    // else if (cntA>=3) {
    //     // image.src = "/eggs/state-02.png";
    //     // image.style.height = '175px';
    //     // image.style.width = '100px';
    //     // document.getElementById("the-divA").className = "shake-chunk";
    //     }        
}

function changeImageB() {
    var image = document.getElementById('the-divB');
    if (cntB>=1) {
        image.src = "/eggs/bB.png";
        image.style.height = '135px';
        image.style.width = '75px';
        document.getElementById("the-divB").className = "shake-opacity";
        }

    // if (image.src.match("/eggs/egg-B.png")) {
    //     image.src = "/eggs/bB.png";
    //     image.style.height = '135px';
    //     image.style.width = '75px';
    //     document.getElementById("the-divB").className = "shake-opacity";
    // }
}

function changeImageC() {
    var image = document.getElementById('the-divC');
      if (cntC>=1) {
        image.src = "/eggs/bC.png";
        image.style.height = '135px';
        image.style.width = '75px';
        document.getElementById("the-divC").className = "shake-slow";
        }
    
    // if (image.src.match("/eggs/0000.png")) {
    //     image.src = "/eggs/bC.png";
    //     image.style.height = '135px';
    //     image.style.width = '75px';
    //     document.getElementById("the-divC").className = "shake-slow";
    // }
}


function AnimateItA() {
    var theDiv = $("#the-divA"),
        
        image = document.getElementById('the-divA'),
        
        theContainer = $("#container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop);
      
    
    cntA=parseInt(cntA)+parseInt(1);
    var divData=document.getElementById("showCountA");
    // divData.innerHTML=cntA;//this part has been edited
    
    if (cntA >= 1) {            
        imgRight = "eggs/bA.png",
        imgLeft = "eggs/bA-L.png";
     }
     
    if (cntA >= 3) {
        imgRight = "eggs/state-02-R.png",
        imgLeft = "eggs/state-02.png";
        image.style.height = '195px';
        image.style.width = '100px';
     }
     
    if (cntA >= 5) {
        imgRight = "eggs/state-03-R.png",
        imgLeft = "eggs/state-03.png";
        image.style.height = '265px';
        image.style.width = '140px';
     }
     
    if (cntA >= 7) {
        imgRight = "eggs/state-04-R.png",
        imgLeft = "eggs/state-04.png";
        image.style.height = '385px';
        image.style.width = '180px';
     }
    
    if (cntA >= 9) {
        imgRight = "eggs/kA.png",
        imgLeft = "eggs/kA-L.png";
        image.style.height = '475px';
        image.style.width = '200px';
     }     
     
      
    if (theDiv.position().left < leftPos) {
        theDiv.attr("src", imgRight);
    } else {
        theDiv.attr("src", imgLeft);
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos
    }, 2000, AnimateItA);
}
        


function AnimateItB() {
    var theDiv = $("#the-divB"),
    
        image = document.getElementById('the-divB'),
    
        theContainer = $("#container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop);
        // imgRight = "eggs/bB.png",
        // imgLeft = "eggs/bB-L.png";
    
    cntB=parseInt(cntB)+parseInt(1);
    var divData=document.getElementById("showCountB");
    // divData.innerHTML=cntB;//this part has been edited
    
    if (cntB >= 1) {            
        imgRight = "eggs/bB.png",
        imgLeft = "eggs/bB-L.png";
        image.style.height = '135px';
        image.style.width = '75px';
     }
    if (cntB >= 2) {            
        imgRight = "eggs/kB.png",
        imgLeft = "eggs/kB-L.png";
        image.style.height = '465px';
        image.style.width = '180px';
     } 
    
    
    if (theDiv.position().left < leftPos) {
        theDiv.attr("src", imgRight);
    } else {
        theDiv.attr("src", imgLeft);
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos
    }, 2000, AnimateItB);
}
function AnimateItC() {
    var theDiv = $("#the-divC"),
    
        image = document.getElementById('the-divC'),
    
        theContainer = $("#container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop);
        // imgRight = "eggs/bC.png",
        // imgLeft = "eggs/bC-L.png";

    cntC=parseInt(cntC)+parseInt(1);
    var divData=document.getElementById("showCountC");
    // divData.innerHTML=cntC;//this part has been edited

    if (cntC >= 1) {            
        imgRight = "eggs/bC.png",
        imgLeft = "eggs/bC-L.png";
        image.style.height = '135px';
        image.style.width = '75px';
     }
    if (cntC >= 2) {            
        imgRight = "eggs/kC.png",
        imgLeft = "eggs/kC-L.png";
        image.style.height = '370px';
        image.style.width = '240px';
     }
    
    if (theDiv.position().left < leftPos) {
        theDiv.attr("src", imgRight);
    } else {
        theDiv.attr("src", imgLeft);
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos
    }, 2000, AnimateItC);
}
AnimateItA();
AnimateItB();
AnimateItC();
