def quicksort(arr, start, stop):
    if (start < stop):
        pivotindex = partition(arr, start, stop)
        quicksort(arr, start, pivotindex - 1)
        quicksort(arr, pivotindex + 1, stop)

def partition(arr, start, stop):
    pivot = arr[start]
    i = start - 1
    for j in range(start, stop - 1):
        if arr[j] <= pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i = i + 1
    arr[stop], arr[i + 1] = arr[i + 1], arr[stop]
    return (i + 1)

if __name__ == "__main__":
    array = [10, 7, 8, 9, 1, 5]
    quicksort(array, 0, len(array) - 1)
    print(array)