import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';

export default function About() {
    let [style, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black'
    })
    let [btntext, setBtnText] = useState("Enable Dark mode")
    let toggalstyle = () => {
        if (style.color === 'black') {
            setStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px  solid white'
            })
            setBtnText("Enable white mode")
        }
        else {
            setStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px  solid black'
            })
            setBtnText("Enable dark mode")

        }

    }
    return (
        <>
            <Navbar title="About us " />
            <div className='container my-4' >
                <div className='card shadow' >
                    <div className='card-header' style={style}>
                        <h2>About Us </h2>
                    </div>
                    <div className='card-body' style={style} >
                        <div class="accordion py-3" id="accordionExample">
                            <div class="accordion-item" style={style}>
                                <h2 class="accordion-header">
                                    <button class="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" style={style}>
                                <h2 class="accordion-header" style={style} >
                                    <button class="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item" style={style}>
                                <h2 class="accordion-header" style={style}>
                                    <button class="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer py-2 ' style={style}>
                            <div className='row py-1'>
                                <div className='col-md-6'>
                                    <button className='btn btn-dark' onClick={toggalstyle}>
                                        {btntext}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
