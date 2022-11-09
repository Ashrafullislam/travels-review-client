import React from 'react';

const Blog = () => {
  return (
    <div>
      <h3 className='text-4xl text-center text-semibold my-12'> You Can See Your Question Answer </h3>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box" >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>

  <br  />
      
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box" >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>

    <br  />
       
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box" >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>

 <br  />

 
 <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box" >
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <br /> <br  /> <br  />
    </div>
  );
};

export default Blog;
