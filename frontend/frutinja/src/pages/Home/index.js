import React from 'react'
import { Flex, Image, Select, Input, IconButton, Box } from "@chakra-ui/react"
import { AiTwotoneFilter, AiFillCaretDown } from 'react-icons/ai'
import Logo from '../../assets/Logo.svg'
import BgInfos from '../../assets/Background_infos.svg'

export const Home = () => {
    return (
        <Flex
            bg='#D9D2CF'
            flexDirection='column'
            justifyContent='space-between'
            minWidth='100vh'
        >
            {/* Header */}
            <Flex
                bg='#FFF'
                paddingY='2'
                height='80px'
            >
                <Flex align='center' margin='auto'>
                    <Image src={Logo} alt='Hortinja Logo' marginX='20'/>
                    <Flex flexDirection='row'>
                        <Select icon={<AiFillCaretDown />} placeholder="Selecionar Categoria" borderRadius='100px' minWidth='35vh' marginRight='10px'/>
                        <Input placeholder='Buscar Hortaliça' borderRadius='100px' minWidth='35vh' /> 
                        <IconButton icon={<AiTwotoneFilter />} bg='#006B5C' borderRadius='100px' marginRight='20vh' marginLeft='3' />
                    </Flex>
                </Flex>
            </Flex>
            {/* Fim Header */}

            {/* Inicio Dashboard */}

            <Flex margin='auto'>
                <Image src={BgInfos} alt='Background_Infos' marginTop='5vh'/>
                <Flex bg='FFFFFF' margin='auto'>
                    
                </Flex>
            </Flex>

            {/* Fim Dashboard */}

        </Flex>
    )
}