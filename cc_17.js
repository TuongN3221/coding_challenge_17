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
        this.name = name;// String
        this.clients = []//Array
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

// Task 3
class VIPCustomer extends Customer{
    constructor(name, email, vipLevel){
        super(name, email)
        this.vipLevel = vipLevel;
        console.log(`New VIP Customer: ${name}, ${vipLevel} Tier`)  
    }
    getTotalSpent(){
        const baseTotal = super.getTotalSpent();
        // Calculates bonus
        const bonus = baseTotal * 0.10
        const totalWithBonus = baseTotal + bonus;
        console.log(`Total Spent by ${this.name} (VIP ${this.vipLevel}): ${totalWithBonus.toFixed(2)}`);
        return totalWithBonus;
    }

}
// Test Case
const vipCustomer = new VIPCustomer('Scum Pro', 'scum.pro@villainly.com', 'Platinum');
vipCustomer.addPurchase(100);
vipCustomer.addPurchase(200);
vipCustomer.addPurchase(300);
const vipTotal = vipCustomer.getTotalSpent();
console.log(`Final VIP total: $${vipTotal.toFixed(2)}`);

// Task 4
function clientReportSystem(){
    storedData = {
        customers: [customer1, vipCustomer],
        salesRep: [rep1]
    }
    //Reduce()
    const totalSpending = storedData.customers.reduce((sum, customer) =>{
        return sum + customer.getTotalSpent();
    }, 0)
    console.log(`Total Revenue: $${totalSpending.toFixed(2)}`)
    //Filter()
    const bigSpender = storedData.customers.filter(customer => {
        return customer.getTotalSpent() > 500;
    })
    console.log(`Customers Purchase History Over $500: $${bigSpender}`)
    //Map()
    const customerSummary = storedData.customers.map(customer => {
        return {
            name: customer.name,
            totalSpending: customer.getTotalSpent()
        };
    })
    console.log(`Customer Spending Report: ${customerSummary}`)
    return storedData
}
const clientData = clientReportSystem();