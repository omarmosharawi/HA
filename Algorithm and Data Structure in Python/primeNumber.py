def isPrime(n):
    if(n<=1):
        return False

    for i in range (2,n):
        if(n%i==0):
            return False
    return True


print("Check the number is prime or not.")
num = int(input("Please enter the number: "))
if(isPrime(num)):
    print("True, the number is prime.")
else:
    print("False, the number is not prime.")