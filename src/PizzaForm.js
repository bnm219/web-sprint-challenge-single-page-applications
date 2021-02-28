import React from 'react'

export default function PizzaForm(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }


    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Order Pizza</h2>

                {/* 🔥 DISABLE THE BUTTON */}
                <button id ='submitBtn' disabled={disabled}>submit</button>

                <div className='errors'>
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.role}</div>
                <div>{errors.civil}</div>
                </div>
            </div> 
            <div className = 'form-group inputs'>
                <h4>All Pizzas Come With Red Sauce and Cheese</h4>
                {/* ////////// TEXT INPUTS ////////// */}
                <label>Name
                    <input 
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>
                {/*/////////DROPDOWN//////*/}
                <select 
                onChange = {onChange}
                id = 'sizeSelect' 
                name = 'size'
                value = {values.size}>
                <option value=''>Select</option>
                <option value='10 inch'>10 "</option>
                <option value='12 inch'>12 "</option>
                <option value='16 inch'>16 "</option>
                </select>
                {/* ////////// CHECKBOXES ////////// */}
                <label>Pepperonie
                <input 
                    type = 'checkbox'
                    name = 'termsOfService'
                    onChange = {onChange}
                    checked = {values.pepperonie}
                />
                </label>
                <label>Cheese
                <input 
                    type = 'checkbox'
                    name = 'termsOfService'
                    onChange = {onChange}
                    checked = {values.cheese}
                />
                </label>
                <label>Sausage
                <input 
                    type = 'checkbox'
                    name = 'termsOfService'
                    onChange = {onChange}
                    checked = {values.sausage}
                />
                </label>
                <label>Pineapple
                <input 
                    type = 'checkbox'
                    name = 'termsOfService'
                    onChange = {onChange}
                    checked = {values.pineapple}
                />
                </label>
                <label>Special Instructions
                <input
                    value={values.instructions}
                    onChange={onChange}
                    name='instructions'
                    type='text'
                />
                </label>
            </div>
        </form>
    )

}