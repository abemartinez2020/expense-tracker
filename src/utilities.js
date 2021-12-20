const account = {
    name:'Sam',
    budget: 2000,
    income: [{sourceName:'EPAM', amount:2000, category:'Employment', date: '12/10/2021'}],
    expenses: [{sourceName:'McDonald\'s', amount:20, category:'food'}]
}

const addIncome = (description, amount, category) => {
    if(typeof amount && amount) {
        const date = new Date();
        return account.income.push({description, amount, category, date})
    } else {
        return 'Make sure to enter a valid amount';
    }  
}

const addExpenses = (description, amount, category) => {
    if(typeof amount && amount) {
        const date = new Date();
        return account.expenses.push({description, amount, category, date})
    } else {
        return 'Make sure to enter a valid amount';
    }  
}

const accountBalance = () => {
    const totalExpense = account.expenses.reduce((total, obj) => {
        return total = total + obj.amount
    },0);

    const totalIncome = account.income.reduce((total, obj) => {
        return total = total + obj.amount
    },0);

    return totalIncome - totalExpense;
}



export { addIncome, addExpenses, accountBalance}
