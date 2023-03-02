import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils'

const UseStateApp3 = () => {
    console.log('UseStateApp3') //무조건 한 번 출력됨
    const [emp, setEmps] = useState([{empno:7900, ename:"나초보"}])
    const getEmpList = () => {
    let sample = [
        {empno : 7566, ename:"김유신"},
        {empno : 7499, ename:"이성계"},
        {empno : 7600, ename:"강감찬"},
    ]

     setEmps([...emp, ...sample])
   }

    return (
    <>
      <h2>useState복습-3</h2>
      <Button onClick={getEmpList}>조회</Button>
      {emp.map((item,index)=>(
     <h3 key={index}>{item.empno},{item.ename}</h3>
      ))}
    <hr />
    </>
  )
}

export default UseStateApp3
/*
  상태값이 변할 때 마다 렌더링이 되도록 하고 싶다면 useState훅을 사용할 것
  깊은 복사는 객체의 실제 값을 복사하는 것 - 원본을 바꿔도 복사본은 안바뀜
  얕은 복사는 객체의 주소 값을 복사하는 것 - 원본을 바꾸면 복사본도 바뀐다

  sample에 push함수를 통해서 원소를 추가하면
  버튼을 누를 때 마다 sample은 증가하지만 렌더링은 새로 되지 않는다
  sample의 주소번지가 바뀌지 않았기 때문에 실제 배열의 원소는 원소는
  계속 증가되지만 return이 호출되지 않는다.
*/