import welcome from "@/assets/images/welcome01.png"
import "./index.less"

const Home = () => {
  return (
    <div className="home card" style={{ height: "100%" }}>
      <p>home</p>
      <img src={welcome} alt="welcome" style={{ height: "200px" }} />
    </div>
  )
}

export default Home
