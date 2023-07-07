import React, {useState, useCallback} from 'react'


const Count = () => {

    //use state
    const [number, setNumber] = useState(0);


    //use callback
    //useCallback hook이 number를 업데이트 시키는 새로운 함수를 만드는데 사용
    //리액트가 setNumber가 변하더라도 매번 렌더링되는걸 방지. 메모이제이션(캐쉬)된 함수 실행

    const countNum = useCallback(() => {
        setNumber(numCount => numCount + 1);
    }, []); //처음 컴포넌트가 실행 시만?

    console.log("countNum" + countNum);
    /*
        const countNum = setNumber(prevCount => prevCount + 1);
        console.log("countNumTwo" + countNumTwo)*/

    return (
        <button onClick={countNum}>{number}번 클릭 했습니다!</button>
    )
}



export default Count;