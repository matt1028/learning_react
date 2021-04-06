import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}


//below is the code for js
// import { parseISO , format } from 'date-fns'

// export default function Date({ dateString }){
//     const date = parseISO(dateString)
//     return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
// }    