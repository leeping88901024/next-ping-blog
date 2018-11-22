import React from 'react'
import Layout from '../components/Layout'

// 包裹布局控件
function wrapLayout(WrappedComponent) {
    return class PP extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                isWrapped: true,
            }
        }

        render() {
            return (
                <Layout>
                    <WrappedComponent {...this.props} />
                </Layout>
            )
        }
    }
}

export default wrapLayout