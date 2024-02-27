
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Home = () => {

    const navigate = useNavigate()

    const signUp = () => {
      toast('🦄 Wow so easy!');;
      navigate('/about')
    }

  return (
    <>
      <div className='home'>
        <div className=''>
          <div className=''>
        <h1 className=''>You got the travel plans, we got the travel vans.</h1>
          </div>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        </div>
        <div className='butt mx-auto  my-4'>
        <div className='butti'>
          <h1 className='butti fw-bolder mx-auto'>Find your van</h1>
        </div>
        </div>
      </div>
      <h1>
        Vans for every occasion
      </h1>
      <button onClick={signUp} className='btn btn-outline-info p-4'>signUp</button>
    </>
  )
}

export default Home