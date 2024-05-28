// Problem --- 01
// গ্রেড মেকিং এর বাকি অংশটুকৃ করে ফেলতে হবে নিজে নিজে

const result = 95;

if (result >= 90 && result <= 100){
    console.log("A+")
}
else if (result >= 80 && result < 90){
    console.log("A")
}
else if (result >= 70 && result < 80){
    console.log("A-")
}
else if (result >= 60 && result < 70){
    console.log("B")
}
else if (result >= 50 && result < 60){
    console.log("C")
}
else if (result >= 40 && result < 50){
    console.log("D")
}
else{
    console.log("F")
}


// Problem --- 02
// এমন একটা প্রোগ্রাম লিখো যেখানে একটা নম্বর ইনপুট করলে কনসোল এ বলে দিবে যে এইটা জোর নাকি বিজোড়

const oddEven = (number) => {
    if (number%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
};

const number = 111;

console.log(`The number ${number} is ${oddEven(number)}`);


// Problem --- 03
// একটা এরে থাকবে এরে এর মধ্যে ১-২০ পর্যন্ত নম্বর গুলা এলোমেলো থাকবে আপনার কাজ হবে ক্রোম অনুসারে সাজানো

const numbers = [8, 11, 6, 18, 3, 9, 5, 14, 19, 7, 13, 1, 15, 4, 20, 16, 2, 10, 12, 17];

const sortedNumber = numbers.sort((a, b) => a - b);

console.log(...sortedNumber);


// Problem --- 04
// এমন একটা প্রোগ্রাম লিখো যেখানে নম্বর ইনপুট করলে বলে এইটা লিপ ইয়ার কি না?

const leapYearCheck = (year) =>{
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return `${year} is leap year.`;
    }
    else{
        return `${year} is not leap year.`
    }
};

const year = 2024;
console.log(leapYearCheck(year));



// Problem --- 05
// ১-৫০ এর মধ্যে ৩ এবং ৫ দিয়ে বিভাজ্য সংখ্যা গুলা বের করো

const divisibleNumber = [];
for(let i=1; i<=50; i++){
    if(i % 3 == 0 && i % 5 == 0){
        divisibleNumber.push(i);
    }
}
console.log(divisibleNumber);


// Problem --- 06
// var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
// উপরে এর এরে থেকে যেখানে ৫ টা ফ্রেন্ড এর নাম এর মধ্যে বড়ো নাম কোন ফ্রেন্ড এর খুঁজে বের কর।

const largeNameFind = (friends) => {
    let largeName = friends[0];
    for(let i=0; i<friends.length; i++){
        const friend = friends[i];
        if(friend.length > largeName.length){
            largeName = friend;
        }
    }
    return largeName;
};

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
console.log(largeNameFind(friends));


// Problem --- 07
// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// উপরে এর এরে থেকে ডুপ্লিকেট নম্বর গুলা বাদ দিয়ে উনিক নম্বর গুলা বের করতে হবে।


const numbersArray = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const uniqueNumbers = [...new Set(numbersArray)];

for(let i=0; i<uniqueNumbers.length; i++){
    uniqueNumbers.push[i];
}
console.log(uniqueNumbers);


// Problem --- 08
// const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// উপরে এর এরে থেকে সব থেকে বড় নম্বর কোনটা বের কর।

const numbersArry = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(...numbersArry));


// Problem --- 09
/* ফ্রিল্যান্সার শাহেদ প্রতি মাসে বেশ কিছু পেমেন্ট ক্লায়েন্টদের থেকে পায়। কিন্তু পেমেন্ট এর কিছু ট্যাক্স পরিশোধ এবং নিজের লিভিং কস্ট এর কারনে সে সেভিংস করতে পারে না। তার সেভিংস এর হিসেব করার জন্যে তাকে monthlySavings() নামে একটি ফাংশন তৈরী করে দিতে যেটা ইনপুট হিসেবে নেবে একটি Array (প্রতি মাসে পাওয়া সকল পেমেন্ট) এবং একটি Number (শাহেদের লিভিং কস্ট)।
শাহেদের যেসকল পেমেন্ট 3000 টাকা বা তার বেশি সে সকল পেমেন্ট থেকে ব্যাংক Tax হিসেবে ২০% টাকা কেটে নেয়। এখন মোট ইনকাম থেকে Tax গুলো বাদ দিয়ে এবং Living cost বাদ দিয়ে বাকী যে টাকা থাকে সেটাই হলো শাহেদের সিভিংস। অর্থাৎ ফাংশনটি শাহেদের সেভিংস কে রিটার্ন করবে। যদি সেভিংস করার মতো টাকা না থাকে অর্থাৎ সেভিংস এর ভ্যালু যদি ০ এর চেয়ে কম হয় তাহলে ফাংশনটি রির্টান করবে একটি স্ট্রিং তাহলো ”earn more"।

Input:
ফাংশনটি ইনপুট নেবে একটি Array (All payments) এবং একটি number (Living cost)।

Output:
ফাংশনটি একটি number অথবা string রিটার্ন করবে।
1. যদি savings 0 বা তার থেকে বেশি হয় তাহলে রিটার্ন করবে number (Total Savings)
2. যদি ‍savings 0 থেকে ছোট হয় তাহলে রিটার্ন করবে String ("earn more")

Bonus:
ফাংশনটি তখনই "invalid input" string টি রিটার্ন করবে।
1. যদি প্রথম প্যারামিটারটি Array না হয়
2. যদিও ২য় প্যারামিটারটি নাম্বার না হয়

Sample Input : [1000, 2000, 3000], 5400
Sample Output : 0

Sample Input : [1000, 2000, 2500], 5000
Sample Output : 500

Sample Input : [900, 2700, 3400], 10000
Sample Output : "earn more"

Sample Input : 100, [900, 2700, 3400]
Sample Output : invalid input */


const monthlySavings = (payments, livingCost) => {
    if(!Array.isArray(payments) || typeof livingCost != 'number'){
        return "invalid input";
    }
    let totalIncome = 0;
    for(let i=0; i<payments.length; i++){
        const payment = payments[i];
        if(payment >= 3000){
            totalIncome += payment * 0.8;
        }
        else{
            totalIncome += payment;
        }
    }
    const savings = totalIncome - livingCost;
    if(savings >= 0){
        return savings;
    }
    else{
        return "earn more";
    }
};

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));

