import React, { useState } from 'react'

export default function Creators() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div>
      <section className="flex-1 text-center">
        <div className="max-w-3xl mx-auto py-20 md:py-24 sm:mt-6 md:mt-10 px-4 sm:px-6 md:px-10 lg:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">Turn your passion into money</h1>
          <p className="text-xl max-w-lg text-grey-70 mt-6 mx-auto">
            GoSocial has everything you need as a creator to build community, interact with fans, and earn through your content and expertise.
          </p>
          <div>
            <script type="text/javascript">var submitted = false;</script>
            <iframe title="waitlist" name="hidden_iframe" id="hidden_iframe" className="hidden"
              onLoad={() => { if (submitted) { var form = document.getElementsByClassName('form'); form[0].classList.add('submitted') } }}></iframe>
            <form
              action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSe6iVKW_P-4Bkro0trkVF7OXMWtL_WTV7156B5EfM4-E9jQxA/formResponse"
              method="POST"
              className="form mt-6 sm:mt-8 lg:mt-10 email w-full sm:w-4/5 md:w-auto flex flex-col items-center md:items-start"
              target="hidden_iframe" onSubmit={() => { setSubmitted(true) }}>
              <div className="flex flex-col sm:flex-row w-full">
                <input required name="entry.1984286502" type="text"
                  className="sm:w-1/2 md:w-2/5 sm:mr-2 input border px-6 py-5 border-grey-24 rounded focus:outline-none min-w-0"
                  placeholder="Your Phone*" />
                <input name="entry.1101817258" type="text"
                  className="mt-2 sm:mt-0 sm:w-1/2 md:w-3/5 sm:mr-2 input border px-6 py-5 border-grey-24 rounded focus:outline-none min-w-0"
                  placeholder="Instagram/Facebook/Blog/Website Link" />
                <button type="submit"
                  className="font-bold w-full sm:w-auto input cursor-pointer text-center bg-primary px-6 py-3 sm:py-5 text-white rounded font-title whitespace-no-wrap sm:self-center md:self-start border border-primary"
                >Get Early Access*</button>
              </div>

              <p className="text-primary text-xl max-w-md message text-center mx-auto">Thanks for joining the waitlist.
              We will get in contact soon.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
