import React, { useState } from "react";
import Api2 from './AmadeusApi'

function Form () {
    const formHandler = e =>{
        e.preventDefault();
        Api2 (e.target.form[0].value, e.target.form[1].value, e.target.form[2].value, e.target.form[3].value);
    }

    return(
        <form form method="POST" action="#">
            <div>
                <input name='from' type="text"  placeholder="City, Region or Airport" required="required"/>
                <input name='to' type="text" placeholder="City, Region or Airport" required="required"/>
                <input name='depart' type="date" placeholder="DD/MM/YYYY" id="input-start"/>
                <input name='return' type="date" placeholder="DD/MM/YYYY" id="input-end"/>
                <button onClick={formHandler} type="submit">Search</button>
            </div>  
        </form>
    )
}

export default Form;