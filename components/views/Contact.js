import html from "html-literal";
export default () => html`
  <main>
    <h2>CONTACT US</h2>
    <p>
      If you have any questions regarding the app, please complete the form
      below.
    </p>
    <hr />
    <form id="contact-form" action="" method="post">
      <label for="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="First and Last Name"
        required
      />
      <br />
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="username@email.com"
        required
      />
      <br />
      <label for="subject">Subject:</label>
      <input type="text" name="subject" id="subject" placeholder="Subject" />
      <br />
      <div id="emailMsg">
        <label for="msg">Your message:</label>
        <textarea name="msg" id="msg" cols="30" rows="5"></textarea>
      </div>
    </form>
  </main>
`;
