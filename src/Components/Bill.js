import React from 'react'

function Bill({placeholder,onChange,onBlur},ref){
    return(
        <div>
            <h1>Bill</h1>
            <input
                placeholder = {placeholder}
                type = 'number'
                ref = {ref}
                step = '5'
                min = '0'
                onChange = {onChange}
                onBlur = {onBlur}
                
            />
        </div>
    )
}
const forwardBill = React.forwardRef(Bill);
export default forwardBill;