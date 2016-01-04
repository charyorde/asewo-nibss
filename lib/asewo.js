function Asewo(options) {
  
  this.type = options.type ? options.type : undefined
  
  if (this.type == 'buy') {
    this.buy(options.params)
  }
  else if(this.type == 'sell') {
    this.sell(options.params)
  }
  
  
  /**
   * @param from The from currency
   * @param to The to currency
   */ 
  this.exchange = function(from, to) {
    
  }
}

/**
 * Buy a specified currency.
 * To buy a specified currency, the user's card
 * or bank account details must be denominated in Naira.
 */ 
Asewo.prototype.buy = function(params) {
  // authorize and validate card details
  // get the currency to be purchased
  // validate card to make sure the bank details is  
  // denominated in naira.
}

/**
 * Sell a specified currency.
 * To sell a specified currency, the supplied card or
 * bank account details must be denominated in the 
 * currency he wants to sell (dollar, pounds or euro for now).
 * User gets naira
 */ 
Asewo.prototype.sell = function() {
  // authorize and validate card details
  // get the currency to be sold
  // validate card to make sure the bank details is denominated
  // in the currency to be sold
  
  // debit of dollar account and credit of naira account has to be
  // in parallel. Rollback if either fails
}

module.exports = Asewo