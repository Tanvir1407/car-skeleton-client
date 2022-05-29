import React from 'react';

const Info = () => {
    return (
      <div>
        <h1 className="text-center font-bold text-3xl py-5">People also ask</h1>
        <div className="grid  grid-cols-1 md:grid-cols-2">
          <div className="max-w-9/12">
            <div>
              <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p>
                    When building any React applications, a lot of thought goes
                    into how the application should work and end up looking. The
                    least any team or developer needs to do is to check the
                    performance and look out for techniques to optimize the app
                    for the end user’s experience. A lot of times you overlook
                    this action, but in this article, I’ll be sharing five ways
                    you can start optimizing your application for better
                    performance.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  What are the different ways to manage a state in a React
                  application?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p>
                    1 . Communication State Communication state forms the
                    backbone of your React Native app without you even knowing
                    about it. Remember when you had requested a call back to an
                    HTTP request? That’s when you introduced the communication
                    system in your app. 2. Data State Data state covers
                    information that your React application stores temporarily
                    for various business functions. Supposedly, you are building
                    a project management app. The information stored in the data
                    state will include the following things – project names,
                    contacts, details about the clients, etc. 3. Control State
                    Contrary to the state mentioned above in a React app, the
                    control state does not represent the application’s
                    environment. Instead, it refers to the state which the user
                    has input into the app. For example, form inputs, selected
                    items, etc. Control state is known to be more diverse and
                    versatile when it comes to storing information. 4. Location
                    State Location state is the UTF-8 display that appears in
                    your URL bar. In fact, the L in URL stands for Locator! One
                    of the most interesting facts about Location state is that
                    you can give directions to a user to parts of the
                    application that do not have unique URLs associated with
                    them. Also, the HTML5 History API allows you to store states
                    separately from the specific URL.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p>
                    All of the factors listed above are interconnected and imply
                    that unit testing undeniably contributes to improving your
                    software. Unit testing may seem like a tedious process at
                    first, but in the long run, its benefits are clear. Unit
                    testing ensures that all code meets quality standards before
                    it’s deployed. This ensures a reliable engineering
                    environment where quality is paramount. Over the course of
                    the product development life cycle, unit testing saves time
                    and money, and helps developers write better code, more
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  it is a e-commerce website?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <p>this is a car parts / tools manufacturers website </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className='max-h-3/4' src="https://i.ibb.co/GCrD9kt/v878-mind-64-min.jpg" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Info;