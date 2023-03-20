/* Q3 - WRITE JS code with below logic in place
●A sort a unsorted array of numbers
●B a function that takes in an array of numbers and returns the second
    highest and second lowest numbers in the array
●C  Create a function that takes in two arrays of numbers and returns a
    new array that contains only the elements that are common to both
    array */

    // A sort a unsorted array of numbers 
    const array = [2,45,66,46,7765,4];
    // Sort the numbers in ascending order
    const arr = array.sort((a,b)=> a-b); 
    console.log(arr);

    /* B a function that takes in an array of numbers and returns the second
    highest and second lowest numbers in the array */
    
    const Numarr = [5, 2, 10, 8, 3];
    function getShNoandSlno(){
        const sortedArr = Numarr.sort((a,b)=> a-b);
        const secondLowestno = sortedArr[1];
        const  secondHighestno = sortedArr[sortedArr.length - 2];
        return [secondLowestno,secondHighestno];
    }
    [secondHighestno, secondLowestno] = getShNoandSlno(Numarr);
    console.log(`Second highest number: ${secondHighestno}`);
    console.log(`Second lowest number: ${secondLowestno}`);

    /*  C  Create a function that takes in two arrays of numbers and returns a
    new array that contains only the elements that are common to both
    array */
    const arr1 = [12, 23, 53, 4, 5];
    const arr2 = [23, 4, 53, 6, 7];
    const common = commonEle(arr1, arr2);
    console.log(common);
    function commonEle(){
        return arr1.filter((num)=>arr2.includes(num));
    }