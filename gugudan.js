#!/usr/bin/env node

// 구구단을 출력하는 함수
function printMultiplicationTable() {
    // 각 단마다 1부터 9까지의 곱셈 결과를 출력
    for (let i = 2; i <= 9; i++) {
        console.log(`구구단 ${i}단:`);
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log(''); // 단마다 한 줄 띄우기
    }
}

// 함수 호출하여 구구단 출력
printMultiplicationTable();
