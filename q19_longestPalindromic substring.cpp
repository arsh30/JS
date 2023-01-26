/*
Solution 1: Brute Force Approach (Give TLE)

Generate all substring and check it is palindrome or not.
If it is palindrome then check it is longest or not.

Time Complexity - O(N^3),  O(N^2) to generate all substring and O(N) to check it is palindrome or not.
Space complexity - O(1).
*/

#include <iostream>
using namespace std;

bool isPalindrome(string s)
{
    int i = 0, j = s.size() - 1;

    while (i < j)
    {
        if (s[i++] != s[j--])
            return false;
    }
    return true;
}

string longestPalindrome(string s)
{
    int n = s.size();
    if (n == 0)
        return "";

    if (n == 1)
        return s;

    string result = "";
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 1; j <= n - i; j++)
        {
            if (isPalindrome(s.substr(i, j)))
            {
                if (result.size() < j)
                    result = s.substr(i, j);
            }
        }
    }
    return result;
}

int main()
{
    cout << longestPalindrome("madambsdjsahdjh");
}
