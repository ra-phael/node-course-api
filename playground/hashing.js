const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 4
};

let token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

let oldData = { id: 4 };
token.data.id = 5;

console.log(oldData);

let resultHash = SHA256(JSON.stringify(oldData)).toString();

if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Do not trust!');
}


//With jsonwbtoken

const data2 = {
    id: 10
};

const token2 = jwt.sign(data2, 'mysecret');
console.log(token2);

const decoded = jwt.verify(token2, 'mysecret');
console.log('decoded', decoded);
