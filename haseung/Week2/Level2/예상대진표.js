function solution(n, a, b) {
  // 다음 라운드에 진출할 참가자의 번호는 다시 1번부터 N/2번을 차례대로 배정

  // 4번 <-> 3번: 4번이 이기면 4번이 다음 라운드에서 2번
  // 7번 <-> 8번: 7번이 이기면 7번이 다음 라운드에서 4번

  //두번째 라운드
  //2번 <-> 1번, 4번 <-> 3번
  let currentRound = 1;
  const myNextNumber = (num) => Math.floor((num + 1) / 2);
  while (a !== b) {
    if (myNextNumber(a) === myNextNumber(b)) break;
    a = myNextNumber(a);
    b = myNextNumber(b);
    currentRound++;
  }
  return currentRound;
}

//30분

// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.10ms, 33.5MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.09ms, 33.5MB)
// 테스트 11 〉	통과 (0.10ms, 33.4MB)
// 테스트 12 〉	통과 (0.08ms, 33.6MB)
// 테스트 13 〉	통과 (0.08ms, 33.5MB)
// 테스트 14 〉	통과 (0.06ms, 33.5MB)
// 테스트 15 〉	통과 (0.06ms, 33.6MB)
// 테스트 16 〉	통과 (0.07ms, 33.5MB)
// 테스트 17 〉	통과 (0.08ms, 33.4MB)
// 테스트 18 〉	통과 (0.06ms, 33.6MB)
// 테스트 19 〉	통과 (0.21ms, 33.5MB)
// 테스트 20 〉	통과 (0.14ms, 33.4MB)
// 테스트 21 〉	통과 (0.15ms, 33.4MB)
// 테스트 22 〉	통과 (0.13ms, 33.5MB)
// 테스트 23 〉	통과 (0.08ms, 33.5MB)
// 테스트 24 〉	통과 (0.06ms, 33.6MB)
// 테스트 25 〉	통과 (0.05ms, 33.4MB)
// 테스트 26 〉	통과 (0.05ms, 33.4MB)
// 테스트 27 〉	통과 (0.14ms, 33.5MB)
// 테스트 28 〉	통과 (0.13ms, 33.4MB)
// 테스트 29 〉	통과 (0.13ms, 33.6MB)
// 테스트 30 〉	통과 (0.13ms, 33.4MB)
// 테스트 31 〉	통과 (0.06ms, 33.5MB)
// 테스트 32 〉	통과 (0.06ms, 33.5MB)
// 테스트 33 〉	통과 (0.13ms, 33.5MB)
// 테스트 34 〉	통과 (0.13ms, 33.6MB)
