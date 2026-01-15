#include "trinary.h"

namespace trinary {
// TODO: add your solution here
    int to_decimal(std::string s){
        int result = 0;
        for (int i = s.length()-1;i >= 0;i--){
            if (isalpha(s[i])) {
                return 0;}
            int num = s[s.length()-i-1] - '0';
            result += num * pow(3,i);
        }
    return result;
    }

}  // namespace trinary
