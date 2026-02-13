#include "prime_factors.h"

namespace prime_factors {
    vector<long long> of(long long number){
        long long i = 2;
        vector<long long> factors;
        while (i*i <= number){
            if (number % i == 0){
                factors.push_back(i);
                number /= i;
            }else{
                if (i == 2){
                    i++;
                }else{
                    i+=2;
                }
            }
            
        }

        if (number >1){
            factors.push_back(number);
        }
        return factors;
    };
    
// TODO: add your solution here

}  // namespace prime_factors
