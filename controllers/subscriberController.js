const PublishSubscribeHelper = require('../middleware/publishSubscribeMethods');

class SubscribeController{
    static subscribe(req,res) {
        const {url} = req.body;

        const topic = req.path.substr(1,);

        console.log(topic)

        if (url === undefined && topic == undefined) {
            // send a bad request response

            res.status(400).send({url, topic})

        }else{
            if(PublishSubscribeHelper.validateUrl(url)){
                const token = PublishSubscribeHelper.sendSubscription(topic);

                console.log(token);


                // send Ok response
                if (token) {

                    res.status(200).send({url, topic})

                } else { // send a Not Found Response
                    res.status(404).send({url, topic})

                }

            }else{
                res.status(406).send({url, topic})

            }
        }


    }
}

module.exports = SubscribeController;