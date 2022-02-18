export default function () {
  let update = "10/02/2022";
  return (
    <div className="bg-white dark:bg-slate-700">
      <div className="container mx-auto px-4">
        <div className="max-w-prose mx-auto py-8 prose-h1:font-semibold dark:prose-h1:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-h2:text-2xl prose-h2:md:text-4xl dark:prose-a:text-gray-100 prose-a:text-gray-600  hover:prose-a:text-sky-500 dark:hover:prose-a:text-sky-300 hover:prose-a:underline">
          <h1 className="md:text-6xl text-4xl">Terms Of Service</h1>
          <p>Last update : {update}</p>
          <hr className="mt-5" />
          <div className="mt-10 dark:text-white">
            We recommended you read terms of service and{" "}
            <a href="/en-us/privacy">privacy policy</a> carefully before you
            visit our website
            <br />
            <br />
            By visit this website, you agree with our terms of service and{" "}
            <a href="/en-us/privacy">privacy policy</a> but if you not agree
            with terms of service and{" "}
            <a href="/en-us/privacy">privacy policy</a> you may need to close
            our website.
            <br />
            <br />
            This terms of service is only apply for this website (
            <a href="https://ronnapat.com">ronnapat.com</a>) and Ronnapat Blog (
            <a href="https://blog.ronnapat.com">blog.ronnapat.com</a>) and not
            apply to other website that link to
            <br />
            <br />
            You may contact us if you have any additional questions at{" "}
            <a href="mailto:me@ronnapat.com" className="underline">
              me@ronnapat.com
            </a>{" "}
            or{" "}
            <a href="/contact" className="underline">
              Contact page
            </a>
            .
          </div>
          <div className="mt-14" id="conditions-of-use">
            <h2>
              <a href="#conditions-of-use" className="tag inline-flex">
                Conditions of Use
              </a>
            </h2>
            <p className="mt-10">
              We will provide their services to you, which are subject to the
              conditions stated below in this terms. Every time you visit this
              website, submit form, you accept the following terms. This is why
              we recommended you to read them carefully.
            </p>
          </div>
          <div className="mt-14" id="changes-of-privacy-policy">
            <h2>
              <a href="#changes-of-privacy-policy" className="tag inline-flex">
                Privacy Policy
              </a>
            </h2>
            <p className="mt-10">
              After you read this terms and before you visit our website we
              recommended you to read{" "}
              <a href="/en-us/privacy">privacy policy</a> carefully. It will
              help you to understand more about our website (Ex. What data we
              collect)
            </p>
          </div>
          <div className="mt-14" id="copyright">
            <h2>
              <a href="#copyright" className="tag inline-flex">
                Copyright
              </a>
            </h2>
            <p className="mt-10">
              Content published on this website (digital downloads, images,
              texts, graphics, logos) is the property of Ronnapat Srivoravilai
              and/or its content creators and protected by international
              copyright laws. The entire compilation of the content found on
              this website is the exclusive property of Ronnapat Srivoravilai,
              with copyright authorship for this compilation by Ronnapat
              Srivoravilai but if you want to copy you need to contact me first
              at <a href="mailto:me@ronnapat.com">me@ronnapat.com</a> or{" "}
              <a href="/contact">Contact page</a>.
              <br />
              <br />© Copyright 2020 - 2022 | Ronnapat Srivoravilai
            </p>
          </div>
          <div className="mt-14" id="governed-law">
            <h2>
              <a href="#governed-law" className="tag inline-flex">
                Governed law
              </a>
            </h2>
            <p className="mt-10">
              Any claim relating to the ronnapat.com shall be governed law of
              Thailand
            </p>
          </div>
          <div className="mt-14" id="changes-of-terms-of-service">
            <h2>
              <a
                href="#changes-of-terms-of-service"
                className="tag inline-flex"
              >
                Changes of terms of service?
              </a>
            </h2>
            <p className="mt-10">
              We may change this terms of service from time to time, You may get
              update from us if we update our privacy policy by{" "}
              <a href="/en-us/#sub" className="underline">
                subscribe
              </a>
            </p>
          </div>
          <div className="mt-14 mb-10" id="contact-for-more-information">
            <h2>
              <a
                href="#contact-for-more-information"
                className="tag inline-flex"
              >
                Contact for more information
              </a>
            </h2>
            <p className="mt-10">
              Contact me for more information :{" "}
              <a href="mailto:me@ronnapat.com" className="underline">
                me@ronnapat.com
              </a>{" "}
              or{" "}
              <a className="underline" href="/contact">
                Contact page
              </a>
            </p>
          </div>
          <h3 className="text-2xl text-gray-600 dark:text-gray-200">
            Last update : {update}
          </h3>
        </div>
      </div>
    </div>
  );
}
