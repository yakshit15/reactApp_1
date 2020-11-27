import night from './images/night.jpeg';
import morning from './images/morning.jpeg';
import afternoon from './images/afternoon.jpeg';
import evening from './images/evening.jpeg';

function App() {
  const imgStyle = {
    width: '50%',
    height: '100 px',
    pointerEvents: 'none'
  }
  const textStyle = {
    position: 'absolute',
    fontSize: '44px',
    bottom: '230px',
    left: '142px',
  }
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
  let currentTime = new Date().getHours();
  console.log(currentTime);
  let message, img;
  if (currentTime >= 4 && currentTime <= 12) {
    message = 'Morning'
    img = morning
  }
  else if (currentTime >= 1 && currentTime <= 16) {
    message = 'Afternoon';
    img = afternoon
  }
  else if ((currentTime >= 16 && currentTime <= 21)) {
    message = 'Evening';
    img = evening
  }
  else if ((currentTime >= 21 && currentTime <= 3)) {
    message = 'Night';
    img = night
  }

  return (
    <div style={style}>
      <img src={img} style={imgStyle} alt="logo" />
      <p style={textStyle}>
        Good {message}
      </p>
    </div>
  );
}

export default App;
