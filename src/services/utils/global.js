export const toClipboard = value => {
    const el = document.createElement("textarea")
    el.value = value
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
}

export const getCurrencyIcon = name => {
    switch (name) {
        case "XTZ":
            return require(`@/assets/symbols/tz.png`)
        case "ETH":
            return require(`@/assets/symbols/eth.png`)
        case "BTC":
            return require(`@/assets/symbols/btc.png`)
        case "USD":
            return require(`@/assets/symbols/usd.png`)
    }
}
