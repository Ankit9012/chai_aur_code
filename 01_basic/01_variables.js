const accountId = 111111
let acccountPassword = '123456'
var accountEmail = 'ankit@gmail.com'
accountType = 'Saving'



// accountId=1223

acccountPassword = '2222222222222'
accountEmail = 'changed@gmail.com'

console.table([
    { label: 'accountId', value: accountId },
    { label: 'acccountPassword', value: acccountPassword },
    { label: 'accountEmail', value: accountEmail },
    { label: 'accountType', value: accountType },
])

/**
 * 1) Prefer not to use var as it creates issue in block scope and functional scope
 * 2) If variable is declared but not initialized then it will return undefined in value
 */