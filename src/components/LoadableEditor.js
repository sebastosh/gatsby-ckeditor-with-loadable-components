import React, { Component } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Prompt from './prompt'


export default class LoadableEditor extends Component {


  state = {
    data: {},
    promptMode: false
  }

  onprompt = event => {
    this.setState({promptMode: !this.state.promptMode})
  }





  render() {
    return (
      <div className="pages white"> 
        
      <div className={this.state.promptMode ? "hide" : null }>
           <h2>Paste & edit your script below</h2> <button onClick={this.onprompt}>PROMPT</button>
           <CKEditor 
               editor={ ClassicEditor }
               data="Hello from CKEditor 5!"
               onInit={ editor => {
                   // You can store the "editor" and use when it is needed.
                   console.log( 'Editor is ready to use!', editor );
               } }
               onChange={ ( event, editor ) => {
                   const data = editor.getData();
                   console.log( data  );
                   this.setState({data: data})
               } }
               onBlur={ ( event, editor ) => {
                   console.log( 'Blur.', editor );
               } }
               onFocus={ ( event, editor ) => {
                   console.log( 'Focus.', editor );
               } }
           />
       </div>

       <div className={this.state.promptMode ? null : "hide" }>
<Prompt data={this.state.data} />

           </div>
       </div>
    )
  }
}
