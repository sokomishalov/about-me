import React from 'react'
import {App, ConfigProvider, theme} from 'antd';

const CustomThemeProvider = (props) => (
    <ConfigProvider
        theme={{
            algorithm: theme.darkAlgorithm,
        }}>
        <App>
            {props.children}
        </App>
    </ConfigProvider>
)

export default CustomThemeProvider;