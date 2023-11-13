import './globals.css'
import { Montserrat } from 'next/font/google'
import Cabecalho from '@/components/Cabecalho/cabecalho'
import Rodape from '@/components/Rodape/rodape'

const monteserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Entrega 4',
  description: '1TDSPM - Entrega 4',
}

export default function RootLayout({ children, children2 }) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho/>
        {children}
        <Rodape/>
      </body>
    </html>
  )
}
