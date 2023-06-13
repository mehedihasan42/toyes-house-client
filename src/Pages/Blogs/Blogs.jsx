import React from 'react';
import style from './Blogs.css'
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
       <>
        <Helmet><title>Toyes House | Blogs</title></Helmet>
        <div>
            <div className='bg-gray-200 rounded m-4 p-4'>
                <p className='text-red-500 font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p className='mt-4'>An access token and a refresh token are commonly used in authentication and authorization systems. Here's
                    an explanation of what they are, how they work, and where they should be stored on the client-side.</p>
                <p><span className='font-bold'>Access Token:</span>
                    An access token is a credential that is used to access protected resources on behalf of a user.
                    It is typically a short-lived token with an expiration time. When a user authenticates and receives an
                    access token, they include it in subsequent API requests to prove their identity and gain access to protected
                    resources. The server validates the access token to ensure the user has the necessary permissions.</p>
                <p><span className='font-bold'>Refresh Token:</span>
                    A refresh token is a long-lived credential used to obtain a new access token when the current access
                    token expires. It is usually issued alongside the access token during the initial authentication process.
                    When the access token expires, the client sends the refresh token to a token endpoint on the server.
                    If the refresh token is valid, the server generates a new access token and returns it to the client.
                    This process allows the user to maintain their session without needing to re-authenticate every time the
                    access token expires.</p>
            </div>
            {/* ___________________________________________________________________________________________ */}

            <div className='bg-gray-200 rounded m-4 p-4'>
                <p className='text-red-500 font-bold text-center'>Compare SQL and NoSQL databases?</p>
                <table className='mx-auto' style={{ width: 700 }}>
                    <tr>
                        <th> SQL </th>
                        <th>NoSQL</th>
                    </tr>
                    <tr>
                        <td>Stands for Structured Query Language</td>
                        <td>Stands for Not Only SQL</td>
                    </tr>
                    <tr>
                        <td>Relational database management system (RDBMS)</td>
                        <td>Non-relational database management system</td>
                    </tr>
                    <tr>
                        <td>Suitable for structured data with predefined schema</td>
                        <td>Suitable for unstructured and semi-structured data</td>
                    </tr>
                    <tr>
                        <td>Data is stored in tables with columns and rows</td>
                        <td>Data is stored in collections or documents</td>
                    </tr>
                    <tr>
                        <td>Follows ACID properties (Atomicity, Consistency, Isolation, Durability) for transaction management</td>
                        <td>Does not necessarily follow ACID properties</td>
                    </tr>
                    <tr>
                        <td>Supports JOIN and complex queries</td>
                        <td>Does not support JOIN and complex queries</td>
                    </tr>
                    <tr>
                        <td>Uses normalized data structure</td>
                        <td>Uses denormalized data structure</td>
                    </tr>
                    <tr>
                        <td>Requires vertical scaling to handle large volumes of data</td>
                        <td>Horizontal scaling is possible to handle large volumes of data</td>
                    </tr>
                    <tr>
                        <td>Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL Server</td>
                        <td>Examples: MongoDB, Cassandra, Couchbase, Amazon DynamoDB, Redis</td>
                    </tr>
                </table>
            </div>

            {/* ___________________________________________________________________________________________________ */}
            <div className='bg-gray-200 rounded m-4 p-4'>
                <p className='text-red-500 font-bold'>What is express js? What is Nest JS?</p>
                <p className='mt-4'>An access token and a refresh token are commonly used in authentication and authorization systems. Here's
                    an explanation of what they are, how they work, and where they should be stored on the client-side.</p>
                <p><span className='font-bold'>Express JS:</span>
                    Express.js is a popular web application framework for Node.js. It provides a robust set of
                    features and tools for building web applications and APIs. Express.js simplifies the process
                    of creating server-side applications by providing a minimalistic, unopinionated framework
                    that allows developers to structure their applications as they see fit.</p>
                <p><span className='font-bold'>Nest JS:</span>
                    NestJS is a progressive and powerful framework for building efficient and scalable
                    server-side applications using TypeScript. It is built on top of Express.js and leverages
                    the features of TypeScript to provide a structured and organized approach to developing
                    Node.js applications.</p>
            </div>


            <div className='bg-gray-200 rounded m-4 p-4'>
                <p className='text-red-500 font-bold'>What is MongoDB aggregate and how does it work?</p>
               <p>
                In MongoDB, the aggregate operation is a powerful feature that allows you to perform advanced data
                 processing and analysis tasks on collections of documents. It enables you to perform complex data
                  transformations, aggregations, and computations within the database.</p>
            </div>
        </div>
       </>
    );
};

export default Blogs;