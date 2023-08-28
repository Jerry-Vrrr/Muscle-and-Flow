// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '20em',
    width: '20em',
    borderRadius: '8px',
    padding: '2em',
  },
};



export default function SignupModal({modalIsOpen,setIsOpen}) {
  let subtitle;




function afterOpenModal() {
  // references are now sync'd and can be accessed.
  // subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}
  return (
    <div >
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        

        <div className='modal'>
        <button className='close' onClick={closeModal}>&times;</button>
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <div className='login'>Enter Username and Password</div>
        <form className='form'>
          <input />
          <label>user name</label>
          <input />
          <label>password</label>
          <button className='btn2'>login</button>
        </form>
        </div>
        
      </Modal>
    </div>
  )
}




    

// ReactDOM.render(<App />, appElement);