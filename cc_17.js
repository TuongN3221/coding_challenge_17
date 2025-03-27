// Task 1
class Customer{
    constructor(name, email){
        this.name = name; //String
        this.email = email;//String
        this.purchaseHistory = []; //Array
    }
    addPurchase(amount){
        this.purchaseHistory.push(amount)
        console.log(`Added purchse of $${amount.toFixed(2)} to ${this.name}`)
    }
    getTotalSpent(){
        const total = this.purchaseHistory.reduce((sum, amount) => sum + amount, 0)
        console.log(`Total spent by ${this.name}: $${total.toFixed(2)}`)
        return total
    }
}
// Test case
const customer1 = new Customer('Scum', 'scum@villainly.com')
customer1.addPurchase(49.99)
customer1.addPurchase(400)
customer1.addPurchase(10.43)
const totalSpent = customer1.getTotalSpent();