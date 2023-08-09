def isPrime(n):
    if (n <= 1):
        return False
    if (n <= 3):
        return True

    if (n % 2 == 0 or n % 3 == 0):
        return False

    i = 5
    while (i * i <= n):
        if (n % i == 0 or n % (i + 2) == 0):
            return False
        i = i + 6
    return True


print("Check the number is prime or not.")
x= int(input("Enter the number: "))

if (isPrime(x)):
    print( str(x) + " is true." )
else:
    print( str(x) +" is false." )