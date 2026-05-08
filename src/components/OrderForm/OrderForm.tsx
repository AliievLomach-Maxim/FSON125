import { useId } from 'react'
import css from './OrderForm.module.css'
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik'

// Namespace import
import * as Yup from 'yup'

// const RestrictionsSchema = Yup.string().oneOf(['vegan', 'gluten-free', 'nut-free'])
// const EmailValidationSchema = Yup.string().email('Invalid email').required('Required Field')

const OrderSchema = Yup.object({
  username: Yup.string()
    .min(2, 'Too Short! Min 2')
    .max(5, 'Too Long! Max 5')
    .required('Required Field'),
  // email: EmailValidationSchema,
  email: Yup.string().email('Invalid email').required('Required Field'),
  delivery: Yup.string().oneOf(['pickup', 'courier', 'drone']).required('Required Field'),
  //
  restrictions: Yup.array().of(Yup.string().oneOf(['vegan', 'gluten-free', 'nut-free'])),
  // restrictions: Yup.array().of(RestrictionsSchema),
  //
  deliveryTime: Yup.string().oneOf(['morning', 'afternoon', 'evening']).required('Required Field'),
  message: Yup.string().max(200, 'Too long!! Max 200'),
})

// const ArrOrSch = Yup.array().of(OrderSchema)

type Restrictions = 'vegan' | 'gluten-free' | 'nut-free'

interface OrderForm {
  username: string
  email: string
  // delivery: 'pickup' | 'courier' | 'drone' | ''
  delivery: 'pickup' | 'courier' | 'drone'
  // restrictions: ('vegan' | 'gluten-free' | 'nut-free')[]
  restrictions: Restrictions[]
  deliveryTime: 'morning' | 'afternoon' | 'evening' | ''
  message: string
}

const OrderInitialValues: OrderForm = {
  username: '',
  email: '',
  delivery: 'pickup',
  restrictions: ['vegan'],
  deliveryTime: '',
  message: '',
}

export default function OrderForm() {
  const fieldId = useId()

  const handleSubmit = (values: OrderForm, formikHelpers: FormikHelpers<OrderForm>) => {
    console.log('values', values)
    formikHelpers.resetForm()
  }

  return (
    <Formik
      initialValues={OrderInitialValues}
      onSubmit={handleSubmit}
      validationSchema={OrderSchema}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client Info</legend>
          <label htmlFor={`${fieldId}-username`} className={css.label}>
            Name
          </label>
          <Field type='text' name='username' id={`${fieldId}-username`} className={css.input} />
          <ErrorMessage name='username' component='span' className={css.error} />
          {/* <input type='text' name='username' id={`${fieldId}-username`} className={css.input} /> */}
          <label htmlFor={`${fieldId}-email`} className={css.label}>
            Email
          </label>
          <Field type='email' name='email' id={`${fieldId}-email`} className={css.input} />
          <ErrorMessage name='email' component='span' className={css.error} />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Delivery method</legend>

          <label className={css.option}>
            <Field type='radio' name='delivery' value='pickup' />
            Pickup
          </label>
          <label className={css.option}>
            <Field type='radio' name='delivery' value='courier' />
            Courier
          </label>
          <label className={css.option}>
            <Field type='radio' name='delivery' value='drone' />
            Drone delivery
          </label>
          <ErrorMessage name='delivery' component='span' className={css.error} />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Dietary restrictions</legend>

          <label className={css.option}>
            <Field type='checkbox' name='restrictions' value='vegan' />
            Vegan
          </label>
          <label className={css.option}>
            <Field type='checkbox' name='restrictions' value='gluten-free' />
            Gluten-free
          </label>
          <label className={css.option}>
            <Field type='checkbox' name='restrictions' value='nut-free' />
            Nut-free
          </label>
        </fieldset>

        <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
          Preferred delivery time
        </label>
        <Field as='select' name='deliveryTime' id={`${fieldId}-deliveryTime`} className={css.input}>
          <option value='' disabled>
            -- Choose delivery time --
          </option>
          <option value='morning'>Morning (8:00-12:00)</option>
          <option value='afternoon'>Afternoon (12:00-16:00)</option>
          <option value='evening'>Evening (16:00-20:00)</option>
        </Field>
        <ErrorMessage name='deliveryTime' component='span' className={css.error} />

        <label htmlFor={`${fieldId}-message`} className={css.label}>
          Additional message
        </label>
        <Field
          as='textarea'
          name='message'
          rows={4}
          id={`${fieldId}-message`}
          className={css.textarea}
        ></Field>

        <button type='submit' className={css.button}>
          Place order
        </button>
      </Form>
    </Formik>
  )
}
