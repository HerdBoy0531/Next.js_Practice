import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost(){
  // document.querySelector('textarea').addEventListener('change', function () {})

  const [ enterBody, setEnterBody] = useState('');
  // stateData[0] // current value
  // stateData[1] // state updating function

  function chageBodyHandler(event) {
    setEnterBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body"> Text</label>
        <textarea id="body" required rows={3} onChange={chageBodyHandler}/>
      </p>
      <p>{enterBody}</p>
      <p>
        <label htmlFor="name"> Text</label>
        <input type="text" id="name" required />
      </p>
    </form>
  )
}

export default NewPost;