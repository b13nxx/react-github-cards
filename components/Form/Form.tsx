import axios, { AxiosResponse } from 'axios'
import React from 'react'
import { CardProps } from '../Card/Card'
import styles from './Form.module.css'

export interface FormProps {
  handleNewProfile: (data: CardProps) => void
}

export interface FormState {
  userName: string
}

export default class Form extends React.Component {
  state = {
    userName: ''
  }

  handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    const { handleNewProfile } = this.props as FormProps
    let { userName } = this.state as FormState
    userName = decodeURIComponent(userName.trim())

    if (userName.trim() === '') {
      return
    }

    try {
      const resp: AxiosResponse<CardProps> = await axios.get(
        `https://api.github.com/users/${userName}`
      )

      handleNewProfile(resp.data)
      this.setState({ userName: '' })
    } catch (error) {
      alert(
        `Request for user '${userName}': ${
          error.response.data.message as string
        }`
      )
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ userName: event.target.value })
  }

  render (): JSX.Element {
    const { userName } = this.state

    return (
      <form
        className={ styles.form }
        onSubmit={ this.handleSubmit }>
        <input
          { ...{
            type: 'text',
            value: userName,
            onChange: this.handleChange,
            placeholder: 'Github username'
          } }
          required />
        <button
          className={ styles.button }>
          Add card
        </button>
      </form>
    )
  }
}
