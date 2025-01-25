import './Card.css'

function Card({ content, image1, image2, image3, image4, isDark }) {
  return (
    <div className="card">
      <div className={`cardBox1 ${isDark ? 'darkbox1' : 'lightbox1'}`}>
        <img src={image1} alt="First" className="image1" />
        <img src={image2} alt="Second" className="image2" />
        </div>
      <div className={`cardBox2 ${isDark ? 'darkbox2' : 'lightbox2'}`}>  
        <img src={image3} alt="Third" className="image3" />
        <img src={image4} alt="Fourth" className="image4" />
      </div>
      <span className="content">{content}</span>
    </div>
  );
}


export default Card;