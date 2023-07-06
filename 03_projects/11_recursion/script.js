function recursion(n) {

    if(n - 1 < 2) {
        console.log("Recursion parou!");
    } else if(n % 2 != 0) {
        console.log("Numero impar!" + n);
        recursion(n - 1)
    } else {
        console.log("Numero par!" + n);
        recursion(n - 2)
    }

}

recursion(39);
recursion(10);
recursion(55);