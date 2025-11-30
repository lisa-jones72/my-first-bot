// This code has some issues we'll catch!
console.log("Debug: calculating total");
function calculateTotal(items) {
  let total = 0
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price
  }
  return total
}

function getUserName(user) {
  return user.name
}

console.log(calculateTotal([{price: 10}, {price: 20}]))