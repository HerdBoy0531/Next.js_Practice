import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

// children은 예약된 속성의 이름이다
// children이 참조하는 것은 언제나 사용자 정의 컴포넌트의 본문 태그 안에 담겨 전달되는 콘텐츠이다.

function Modal({children}) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate('/');
  }

  return (
  <>
    <div className={classes.backdrop} onClick={closeHandler}/>
    <dialog open={true} className={classes.modal}>
      {children}
    </dialog>
  </>
  )
}

export default Modal;