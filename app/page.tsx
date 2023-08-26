'use client'

import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react'

export default function Home() {
    return (
        <Container maxW={'6xl'} textAlign={'center'}>
            <SimpleGrid height={'100vh'} placeItems={'center'}>
                <Box>
                    <Heading as="h1" mb="6" size={{ base: 'md', lg: '3xl' }}>
                        Hi there 👋
                    </Heading>

                    <Text fontSize={{ base: 'md', lg: '3xl' }} mb="2">
                        👨🏻‍💻 I am a web developer.
                    </Text>
                    <Text fontSize={{ base: 'md', lg: '3xl' }} mb="2">
                        📍 Located in Espoo, Finland.
                    </Text>
                    <Text fontSize={{ base: 'md', lg: '3xl' }} mb="2">
                        ✌️ Developing both in frontend and backend.
                    </Text>
                    <Text fontSize={{ base: 'md', lg: '3xl' }} mb="2">
                        🚀 Preferable with PHP, Golang, Ruby, Python and
                        Javascript.
                    </Text>
                    <Text fontSize={{ base: 'md', lg: '3xl' }} mb="2">
                        ❤️ Love chess, reading, fishing, photographing, and many
                        sports.
                    </Text>
                </Box>
            </SimpleGrid>
        </Container>
    )
}
