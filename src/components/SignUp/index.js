import {Formik, Form, Field} from 'formik';
import {SignUpSchema} from '../../schemas';

import CustomField from '../CustomField';

function SignUp(props) {

    const initialValues = {
        firstName:'',
        lastName:'',
        displayName:'',
        email: '',
        password: '',
        passConfirm:'',
        role: '',
        subscribe: false,
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
                 <CustomField name="firstName" placeholder="firstName"/>
                 <CustomField name="lastName" placeholder="lastName"/>
                 <CustomField name="displayName" placeholder="displayName"/>
                 <CustomField name="email" placeholder="Email"/>
                 <CustomField name="password" placeholder="password"/>
                 <CustomField name="passConfirm" placeholder="Password Confirm"/>
                 <Field type="radio" name="role" value="buyer"/>
                 <Field type="radio" name="role" value="creator"/>
                 <ErrorMessage name="role" component="div" style={{color:'red', border:'2px dotter red'}}/>
                </Form>
            )}
        </Formik>
    )
}