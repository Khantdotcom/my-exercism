#include "darts.h"
namespace darts {
int score (float x, float y){
    float re = x*x+y*y;
    if(re<=1)return 10;
    else if (re<=25)return 5;
    else if (re<=100)return 1;
    return 0;
}
} // namespace darts