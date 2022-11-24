import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white"
        >
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-gray-900">
              What are the different ways to manage a state in a React
              application?
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <p className="text-gray-900">
              There are four main types of state you need to properly manage in
              your React apps: Local state Global state Server state URL state
              Let's cover each of these in detail: Local (UI) state – Local
              state is data we manage in one or another component. Local state
              is most often managed in React using the useState hook. For
              example, local state would be needed to show or hide a modal
              component or to track values for a form component, such as form
              submission, when the form is disabled and the values of a form’s
              inputs. Global (UI) state – Global state is data we manage across
              multiple components. Global state is necessary when we want to get
              and update data anywhere in our app, or in multiple components at
              least. A common example of global state is authenticated user
              state. If a user is logged into our app, it is necessary to get
              and change their data throughout our application. Sometimes state
              we think should be local might become global. Server state – Data
              that comes from an external server that must be integrated with
              our UI state. Server state is a simple concept, but can be hard to
              manage alongside all of our local and global UI state. There are
              several pieces of state that must be managed every time you fetch
              or update data from an external server, including loading and
              error state. Fortunately there are tools such as SWR and React
              Query that make managing server state much easier. URL state –
              Data that exists on our URLs, including the pathname and query
              parameters. URL state is often missing as a category of state, but
              it is an important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state. Try to imagine building
              a blog without being able to fetch a post based off of its slug or
              id that is located in the URL! There are undoubtedly more pieces
              of state that we could identify, but these are the major
              categories worth focusing on for most applications you build.
            </p>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              alt=""
              src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl text-gray-900 font-semibold group-hover:underline group-focus:underline">
                How does prototypical inheritance work?
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 21, 2021
              </span>
              <p className="text-gray-900">
                Everything in Javascript is an object. Even when creating a
                Class is an Object via an Object Literal or Constructor
                Function. This is how Javascript does class-based programming as
                to other traditional Object-Oriented Programming languages where
                they use the keyword ‘class’ and ‘inheritance’. Javascript’s
                version of class-based programming and other traditional
                class-based programming languages work with the same concept but
                does not work exactly similar. There are differences in its
                keyword, syntax, and how it works. There are also debates
                regarding pros and cons of Javascript’s version of class-based
                programming, but for simplicity’s sake and learning purposes, I
                do not want to go over those issues. So, the core idea of
                Prototypal Inheritance is that an object can point to another
                object and inherit all its properties. The main purpose is to
                allow multiple instances of an object to share common
                properties, hence, the Singleton Pattern.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white"
          >
            <img
              role="presentation"
              alt=""
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdCUyMHRlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl text-gray-900 font-semibold group-hover:underline group-focus:underline">
                What is a unit test? Why should we write unit tests?
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 22, 2021
              </span>
              <p className="text-gray-900">
                Unit testing is testing the smallest testable unit of an
                application. It is done during the coding phase by the
                developers. To perform unit testing, a developer writes a piece
                of code (unit tests) to verify the code to be tested (unit) is
                correct. We should write unit test because Unit testing helps in
                finding bugs early.Unit testing makes the team in the long
                run.Unit testing makes debugging easier.Unit testing can be
                automated.Unit testing decreases the total testing cost.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white"
          >
            <img
              role="presentation"
              alt=""
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqt1IHEYx4vayxkekz9fE7Lndh-W-sL-c83g&usqp=CAU"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl text-gray-900 font-semibold group-hover:underline group-focus:underline">
                React vs. Angular vs. Vue?
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 23, 2021
              </span>
              <p className="text-gray-900">
                <storng>React:</storng>
                <span>
                  React.js or React JS or simply React are the different names
                  of this framework. It is a JavaScript library that was
                  released in 2013 and developed by Jordan Walke. It is an
                  open-source, front-end framework used for building UI
                  frameworks. Latest version: 17.0.2
                  <br />
                  Advantages: Easy to learn and use: Once learned, implement
                  anywhere. Reusable components: It makes the development phase
                  simpler. Virtual DOM: It is a JavaScript object which is
                  efficient and faster than virtual DOM. JSX Fun: JSX means we
                  can add a bit of HTML to our react, making the coding easier
                  and adjusting shortcomings. Community and tools: The React JS
                  is in the current trend, and with the advent of the framework,
                  the community is growing day by day. For any queries, we can
                  get help from a lot of peers.
                </span>
                <br />
                <strong>Angular:</strong>
                <span>
                  Angular is an open-source dynamic web application framework.
                  It came in 2009 by Misko Hevery and Adam Abrons and is
                  currently maintained by Google. It also uses HTML as a
                  template language for extending its context and to create
                  various application components.
                  <br />
                  Very helpful in creating single-page websites with proper
                  maintenance and cleanliness. Due to its binding capacity, it
                  gives a very rich and responsive user experience. It is
                  unit-testable and provides reusable components. It can run on
                  any device (laptop, phone, mobile, tablet, etc.) smoothly. The
                  user views an HTML kind of website, but it every controlled by
                  JavaScript. More functionality is achieved with the shortcode.
                  It uses dependency injection and makes use of separation of
                  concerns.
                </span>
                <br />
                <strong>Vue:</strong>
                <span>
                  Vue JS is a progressive JavaScript framework that uses MVVM
                  (Model view view Model) for Building interfaces and
                  single-page applications. It was created by Evan Vu and
                  released in February 2014. Vue JS is written in JavaScript and
                  typescript.
                  <br />
                  Simplicity: Because of the single file components, the Vue JS
                  is easy to learn. Integrate: Vue can be integrated with React
                  frameworks; thus, merging any project becomes easier.
                  Customization: It's all functions are readily accessible.
                  Every segment has separate functions, and each function can be
                  named by any name the developer likes. Hence improving the
                  readability. Support and documentation: The support team of
                  Vue JS is amazing as it answers most of the Vue developers'
                  queries. The documentation is such straight and simple even a
                  beginner with basic HTML, CSS, and JavaScript knowledge can
                  begin with.
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
