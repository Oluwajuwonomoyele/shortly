import {ImSpinner2} from 'react-icons/im'
import { store } from '../../firestore/config'

export default function Links({data, pending}) {

  const setCopiedToFalse = (docs) => {
    docs.forEach(doc => {
      store.collection('links').doc(doc.id).update({
        copied: false
      })
    })
  }

  const copyToClipboard = (doc) => {
    navigator.clipboard.writeText(doc.shortLink)
    store.collection('links').doc(doc.id).update({
      copied: true
    })
    setTimeout(() => {
      setCopiedToFalse(data)
    }, 2000)
  }

  return (
    <section>
        <div className='container mx-auto pt-24 flex flex-col gap-4'>
          { pending && <div className='w-full flex justify-center pt-6'><ImSpinner2 size={28} className='animate-spin text-primary-cyan'/></div> }
          {data && data.map(link => (
              <div className='bg-white w-[85%] lg:w-[93%] mx-auto py-6 rounded-lg flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between lg:items-center text-base' key={link.id}>
              <p className='px-4'>{link.originalLink}</p>
              <hr className='lg:hidden'/>
              <div className='px-4 flex flex-col gap-3 lg:flex-row lg:gap-8 lg:items-center'>
                <p className='text-primary-cyan'>{link.shortLink}</p>
                { link.copied ? <button className='py-2 lg:px-8 bg-primary-dark-violet w-full rounded-md text-white cursor-pointer text-base transition-all duration-200 ease-linear border-none' disabled>Copied!</button> :
                <button className='py-2 lg:px-8 bg-primary-cyan w-full rounded-md text-white cursor-pointer text-base transition-all duration-200 ease-linear border-none'  onClick={() => copyToClipboard(link)}>Copy</button>}
              </div>
            </div>
          ))
          }
        </div>
    </section>
  )
}
