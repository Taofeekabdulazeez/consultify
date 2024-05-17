import "./profile.css";

export default function Profile() {
  return (
    <div className="container">
      <div className="profile">
        <img src="/avatar.png" alt="" />
        <button className="change">Change Picture</button>
        <button className="delete">Delete Picture</button>
      </div>
      <div className="aside">
        <form className="form">
          <div className="form-input">
            <label>First Name:</label>
            <input
              className="name"
              type="text"
              name="FirstName"
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-input">
            <label>Last Name:</label>
            <input
              className="name"
              type="text"
              name="LastName"
              placeholder="Enter your last name"
            />
          </div>
          <div className="form-input">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="PhoneNumber"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-input">
            <label>Email Address:</label>
            <input
              type="email"
              name="Email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-input">
            <label>Country:</label>
            <input
              type="text"
              name="Country"
              placeholder="Enter your country"
            />
          </div>
          <div className="form-input">
            <label>City:</label>
            <input type="text" name="City" placeholder="Enter your city" />
          </div>
          <div className="form-input ">
            <label>Create Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create a password"
            />
          </div>
          <div className="form-input ">
            <label>Create Security Key:</label>
            <input
              type="password"
              name="security"
              placeholder="Create a Security Key"
            />
          </div>
        </form>
      </div>
      <button className="save">Save Changes</button>
      {/* <label htmlFor="FirstName">First Name: </label>
          <input className="name" type="text" id="FirstName" name="FirstName" />
          <label htmlFor="LastName">Last Name: </label>
          <input className="name" type="text" id="LastName" name="LastName" />
          <label htmlFor="PhoneNumber">Phone Number: </label>
          <input type="tel" id="PhoneNumber" name="PhoneNumber" />
          <label htmlFor="Email">Email Address: </label>
          <input type="email" id="Email" name="Email" />
          <label htmlFor="Country">Country: </label>
          <input type="text" id="Country" name="Country" />
          <label htmlFor="City">City: </label>
          <input type="text" id="City" name="City" />
          <label htmlFor="password">Create Password: </label>
          <input type="password" id="password" name="password" /> */}

      {/* <button className="edit">Cancel Changes</button> */}
    </div>
  );
}
