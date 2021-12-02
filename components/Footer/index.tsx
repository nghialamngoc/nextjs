import { Grid, GridItem } from '@chakra-ui/layout'
import { NextPage } from 'next'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={1}>
            <div>
              <Logo />
            </div>
            <ul>
              <li>
                <a href="#">Giới thiệu POLOMAN</a>
              </li>
              <li>
                <a href="#">Chương trình Affiliate</a>
              </li>
              <li>
                <a href="#">Blogger</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
            </ul>
          </GridItem>
          <GridItem colSpan={1}>1</GridItem>
          <GridItem colSpan={1}>1</GridItem>
          <GridItem colSpan={2}>1</GridItem>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer
