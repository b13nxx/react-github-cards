import React from 'react'
import { CardProps } from '../Card/Card'
import CardList from '../CardList/CardList'
import Form from '../Form/Form'
import styles from './AppHome.module.css'

export interface MainProps {
  title: string
}

export interface MainState {
  profiles: CardProps[]
}

export default class Main extends React.Component {
  state = {
    profiles: []
  }

  handleNewProfile = (data: CardProps): void => {
    const { profiles } = this.state as MainState
    const foundProfile: boolean = profiles.some(
      (profile: CardProps) => profile.id === data.id
    )

    if (!foundProfile) {
      this.setState((prevState: MainState) => ({
        profiles: [...prevState.profiles, data]
      }))
    }
  }

  render (): JSX.Element {
    const { title } = this.props as MainProps
    const { profiles } = this.state as MainState

    return (
      <div>
        <div
          className={ styles.header }>
          {title}
        </div>
        <Form
          { ...{ handleNewProfile: this.handleNewProfile } } />
        <CardList
          { ...{ profiles } } />
      </div>
    )
  }
}
