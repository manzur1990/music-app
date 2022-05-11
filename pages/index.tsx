import Head from 'next/head'
import Image from 'next/image'
import GradientLayout from '../components/gradientLayout'
import { useMe } from '../lib/hooks'
import prisma from '../lib/prisma'
import styles from '../styles/Home.module.css'

const Home = ({ artists }) => {
  const { user, isLoading } = useMe()
  return (
    <GradientLayout
      color="gray"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description="15 public playlists"
      image={
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Banded_Mongoose_Nose_Detail%2C_crop.jpg/800px-Banded_Mongoose_Nose_Detail%2C_crop.jpg'
      }
    >
      <div>Home Page</div>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: { artists },
  }
}

export default Home
