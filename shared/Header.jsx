import {
  Flex,
  Image as ChakraImage,
  Link as ChakraLink,
  FormControl,
  FormLabel,
  Switch,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Text
} from '@chakra-ui/react';
import { useContext } from 'react';

import Link from 'next/link';

import { AppContext } from '../context/AppContext';

export const Header = ({ windowWidth }) => {
  const context = useContext(AppContext);
  return (
    <Flex
      w='100%'
      justifyContent='space-between'
      alignItems='center'
      px={{ base: '2rem', lg: '5rem' }}
      py={{ base: '1rem', lg: '1rem' }}
      boxShadow='0px 2px 10px rgba(0, 70, 145, 0.2)'
    >
      <Link href='/' passHref>
        <Flex
          direction='row'
          alignItems='center'
          justifyContent='center'
          cursor='pointer'
        >
          <ChakraImage
            src='/assets/logos/kyiv_tech_summit.png'
            alt='logo'
            w={{ lg: '300px', sm: '150px' }}
          />
        </Flex>
      </Link>

      {windowWidth < 650 && (
        <Flex>
          <Flex display='flex' alignItems='center' ml='2rem'>
            <Button
              size='xs'
              fontSize='xs'
              fontFamily='figTree'
              border={!context.isUkraineVersion && '2px solid'}
              borderColor='black'
              onClick={context.switchToEnglish}
              mr='5px'
            >
              🇺🇲
            </Button>
            <Button
              size='xs'
              fontSize='xs'
              fontFamily='figTree'
              border={context.isUkraineVersion && '2px solid'}
              borderColor='black'
              onClick={context.switchToUkrainian}
              mr='5px'
            >
              🇺🇦
            </Button>
          </Flex>
          <Popover placement='bottom'>
            <PopoverTrigger>
              <Button
                bg='#251D3A'
                border='2px solid #251D3A'
                borderRadius='none'
                fontFamily='figTree'
                color='white'
                p='10px'
                _hover={{
                  bg: 'white',
                  color: '#251D3A',
                  textDecoration: 'none'
                }}
                fontSize='.8rem'
              >
                <Text px={2}>Menu</Text>
              </Button>
            </PopoverTrigger>
            <PopoverContent bg='none' w='auto'>
              <ChakraLink
                href='https://t.me/kyivtechsummit'
                isExternal
                fontSize={{ lg: '15px', sm: '10px' }}
                bg='#251D3A'
                border='2px solid #251D3A'
                color='white'
                p='10px'
                _hover={{
                  bg: 'white',
                  color: '#251D3A',
                  textDecoration: 'none'
                }}
              >
                Telegram
              </ChakraLink>
              <ChakraLink
                href='https://discord.gg/nJGCev3Y2c'
                isExternal
                fontSize={{ lg: '15px', sm: '10px' }}
                bg='#251D3A'
                border='2px solid #251D3A'
                color='white'
                p='10px'
                _hover={{
                  bg: 'white',
                  color: '#251D3A',
                  textDecoration: 'none'
                }}
              >
                Discord
              </ChakraLink>
              <ChakraLink
                href='https://twitter.com/KyivTechSummit'
                isExternal
                fontSize={{ lg: '15px', sm: '10px' }}
                bg='#251D3A'
                border='2px solid #251D3A'
                color='white'
                p='10px'
                _hover={{
                  bg: 'white',
                  color: '#251D3A',
                  textDecoration: 'none'
                }}
              >
                Twitter
              </ChakraLink>
            </PopoverContent>
          </Popover>
        </Flex>
      )}

      {windowWidth > 650 && (
        <Flex direction='row' alignItems='center'>
          <ChakraLink
            href='https://t.me/kyivtechsummit'
            isExternal
            fontSize={{ lg: '25px', sm: '20px' }}
            mr={{ lg: '20px', sm: '15px' }}
          >
            <span>
              <i className='fa-brands fa-telegram'></i>
            </span>
          </ChakraLink>
          <ChakraLink
            href='https://discord.gg/nJGCev3Y2c'
            isExternal
            fontSize={{ lg: '25px', sm: '20px' }}
            mr={{ lg: '20px', sm: '15px' }}
          >
            <span>
              <i className='fa-brands fa-discord'></i>
            </span>
          </ChakraLink>
          <ChakraLink
            href='https://twitter.com/KyivTechSummit'
            isExternal
            fontSize={{ lg: '25px', sm: '20px' }}
          >
            <span>
              <i className='fab fa-twitter'></i>
            </span>
          </ChakraLink>
          <Flex display='flex' alignItems='center' ml='2rem'>
            <Button
              fontSize='sm'
              fontFamily='figTree'
              border={!context.isUkraineVersion && '2px solid'}
              borderColor='black'
              onClick={context.switchToEnglish}
              mr='5px'
            >
              English
            </Button>
            <Button
              fontSize='sm'
              fontFamily='figTree'
              border={context.isUkraineVersion && '2px solid'}
              borderColor='black'
              onClick={context.switchToUkrainian}
            >
              Українська
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
