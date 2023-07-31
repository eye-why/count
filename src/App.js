import React, {useState, useMemo, useCallback, useEffect} from 'react';

let renderCount = 0;

const Count = () => {
    const [number, setNumber] = useState(0);
    const [render, setRender] = useState(1);

    renderCount ++;
    console.log('render ' + renderCount);

    return (
        <>
            <div>
                <span>첫번째 클릭(하나씩 증가)</span>
                <button onClick={()=>{
                    setNumber((prev)=> {return prev +1})
                }}>
                    {number}번 클릭 했습니다!
                </button>
            </div>

            <div>
                <span>두번째 클릭(첫번째 클릭 수 만큼 더해서 증가)</span>
                {number * 2}번 클릭 했습니다!
            </div>
        </>
    );
};

export default Count;