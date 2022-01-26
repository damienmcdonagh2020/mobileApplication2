function char_count (value: string): number{
    return value.length;
}
    let count:number = char_count("Test 1");
    console.log(count);
// Part 2
    function  char_count_nospace (value: string): number{
    return value.replace(" ","").length;
}
    let count2:number = char_count_nospace("Test 1");
    console.log(count2);
// Part 3
    function char_count_optional (value: string, spaces?: boolean): number{
        if (spaces){
        return value.length;
        } else{
            return value.replace(" ","").length;
        }
    }

    let count3:number = char_count_optional ("Test 1");
    console.log(count3);

    






