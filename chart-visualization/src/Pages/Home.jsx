import React from 'react'
import { CardContainer, HomeContainer } from '../styles/Home.styled'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <HomeContainer  >
        <div className="pt-md-5">
          <div className="container p-5">
            <div className='row'>
              <CardContainer className="col p-5" >
                <Link className='link' to='/School'>
                  <div className="card text-center">
                    <img src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-06/230621-empty-classroom-mn-1530-db6851.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">School Chart</h5>
                    </div>
                  </div>
                </Link>
              </CardContainer>
              <CardContainer className="col p-5 ">
                <Link className='link' to='/College'>
                  <div className="card text-center">
                    <img src="https://moody.utexas.edu/sites/default/files/2021-09/bmc3206_2898_2015.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">College Chart</h5>
                    </div>
                  </div>
                </Link>
              </CardContainer>
              <CardContainer className="col p-5 ">
                <Link className='link' to='/DynamicList'>
                  <div className="card text-center">
                    <img src="https://images.ctfassets.net/lzny33ho1g45/O6Ns6DttUzJym7rhGiD36/9affffb4ec5c115b8f742cd34b663cff/best_to_do_apps.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=1000" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Dynamic List</h5>
                    </div>
                  </div>
                </Link>
              </CardContainer>
            </div>
          </div>

        </div>
      </HomeContainer>
    </>
  )
}

export default Home;