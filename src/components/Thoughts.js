import React from 'react'
import Navbar from './Navbar'
import './styles/Thoughts.css'


const Thoughts = () => {
    return (
        
        <section className='works'>
            <Navbar/>
            <div className="works__container">
                <div className="cards title">
                    <h1>Thoughts</h1>
                    <br></br>
                </div>

                <div className="cards long">
                <h3><pre>1.1.23                    Why do LEDs use less energy than incandescent bulbs?         </pre></h3>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam officia soluta perspiciatis doloribus iusto! Doloribus aliquid beatae cum, quod cumque, voluptate magni totam recusandae quidem tempore minima obcaecati nisi quisquam molestias sit omnis harum accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolor saepe quis commodi veritatis dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, hic qui, sed delectus quas magni commodi aspernatur corporis quasi inventore deleniti eligendi ratione blanditiis numquam vero? Odio, repellendus cumque illum deserunt velit in corrupti quam reiciendis! Earum, voluptatem fugit. Sint magni dolorem quis veniam soluta ducimus, voluptatibus nulla ex architecto.</p> */}
                </div>
                
                <div className="cards long">
                <h3><pre>1.1.23                    The Brief History of Cellular Data.                                               </pre></h3>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam officia soluta perspiciatis doloribus iusto! Doloribus aliquid beatae cum, quod cumque, voluptate magni totam recusandae quidem tempore minima obcaecati nisi quisquam molestias sit omnis harum accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolor saepe quis commodi veritatis dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, hic qui, sed delectus quas magni commodi aspernatur corporis quasi inventore deleniti eligendi ratione blanditiis numquam vero? Odio, repellendus cumque illum deserunt velit in corrupti quam reiciendis! Earum, voluptatem fugit. Sint magni dolorem quis veniam soluta ducimus, voluptatibus nulla ex architecto.</p> */}
                </div>

                

            </div>

        </section>
    )
}

export default Thoughts
