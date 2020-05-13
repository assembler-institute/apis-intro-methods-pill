import $ from "jquery";

/**
 * 1. Fetch the list of posts from the following endpoint:
 *
 *    https://jsonplaceholder.typicode.com/posts?_limit=20
 *
 * 2. Output the data as the text content of the `#data` element.
 *
 * 3. If the request fails, you should output a text content of failed
 *
 * You should use the `XMLHttpRequest` method to fetch the data
 * and the onload() event listener to finish the exercise
 */
function exercise01() {
  // Complete the code of the function

  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?_limit=20");

  xhr.onload = function () {
    $("#data").text(xhr.response);
  };

  xhr.onerror = function () {
    $("#data").text("failed");
  };

  xhr.send();
}

export default exercise01;
