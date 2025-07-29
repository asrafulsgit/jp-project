import Link from "next/link"


const NotFound = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-red-600 text-2xl'>Page Not Found</h1>
      <Link href='/' > <button className='px-3 py-2.5 bg-blue-600 
      cursor-pointer text-white  rounded-md'>GO BACK HOME</button></Link>
    </div>
  )
}

export default NotFound
