function largestPrimeFactor(number) {
    let i = 2;

    while (i <= number) {
        if (number % i === 0) {
            // if i is a factor, divid number by i
            number /=i;
        } else {
            // if i is not a facor, incerment i
            i++;
        }
    }
    
    return i;
}

const result = largestPrimeFactor(13195);
console.log(result)