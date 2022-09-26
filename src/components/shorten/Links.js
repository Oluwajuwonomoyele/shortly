
export default function Links({data, setLinks}) {

  const copyToClipboard = (data) => {
    navigator.clipboard.writeText(data.short_link)
    setLinks( prevState => {
      return prevState.map(linkDet => {
        if( linkDet.code === data.code){
          return {...linkDet, copied: true}
        }else {
          return linkDet
        }
      })
    })

    console.log(data)
  }


  return (
    <section>
        <div className='container mx-auto pt-24 flex flex-col gap-4'>
            {data && data.map((link, index) => (
               <div className='bg-white w-[85%] lg:w-[93%] mx-auto py-6 rounded-lg flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between lg:items-center text-base' key={index}>
               <p className='px-4'>{link.original_link}</p>
               <hr className='lg:hidden'/>
               <div className='px-4 flex flex-col gap-3 lg:flex-row lg:gap-8 lg:items-center'>
                 <p className='text-primary-cyan'>{link.short_link}</p>
                 <button className={ link.copied ? 'py-2 lg:px-8 bg-primary-dark-violet w-full rounded-md text-white cursor-pointer text-base transition-all duration-200 ease-linear border-none': 'py-2 lg:px-8 bg-primary-cyan w-full rounded-md text-white cursor-pointer text-base transition-all duration-200 ease-linear border-none'} onClick={() => copyToClipboard(link)}>{ link.copied ? 'Copied!' : 'Copy' }</button>
               </div>
             </div>
            ))
            }
        </div>
    </section>
  )
}
