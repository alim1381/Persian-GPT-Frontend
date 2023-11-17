import { HashLoader } from 'react-spinners'

function Loader() {
  return (
    <div className=' absolute w-full h-full top-0 flex justify-center items-center bg-[rgba(23,23,23,0.7)] bg-opacity-5'>
        <HashLoader color="#10b981" className=" w-10 h-10" />
    </div>
  )
}

export default Loader