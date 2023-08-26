'use client'

import { Box, Container, Heading, Text, SimpleGrid } from '@chakra-ui/react'

export default function Home() {
    return (
        <Container pt="8" height={'100vh'}>
            <SimpleGrid height={'100%'} placeItems={'center'}>
                <Box>
                    <Heading mb="4">Hi there 👋</Heading>

                    <Text mb="2">👨🏻‍💻 I am a web developer.</Text>
                    <Text mb="2">📍 Located in Espoo, Finland.</Text>
                    <Text mb="2">
                        ✌️ Developing both in frontend and backend.
                    </Text>
                    <Text mb="2">
                        🚀 Preferable with PHP, Golang, Ruby, Python and
                        Javascript.
                    </Text>
                    <Text mb="2">
                        ❤️ Love chess, reading, fishing, photographing, and many
                        sports.
                    </Text>
                </Box>
            </SimpleGrid>
        </Container>
    )
}
