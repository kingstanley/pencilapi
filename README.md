# pencilapi
An api for backend challenge

Note: In addition to the specified /search route, I have created a query route for a situation were both the questions with the topic and questions with decendants of the topic in their annotation should be returned.

The /search route only returns questions with any of the decendants of the queried topic in their annotations list.

 Examples: https://pencilapi.herokuapp.com/search?q='Biological Molecules'
 
 The result will be: [
	{
		"questionNo": 37
	},
	{
		"questionNo": 111
	},
	{
		"questionNo": 116
	},
	{
		"questionNo": 134
	},
	{
		"questionNo": 182
	},
	{
		"questionNo": 10
	},
	{
		"questionNo": 19
	},
	{
		"questionNo": 55
	},
	{
		"questionNo": 77
	},
	{
		"questionNo": 127
	},
	{
		"questionNo": 5
	},
	{
		"questionNo": 33
	},
	{
		"questionNo": 38
	},
	{
		"questionNo": 67
	},
	{
		"questionNo": 120
	},
	{
		"questionNo": 197
	},
	{
		"questionNo": 61
	},
	{
		"questionNo": 107
	},
	{
		"questionNo": 129
	},
	{
		"questionNo": 166
	},
	{
		"questionNo": 188
	},
	{
		"questionNo": 45
	},
	{
		"questionNo": 112
	},
	{
		"questionNo": 178
	},
	{
		"questionNo": 183
	},
	{
		"questionNo": 153
	},
	{
		"questionNo": 9
	},
	{
		"questionNo": 76
	},
	{
		"questionNo": 174
	},
	{
		"questionNo": 26
	},
	{
		"questionNo": 64
	},
	{
		"questionNo": 181
	},
	{
		"questionNo": 20
	},
	{
		"questionNo": 24
	},
	{
		"questionNo": 78
	},
	{
		"questionNo": 171
	},
	{
		"questionNo": 14
	},
	{
		"questionNo": 92
	},
	{
		"questionNo": 128
	},
	{
		"questionNo": 2
	},
	{
		"questionNo": 56
	},
	{
		"questionNo": 199
	},
	{
		"questionNo": 66
	},
	{
		"questionNo": 146
	},
	{
		"questionNo": 176
	}
]

However using https://pencilapi.herokuapp.com/query?q="Biological Molecules"
instead result to more result because both questions with the annotation of the topic "Biological Molecules" and the ones with any of the sub topics under "Biological Molecules" are all returned
While in the previous case only questions with any of the sub topics under "Biological Molecules" are returned.


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
