import React from 'react'
import { Flex, Image, Select, Input, IconButton, Box, Text, Divider } from "@chakra-ui/react"
import { AiTwotoneFilter, AiFillCaretDown } from 'react-icons/ai'
import Logo from '../../assets/Logo.svg'
import BgInfos from '../../assets/Background_infos.svg'

export const Home = () => {
    return (
        <Flex
            bg='#D9D2CF'
            flexDirection='column'
            justifyContent='space-between'
            minHeight='100vh'
        >
            {/* Inicio Header */}
            <Flex
                bg='#FFF'
                paddingY='2'
                alignItems='center'
            >
                <Image src={Logo} alt='Hortinja Logo' marginLeft='20%' marginRight='20' />
                <Select icon={<AiFillCaretDown />} placeholder="Selecionar Categoria" borderRadius='100px' bg='#D9D2CF' maxWidth='320px' />
                <Input placeholder='Buscar Hortaliça' borderRadius='100px' minWidth='35vh' bg='#D9D2CF' maxWidth='320px' /> 
                <IconButton 
                    icon={<AiTwotoneFilter />} 
                    bg='#006B5C' 
                    borderRadius='100px' 
                    marginRight='20vh' 
                    marginLeft='3' 
                    onClick={ () => console.log("Abrir Modal")} 
                />
            </Flex>
            {/* Fim Header */}

            {/* Inicio Conteudo */}
             <Flex flexDirection='column' minHeight='80vh' minWidth='70vh' alignItems='center' paddingTop='5'>

                

             </Flex>
             {/* Fim Conteudo */}

            {/* Inicio Footer */}
            <Box marginY='4'>
                <Text textAlign='center' fontSize='15px' color='gray'> 
                    Copyright © 2021 Feito com ❤ por Kazap Tecnologia - Todos os direitos reservados
                </Text>
            </Box>
            {/* Fim Footer */}

        </Flex>
    )
}