import styled from "styled-components"
import NextjsSVG from '@public/svgs/stacks/nextjs.svg';
import TypescriptSVG from '@public/svgs/stacks/typescript.svg';
import MongodbSVG from '@public/svgs/stacks/mongodb.svg';
import StyledComponentsSVG from '@public/svgs/stacks/styledcompoents.svg';
import ScssSVG from '@public/svgs/stacks/scss.svg';
import VercelSVG from '@public/svgs/stacks/vercel.svg';
import RecoilSVG from '@public/svgs/stacks/recoil.svg';
import ReactNativeSVG from '@public/svgs/stacks/react.svg';
import GooglePlayConsoleSVG from '@public/svgs/stacks/googleplay.svg';
import TailwindCSSSVG from '@public/svgs/stacks/tailwindcss.svg';
import ReactQuerySrc from '@public/images/stacks/reactquery.png';
import ZustandSVG from '@public/svgs/stacks/zustand.svg';
import Image from "next/image";

export const NextjsIcon = styled(NextjsSVG)`
  width: 1.875em;
  height: 1.875em;
  margin-bottom: -0.2em;
`
export const TypescriptIcon = styled(TypescriptSVG)`
  width: 1.5em;
  height: 1.5em;
`
export const MongodbIcon = styled(MongodbSVG)`
  width: 1.5em;
  height: 1.5em;
`
export const StyledComponentsIcon = styled(StyledComponentsSVG)`
  width: 2.4em;
  height: 1em;
`
export const ScssIcon = styled(ScssSVG)`
  width: 2.4em;
  height: 1.4em;
`
export const RecoilIcon = styled(RecoilSVG)`
  width: 1.25em;
  height: 1.25em;
`
export const VercelIcon = styled(VercelSVG)`
  width: 1.875em;
  height: 1.875em;
  margin-bottom: -0.2em;
`
export const ReactNativeIcon = styled(ReactNativeSVG)`
  width: 1.5em;
  height: 1.5em;
`
export const GooglePlayConsoleIcon = styled(GooglePlayConsoleSVG)`
  width: 1.25em;
  height: 1.25em;
`
export const TailwindCSSIcon = styled(TailwindCSSSVG)`
  width: 1.5em;
  height: 1.5em;
`
export const ReactQueryIcon = () => {
  return (
    <div style={{ width: '1.5em', height: '1.5em' }}>
      <Image src={ReactQuerySrc} alt='ReactQuery' fill />
    </div>
  )
}
export const ZustandIcon = styled(ZustandSVG)`
  width: 1.75em;
  height: 1.75em;
  margin-bottom: -0.3em;
`
