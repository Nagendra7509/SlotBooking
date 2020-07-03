import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const ImageTag = styled.img``

const LazyLoadingWrapper = styled.div`
   ${tw`h-screen overflow-y-auto`}
`

export { ImageTag, LazyLoadingWrapper }
