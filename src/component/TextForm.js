import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    let handlecleartext = () => {
        let newText = '';
        setText(newText);
    }
    let handlelawercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    let handleuppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    let handletext = (event) => {

        setText(event.target.value)
    }
    return (
        <>
            <div className='container my-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>{props.title}</h3>
                    </div>
                    <div className='card-body'>
                        <div className="mb-3">
                            <textarea className="form-control" id="Textarea1" value={text} onChange={handletext} rows="8"></textarea>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col-6'>
                                <button className="btn btn-outline-primary " onClick={handleuppercase}  >Convert to Uppercase</button>
                                <button className="btn btn-outline-primary mx-3" onClick={handlelawercase}>Convert to lawercase</button>
                                <button className="btn btn-outline-primary " onClick={handlecleartext}>Clear Text</button>

                            </div>
                            <div className='col-6 text-end'>
                                <p>{text.split(" ").length} word & {text.length} characters</p>

                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
            <div className='container'>
                <div className='card'>
                    <div className='card-header bg-success'>
                        <h3 className=''>
                            Preview
                        </h3>

                    </div>
                    <div className='card-body'>
                        <p>{text}</p>

                    </div>
                </div>
            </div>

        </>
    )
}
