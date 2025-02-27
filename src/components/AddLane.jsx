import React, { useState } from 'react'
import AddModal from './AddModal';

const AddLane = ({ onClickAdd }) => {
    // controlling our modal state here because in react we dont want parents reaching into children (i.e. this reaching into the modal component)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // our toggle modal function. set our modal open previous state to the opposite (toggle)
    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    return (
    <>
    {/* the + button */}
        <div className='mt-1 ml-2'>
            <button onClick={toggleModal} className='cursor-pointer text-2xl transition hover:scale-101 sm:hover:scale-110 border-2 border-mcoolgray rounded-md sm:w-10 sm:aspect-square w-[96vw]'
                onKeyDown={(event) => {
                    event.preventDefault();
                }}
            >+</button>
        </div>

        {/* our modal is set here and rendered open or close from our state. Inside the modal, we return the modal or null depending on the state */}
        <AddModal toggleModal={toggleModal} addSub={onClickAdd} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        {/* also note we are passing our onClickAdd prop function from our main app */}
    </>
  )
}

export default AddLane