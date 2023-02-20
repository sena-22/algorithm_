/*
[PGS] n^2 배열 자르기 /LV.2 / 60분
*/

/*
[문제]
- 정수 n, left, right
아래 과정을 거쳐 1차원 배열 생성
1. n행 n열 크기 빈 2차원 배열 생성
2. i = 1 ~ n 에 대해 1행 1열부터 i행 i열 까지의 모든 빈칸을 i로 채운다.이 과정을 계속 반복한다.
3. ~n행을 잘라내어 모두 이어붙인 새로운 1차운 배열 생성
4. 새 1차원 배열이 arr 일 때 arr[lt] ~ arr[right]만 남기고 나머지 삭제

[접근 1]
- n의 범위가 너무 넓기 때문에 실제로 배열을 만드는게 비효율적이라고 생각됨.
- arr[lt] ~ arr[rt]의 범위가 몇 행 몇 열에서 시작해 끝나는지 파악하면 해당 범위만큼은 구하기 쉽겠다고 판단

1. arr[lt]가 2dArry[x][y]라고 할 때, 
- x = Math.ceil(lt/n) -1
- y = Math.ceil(lt%n) -1 || n (lt/n이 나누어 떨어지는 경우)

[접근 2]
1. lt ~ rt 의 범위만큼 반복
=> 범위를 가지고 판단하는게 아니라 lt에 해당하는 i를 구해서 어떤 값이 들어갈지 판단한 다음에 정답 배열에 반복적으로 push 해주면 된다.

- 각 좌표에는 해당 행 번호(i) 가 들어가거나, 현재 열 번호 둘 중 더 큰 값이 들어가게된다.
- 예를 들어 현재 i 가 3이라면 [i][i] 까지는 3이 들어가고, 그 뒤부터는 4,5 ... 이렇게 더해진다.
- 값이 3보다 더 커지는 시점은 4열 부터 이기 때문에 행과 열 두 값을 구해서 비교하면 된다.

-행 => Math.floor(i/n)
-열 => i % n
i 가 현재 위치라면 i를 증감하면서 둘 중 더 큰 값을 넣어주면 된다.
*/

function solution(n, left, right) {
  let answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return answer;
}

console.log(solution(3, 2, 5));

/*
테스트 1 〉	통과 (4.86ms, 43.6MB)
테스트 2 〉	통과 (4.93ms, 50MB)
테스트 3 〉	통과 (4.68ms, 50MB)
테스트 4 〉	통과 (0.12ms, 33.5MB)
테스트 5 〉	통과 (0.12ms, 33MB)
테스트 6 〉	통과 (4.69ms, 42.5MB)
테스트 7 〉	통과 (4.79ms, 43.3MB)
테스트 8 〉	통과 (4.66ms, 43.6MB)
테스트 9 〉	통과 (5.09ms, 44.1MB)
테스트 10 〉	통과 (4.79ms, 44.1MB)
테스트 11 〉	통과 (5.27ms, 44MB)
테스트 12 〉	통과 (5.51ms, 46.8MB)
테스트 13 〉	통과 (5.16ms, 47.1MB)
테스트 14 〉	통과 (5.29ms, 44.7MB)
테스트 15 〉	통과 (5.96ms, 49.9MB)
테스트 16 〉	통과 (5.34ms, 49.5MB)
테스트 17 〉	통과 (10.59ms, 44.4MB)
테스트 18 〉	통과 (8.17ms, 49.2MB)
테스트 19 〉	통과 (5.15ms, 49.9MB)
테스트 20 〉	통과 (5.81ms, 43.8MB)
*/
