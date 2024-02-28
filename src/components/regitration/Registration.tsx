import './Registration.css'

export default function Registration() {
  return (
      <div>
        <h1>Register</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required></input>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required></input>
          <button type="submit">Register</button>
        </form>
      </div>
  )
}