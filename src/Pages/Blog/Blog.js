import React from 'react';

const Blog = () => {
  return (
    <div className='bg-gray-100 p-10  mb-20 rounded-md' >
      <h3 className='text-4xl text-center text-semibold my-12'> You Can See Your Question Answer </h3>

      <div 
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box" >
        <div className="collapse-title text-xl font-medium">
        Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:

</p>
        </div>
      </div>

  <br  />
      
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box" >
        <div className="collapse-title text-xl font-medium">
        What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
        </div>
      </div>

    <br  />
       
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box" >
        <div className="collapse-title text-xl font-medium">
        What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. </p>
        </div>
      </div>

 <br  />

 
 <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box" >
        <div className="collapse-title text-xl font-medium">
        How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p> How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
      </div>
      <br /> <br  /> <br  />
    </div>
  );
};

export default Blog;
