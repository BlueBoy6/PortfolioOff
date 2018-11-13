import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {topMsgAction} from "../../redux/actions/index"



import "../../style/grid-config.scss"
import {resizingVignets, scrollBoosterConfig} from "../custom-functions/functions-design"
import {popUpAnimIn, popUpAnimOut} from "../custom-functions/animations"

//import {actionName} from "../actions"

class Productions extends Component {

  componentWillMount(){
    this.props.topMsgAction("Productions")
  }
  componentDidMount(){
    resizingVignets()
    scrollBoosterConfig('.render-page','.grid')
    popUpAnimIn(".vignet")
  }


  render() {
      
    window.onresize = function() {
      resizingVignets()
    }


    return (
        <div className="grid">
          <div className="grid-container">
          <div className="grid-line-2">
            <div className="gc-line-col">
              <div className="gc-col-6">
                <div className="gc-line-col ">
                
                  <div className="gc-col-6 p-col">
                    <div className="vignet">
                      <div className="title-vignet">VIGNETA</div>
                    </div>
                  </div>
                  <div className="gc-col-6">
                    <div className="gc-line-col-midH p-col">
                        <div className="vignet">
                          <div className="title-vignet">VIGNETA</div>
                        </div>
                    </div>
                    <div className="gc-line-col-midH p-col">
                        <div className="vignet">
                          <div className="title-vignet">VIGNETA</div>
                        </div>
                    </div>
                  </div>
              </div>
              </div>
    
    
              <div className="gc-col-6">
                  <div className="gc-line-col-midH p-col">
                        <div className="vignet">
                          <div className="title-vignet">VIGNETA</div>
                        </div>
                  </div>
                  <div className="gc-line-col-midH p-col">
                        <div className="vignet">
                          <div className="title-vignet">VIGNETA</div>
                        </div>
                  </div>
              </div>
            </div>
          </div>
    

    
            <div className="grid-line-1">
                <div className="gc-line-col">
                  <div className="gc-col-3">
                    <div className="gc-line-col p-col">
                      <div className="vignet">
                          <div className="title-vignet">VIGNETA</div>
                        </div>
                    </div>
                  </div>
                  <div className="gc-col-6">
                    <div className="gc-line-col p-col">
                      <div className="vignet">
                        <div className="title-vignet">VIGNETA</div>
                      </div>
                    </div>
                  </div>
                  <div className="gc-col-3">
                      <div className="gc-line-col p-col">
                        <div className="vignet">
                          <div className="title-vignet">VIGNETA</div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
    
    
          <div className="grid-line-2">
              <div className="gc-line-col">
                <div className="gc-col-6">
                  <div className="gc-line-col-midH p-col">
                    <div className="vignet">
                      <div className="title-vignet">VIGNETA</div>
                    </div>
                  </div>
                  <div className="gc-line-col-midH">
                    <div className="gc-col-6 p-col">
                      <div className="vignet">
                          <div className="title-vignet">VIGNETA</div>
                        </div>
                    </div>
                    <div className="gc-col-6  p-col">
                      <div className="vignet">
                          <div className="title-vignet">VIGNETA</div>
                        </div>
                    </div>
                  </div>
                </div>
    
                <div className="gc-col-6 ">
                  <div className="gc-line-col">
                  <div className="gc-col-6 p-col">
                    <div className="vignet">
                      <div className="title-vignet">VIGNETA</div>
                    </div>
                  </div>
    
                  <div className="gc-col-6">
                    <div className="gc-line-col-midH p-col">
                        <div className="vignet">
                          <div className="title-vignet">VIGNETA</div>
                        </div>
                    </div>
                    <div className="gc-line-col-midH p-col">
                        <div className="vignet">
                          <div className="title-vignet">VIGNETA</div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
      </div>
    )
    
  }
}



const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({topMsgAction}, dispatch),
});

const mapStateToProps = (state) => {
    return {
      topMsgUrlSplitedReducer : state.topMsgUrlSplitedReducer,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Productions);