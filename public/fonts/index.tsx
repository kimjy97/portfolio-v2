import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const pretendard = localFont({
  src: './Pretendard/PretendardVariable.woff2',
  variable: '--font-pretendard',
})

