const express = require('express');
const paypal = require('paypal-rest-sdk');
var cors = require('cors')

const app = express();

app.use(cors());

app.listen(4000);
//////////////////////////////////////////////////
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AW08gKdTJAStrt0PenCcUa-EPaqphhipPcMNjtWKfIoRSHWBt-YRM5bea51ZAiv16baUZQLO2BNCKETw',
    'client_secret': 'EF-_jU1cTmNx1UQHkyl7nq3puKAd2JSAvFSbHxgfGeoNgiXsaW4eQ-PalxcQ5hZHcGJ5kD3sfB-21w7L'
});

app.use(
    express.urlencoded({
      extended: true,
    })
  );
  
app.use(express.json());



const x = {
    id: 1,
    name: 'long',
}

app.post('/pay', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Iphone 4S",
                    "sku": "001",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00"
            },
            "description": "Iphone 4S cũ giá siêu rẻ"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href);
                }
            }

        }
    });

});

app.get('/success', (req, res) => {

    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }
        }]
    };
    paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send('Success (Mua hàng thành công)');
        }
    });
});

app.get('/cancel',(req,res) => res.send('Cancelled (Đơn hàng đã hủy)'));

/////////////////////////////////////////

app.post('/testing', (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify(x))
})

app.get('/', (req, res)=>{
    console.log(JSON.stringify(x));
    res.send(JSON.stringify(x));
})
