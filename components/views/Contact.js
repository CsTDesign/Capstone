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
      action="https://formspree.io/f/{form_id}"
      method="post"
    >
      <fieldset id="fs-frm-inputs">
        <label for="full-name">Full Name</label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required=""
          data-nlok-ref-guid="c08e98eb-04a5-4f04-eeac-6ea083a8a6d4"
          autocomplete="off"
        />
        <div id="norton-idsafe-field-styling-divId">
          <img
            id="norton-idsafe-field-logo-imgId"
            src="chrome-extension://lcccdlklhahfmobgpnilndimkankpnkg/images/npw-badge-icon-locked.svg"
          />
        </div>
        <label for="email-address">Email Address</label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
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
