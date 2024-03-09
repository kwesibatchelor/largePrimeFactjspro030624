def largest_prime_factor(number):
    i = 2

    while i <= number:
        if number % i == 0:
            number //= i # divide number by i if i is a factor
        else:
            i += 1

    return i

# find largest prime factor
result = largest_prime_factor(9573247983)
print(result)