import { ConfigProvider, theme } from "antd"
import { RouterProvider } from "react-router-dom"
import router from "./consts/router"

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: "#F4801A",
                    algorithm: theme.darkAlgorithm,
                },
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    )
}

export default App
