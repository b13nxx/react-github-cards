import AppHome from '../components/AppHome/AppHome'

export default function Home (): JSX.Element {
  return (
    <AppHome
      { ...{ title: 'The GitHub Cards App' } } />
  )
}
