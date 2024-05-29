import one from '../assests/one.jpg'
import two from '../assests/two.jpg'
import three from '../assests/three.jpg'


function Products() {
    return(
      <div>
          <div className="products">
              <div className="box">
                  <img src={one}/>
                  <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
              </div>
              <div className="box">
                  <img src={two} alt="villain"/>
                  <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
              </div>
              <div class="box">
                  <img src={three} alt="Designs Club"/>
                  <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
              </div>
          </div>
      </div>
    )
  }


export default Products