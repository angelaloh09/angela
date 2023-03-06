import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './styles/Bookshelf.css'

const Bookshelf = () => {
    return (
        <section className='bookshelf'>
            <Navbar/>
            <div className="bookshelf__container">
                <div className="books title">
                    <h1>Bookshelf</h1>
                    <br></br>
                </div>

                <div className="books long">
                <h3><pre>1.1.23                Bad Blood                                                                      John Carreyrou   </pre></h3>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam officia soluta perspiciatis doloribus iusto! Doloribus aliquid beatae cum, quod cumque, voluptate magni totam recusandae quidem tempore minima obcaecati nisi quisquam molestias sit omnis harum accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolor saepe quis commodi veritatis dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, hic qui, sed delectus quas magni commodi aspernatur corporis quasi inventore deleniti eligendi ratione blanditiis numquam vero? Odio, repellendus cumque illum deserunt velit in corrupti quam reiciendis! Earum, voluptatem fugit. Sint magni dolorem quis veniam soluta ducimus, voluptatibus nulla ex architecto.</p> */}
                </div>

                <div className="books long">
                    <h3><pre>1.1.23                The Idea Factory                                                            Jon Gertner        </pre></h3>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam officia soluta perspiciatis doloribus iusto! Doloribus aliquid beatae cum, quod cumque, voluptate magni totam recusandae quidem tempore minima obcaecati nisi quisquam molestias sit omnis harum accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolor saepe quis commodi veritatis dolorum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere velit consequatur quod consequuntur ab itaque, quis ipsam ut! Ex repellat est et doloribus? Nam error, deserunt aut ut, et, sequi temporibus officia itaque maiores architecto suscipit sint adipisci doloremque? Doloribus temporibus, neque at exercitationem soluta voluptas. Voluptas, mollitia? Ab, dignissimos!</p> */}
                </div>

                <div className="books long">
                <h3><pre>1.1.23                How to Avoid a Climate Disaster                                    Bill Gates           </pre></h3>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam officia soluta perspiciatis doloribus iusto! Doloribus aliquid beatae cum, quod cumque, voluptate magni totam recusandae quidem tempore minima obcaecati nisi quisquam molestias sit omnis harum accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolor saepe quis commodi veritatis dolorum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere velit consequatur quod consequuntur ab itaque, quis ipsam ut! Ex repellat est et doloribus? Nam error, deserunt aut ut, et, sequi temporibus officia itaque maiores architecto suscipit sint adipisci doloremque? Doloribus temporibus, neque at exercitationem soluta voluptas. Voluptas, mollitia? Ab, dignissimos!</p> */}
                </div>

                <div className="books long">
                <h3><pre>1.1.23                Lean In                                                                           Sheryl Sandberg</pre></h3>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam officia soluta perspiciatis doloribus iusto! Doloribus aliquid beatae cum, quod cumque, voluptate magni totam recusandae quidem tempore minima obcaecati nisi quisquam molestias sit omnis harum accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolor saepe quis commodi veritatis dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, hic qui, sed delectus quas magni commodi aspernatur corporis quasi inventore deleniti eligendi ratione blanditiis numquam vero? Odio, repellendus cumque illum deserunt velit in corrupti quam reiciendis! Earum, voluptatem fugit. Sint magni dolorem quis veniam soluta ducimus, voluptatibus nulla ex architecto.</p> */}
                </div>

                <div className="books long">
                <h3><pre>1.1.23                Bad Blood                                                                      John Carreyrou   </pre></h3>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam officia soluta perspiciatis doloribus iusto! Doloribus aliquid beatae cum, quod cumque, voluptate magni totam recusandae quidem tempore minima obcaecati nisi quisquam molestias sit omnis harum accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolor saepe quis commodi veritatis dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, hic qui, sed delectus quas magni commodi aspernatur corporis quasi inventore deleniti eligendi ratione blanditiis numquam vero? Odio, repellendus cumque illum deserunt velit in corrupti quam reiciendis! Earum, voluptatem fugit. Sint magni dolorem quis veniam soluta ducimus, voluptatibus nulla ex architecto.</p> */}
                </div>

            </div>

        </section>
    )
}

export default Bookshelf
