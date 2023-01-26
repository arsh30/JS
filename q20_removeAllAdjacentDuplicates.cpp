string removeDuplicates(string s)
{
    stack<char> st;
    for (int i = 0; i < s.length(); i++)
    {
        if (st.size() == 0)
        {
            st.push(s[i]);
        }
        else if (s[i] == st.top())
        {
            st.pop();
        }
        else
        {
            st.push(s[i]);
        }
    }

    string ans;
    while (st.size() != 0)
    {
        ans.push_back(st.top());
        st.pop();
    }

    reverse(ans.begin(), ans.end());
    return ans;
}
