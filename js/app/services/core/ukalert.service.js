'use strict';

angular.module('ukalert', [])
  .factory('Ukalert', function() {
    return {
      show: function(msg,action,level) {
        if(typeof msg === 'object' || typeof msg === 'array' ) {
          var prepMsg = "<ul class='uk-list'>";
          for (let key in msg) {
              prepMsg = prepMsg.concat('<li>' + msg[key] + '<li>');
              
          }
          prepMsg = prepMsg + "<ul>";   
          UIkit.notification(prepMsg,{status: level}).then(function () {
            if(action) {
              window.location = action;
            }
          });
        } else {
          
          UIkit.notification(msg,{status: level}).then(function () {
            if(action) {
              window.location = action;
            }
        });
        }    
      }
    }
  });