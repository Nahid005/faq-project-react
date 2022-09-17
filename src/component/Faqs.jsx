import React, {useState} from 'react'

import {faqData} from './FaqData'
import Faq from './Faq'

const Faqs = () => {

    const [faqs, setFaqs] = useState(faqData)

    return (
        <div> 
            {faqs.map((faqItems) => <Faq key ={faqItems.id} {...faqItems} />)}
        </div>
    )
}

export default Faqs