
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required.')
        .min(3, 'Name must be at least 2 characters long'),
    size: yup.string()
        .trim()
        .required('size is required.'),
    instructions: yup.string().trim(),
    pepperonie: yup.string(),
    cheese: yup.string(),
    sausage: yup.string(),
    pineapple: yup.string(),

})

export default formSchema;