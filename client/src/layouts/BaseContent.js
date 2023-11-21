const BaseContent = ({ children }) => {
    return (
        <div
            style={{
                margin: "50px 0 50px 0",
                padding: 50,
                background: "#fff",
                boxShadow: "0 0 5px 5px rgba(0,0,0,.03)",
                borderRadius: "6px",
            }}
        >
            {children}
        </div>
    )
}

export default BaseContent
