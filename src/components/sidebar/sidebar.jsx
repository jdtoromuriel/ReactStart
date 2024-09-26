import './sidebar.scss'
const sidebar = () => {
  return (
    <div className="sidebar">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div className="fakeimg">Fake Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>

      <h3>Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>

      <ul className="nav">
        <li><a className="nav-link active" href="#">Active</a></li>
        <li><a className="nav-link" href="#">Link</a></li>
        <li><a className="nav-link" href="#">Link</a></li>
        <li><a className="nav-link disabled" href="#">Disabled</a></li>
      </ul>
    </div>
  )
}

export default sidebar