function char_count(value) {
    return value.length;
}
var count = char_count("Test 1");
console.log(count);
// Part 2
function char_count_nospace(value) {
    return value.replace(" ", "").length;
}
var count2 = char_count_nospace("Test 1");
console.log(count2);
// Part 3
function char_count_optional(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(" ", "").length;
    }
}
var count3 = char_count_optional("Test 1", true);
console.log(count3);
