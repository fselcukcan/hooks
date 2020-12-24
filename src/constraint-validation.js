// Constraint & Validate (it will itself)
// write your constraints it will validate.
// write your constraints in html no need to js here and platform will validate you don't have to do anything
// based on native Constraint Validation API

import { useState, useEffect } from "react";

export function useConstraintValidation() {
    const [spec, setSpec] = useState();

    useEffect(() => {

    });
}

// constraint: semantic type attribute or validation related attrs: pattern, min, max, step, required, minlength, maxlength
var inpt

// validate
// check validity on element
inpt.addEventListener('event-type-to-start-check', e => {
    e.target.checkValidity() // reportValidity()
});

// result1
inpt.addEventListener('invalid', e => {
    // e.target.validity // the ValidityState object.
    // e.target.validationMessage is read-only default violation message.
    // e.target.willValidate is read-only boolean value if element is candidate for validation
    // e.target.setCustomValidity('error-message-to-user') // setCustomValidity('') means valid. data-custom-validity vb bir attr ten alınabilir
});

// result2
// in css you have constraint validation pseudo classes for general and for specific kinds of validity/invalidity