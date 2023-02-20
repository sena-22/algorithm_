/*
[PGS] 튜플 /LV.2 / 60분
*/

/*
[문제]
- 튜플 : 셀 수 있는 수량의 순서있는 열거 || 어떤 순서를 따르는 요소들의 모음.
- n개 요소를 가진 튜플 : n-튜플
- 중복된 원소 O
- 원소끼리 순서 O, 순서가 다르면 서로 다른 튜플
- 원소의 갯수 유한함
- 중복이 없는 특정 튜플을 표현하는 집합이 문자열로 주어질 때, s가 표현하는 튜플을 배열에 담아서 리턴.
- 참고로 집합에는 순서가 없다...! 순서가 없는데 {a1}, {a1, a2} ... 이렇게 표현할 수 있는 규칙이 있으니까 여기서 잘 찾아보아야 함.

[접근 1]
1. 문자열 s의 각 요소를 배열로 정렬, 배열의 길이에 따라서 오름차순으로 정렬
2. 집합 배열의 요소 중 길이가 가장 긴 요소를 찾으면 그 길이가 튜플의 길이가 됨.
3. 튜플의 길이만큼 반복하면서 각 배열 요소의 자릿수를 찾아 push

* 집합 내에서 순서가 다를 수도 있기 때문에, 각 집합의 인덱스로 찾는 것은 예외가 발생할 수도 있다.

* 확정할 수 있는 것은 첫 번째 요소는 길이 1 짜리의 요소. 

* 그러면 각 반복을 하면서 answer 배열에 없는 요소만 골라서 넣어야한다. (중복이 없기 때문에 가능)

* 숫자가 한 자리 자연수만 존재하지 않기 때문에 하나씩 쪼개면 숫자 집합이 달라진다. (ex 20,111 => 20111)
*/

/*
테스트 1 〉	통과 (3.28ms, 33.5MB)
테스트 2 〉	통과 (3.21ms, 33.6MB)
테스트 3 〉	통과 (3.02ms, 33.4MB)
테스트 4 〉	통과 (4.41ms, 33.7MB)
테스트 5 〉	통과 (5.54ms, 34MB)
테스트 6 〉	통과 (7.40ms, 37.4MB)
테스트 7 〉	통과 (19.12ms, 41.3MB)
테스트 8 〉	통과 (39.47ms, 44.1MB)
테스트 9 〉	통과 (25.07ms, 41.7MB)
테스트 10 〉	통과 (38.12ms, 44.3MB)
테스트 11 〉	통과 (50.36ms, 45.7MB)
테스트 12 〉	통과 (65.90ms, 49.4MB)
테스트 13 〉	통과 (62.18ms, 49.8MB)
테스트 14 〉	통과 (63.98ms, 49.4MB)
테스트 15 〉	통과 (3.11ms, 33.6MB)
*/

function solution(s) {
  const answer = [];

  // 가장 바깥쪽 중괄호 제거
  // 각 집합 문자열 => 배열화
  const setStrArr = s
    .slice(1, -1)
    .replace('{{', '')
    .replace('}}', '')
    .split('},{')
    .map(set => set.replace(/{|}/g, ''));

  // 쉼표를 기준으로 집합 문자열을 배열화
  const setList = [];
  for (let set of setStrArr) {
    setList.push(set.split(','));
  }

  // 길이를 기준으로 오름차순 정렬
  setList.sort((a, b) => a.length - b.length);

  for (let i = 0; i < setList.length; i++) {
    // 첫번째 요소는 무조건 튜플의 첫 요소이므로 추가
    if (i === 0) answer.push(+setList[i]);
    // 그 외에는 answer 튜플에 존재하지 않는 요소만 추가
    else {
      const numbers = setList[i];
      for (let num of numbers) {
        if (!answer.includes(+num)) answer.push(+num);
      }
    }
  }

  return answer;
}

console.log(solution('{{123}}'));
