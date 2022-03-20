# pencilapi
An api for backend challenge
 
The goal of this assignment is to store and create an index over question objects in MongoDB, and write a NodeJS + Express based server that exposes a RESTful API to query 

....

Requirement 1: Store all questions and their annotations from the following sheet into your database: Questions and Topics

Requirement 2: Figure out the right schema and store all topics from the Topics sheet in the above file also into the database. Each row in the sheet is a unique path in the topics tree.

Requirement 3: Create an API endpoint as follows
METHOD: GET
endpoint: /search
query param: q=”name of topic” for e.g ?q=”Quantum Mechanics”

The response to this query, should be an array of question numbers, that match the following requirement.

Search requirement: All questions that contain an annotation which is anywhere in the subtree of the query topic, should be returned. 
For e.g In the previous example with 4 questions and their annotations, for a query of “Modern Physics”, Question 1, Question 2 and Question 3 should be returned in response, and Question 4 should not. Because Question 4 contains the annotation “Electron Charge” which is not under Modern Physics.

Requirement 4: Make sure your code is making efficient queries, regardless of which topic is queried, including the root topic of the tree.

Requirement 5: Host your code in any cloud provider, and your database in MongoDB Atlas (which gives free access) and share the exact details on how to access it and query it with example queries.

Requirement 6: Upload your code into GitHub and share it along with your submission. Make sure to provide example request URLs.
