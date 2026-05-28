let text = 'madam';

function isPalindrome(str){
    let reversed = str.split('').reverse().join('');
    console.log("Reversed: " , reversed);
    return str === reversed;
}

console.log(isPalindrome(text));



