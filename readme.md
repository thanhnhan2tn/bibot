# Binance Order Notifications

Binance does not currently offer notications when orders are created, cancelled or fulfilled. This will allow you to always stay current of your order's status.  

### Prerequisites

Binance API credentials
Telegram Bot API

### Installing

Generate Binance API keys (do not enable trading nor withdrawls)

Create the following environment variables

```
export binanceKey=[binance_api_key]
export binanceSecret=[binance_api_secret_key]
```

Once set up, `yarn start` and enjoy notifications on the go!

or try the Docker version and edit the variables inside the *Dockerfile*


## Built With

* [Node Binance API](https://github.com/jaggedsoft/node-binance-api) - Interface with Binance's websockets
* [Express](https://github.com/expressjs/express) - Dependency Management
* [binance-order-notification SNS](https://github.com/tylerfloyd/binance-order-notification) binance-order-notification SNS repo

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

