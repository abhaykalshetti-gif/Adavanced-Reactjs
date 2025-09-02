
import App from "./Content";
import { ThemeProvider } from "./ThemeContext";


const ContextApp = () => {
  return (
    <div>
       <ThemeProvider>
      <App />
    </ThemeProvider>

    </div>
  )
}

export default ContextApp
