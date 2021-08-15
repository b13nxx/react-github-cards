import React from 'react'
import Card, { CardProps } from '../Card/Card'

export interface CardListProps {
  profiles: CardProps[]
}

export default class CardList extends React.Component {
  render (): JSX.Element {
    const { profiles } = this.props as CardListProps

    return (
      <div>
        {
          profiles.map((profile: CardProps) => (
            <Card
              { ...profile }
              key={ profile.id } />
          ))
        }
      </div>
    )
  }
}
