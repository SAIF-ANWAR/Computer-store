import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container py-5'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between JavaScript and NodeJs</Accordion.Header>
                    <Accordion.Body>
                        1.JavaScript is a object-oriented scripting language that is used to build dynamic HTML pages. On the other hand, Node js is a javaScript runtime environment that allows the javaScript to be run on the server-side.
                        2. JavaScript is only run in the browser whereas Node js allows us to run JavaScript outside the browser.
                        3.JavaScript is capable to work with HTML tags with the help of DOM but Node js does't have this capacity.
                        4. JavaScript is used on the client-side whereas Node js is used on the server-side.
                        5. JavaScript is used in frontend development where Nodejs is used in server-side development.
                        6.Some of the JavaScript frameworks are RamdaJS, TypedJS, etc On the other hand Some of the NodeJS modules are Lodash, express etc.
                        7. JavaScript is the updated version of ECMA script
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
                    <Accordion.Body>
                        Nodejs is perfect for data streaming. Data streaming means breaking large file into smaller batches to provide smooth and impeccable streaming.
                        It provides an application programming interface to work with streams and allows creating readable and writable data strams.
                        Nodejs is good for hardware programming; the ability to perform several tasks simultaneously is the main reason it is popular in the hardware industry.
                        On the other hand, we should use mongoDb when we need high availability of data with automatic, fast and instant data recovery.
                        When we have an unstable schema and you want to reduce your schema migration cost.
                        When we have most of our services in cloud-based, we should use MongoDB
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Differences between SQL and NosQL databases.</Accordion.Header>
                    <Accordion.Body>
                        1. SQL databases are rational. NoSQL databases are non-rational
                        2. SQL databases use structured query language and have a predefined schema whereas NoSQL databases have dynamic schemas for unstructured data.
                        3. SQL databases are table-based while NoSQL databases are document, key-value, graph, or wide-column stores.
                        4.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server
                        JWTs are used as a secure way to authenticate users and share information.
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                        Once decoded, you will get two JSON strings:

                        The header and the payload.
                        The signature.
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                        The signature ensures that the token has not been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <p>
            </p>
        </div>
    );
};

export default Blogs;