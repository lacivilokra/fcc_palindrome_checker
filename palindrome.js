function palindrome(str) {
    let forwards = str.match(/\w/g).join("").toLowerCase().match(/^_/g).join("");
    let backwards = forwards.split("").reverse().join("");

    if (forwards === backwards) {
        return true;
    }
    return false;
}