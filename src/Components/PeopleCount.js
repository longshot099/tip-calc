import React, { forwardRef } from 'react'

function PeopleCount({onChange,onBlur,onKeyDown},ref){
    return(
        <div>
            <h1>Number of People</h1>
            <input
            type = 'number'
            onChange = {onChange}
            onBlur = {onBlur}
            onKeyDown = {onKeyDown}
            ref = {ref}
            defaultValue = '1'
            step = '1'
            min = '1'
            />
            
        </div>
       
    )
}
const forwardPeople = React.forwardRef(PeopleCount);
export default forwardPeople;