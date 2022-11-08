/*
section 3: madhu & harsh & samshad
*/
const section3 = () => {
  return (
    <div className='card-div bg-white relative'>
      <h1 className='text-center'>Our Team</h1>
      <h1 className='text-center'>Meet the team planning, innovating and executing various tasks of this community!</h1>
      <div className="flex flex-wrap justify-center">
        <div className='card-nav rounded-full border-2 m-2 px-4 flex'>
          <p className='active-card'>LEAD</p>
          <p>ABOUT US</p>
          <p>ABOUT US</p>
          <p>ABOUT US</p>
          <p>ABOUT US</p>
          <p>ABOUT US</p>
          <p>ABOUT US</p>
          <p>ABOUT US</p>
          <p>ABOUT US</p>
        </div>
      </div>


      <div className="hideme absolute flex flex-wrap justify-center my-12 ">
        <div className='card relative rounded-2xl card-div border-2 z-10 hover:z-0'>
          <img className='rounded-2xl' src='lead.jpg'></img>
          <div className='absolute inset-x-2 bg-white rounded-2xl w-6/7 m-auto'>
            <hr className='m-auto'></hr>
            <p className='text-center'>Nirmit Chattoo</p>
            <p className='text-center'>GDSC WCE Lead</p>
          </div>
        </div>
      </div>

      <div className="showme  absolute flex flex-wrap justify-center my-12 ">
        <div className='card1 relative rounded-2xl card-div border-2 z-0 hover:z-10'>
          <img className='absolute inset-x-2 m-auto rounded-2xl' src='lead.jpg'></img>
          <div className='absolute inset-x-2 bg-white rounded-2xl w-6/7 m-auto'>
            <p className='text-center'>Nirmit Chattoo</p>
            <p className='text-center'>GDSC WCE Lead</p>
            <div className='card-logo flex justify-center'>
              <a href="https://github.com/"><img className='mr-3' src='GitHub-Mark-32px.png'></img></a>
              <a href="https://linkedin.com/"><img className='ml-3' src='834713_linkedin_icon.png'></img></a>
            </div>
          </div>
        </div>
      </div>

      {/* <Script src='main.js' strategy='lazyOnload'>
      </Script> */}

    </div>
  )
}
export default section3