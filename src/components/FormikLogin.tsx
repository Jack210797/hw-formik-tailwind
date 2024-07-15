import { Form, Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import Button from './FormComponents/Button'

const initialValues = {
  email: '',
  password: '',
  confirmPassword: ''
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
})

const handleSubmit = (values: any) => {
  console.log('Form data', values)
}
const FormikLogin = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {(formik: FormikProps<any>) => (
        <Form>
          <FormikControl control="input" label="Email" name="email" type="email" placeholder="Email address" />
          <FormikControl control="input" label="Password" name="password" type="password" placeholder="Password" />
          <FormikControl
            control="input"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Please enter your password again"
          />
          <Button text="Login" type="submit" disabled={!formik.dirty || !formik.isValid || formik.isSubmitting} />
        </Form>
      )}
    </Formik>
  )
}

export default FormikLogin
