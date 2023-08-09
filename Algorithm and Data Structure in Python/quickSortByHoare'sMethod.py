def quicksort(arr, start, stop):
    if (start < stop):
        pivotindex = partition(arr, start, stop)
        quicksort(arr, start, pivotindex)
        quicksort(arr, pivotindex + 1, stop)

def partition(arr, start, stop):
    pivot = arr[start]
    i = start - 1
    j = stop + 1
    while True:
        while True:
            i = i + 1
            if arr[i] >= pivot:
                break
        while True:
            j = j - 1
            if arr[j] <= pivot:
                break
        if i >= j:
            return j
        arr[i], arr[j] = arr[j], arr[i]

if __name__ == "__main__":
    array = [10, 7, 8, 9, 1, 5]
    quicksort(array, 0, len(array) - 1)
    print(array)