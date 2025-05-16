**Task:**

Develop automated tests to validate data provided by a public API to detect errors and anomalies.

**Tools:**

* CursorAI for generating test scenarios or ChatGPT.  
* ReqBin (reqbin.com) or Postman for executing API requests.  
* API: [https://fakestoreapi.com/products](https://fakestoreapi.com/products) (mock store).

**Initial Data:**

A GET request to [https://fakestoreapi.com/products](https://fakestoreapi.com/products) returns an array of objects representing products. The provided JSON data contains defects that need to be identified.

**Test Objectives:**

* Verify server response code (expected 200).  
* Confirm the presence of the following attributes for each product:  
  * \`title\` (name) \- must not be empty.  
  * \`price\` (price) \- must not be negative.  
  * \`rating.rate\` \-  must not exceed 5\.  
* Generate a list of products containing defects.
