
import './App.css'
import Navbar from './Components/Navbar'
import SignUp from './Components/Signup'

function App() {

  return (
    <>
   <Routes>
  <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Home/>} />
    <Route path="*" element={<NotFound/>} />
    <Route path="/home" element={<Navigate to="/" />} />
    <Route path="/about" element={<About/>} />
    <Route path="/vans" element={<Vandetails/>}>
    </Route>
      <Route path="/vans/:id" element={<VanDescript/>} />





<Route path='/host' element={<Host/>}>
<Route path='/host' element={<Navigate to='/host/dashboard'/>} />
    <Route path='/host/dashboard' element={<HostDash/>} />
    <Route path='/host/review' element={<HostReview/>} />
    <Route path='/host/income' element={<HostIncome/>} />
    <Route path='/host/van' element={<HostVans/>} />
</Route>
  </Route>

</Routes>
    </>
  )
}

export default App
