import OurYoutube from './OurYoutube'

export const OurYoutubeContainer = async () => {
  const response = await fetch('http://localhost:3000/api/youtube/playlist')
  const playlist = await response.json()

  return <OurYoutube playlists={playlist.data.items} />
}
export default OurYoutubeContainer
