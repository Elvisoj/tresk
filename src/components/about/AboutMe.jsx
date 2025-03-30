import assets from '../../assets/assets'
import '../../styles/about.css'

function AboutMe() {
  return (
    <div className='aboutMe'>
      <h1 className="title">About Me
        <img src={assets.FlowerBg} alt="developer" />
      </h1>
      <p>Schrödinger formulated wave mechanics, an alternative to Heisenberg’s matrix mechanics. In 1926, he derived the Schrödinger equation, which describes how the quantum state of a system evolves over time, His Schrödinger’s cat thought experiment illustrated the paradox of quantum superposition, questioning how quantum states collapse upon measurement.</p>
      <a href="#"> Learn more</a>
    </div>
  )
}

export default AboutMe
