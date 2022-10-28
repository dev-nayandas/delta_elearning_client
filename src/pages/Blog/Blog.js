import React from 'react';

const Blog = () => {
    return (
        <div className='bg-blue-200 h-full'>
            <h2 className='text-2xl'>Question 01. What is cors? </h2>
            <p className='mb-8'>Ans. Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.It is what allows the website on one URL to request data from a different URL, and it frustrates both the frontend and backend devs alike.</p>
            



            <h2 className='text-2xl'>Question 02</h2>
            <p className='mb-8'>Ans.Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.MongoDB.
            Oracle Database.
            Amazon Redshift.
            DataStax Enterprise.
            Redis Enterprise Cloud.
            Cloudera Enterprise Data Hub.
            Db2.
            Couchbase Server
            </p>



            <h2 className='text-2xl'>Question 03. How does private route works?</h2>
            <p className='mb-8'>Ans. Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route . So if a user is not authorized for a specific page, they cannot access it. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition</p>

            <h2 className='text-2xl'>Question 04. What is node? How does node works?</h2>
            <p className='mb-8'>Anns. Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node </p>
        </div>
    );
};

export default Blog;