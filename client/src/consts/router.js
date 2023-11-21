import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import EventPage from "../pages/EventPage"
import HomePage from "../pages/HomePage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<BaseLayout />}>
                <Route path="" element={<HomePage />} />
                <Route path="/event/:id" element={<EventPage />} />
            </Route>
        </>,
    ),
)

export default router
