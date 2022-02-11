import React from "react";
import ReactHlsPlayer from "react-hls-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// export default function App() {
//   const [hlsUrl, setHlsUrl] = useState(
//     "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
//   );

//   return (
//     <div className="row justify-content-center">
//       <input
//         type="text"
//         className="form-control w-90 m-2 my-4"
//         placeholder="enter stream url"
//         value={hlsUrl}
//         aria-label="hls-url"
//         aria-describedby="set-hls-url"
//         onChange={(e) => setHlsUrl(e.target.value)}
//       />
//       <div className="w-90">
//       <ReactHlsPlayer
//         src={hlsUrl}
//         autoPlay={false}
//         controls={true}
//         width="100%"
//         height="auto"
//       />
//       </div>
//     </div>
//   );
// }
class App extends React.Component{
  state = {
    link: "https://d1s1vrufv90s0j.cloudfront.net/file_example_MP4_1920_18MG.m3u8"
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  render() {
    return(
      <div className="row justify-content-center">
      <input
        type="text"
        className="form-control w-90 m-2 my-4"
        placeholder="enter stream url"
        value={this.state.link}
        aria-label="hls-url"
        id="link"
        aria-describedby="set-hls-url"
        onChange={this.handleChange}
      />
      <div className="w-90">
      <ReactHlsPlayer
        src={this.state.link}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
      </div>
    </div>
    )
  }
}

export default App;