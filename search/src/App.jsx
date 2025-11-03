import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Like from './imgs/Vector (7).png'
import Korzina from './imgs/Vector (8).png'
import Iphone from './imgs/iPhone-13-Pro-Max-silver-1000x1000 1.png'
import Glass from './imgs/22459-iwt 1.png'
import Silicone from './imgs/mellow-yellow-1 1.png'
import Leather from './imgs/Image.png'

import Byz from './imgs/Image (1).png'
import Earpods from './imgs/Image (2).png'
import Earpods2 from './imgs/Image (3).png'

import Stars from './imgs/Vector (9).png'

import Airpods from './imgs/Image (4).png'
import Gerlax from './imgs/Image (5).png'
import Borofone from './imgs/Image (6).png'

import Vk from './imgs/VK.png'
import Insta from './imgs/Instagram (1).png'

import imgKorzina from './imgs/p.png'
import Close from './imgs/close.png'

// import korz from './imgs/Image (7).png'
function App() {
  let slideIndex = 1
  showSlides(slideIndex)

  function plusSlides(n){
    showSlides(slideIndex += n)
  }

  function currentSlide(n){
    showSlides(slideIndex = n)
  }

  function showSlides(n){
    let i
    let sildes = document.getElementsByClassName('mySlides')
    let dots  = document.getElementsByClassName('dot')
    if(n > sildes.length){
      slideIndex = 1

    }
    if(n < 1){
      slideIndex = sildes.length
    }
    
  }

  const [IsModalOpen3, setIsModalOpen3] = useState(false)
  const [IsModalOpen2, setIsModalOpen2] = useState(false)
  const [IsModalOpen, setIsModalOpen] = useState(false)
  let openModal = () => setIsModalOpen(true)
  let closeModal = () => setIsModalOpen(false)
  let openModal2 = () => setIsModalOpen2(true)
  let closeModal2 = () => setIsModalOpen2(false)
  let openModal3 = () => setIsModalOpen3(true)
  let closeModal3 = () => setIsModalOpen3(false)

  return (
    <>
      {IsModalOpen3 && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={Close} alt="" onClick={closeModal3} className='closePage' />
            {/* <div className="mobileTovar">
              <img src={korz} alt="" />
              <div className="u">
                <h6>Глянец iPhone 12 6.1</h6>
                <p>2 927 ₸</p>
              </div>
              <p className='skidka'>3 527 ₸-32%</p>

            </div> */}


          </div>
        </div>
      )}


      {IsModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={Close} alt="" onClick={closeModal} className='closePage' />
            <img src={imgKorzina} alt="" className='kor' />
            <h6>Корзина пуста! Но кажется, это можно исправить!</h6>
            <button onClick={() => window.location.href = '/'}>В каталог товаров!</button>

          </div>
        </div>
      )}
      {IsModalOpen2 && (
        <div className="modal-overlay" onClick={closeModal2}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={Close} alt="" onClick={closeModal2} className='closePage' />
            <h6>Здесь,ваши избранные товары!</h6>

          </div>
        </div>
      )}
      <div className="slideshow-container">
        <div className="mySlides">
          <a href="#/" onClick={openModal3}>
            <div className="case">
              <img src={Glass} alt="" />
              <h3>Стеклянные</h3>
            </div>
          </a>
        </div>
        <div className="mySlides">
          <a href="#/" onClick={openModal3}>
            <div className="case">
              <img src={Glass} alt="" />
              <h3>Стеклянные</h3>
            </div>
          </a>
        </div>
        <div className="mySlides">
          <a href="#/" onClick={openModal3}>
            <div className="case">
              <img src={Glass} alt="" />
              <h3>Стеклянные</h3>
            </div>
          </a>
        </div>
        <a href="" className='prev' onClick={plusSlides(-1)}></a>
        <a href="" className='next' onClick={plusSlides(1)}></a>
      </div>
      <div >
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
      <div className="container">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="header1">
            <a href="" id='products'>QPICK</a>
          </div>

          <div className="header2">
            <input type="text" placeholder='Я хочу...' />

          </div>
          <div className="header3">
            <a href="#/" onClick={openModal2}><img src={Like} alt="" /></a>
            <a href="#/" onClick={openModal}><img src={Korzina} alt="" /></a>
          </div>

        </header>
        <div className="headerNoneInput">
          <input type="text" placeholder='Я хочу...' />
        </div>

        <div className="slider">
          <div className="mini">
            <h2 className='typewriter'>Аксессуары для <br />
              Iphone 13 Pro Max</h2>
            <img src={Iphone} alt="" />
          </div>
        </div>
        <h2>Чехлы</h2>
        <div className="cases">
          <a href="#/" onClick={openModal3}>
            <div className="case">
              <img src={Glass} alt="" />
              <h3>Стеклянные</h3>
            </div>
          </a>
          <a href="">
            <div className="case">
              <img src={Silicone} alt="" />
              <h3>Силиконовые</h3>
            </div>
          </a>
          <a href="">
            <div className="case">
              <img src={Leather} alt="" />
              <h3>Кожанные</h3>
            </div>
          </a>
        </div>
        <h2>Наушники</h2>
        <div className="headphones">
          <a href="">
            <div className="headphone">
              <img src={Byz} alt="" />
              <div className="u">
                <h3>Apple BYZ S852I</h3>
                <p>500$</p>
              </div>
              <div className="k">
                <img src={Stars} alt="" />
                <p>4.7</p>
              </div>

            </div>
          </a>
          <a href="">
            <div className="headphone">
              <img src={Earpods} alt="" />
              <div className="u">
                <h3>Apple EarPods</h3>
                <p>500$</p>
              </div>
              <div className="k">
                <img src={Stars} alt="" />
                <p>4.5</p>
              </div>

            </div>
          </a>
          <a href="">
            <div className="headphone">
              <img src={Earpods} alt="" />
              <div className="u">
                <h3>Apple EarPods</h3>
                <p>500$</p>
              </div>
              <div className="k">
                <img src={Stars} alt="" />
                <p>4.3</p>
              </div>

            </div>
          </a>
        </div>
        <h2>Беспроводные Наушники</h2>
        <div className="headphones">
          <a href="">
            <div className="headphone">
              <img src={Airpods} alt="" />
              <div className="u">
                <h3>Apple AirPods</h3>
                <p>500$</p>
              </div>
              <div className="k">
                <img src={Stars} alt="" />
                <p>4.7</p>
              </div>

            </div>
          </a>
          <a href="">
            <div className="headphone">
              <img src={Gerlax} alt="" />
              <div className="u">
                <h3>GERLAX GH-04</h3>
                <p>500$</p>
              </div>
              <div className="k">
                <img src={Stars} alt="" />
                <p>4.5</p>
              </div>

            </div>
          </a>
          <a href="">
            <div className="headphone">
              <img src={Borofone} alt="" />
              <div className="u">
                <h3>BOROFONE BO4</h3>
                <p>500$</p>
              </div>
              <div className="k">
                <img src={Stars} alt="" />
                <p>4.3</p>
              </div>

            </div>
          </a>
        </div>

        <footer>
          <div className="left">
            <h5>QPICK</h5>

          </div>
          <div className="center">
            <ul>
              <li><a href="">Избранное</a></li>
              <li><a href="">Корзина</a></li>
              <li><a href="">Контакты</a></li>
            </ul>
          </div>


          <div className="right">
            <div className="k">
              <a href=""><img src={Vk} alt="" /></a>
              <a href=""><img src={Insta} alt="" /></a>
            </div>

          </div>


        </footer>


      </div>
    </>
  )
}

export default App
