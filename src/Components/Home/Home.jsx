import React, {Component} from 'react'


class Home extends Component{

    render(){

        return(

            <div>

              <section id="home">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="home">
                        <h1>Home</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

               <section id="card">
                 <div className="container">
                   <div className="row">
                     <div className="col-md-4">
                       <div className="card">
                       <img src="./image/pic5.jpg" className='img-fluid' alt=""/>                                     
                       <div className="card-body">
                         <div className="card-title">
                           <h4>Card One</h4>
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                              Molestiae id enim dignissimos delectus. Distinctio,
                               at necessitatibus. Iusto, libero delectus! Aspernatur?</p>
                               <button type='button' className='btn btn-primary'>Loren More</button>
                         </div>
                       </div>
                       </div>
                       </div>  
                     <div className="col-md-4">
                       <div className="card">
                       <img src="./image/pic5.jpg" className='img-fluid' alt=""/>                                     
                       <div className="card-body">
                         <div className="card-title">
                           <h4>Card One</h4>
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                              Molestiae id enim dignissimos delectus. Distinctio,
                               at necessitatibus. Iusto, libero delectus! Aspernatur?</p>
                               <button type='button' className='btn btn-primary'>Loren More</button>
                         </div>
                       </div>
                       </div>
                       </div>  
                     <div className="col-md-4">
                       <div className="card">
                       <img src="./image/pic5.jpg" className='img-fluid' alt=""/>                                     
                       <div className="card-body">
                         <div className="card-title">
                           <h4>Card One</h4>
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                              Molestiae id enim dignissimos delectus. Distinctio,
                               at necessitatibus. Iusto, libero delectus! Aspernatur?</p>
                               <button type='button' className='btn btn-primary'>Loren More</button>
                         </div>
                       </div>
                       </div>
                       </div>  
                   </div>
                 </div>
               </section>

                 <section id="form">
                   <div className="container">
                     <div className="row">
                       <div className="col-md-12">                                                      
                        <form>
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                       </div>
                     </div>
                   </div>
                 </section>

            </div>
        )
    }
}

export default Home