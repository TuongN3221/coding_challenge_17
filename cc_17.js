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
const customer1 = new Customer('Scum', 'scum@fromvillainly.com')
customer1.addPurchase(49.99)
customer1.addPurchase(400)
customer1.addPurchase(10.43)
const totalSpent = customer1.getTotalSpent();

// Task 2 
class SalesRep {
    constructor(name){
        this.name = name;
        this.clients = []
        console.log(`New Saes Represenative: ${name}`)
    }
    addClient(customer){
        this.clients.push(customer)
        console.log(`Added Client ${customer.name} to ${this.name}'s client list.`)
    }
    getClientTotal(name){
        const client = this.clients.find(c => c.name === name)
        if(client) {
            const total = client.getTotalSpent();
            console.log(`Total Spent by ${name}: $${total.toFixed(2)}`)
            return total;
        }
    }
}
// Test case
const rep1 = new SalesRep('Villany');
rep1.addClient(customer1); // Using customer1 from Task 1

// Get total spent by a client
rep1.getClientTotal('Scum'); // Should return the total we saw in Task 1