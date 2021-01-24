App.youtube = App.cable.subscriptions.create("YoutubeChannel", {
  connected: function() {

    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    
  },

  live: function() {
    return this.perform('live');
  }
});

function tem(){
  console.log("更新");
  App.youtube.live()

}

setInterval(tem, 180000000);