import React from 'react'
import Notification from './Notification'
import GlobalStyle from '../GlobalStyle'


const Template = () => {
    <>
        <GlobalStyle />
        <Notification>

        </Notification>
    </>
}

export default {
    title: 'Example/Notification',
    component: Notification,
}

export const Default = Template.bind({})