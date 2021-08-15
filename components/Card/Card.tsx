import React from 'react'
import styles from './Card.module.css'

export interface CardProps {
  id?: number
  avatar_url: string
  name: string
  company: string
  message?: string
}

export default class Card extends React.Component {
  render (): JSX.Element {
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      avatar_url,
      name,
      company
    } = this.props as CardProps

    return (
      <div
        className={ styles['github-profile'] }>
        <img
          className={ styles.photo }
          src={ avatar_url } />
        <div
          className={ styles.info }>
          <div
            className={ styles.name }>
            {name}
          </div>
          <div
            className='company'>
            {company}
          </div>
        </div>
      </div>
    )
  }
}
