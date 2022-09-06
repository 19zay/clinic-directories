import {Box, Heading, Image, Text } from '@chakra-ui/react'
import {StarIcon, TriangleDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router";




export default function HospitalCard(props){

   const router = useRouter()

    
    return(
        <Box maxW='sm' h='140px' bgGradient='linear(to-r, #23a9ff, #48a7ba)' marginTop='40px' borderRadius='20px' display='flex'  boxShadow=' 0 10px 20px -5px #848b90' ml='40px'>
              <Image src={`${props.img}`}  alt="Hospital-Image" maxW='8rem' p="30px"/>

              <Box display='flex' flexDirection='column'>
                <Box display='flex'>
                  <Heading fontSize='md' color='white' marginTop='30px' ml='-10px'>{props.name}</Heading>
                </Box>

                <Box display='flex' alignItems='center' mt='2px' ml='-10px'>
                  {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < props.stats.rating ? '#ffba23' : 'gray.300'}
                    />
                   ))}
                  <Text color='white' ml='10px'>{props.stats.reviewCount} Reviews</Text>
                </Box>
                 
                <Box ml='-20px' display='flex' mt='2px'>
                  <TriangleDownIcon ml='10px' mt='5px' color='red'/>
                  <Text fontSize='13px' color='white' wordBreak='normal'>{props.address}</Text>
                </Box>

                <Box display='flex' mt='10px' ml='25px'>
                  <button type="button" onClick={()=> router.push({
                    pathname:`/HospitalPage/${props.id}`
                  })}>
                    <Text fontFamily='sans-serif' color='white' _hover='black' cursor='pointer' fontWeight={550}>
                      More info?
                      <ChevronRightIcon/>
                    </Text>
                   </button>
                </Box>
              </Box> 
            </Box>
    )
}