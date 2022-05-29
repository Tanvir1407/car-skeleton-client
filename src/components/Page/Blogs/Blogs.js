import React from 'react';

const Blogs = () => {
    return (
      <div className="md:m-20 w-9/12">
        <div>
          <div>
            <h1 className="font-bold py-2 text-3xl">
              How will you improve the performance of a React Application?
            </h1>
            <div>
              <p className="text-lg">
                When building any React applications, a lot of thought goes into
                how the application should work and end up looking. The least
                any team or developer needs to do is to check the performance
                and look out for techniques to optimize the app for the end
                user’s experience. A lot of times you overlook this action, but
                in this article, I’ll be sharing five ways you can start
                optimizing your application for better performance.
              </p>
              <ul className="py-6 font-bold">
                <li>
                  1. Use React.Fragment to Avoid Adding Extra Nodes to the DOM
                </li>
                <li> 2. Use Production Build</li>
                <li>
                  3. Use React.Suspense and React.Lazy for Lazy Loading
                  Components
                </li>
                <li>4. Use React.memo for Component Memoization</li>
                <li>5. Virtualize a Large List Using react-window</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-bold py-2 text-3xl">
              What are the different ways to manage a state in a React
              application?
            </h1>
            <div>
              <h1 className="py-2 font-bold">1 . Communication State</h1>
              <p>
                Communication state forms the backbone of your React Native app
                without you even knowing about it. Remember when you had
                requested a call back to an HTTP request? That’s when you
                introduced the communication system in your app.
              </p>
            </div>
            <div>
              <h1 className="py-2 font-bold">2. Data State</h1>
              <p>
                Data state covers information that your React application stores
                temporarily for various business functions. Supposedly, you are
                building a project management app. The information stored in the
                data state will include the following things – project names,
                contacts, details about the clients, etc.
              </p>
            </div>
            <div>
              <h1 className="py-2 font-bold">3. Control State</h1>
              <p>
                Contrary to the state mentioned above in a React app, the
                control state does not represent the application’s environment.
                Instead, it refers to the state which the user has input into
                the app. For example, form inputs, selected items, etc. Control
                state is known to be more diverse and versatile when it comes to
                storing information.
              </p>
            </div>
            <div>
              <h1 className="py-2 font-bold">4. Location State</h1>
              <p>
                Location state is the UTF-8 display that appears in your URL
                bar. In fact, the L in URL stands for Locator! One of the most
                interesting facts about Location state is that you can give
                directions to a user to parts of the application that do not
                have unique URLs associated with them. Also, the HTML5 History
                API allows you to store states separately from the specific URL.
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-bold py-2 text-3xl">
              How does prototypical inheritance work?
            </h1>
            <p className="text-lg">
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__.
            </p>
          </div>
          <div>
            <h1 className="font-bold py-2 text-3xl">
              What is a unit test? Why should write unit tests?
            </h1>
            <p className="text-lg">
              All of the factors listed above are interconnected and imply that
              unit testing undeniably contributes to improving your software.
              Unit testing may seem like a tedious process at first, but in the
              long run, its benefits are clear. Unit testing ensures that all
              code meets quality standards before it’s deployed. This ensures a
              reliable engineering environment where quality is paramount. Over
              the course of the product development life cycle, unit testing
              saves time and money, and helps developers write better code, more
              efficiently.
            </p>
          </div>
          <div>
            {" "}
            <h1 className="font-bold py-2 text-3xl">
              {" "}
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h1>
            <p className="text-lg">
              I'm use map . becouse .map() accepts a callback function as one of
              its arguments, and an important parameter of that function is the
              current value of the item being processed by the function. This is
              a required parameter. With this parameter, you can modify each
              item in an array and return it as a modified member of your new
              array.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;