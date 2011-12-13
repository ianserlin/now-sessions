module.exports = function(n){

  var nowjs = n;
  
  nowjs.sessions = function(sessionStore,sessionKey){
    if( !sessionKey ){
      sessionKey = 'connect.sid';
    }
    nowjs.before(function(client,next){
      var sid = decodeURIComponent( client.user.cookie[sessionKey] );
      sessionStore.get( sid, function( err, session ){
        client.now.session = session;
        next();
      });
    });
  };
};