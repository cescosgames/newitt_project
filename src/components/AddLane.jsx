import React from 'react'

const AddLane = ({ onClickAdd }) => {
    // pass our onClickAdd function down as prop

    // a test function to ensure clicking is working
    const clickFunc = () => {
        console.log('clicked');
    }


    return (
    <div className='mx-5' onClick={clickFunc}>
        <button className='cursor-pointer text-2xl transition hover:scale-120'>+</button>
    </div>
  )
}

export default AddLane