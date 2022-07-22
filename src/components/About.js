import React, { useState, useSyncExternalStore } from 'react'

export default function About(props) {

    // const [Mystyle, setMystyle] = useState({

    //     color: 'black',
    //     backgroundColor: 'white',
    // })
    let Mystyle = {
        color: props.mode === 'dark'?'white':'rgb(36,74,104)',
        backgroundColor: props.mode === 'dark'?'rgb(36,74,104)':'white',
        
    }
    
    
  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'rgb(36,74,104)'}}>
        <h2 className="my-2">About Us</h2>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong> Analyze your text </strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={Mystyle}>
                TextUtils gives you a way to analyxe your text quickly and efficiently. Be it word count, character count or space count.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={Mystyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use </strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={Mystyle}>
                    TextUtils is a free character counter tools that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word /character limit/
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={Mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compactible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={Mystyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={Mystyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
            </div>
            
            
    </div>
  )
}
