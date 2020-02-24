# HTTP

### Introduction<br />

The HTTP library facilitates the submitting of HTTP requests to a server, as well as the processing of the response which is returned.

### Usage<br />

#### http_request(method, url, interface, data, content_type)<br />

This function sends an HTTP request of a maximum length of 255 bytes. In the sample code, it is triggered by pressing the MD button, so the function is called in `on_button_pressed`. The function takes the following 5 parameters:

1. **method** - The type of request to send. The 6 options are:
   1. HTTP_GET
   2. HTTP_HEAD
   3. HTTP_POST
   4. HTTP_PUT
   5. HTTP_DELETE
   6. HTTP_PATCH
2. **url** - The URL which the request will be sent to.
3. **interface** - The network interface to use. The 2 options are:
   1. PL_SOCK_INTERFACE_NET
   2. PL_SOCK_INTERFACE_WLN
4. **data** - The data to be sent to the server. Not applicable for HTTP_GET and HTTP_HEAD methods so an empty string should be passed in these cases.<br />
5. **content_type** - The string to include in the "Content-Type" entity header. If an empty string is passed, the default value of "text/plain" will be used.<br />

#### http_request_long(method, url, interface, request_length, content_type)<br />

This subroutine is similar to the http_request subroutine in that it sends an HTTP request. Instead of passing the data to be sent as a parameter, it passes the length of the request to be sent. The callback `callback_http_send_post_data` will then be triggered until the predetermined number of bytes have been sent.  They should be sent using the function `http_send_post_data`.