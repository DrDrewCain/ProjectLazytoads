import React from "react";
import Navigation from "../../app/components/Navigation";
import RootLayout from "../../app/layout";

const AboutMe: React.FC = () => {
  return (
    <RootLayout>
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-teal-500 to-purple-500">
        <Navigation />
      </header>

      <main className="bg-gray-100 flex-1 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4"></h2>
          <p
            className="text-black text-base text-center border-b border-gray-300 bg-white bg-opacity-50 pb-6 pt-8 backdrop-blur-2xl font-bold tracking-wider rounded-xl"
            style={{
              backgroundImage: "linear-gradient(to right, teal, purple)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hey! I&apos;m a full-stack developer and I love to build things.
              I&apos;m currently working on a few projects, including this one.
              I&apos;m passionate about learning new things and I&apos;m always
              looking for new opportunities. I&apos;m currently looking for a
              full-time position as a software engineer. If you&apos;re
              interested in working with me, please reach out to me on{" "}
              <a
                href="https://www.linkedin.com/in/msturman00/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              or send me a message on the contact page
            </p>
        </div>
      </main>
    </div>
    </RootLayout>
  );
};

export default AboutMe;