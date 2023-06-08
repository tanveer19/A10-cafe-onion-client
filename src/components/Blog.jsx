import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-2xl bg-sky-600 p-2">
        Tell us the differences between uncontrolled and controlled components.
      </h2>
      <div className="text-xl bg-gray-400 p-2">
        Uncontrolled and controlled components are two different approaches to
        managing form inputs and their state in React. Main differences are:
        <p>
          State Management: The state of a controlled component is controlled by
          React. The parent component's callback functions are used by the
          component to supply the component with its initial value, update it
          with props, and notify it of changes. An uncontrolled component,
          however, is able to govern its own internal state. Instead of
          depending on React to handle the state, it uses the native form
          handling of the browser to retrieve the most recent data as required.
        </p>
        <p>
          Data flow: Data flow through controlled components is unidirectional.
          The input value is controlled by the parent component by being passed
          down as a prop and being updated via event handlers. The parent
          component is notified if the value changes so that it can update its
          state or take other necessary actions. On the other hand, uncontrolled
          components have a two-way data flow. The parent component can access
          the data via a ref or other methods supplied by the component, but the
          component handles its own internal state.
        </p>
        <p>
          Event handling: Through event handlers like onChange, controlled
          components respond to changes in user input by updating the value in
          the state. This enables doing other operations prior to modifying the
          state, such as formatting or validating data. Uncontrolled components
          often handle user input events like onBlur, onChange, or onSubmit
          using the browser's default behavior. When required, the component
          immediately pulls the current value from the DOM.
        </p>
        <p>
          In conclusion, controlled components give form inputs additional
          flexibility and control by explicitly managing their state using props
          and event handlers. Uncontrolled components handle their own state and
          rely on the browser's native form handling. The degree of control
          required, the complexity of the form, and the particular application
          needs all influence which option is best.
        </p>
      </div>
    </div>
  );
};

export default Blog;
