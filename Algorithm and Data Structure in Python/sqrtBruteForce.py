def SBF(x):
    if( x==0 or x==1):
        return x

    i=1
    result=1
    while( float(result) <= float(x) ):
        i+=1
        result=i*i
    return i-1



x = input("Enter X value: ")
print(f"Result is: {SBF(float(x))}")