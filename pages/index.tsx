import Head from 'next/head'
import Image from 'next/image'
import GradientLayout from '../components/gradientLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <GradientLayout
      color="pink"
      subtitle="profile"
      title="Jorge Manzur"
      description="15 public playlists"
      image={
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Banded_Mongoose_Nose_Detail%2C_crop.jpg/800px-Banded_Mongoose_Nose_Detail%2C_crop.jpg'
      }
    >
      <div>Home Page</div>
    </GradientLayout>
  )
}
