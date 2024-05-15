import "./profile.css";

export default function Profile() {
  return (
    <div className="container">
      <div className="profile">
        <img src="/avatar.png" alt="" />
        <button className="change">Change Picture</button>
        <button className="delete">Delete Picture</button>
      </div>
      <form className="form">
        <label htmlFor="FullName">Full Name: </label>
        <input type="text" id="FullName" name="FullName" />
        <label htmlFor="PhoneNumber">Phone Number: </label>
        <input type="tel" id="PhoneNumber" name="PhoneNumber" />
        <label htmlFor="Email">Email Address: </label>
        <input type="email" id="Email" name="Email" />
        <label htmlFor="Country">Country: </label>
        <input type="text" id="Country" name="Country" />
      </form>
      <button className="save">Save Changes</button>
    </div>
  );
}
