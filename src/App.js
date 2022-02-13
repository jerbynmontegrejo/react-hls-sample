import React from "react";
import ReactHlsPlayer from "react-hls-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component{
  state = {
    link: "https://d1s1vrufv90s0j.cloudfront.net/file_example_MP4_1920_18MG.m3u8"
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onLoadStream = (link) => {
    return (
    <ReactHlsPlayer
    src={link}
    autoPlay={false}
    controls={true}
    width="100%"
    height="auto"
  />
  )
  }
  
  render() {
    return(
      <React.Fragment>
      <div className="container">
        <ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-one-tab" data-bs-toggle="pill" data-bs-target="#pills-one" type="button" role="tab" aria-controls="pills-one" aria-selected="true">One Sample</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-multiple-tab" data-bs-toggle="pill" data-bs-target="#pills-multiple" type="button" role="tab" aria-controls="pills-multiple" aria-selected="false">Multiple Sample</button>
          </li>
        </ul>
        <div class="tab-content d-flex " id="pills-tabContent">
          <div class="tab-pane fade show active row justify-content-center" id="pills-one" role="tabpanel" aria-labelledby="pills-one-tab">
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

            <div class="tab-pane fade row justify-content-center" id="pills-multiple" role="tabpanel" aria-labelledby="pills-multiple-tab">
              <div className="w-90">
              {this.onLoadStream("https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8")}
              {this.onLoadStream("https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8")}
              {this.onLoadStream("https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8")}
              {this.onLoadStream("https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8")}
              {this.onLoadStream("https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8")}
              {this.onLoadStream("http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8")}
              {this.onLoadStream("http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8")}
              {this.onLoadStream("http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8")}
              {this.onLoadStream("http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8")}
          </div>
        </div>
      </div>
      
    </div>
    </React.Fragment>
    )
  }
}

export default App;
