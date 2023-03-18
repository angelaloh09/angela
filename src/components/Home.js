import React from 'react'
import Navbar from './Navbar'
import bookshelf_img from './assets/bookshelf.png'
import { Link } from 'react-router-dom'
// import React,{useState} from 'react'
import './styles/Home.css'

const Home = () => {
    return (
        <section className='home'>

            <div className="home__box">
                <div className="home__content">
                    <h1 className='content__header'>angela loh</h1>
                    <nav>
                        <ul>
                            <li><Link to='/bookshelf'>Bookshelf</Link></li>
                            <li><Link to='/thoughts'>Thoughts</Link></li>
                            <li><Link to='/cooking'>Cooking</Link></li>
                        </ul>
                    </nav>
                  
                </div>

                <div className="home__img">
                    <img src={bookshelf_img} alt="bookshelf"/>
                </div>

            </div>


        </section>
    )
}

export default Home
