
import { time } from 'node:console';
import React from 'react'

const Footer = () => {
    return (<div className="max-w-2xl mx-auto p-4 text-center">
        <p className='justify-self-center'>
            &copy; {(new Date).getFullYear()} Trung Tin Nguyen
        </p>
    </div>);
}
 
export default Footer;