import React, { Component } from 'react'
import Toolbar from '../Toolbar'
import LayoutHome from '../Hero/LayoutHome'

export class Success extends Component {

    render() {
        return (
            <React.Fragment>
                <LayoutHome>
                    <Toolbar>
                        <h1> Thank you for your submission! </h1> </Toolbar>
                    <form
                        style={{ width: '70%' }}
                    >
                        <p>You will receive an email with further instructions. The last step to confirming your membership is a one-time $50 membership fee. Visit our Membership page for more details.</p>
                    </form>
                </LayoutHome>
            </React.Fragment>

        )

    }
}


export default Success;