function solution(n)
{
    let sum = 0;
    while (n > 0) {
        sum += n % 10; 
        n = (n / 10) | 0; 
    }
    return sum;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12931