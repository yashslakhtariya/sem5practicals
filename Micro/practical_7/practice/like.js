var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "yash",
  password: "krsna",
  database: "usersmanagement",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  con.query(
    "SELECT * FROM customers WHERE name LIKE 'S%'",
    function (err, result) {
      if (err) throw err;
      console.log(result);
    }
  );
});

/*
wildcard characters used with LIKE:

% (percent sign): This wildcard character matches any sequence of characters (including zero characters) in the specified position. It can be used at the beginning, middle, or end of a search pattern. For example:

LIKE 'a%': Matches any string that starts with 'a'.
LIKE '%a': Matches any string that ends with 'a'.
LIKE '%or%': Matches any string that contains 'or' anywhere within it.
_ (underscore): This wildcard character matches exactly one character in the specified position. For example:

LIKE 'a_c': Matches any three-character string that starts with 'a', ends with 'c', and has any character in the middle.
Here are some additional examples of how you can use LIKE with wildcards:

LIKE 'apple%': Matches strings that start with 'apple', such as 'apple', 'applesauce', etc.
LIKE '%berry%': Matches strings that contain the word 'berry' anywhere within them, like 'strawberry', 'blueberry', etc.
LIKE '_oat': Matches four-letter words that end with 'oat', such as 'coat' and 'goat'.
LIKE 'a%o': Matches strings that start with 'a' and end with 'o', like 'auto' and 'avocado'.

*/
