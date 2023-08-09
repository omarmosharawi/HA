nums=[0,1,2,3,4,5,6,7]

print (nums[7])

print("="*10)

for x in nums:
    print(x)

print("="*10)

nums.append(8) #add number in last index

for x in nums:
    print(x)

print("="*10)

nums.pop(8) #remove index 8

for x in nums:
    print(x)

print("="*10)

nums.remove(4) #remove number 4

for x in nums:
    print(x)