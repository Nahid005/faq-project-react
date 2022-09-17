import React, {useState} from 'react'

const Faq = ({id, title, discription}) => {

    const [toggle, setToggle] = useState(false)

    return (

        <div>
            <div> 
                <h4> {title} </h4>
                <button onClick={() => {setToggle(!toggle)}}> 
                    {toggle ? "-" : "+"} 
                </button>
            </div>
            {toggle && (<p> {discription} </p>)}
        </div>
    )
}

export default Faq