function test1(auction){
    console.log('TESTE 1 LEILÃO -----------')
    console.log(auction.showProduct())
    console.log(auction.showBids())
    console.log(auction.auctionDate())
}

function test2(auction){
    console.log('TESTE 2 LEILÃO -----------')
    console.log(auction.showThreeBiggestBids())
    console.log(auction.showBidsAverage())
}

function test3(product){
    console.log('TESTE PRODUTO -----------')
    console.log(product.showName())
}

function test4(user, auctioneer){
    console.log('TESTE USUÁRIO E LEILOEIRO -----------')
    console.log(user.showName())
    console.log(auctioneer.showName())
}

/**
 * CLASSES
 */

class Auction{  
    constructor(product, bids, user, auctioneer){
        this.product = product
        this.bids = bids
        this.date = new Date()
        this.user = user
        this.auctioneer = auctioneer
    }
    showProduct(){
        return "Produto: " + this.product.getName()
    }
    showBids(){
        let msg =""
        let count = 1
        this.bids.forEach(bid => {
            msg += `lance ${count} : ` + bid + "     "
            count++
        });
        return msg
    }
    auctionDate(){
        let date = this.date
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let formatedDate = `${day} / ${month} / ${year}`
        return formatedDate
    }
    showThreeBiggestBids() {
        var orderedBids = this.bids.sort()
        orderedBids.reverse()
        var msg = "O maior lance foi de R$" + orderedBids[0] + ", o segundo maior lance foi de R$" + orderedBids[1] + " e o terceiro maior lance foi de R$" + orderedBids[2]
        return msg
    }
    showBidsAverage() {
        var total = 0
        this.bids.forEach(bid => {
            total = total + Number(bid)
        })
        var average = total / this.bids.length
        return ("A média dos lances foi de R$" + average)
    }
}

class Product {
    constructor(name, minPrice, description, productCode, fabricator) {
        this.name = name
        this.minPrice = minPrice
        this.description = description
        this.productCode = productCode
        this.fabricator = fabricator
    }

    getName() {
        return this.name
    }

    showName() {
        return "Nome do produto: " + this.getName()
    }
}

class User {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    showName() {
        return "Nome do usuário: " + this.getName()
    }
}

class Auctioneer {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    showName() {
        return "Nome do leiloeiro: " + this.getName()
    }
}

/**
 * PLAYING TESTS
 */
var user = new User("Cleiton")
var auctioneer = new Auctioneer("Pai do Cleiton, o bom de guerra")
var product = new Product('Televisor', 0, "teste", 0, 'Yamaha')
var auction1 = new Auction(product, [120,150,170,440,500], user, auctioneer)
test1(auction1)
test2(auction1)
test3(product)
test4(user, auctioneer)