import cx from 'classnames';
import styles from './Field.module.css';


function CustomField(props) {

    return (
        <Field {...props}>
        {({ field, form, meta }) => {
            
            const cn = cx(styles.input, {
                [styles.valid]: meta.touched && !meta.error,
                [styles.invalid]: meta.touched && meta.error
            })
            
            return (
            <div>
                <input 
                type="text" {...field}
                placeholder="First Name"/>
                {meta.touched &&
                meta.error && 
                <div className={styles.error}>{meta.error}</div>}
            </div>
        )}}
 </Field>
    )
}


export default CustomField;