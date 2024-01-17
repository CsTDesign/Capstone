import html from "html-literal";
export default () => html`
  <main>
    <h2>CONTACT US</h2>
    <p>
      If you have any questions regarding the app, please complete the form
      below.
    </p>
    <hr />
    <form
      id="fs-frm"
      name="simple-contact-form"
      accept-charset="utf-8"
      action=""
      method="post"
    >
      <fieldset id="fs-frm-inputs">
        <label for="fullName">Full Name</label>
        <input
          type="text"
          name="name"
          id="fullName"
          placeholder="First and Last"
          required=""
          data-nlok-ref-guid="c08e98eb-04a5-4f04-eeac-6ea083a8a6d4"
          autocomplete="off"
        />
        <label for="emailAddress">Email Address</label>
        <input
          type="email"
          name="_replyto"
          id="emailAddress"
          placeholder="email@email.com"
          required=""
        />
        <label for="message">Message</label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Type your message here"
          required=""
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <input
        type="submit"
        value="Submit"
        data-nlok-ref-guid="bfc020de-2939-468d-f2d8-1e063d40e5d4"
      />
    </form>
  </main>
`;
