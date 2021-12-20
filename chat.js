function addMsg(){
    
    var boxes = document.querySelector(".container .chat .chat-box");
    var boxes2 = document.querySelector(".container .chat .chat-box2");

    var oldHTML = boxes.innerHTML;  
    var oldHTML2 = boxes2.innerHTML; 

    var boxContent = document.getElementById("contentLeft");

    
    boxes.innerHTML = oldHTML + `
    <div class="box1">
            
           <main>
            <div>${boxContent.value}</div>
           </main>
        </div>` ;

        boxes2.innerHTML = oldHTML2 + `
        <div class="box2">
                
               <main>
                <div>${boxContent.value}</div>
               </main>
            </div>` ;   

            boxContent.value = ""
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function addMsg2(){
    
    var boxes = document.querySelector(".container .chat .chat-box");
    var boxes2 = document.querySelector(".container .chat .chat-box2");

    var oldHTML = boxes.innerHTML;  
    var oldHTML2 = boxes2.innerHTML; 

    var boxContent = document.getElementById("contentRight");

   
    boxes.innerHTML = oldHTML + `
    <div class="box2">
            
           <main>
            <div>${boxContent.value}</div>
           </main>
        </div>` ;

        boxes2.innerHTML = oldHTML2 + `
        <div class="box1">
                
               <main>
                <div>${boxContent.value}</div>
               </main>
            </div>` ;   
   
            boxContent.value = ""

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addMsg3(){
    
    var boxes = document.querySelector(".container .chat .chat-box");
    var boxes2 = document.querySelector(".container .chat .chat-box2");

    var oldHTML = boxes.innerHTML;  
    var oldHTML2 = boxes2.innerHTML; 

    var boxContent = document.getElementById("kb1text");

    
    boxes.innerHTML = oldHTML + `
    <div class="box1">
            
           <main>
            <div>${boxContent.value}</div>
           </main>
        </div>` ;

        boxes2.innerHTML = oldHTML2 + `
        <div class="box2">
                
               <main>
                <div>${boxContent.value}</div>
               </main>
            </div>` ;   

            boxContent.innerText = ""
            boxContent.style.padding = "20px"

            document.querySelector(".wrapper1")
       .style
       .display = "none"

       document.querySelector(".keyboardparent")
       .style
       .display = "none"
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addMsg4(){
    
    var boxes = document.querySelector(".container .chat .chat-box");
    var boxes2 = document.querySelector(".container .chat .chat-box2");

    var oldHTML = boxes.innerHTML;  
    var oldHTML2 = boxes2.innerHTML; 

    var boxContent = document.getElementById("kb2text");

   
    boxes.innerHTML = oldHTML + `
    <div class="box2">
            
           <main>
            <div>${boxContent.value}</div>
           </main>
        </div>` ;

        boxes2.innerHTML = oldHTML2 + `
        <div class="box1">
                
               <main>
                <div>${boxContent.value}</div>
               </main>
            </div>` ;   
   
            // boxContent.value = ""
            boxContent.innerText = ""
            boxContent.style.padding = "20px"

            document.querySelector(".wrapper2")
       .style
       .display = "none"

       document.querySelector(".keyboardparent")
       .style
       .display = "none"

}
///////////////////////////////////////////////////////////////////////////////////////////////////
function addMsgimg(){
    
    var boxes = document.querySelector(".container .chat .chat-box");
    var boxes2 = document.querySelector(".container .chat .chat-box2");

    var oldHTML = boxes.innerHTML;  
    var oldHTML2 = boxes2.innerHTML; 

    var boxContent = document.getElementById("display_image");

    
    boxes.innerHTML = oldHTML + `
    <div class="box1">
            
           <main>
           <div class="display_image"></div>
     
           </main>
        </div>` ;

        boxes2.innerHTML = oldHTML2 + `
        <div class="box2">
                
               <main>
               <div class="display_image2"></div>
               </main>
            </div>` ;   


            const image_input = document.querySelector("#image_input");
           var uploaded_image;

    image_input.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    
    document.querySelector(".display_image").style.display = "block"
    document.querySelector(".display_image").style.backgroundImage = `url(${uploaded_image})`;
    
   });
  
   
       reader.readAsDataURL(this.files[0]);
   
  
 });

            // boxContent.value = ""
}

////////////////////////////////////////////////////////////////////////////////////////
// const image_input = document.querySelector("#image_input");
// var uploaded_image;
// const send = document.querySelectorAll(".display_image");

    

// image_input.addEventListener('change', function() {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => {
//     uploaded_image = reader.result;
//     // document.querySelector(".display_image").style.display = "block"
//     // document.querySelector(".display_image").style.backgroundImage = `url(${uploaded_image})`;
//     for (let index = 0; index <= send.length; index++) {
//         // const element = array[index];
//         send[index].style.display = "block";
//         send[index].style.backgroundImage = `url(${uploaded_image})`;
//     }
    
//   });

//   for (let index = 0; index <= send.length; index++) {
//      reader.readAsDataURL(this.files[i]);
//   }
 
// });
//////////////////////////////////////////////////////////
const image_input2 = document.querySelector("#image_input");
var uploaded_image2;

image_input2.addEventListener('change', function() {
  const reader2 = new FileReader();
  reader2.addEventListener('load', () => {
    uploaded_image2 = reader2.result;
    document.querySelector(".display_image2").style.display = "block"
    document.querySelector(".display_image2").style.backgroundImage = `url(${uploaded_image2})`;
   
  });
  reader2.readAsDataURL(this.files[0]);
});

///////////////////////////////////////////////////////////////////////////////////////
// function setup() {
//     document.getElementById('pin').addEventListener('click', openDialog);
//     function openDialog() {
//         document.getElementById('fileid').click();
//     }
//     document.getElementById('fileid').addEventListener('change', submitForm);
//     function submitForm() {
//         document.getElementById('formid').submit();
//     }

//     var submitBtn = document.querySelector(".submitBtn");

/////////////////////////////////////////////////submit
//     document.querySelector(".submitBtn")
//     .style
//     .display = "block"
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var video = document.querySelector("video");
		function startWebCam() {
			if (navigator.mediaDevices.getUserMedia) {
				navigator.mediaDevices.getUserMedia({ video: true })
			    	.then(function (stream) {
			      		video.srcObject = stream;
			    	})
			    	.catch(function (err0r) {
			      		console.log("Something went wrong!");
			    	});
			}
		}
 /////////////////////////////////////////////////////////////////////////////////////////////////keyboard1


 let keys = document.querySelectorAll('.wrapper1 .key .row span'),
    keyPad = document.querySelector('.wrapper1 .key'),
    display = document.querySelector('#kb1text');

if(keys && keyPad && display){
    let capsLockMode = false;
    keys.forEach(key=>{
        key.addEventListener('click',function(){
            // console.log(this.innerText);
            if(this.classList.contains('caps')){
                this.classList.toggle('active');
                keyPad.classList.toggle('uppercase');
                capsLockMode ? capsLockMode=false : capsLockMode=true;
            }else if(this.classList.contains('backspace')){
                   let str = display.innerHTML;
                   display.innerHTML = str.substring(0,(str.length-1))
            }else{
                if(capsLockMode){
                    display.innerHTML += this.dataset.key.toUpperCase();
                }else{
                    display.innerHTML += this.dataset.key.toLowerCase();
                }
            }
        })
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////keyboard2
let keys2 = document.querySelectorAll('.wrapper2 .key .row span'),
keyPad2 = document.querySelector('.wrapper2 .key'),
display2 = document.querySelector('.wrapper2 textarea');

if(keys2 && keyPad2 && display2){
let capsLockMode = false;
keys2.forEach(key=>{
    key.addEventListener('click',function(){
        // console.log(this.innerText);
        if(this.classList.contains('caps')){
            this.classList.toggle('active');
            keyPad.classList.toggle('uppercase');
            capsLockMode ? capsLockMode=false : capsLockMode=true;
        }else if(this.classList.contains('backspace')){
               let str = display2.innerHTML;
               display2.innerHTML = str.substring(0,(str.length-1))
        }else{
            if(capsLockMode){
                display2.innerHTML += this.dataset.key.toUpperCase();
            }else{
                display2.innerHTML += this.dataset.key.toLowerCase();
            }
        }
    })
});
}
/////////////////////////////////////////////////////////////////////////////////////////
function displaykb1(){
    

       document.querySelector(".keyboardparent")
       .style
       .display = "block"

       document.querySelector(".wrapper1")
       .style
       .display = "block"
}
function displaykb2(){
    

    document.querySelector(".keyboardparent")
    .style
    .display = "block"

    document.querySelector(".wrapper2")
    .style
    .display = "block"
}
////////////////////////////////////////////////////////////////////////////////////////////
