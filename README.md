# ood-monitoring
Monitoring sensor for ood process manager


## ood
* [ood on NPM](https://npmjs.org/package/ood)
* [ood on GitHub](https://github.com/anatolsommer/ood)


## Installation
`ood mod --install monitoring`


## Usage
URL: `[yourserver]/.ood-monitoring?token=[ood-token]`

Use `ood config -g token` to display your ood token.

This will output something like `[3][0][5]` standing for:
* running apps (`[3]`)
* apps with state "fatal" (`[0]`)
* errors within the last 10min (`[5]`)


## License
#### MIT
