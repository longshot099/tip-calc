import React from 'react'

function TipPercent({onChange,onBlur,onKeyDown},ref){
    return(
        <div>
            <h1>Tip %</h1>
            <input 
                 type = 'number' 
                 step = '1'
                 min = '0'
                 ref = {ref}
                 onChange = {onChange}
                 onBlur = {onBlur}
                 onKeyDown = {onKeyDown}
                 defaultValue = '15'
                 />
                 
        </div>
    )
}
const forwardTip = React.forwardRef(TipPercent);
export default forwardTip