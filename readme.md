# Binance Order push Telegram Notifications

Binance does not currently offer notications when orders are created, cancelled or fulfilled. This will allow you to always stay current of your order's status.

![alt telegram-notification](https://github.com/thanhnhan2tn/bibot/blob/master/public/stylesheets/telegram-notification.jpg?raw=true)

### Prerequisites

Binance API credentials - READ ONLY!! (https://www.binance.com/en/support/faq/360002502072)
Telegram Bot API (https://core.telegram.org/bots)

### Installing

Generate Binance API keys (do not enable trading nor withdrawls)

Create the following environment variables

```
export binanceKey=[binance_api_key]
export binanceSecret=[binance_api_secret_key]

export teleKey=[teleKey]
export teleChanel=[channel ID]

```

Once set up, `yarn start` and enjoy notifications on the go!

## Next Features
- [x]  Spot buy/sell
- [ ]  Check total values
- [ ]  Margin buy / sell

## Built With

* [Node Binance API](https://github.com/jaggedsoft/node-binance-api) - Interface with Binance's websockets
* [Express](https://github.com/expressjs/express) - Dependency Management
* [binance-order-notification SNS](https://github.com/tylerfloyd/binance-order-notification) binance-order-notification SNS repo

## Donate

- If you have interested with this tool, and make your happy. So you can give donate:
 - USDT:
    - TRC20: TMb3LP53FGNHcJhV4g68yAdWsAGhDxs74c
	- BEP20: 0xab82e4fab6c30b81ea49602d850752b1b4a07561
	- ERC20: 0xab82e4fab6c30b81ea49602d850752b1b4a07561
 - BTC (BEP20): 0xab82e4fab6c30b81ea49602d850752b1b4a07561
 
 
## Setup Service
If you are not much experience on setup, You can contact me to have setup service (with some fee)
Telegram: thanhnhan2tn

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

