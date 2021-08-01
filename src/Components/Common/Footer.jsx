import React, {Component} from 'react'

class Footer extends Component{

    render(){

        return(

            <div>
                
              <section id="footer">
                  <div className="container">
                      <div className="row">                    
                          <div className="col-md-4">
                            <div className="footer">
                              <div className="footerOne">
                              <i class="fas fa-handshake"></i>
                              <h3>Business Commonication</h3>
                              <p>Lorem ipsum dolor sit amet consectetur
                                   adipisicing elit. Alias, ad? Ab et
                                    nobis veniam rerum possimus quae
                                     repellat omnis modi?</p>
                              </div>
                          </div>
                          </div>
                          <div className="col-md-4">
                            <div className="footer">
                              <div className="footerOne">
                              <i class="fab fa-accessible-icon"></i>
                              <h3>About Business</h3>
                              <p>Lorem ipsum dolor sit amet consectetur
                                   adipisicing elit. Alias, ad? Ab et
                                    nobis veniam rerum possimus quae
                                     repellat omnis modi?</p>
                              </div>
                          </div>
                          </div>
                          <div className="col-md-4">
                            <div className="footer">
                              <div className="footerOne">
                              <i class="fas fa-adjust"></i>
                              <h3>Support Business</h3>
                              <p>Lorem ipsum dolor sit amet consectetur
                                   adipisicing elit. Alias, ad? Ab et
                                    nobis veniam rerum possimus quae
                                     repellat omnis modi?</p>
                              </div>
                          </div>
                          </div>
                      </div>
                      <div className="lastFooter">
                          <p>All &copy;reserved by Freelancer <span>Ahsan</span></p>
                      </div>
                  </div>
              </section>

            </div>
        )
    }
}

export default Footer;