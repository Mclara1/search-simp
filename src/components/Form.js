import React from 'react';
import Api from './AmadeusApi';

const Form = ({apiData, setApiData}) => {
    const formHandler = async e => {
        e.preventDefault();
        let resultados = await Api (e.target.form[0].value, e.target.form[1].value, e.target.form[2].value, e.target.form[3].value);
        setApiData (resultados);
    }

    return(
        <div>
            <form form method="POST">
                <div>
                    <input name='from' type="text"  placeholder="City" required="required"/>
                    <input name='to' type="text" placeholder="City" required="required"/>
                    <input name='depart' type="date" placeholder="dd/mm/yyyy" id="input-start" required="required"/>
                    <input name='return' type="date" placeholder="dd/mm/yyyy" id="input-end" required="required"/>
                    <button onClick={formHandler} type="submit">Search</button>
                </div>  
            </form>
        </div>
    )
}

export default Form;