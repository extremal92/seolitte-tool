import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';


import { fetchPerson } from '../redux/actions/person';

function Support() {
    const dispatch = useDispatch();

    const items = useSelector(({ person }) => person.items);
    const [newItems, setNewItems] = React.useState(items);
    const [newSearch, setNewSearch] = React.useState(null);
    const isLoaded = useSelector(({ person }) => person.isLoaded);

  
    React.useEffect(() => {
      dispatch(fetchPerson());
    }, []);
    // console.log(newItems)

    return (
        <div className="suport">

            <div className="content-title">
                <h3>Support</h3>
            </div>
            <div className="suport__form">
                <div className="support__title">
                    <h4>Cauta utilizator</h4>
                </div>
                <Formik
                    initialValues={{
                        phone: "",
                        idnp: "",
                        date: ""
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        let preItems = [...items];


                        setTimeout(() => {
                            preItems = preItems.filter(item => {
                                for(let key in values){
                                    if(values[key] && !item[key].includes(values[key])){
                                        return false
                                    }
                                }
                                return true
                            })
                            setNewItems(preItems);
                            setSubmitting(false);
                            setNewSearch(Object.values(values));
                        }, 400);
                    }}>

                    {({ isSubmitting }) => (

                    <Form>
                        <div className="form__item">
                            <label htmlFor="idnp" className="form__item-label">IDNP</label>
                            <Field name="idnp" placeholder="" type="text"  className="form__item-input"/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="phone" className="form__item-label">Nr.Telefon</label>
                            <Field
                                name="phone"
                                placeholder=""
                                type="phone"
                                className="form__item-input"
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="date" className="form__item-label">Data Acces</label>
                            <Field name="date" type="date" className="form__item-input" />
                        </div>


                    <button type="submit" disabled={isSubmitting} className="form__item-btn">CAUTA</button>

                    </Form>

                    )}

                </Formik>
            </div>
            <div className="suport__rezult">
                <div className="support__title">
                    <h4>Rezultale cautare:</h4>
                    <span>{isLoaded ? newSearch : null }</span>
                </div>
                <table className="table suport__rezult-main">
                    <thead>
                        <tr>
                        <th scope="col">Nume Prenume</th>
                        <th scope="col">IDNP</th>
                        <th scope="col">Nr.Telefon</th>
                        <th scope="col">PAN Card</th>
                        <th scope="col">Last transaction</th>
                        </tr>
                    </thead>
                    <tbody>
                    {isLoaded ? newItems.map((item, key)=>{
                        return(
                            <tr key={key}>
                                <th scope="row">{item.name}</th>
                                <td>{item.idnp}</td>
                                <td>{item.phone}</td>
                                <td>{item.card}</td>
                                <td>{item.date}</td>
                            </tr>
                        )})
                    : null }
                    </tbody>
                </table>
             
            </div>
        </div>
    )
}

export default Support;
