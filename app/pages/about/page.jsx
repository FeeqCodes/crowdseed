import React from 'react'

const AboutPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(at 80% 100%, rgb(0,80,255) 0, transparent 100%),radial-gradient(at 20% 100%, rgb(185,35,255) 0, transparent 100%)",
      }}
      className="h-auto"
    >
      <div className="m-auto w-[95vw]  max-w-[1280px]">
        <div className="py-10 w-[60%] m-auto text-white">
          <h2 className="text-[64px] text-[#222] font-extrabold text-center">
            About Us
          </h2>
          <div className="mt-20">
            <h3 className=" font-semibold text-white text-[22px]">
              Our Mission: Humanity in Action
            </h3>
            <p className="text-[18px] ">
              We are driven by a singular mission – to transform lives and
              foster resilience in the face of adversity. We support projects
              that uplift communities, aid disaster-stricken regions, provide
              essential services, and champion causes that resonate with the
              principles of compassion and empathy.
            </p>
          </div>
          <div className="mt-20">
            <h3 className=" font-semibold text-white text-[22px]">
              Empowering Humanitarian Initiatives
            </h3>
            <p className="text-[18px]">
              Every project featured on our platform is a story of hope,
              resilience, and the human spirit. From grassroots organizations to
              global initiatives, we&aposre committed to empowering those who
              are making a tangible difference in the lives of others.
            </p>
          </div>

          <div className="mt-20">
            <h3 className=" font-semibold text-white text-[22px]">
              Trust in Impact
            </h3>
            <p className="text-[18px]">
              Transparency is the cornerstone of our ethos. We meticulously vet
              every humanitarian initiative featured on our platform to ensure
              integrity, credibility, and impact. Donors can confidently
              contribute, knowing their support directly fuels life-changing
              endeavors.
            </p>
          </div>
          <div className="mt-20">
            <h3 className=" font-semibold text-white text-[22px]">
              Together, We Make a Difference
            </h3>
            <p className="text-[18px]">
              We invite you to join us in this noble journey. Whether you&aposre
              a compassionate supporter, a visionary leader behind a cause, or
              someone seeking to contribute, your involvement paves the way for
              transformative change. Let&aposs stand together, hand in hand, and
              make a lasting impact on the lives of those in need. Thank you for
              being a part of our compassionate mission. With heartfelt
              gratitude,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage