import FormikContainer from './components/FormikContainer'
import './index.css'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded shadow-xl w-1/2">
        <h1 className="text-3xl mb-5 text-center font-bold">Formik Controls with Tailwind</h1>
        <FormikContainer />
      </div>
    </div>
  )
}

export default App
