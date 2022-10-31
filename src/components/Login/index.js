import {Formik, Form, Field} from 'formik';
import {LoginSchema} from '../../schemas';

import CustomField from '../CustomField';

function LoginForm() {

    const initialValues = {
        email: '',
        pass: '',
        remember: false
    }

    const submitHandler = (values, actions) => {
        console.log(values);
    }

    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={LoginSchema}>
            {(formikProps) => (
                <Form>
                 <CustomField name="email" placeholder="Type your email"/>
                 <CustomField name="password" placeholder="Type your password"/>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;