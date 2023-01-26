// kth largest and kth minimum element
// here we are finding smallest
// k = 3, means 3rd smallest element btana hai

/*
7 2 3 8 1
1) sort the array -> 1 2 3 7 8
2) iska index jo hoga vo  k -1 ie 3rd smallest element

*/

#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    // int arr[5] = {7, 2, 4, 8, 1};
    // int k;
    // cin >> k;

    // arr.sort(arr, arr + 5);

    // Aapproach 2
    // using Max Heap TC O(N)
    // so upr se k-1 element pop lrdege toh 3rd smallest ajega,
    // Heapify tc -> O(log n)

    int arr[6] = {6, 2, 3, 4, 1, 9};
    int k = 3;
    // sort(arr, arr + 6,greater<int>()); // in ascending order
    sort(arr, arr + 6,greater<int>()); // in descending order
    cout << arr[k - 1];
}