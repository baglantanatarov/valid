///////////////////
// begin view

var view = {


  scrollDown: function(){ // прокрутка вниз
    var el = document.getElementById("scrollbar");
    el.scrollTop = el.scrollHeight;
  },

  showMessage: function(data){
    var el = document.getElementById("scrollbar");
    el.insertAdjacentHTML('beforeend', `
    <div class="message-wrapper">
      <img src="img/user.jpg" alt="User photo" class="message-wrapper__user-photo">
      <div class="message-wrapper__text-box">
        <span class="message-wrapper__user-name">${data.name}</span>
        <p class="message-wrapper__paragraph">${data.message}</p>
      </div>
    </div>`);
    this.scrollDown();
  }
};


//////////////////////
// begin model

var model = {
  state:  {
    id: 123456789,
    name: "",
    message: "",
  },

  ws: function(msg, ws){ 
    // Context for ws
    var self = this;
    
    ws.send(msg);
    ws.onmessage = function(response){  
      self.pushMessage(response.data);
    }    
  },

  pushMessage: function(msg) {
    this.state.id = 23132;
    this.state.name = "Джон";
    this.state.message = msg;
    view.showMessage(this.state);
  }  
};



////////////////////
// begin controller

var controller = {
  sendMessage: function(msg, ws){
    model.ws(msg, ws);
  },
};



// anonymous initialize function
(function(){
  // WS




  var app = {

    init: function(){
     
      var ws = this.wsInit();
      
      this.event(ws);
    },

    wsInit: function(){
      var ws = new WebSocket('wss://echo.websocket.org');

      ws.onopen = function(){
        var i = 0;
        console.log("Connect...", i++)
      };

      ws.onclose = function(){
        console.log("DISCONNECTED");
      };

      return ws;  
    },



 

    event: function(ws){
      var elInput = document.getElementById("input");
      var elForm = document.getElementById("form-input-main");  
   
     
      
      
      elForm.addEventListener('submit', function(event){
        event.preventDefault();        
        
       
        
        controller.sendMessage(elInput.value, ws);
        
        

        elInput.value = '';
       


        // var http = new XMLHttpRequest();
        // var url = 'http://192.168.100.11';
 
        // http.open('POST', url, true);

 
        // // http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        // http.onreadystatechange = function() {
        //     if(http.readyState == 4 && http.status == 200) {
        //        console.log(http.responseText);
        //     }
        // }
        // http.send(elInput.value);

      });
    }    
  };

  app.init();

}());

