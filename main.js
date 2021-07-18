var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 function start() {
      document.getElementById("textbox1").innerHTML = "";
       recognition.start(); }
       recognition.onresult = function(event) { console.log(event);
         var Content = event.results[0][0].transcript;
         document.getElementById("textbox1").innerHTML = Content; 
         console.log(Content);
        speak();
        }
        camera = document.getElementById("camera");
         function speak(){
            var synth = window.speechSynthesis;
            speak_data = document.getElementById("textbox1").innerHTML;
            var utterThis = new SpeechSynthesisUtterance(speak_data);
            synth.speak (utterThis); 
            Webcam.attach(camera);
                   }
                   
                   Webcam.set({ width:360, height:250, image_format : 'jpeg', jpeg_quality:90 });