//helper class to enable calling publish and subscribing end points
const PubSub = require('pubsub-js');

const validator = require('validator');

class PublishSubscribeHelper {
    static sendSubscription(topic){
        // create a function to subscribe to topics
        var mySubscriber = function (msg, data) {
           console.log( msg, data );
        };

      // add the function to the list of subscribers for a particular topic
      // we're keeping the returned token, in order to be able to unsubscribe
      // from the topic later on
      var token = PubSub.subscribe(topic, mySubscriber);

      return token;
    }
    //method to subscribe
    static sendPublish(topic,data){
        var hasPublished = PubSub.publish(topic,data);

        if(hasPublished){

            return hasPublished;

        }else {
            const reSubscibe = this.sendSubscription(topic);

            if(reSubscibe){
                return this.sendPublish(topic,data)
            }else{
                return false;
            }
        }
    }

    //url validator
    static validateUrl(str){
        return validator.isURL(str)
    }
}

module.exports = PublishSubscribeHelper;